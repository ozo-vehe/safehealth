import { FC, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { pxToRem } from "src/styles/px-to-rem";
import Box from "src/components/Box/Box";
import LogoAffinidi from "public/images/logo-affinidi.svg";
import { clientLogin } from "src/lib/auth/client-login";
import { useRouter } from "next/navigation";

const LogInContainer = styled(Box)`
  max-width: ${pxToRem(500)};
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 0px 50px 0 rgba(0, 0, 0, 0.07);
  padding: 5% 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InnerLogInContainer = styled(Box)`
  width: ${pxToRem(400)};
`;

const ButtonContainer = styled(Box)`
  margin-top: ${pxToRem(48)};
`;

const OrContainer = styled(Box)`
  color: #dedede;

  span {
    margin: 0 ${pxToRem(20)};
  }
`;

const Line = styled.div`
  width: 141px;
  height: 1px;
  background-color: #d2d2d2;
`;

const NoAccount = styled.div`
  margin-top: ${pxToRem(22)};
  margin-bottom: ${pxToRem(24)};
  font-family: "lato", sans-serif;
  font-size: ${pxToRem(14)};
  text-align: center;
`;

const Bold = styled.span`
  margin-left: ${pxToRem(8)};
  font-size: ${pxToRem(16)};
  font-family: "lato", sans-serif;
  font-weight: 700;
  color: #10375c;
  cursor: pointer;
`;

const Button = styled.button<{ variant: "primary" | "secondary" }>`
  display: flex;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: ${pxToRem(12)} ${pxToRem(24)};
  color: #ff5722;
  font-family: "lato", sans-serif;
  cursor: pointer;
  box-shadow: 0 4px 16px 0 rgba(255, 87, 34, 0.32);

  button:nth-of-type(1) {
    margin-right: ${pxToRem(12)};
  }

  img {
    margin-right: ${pxToRem(16)};
  }

  ${({ variant }) =>
    variant === "primary"
      ? `
      background: #565acf;
      color:#fff;
      box-shadow: 0 4px 16px 0 rgba(55, 62, 151, 0.32);
      margin-top:${pxToRem(44)};
    `
      : `
      background: #f17732;
      color: #fff;
      box-shadow: 0 4px 16px 0 rgba(255, 87, 34, 0.32);
      margin-bottom:${pxToRem(44)};
    `}
`;

const LogIn: FC = () => {
  const [form, setForm] = useState({ ID: "", password: "" })
  const router = useRouter();

  const onChange = (e:any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="login_page py-20 bg-black flex items-center justify-center">
      <div className="flex flex-wrap items-center justify-center">
        <LogInContainer justifyContent="center" alignItems="center">
          <h2 className="text-[#565acf] inconsolata uppercase text-[32px] mb-10 font-bold">safehealth</h2>
          <InnerLogInContainer>
            <div className="flex mb-5 flex-col gap-2 items-center border border-slate-300 overflow-hidden rounded-[8px]">
              <input
                name="ID"
                value={form.ID}
                type="text"
                className="w-full py-6 pl-6"
                placeholder="ID"
                onChange={onChange}
              />
            </div>
            <div className="flex flex-col gap-2 items-center border border-slate-300 overflow-hidden rounded-[8px]">
              <input
                name="password"
                value={form.password}
                type="password"
                className="w-full py-6 pl-6"
                placeholder="Password"
                onChange={onChange}
              ></input>
            </div>

            <ButtonContainer direction="column">
              <Button variant="secondary">Log In</Button>

              <OrContainer
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Line />
                <span>OR</span>
                <Line />
              </OrContainer>

              <Button variant={"primary"} onClick={clientLogin}>
                <Image src={LogoAffinidi} alt="logo affinidi" />
                Affinidi Login
              </Button>
            </ButtonContainer>

            <NoAccount>
              Don&apos;t have an account yet?<Bold onClick={() => router.push("/signup")}>SIGN UP</Bold>
            </NoAccount>
          </InnerLogInContainer>
        </LogInContainer>
      </div>
    </div>
  );
};

export default LogIn;