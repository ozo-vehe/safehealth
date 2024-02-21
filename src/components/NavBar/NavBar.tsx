import { FC, useState } from "react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import Box from "src/components/Box/Box";
import IconPersonFilled from "public/images/icon-person-filled.svg";

import { useAuthentication } from "src/lib/hooks/use-authentication";
import { useLocalContent } from "src/lib/hooks/use-local-content";

import * as S from "./NavBar.styled";

const NavBar: FC = () => {
  const [isSignInPage, setIsSignInPage] = useState(false);
  const [confirmLogOut, setConfirmLogOut] = useState(false);
  const { user, isAuthenticated, isLoading } = useAuthentication();
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState("home");

  const { country } = useLocalContent();
  const router = useRouter();

  const fullName = `${user?.givenName} ${user?.familyName}`;

  const confirmUserLogOut = () => setConfirmLogOut(true);
  const cancleConfirmUserLogOut = () => setConfirmLogOut(false);

  async function handleUserLogOut() {
    if (confirmLogOut) {
      await signOut();
      router.push("/");
    }
  }

  return (
    <nav className="w-full bg-[#f9f9fe]">
      <div className="flex items-center justify-between px-12 h-[80px] lg:px-20 md:px-18 sm:px-16">
        <div className="uppercase flex items-center gap-3">
          <S.Title $isLocal={country} onClick={() => router.push("/")}>
            <span className="inconsolata font-extrabold text-[32px] text-[#565acf]">safehealth</span>
          </S.Title>
        </div>

        <div className="w-fit h-fit">
          <div className="w-fit">
            <ul className="flex flex-wrap items-center gap-20 font-[700] text-[16px]">
              <li className="text-[#565acf] hover:text-[#f17732] transition-all duration-300">
                <Link href="/team" className="nav-link">
                  Doctors
                </Link>
              </li>
              <li className="text-[#565acf] hover:text-[#f17732] transition-all duration-300">
                <Link href="/about" className="dropdown-item">
                  About Us
                </Link>
              </li>
              {isAuthenticated &&
              <li className="text-[#565acf] hover:text-[#f17732] transition-all duration-300">
                <Link href="/booking" className="nav-link">
                  Booking an Appointment
                </Link>
              </li>}
            </ul>
          </div>
        </div>

        {!isSignInPage && (
          <>
            <div>
              {isLoading && <S.Loading $isLocal={country}>Loading...</S.Loading>}
              {!isLoading && !isAuthenticated && (
                <Box alignItems="center" gap={10} direction="row">
                  <button className="bg-[#565acf] min-w-[100px] text-[16px] text-slate-50 flex gap-5 py-5 px-8 items-center justify-center rounded-[8px]" onClick={() => router.push('/login')}>
                    Login
                  </button>

                  <button className="bg-[#565acf] min-w-[100px] text-[16px] text-slate-50 flex gap-5 py-5 px-8 items-center justify-center rounded-[8px]" onClick={() => router.push('/signup')}>
                    Sign up
                  </button>
                </Box>
              )}

              {!isLoading && isAuthenticated && (
                <S.Account
                  direction="row"
                  alignItems="center"
                  justifyContent="end"
                  gap={16}
                >
                  {!confirmLogOut && (
                    <S.Avatar $isLocal={country}>
                      <Image width={120} height={120} style={{ borderRadius: '50%' }} src={user?.picture || IconPersonFilled} alt="avatar" />
                    </S.Avatar>
                  )}
                  <S.Email $isLocal={country} onClick={confirmUserLogOut}>
                    {!confirmLogOut && fullName}
                  </S.Email>

                  {confirmLogOut && (
                    <div className="logout_btn flex items-center gap-4">
                      <button className="bg-[#565acf] min-w-[100px] text-[16px] text-slate-50 flex gap-5 py-4 px-8 items-center justify-center rounded-[8px]" onClick={handleUserLogOut}>Log out</button>
                      <button onClick={cancleConfirmUserLogOut} className="flex items-center justify-center bg-red-500 hover:bg-red-600 min-w-[40px] h-[40px] text-slate-50 gap-5 rounded-[8px] text-[18px]">x</button>
                    </div>
                  )}
                </S.Account>
              )}
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
