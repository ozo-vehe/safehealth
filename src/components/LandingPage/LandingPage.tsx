/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import doctor from "src/assets/doctor.webp";
import Image from "next/image";

const LandingPage = () => {
  return (
    <>
      <header className="banner bg-[#f1f6f7] px-12 py-20 lg:px-20 md:px-16 sm:px-12">
        <div className="flex h-full w-full pb-[100px] items-center justify-center flex-wrap gap-20">

          <div className="w-full lg:w-[700px] md:w-[400px] sm:w-full">
            <p className="mb-5 lg:text-[20px] md:text-[18px] sm:text-[16px] text-[16px] text-[#565acf] font-[800] font-['lora'] ">Adding care to your life.</p>
            <h1 className="lg:text-[45px] md:text-[32px] sm:text-[30px] text-[30px] text-[#1f2278] leading-[1.2] font-bold">Protecting and Taking Care To Of Your Health</h1>
            <button className="mt-20 px-10 py-6 rounded-[8px] bg-[#f17732] text-[#f7f7f7] min-w-[150px] shadow-[0px_0px_10px_#b9b9b9]">
              <Link href="/about">Read More</Link>
            </button>
          </div>

          <div className="banner_img w-[450px] h-[500px] overflow-hidden">
            <Image src={doctor} alt="doctor" />
          </div>
        </div>
      </header>
    </>
  );
};

export default LandingPage;
