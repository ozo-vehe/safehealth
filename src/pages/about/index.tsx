/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import AboutUs from 'src/components/About/About';

const About = () => {
  return (
    <section className='mb-20'>
      <div className="banner-wraper">
        <div className="page-banner">
          <h1 className="font-[Montserrat, san-serif]">About Us</h1>
          <div className="group min-w-[350px] flex items-center justify-center bg-[#565acf] py-6 rounded-[8px]">
            <Link className="group-hover:border-slate-50 pr-10 border-r border-slate-300 text-slate-300 hover:text-slate-50 transition-all duration-300" href={"/"}>
              Home
            </Link>
            <Link className="group-hover:border-slate-50 pl-10 border-l border-slate-300 text-slate-300 hover:text-slate-50 transition-all duration-300" href={"/about"}>
              About US
            </Link>
          </div>
        </div>
      </div>

      <AboutUs />
      <div className="flex flex-wrap items-center justify-center gap-8 px-12 lg:px-20 md:px-18 sm:px-16">
        <div className='w-[350px] h-[350px] rounded-[8px] text-center py-8 border'>
          <h3 className="text-[#f17732] font-bold text-[20px] font-[lora]">Our Vision and Mission</h3>
          <p className='text-[16px] px-16 mt-8'>
            Vision: Revolutionizing the way individuals manage their health, putting control back into the hands of the users.

            Mission: To provide a secure, user-friendly health management system that leverages cutting-edge technology, including Affinidi login access, ensuring privacy, ownership, and seamless management of personal health data.
          </p>
        </div>

        <div className='w-[350px] h-[350px] text-center py-8 border rounded-[8px]'>
          <h3 className="text-[#f17732] font-bold text-[20px] font-[lora]">The Power of Affinidi Login</h3>
          <p className='text-[16px] px-16 mt-8'>
            SafeHealth stands out by integrating Affinidi login access. This partnership ensures a secure and personalized experience for every user. With Affinidi, we prioritize user privacy, allowing individuals to own and control their health data like never before. This technology is the future of health management, and we are proud to be at the forefront of this revolution.
          </p>
        </div>

        <div className='w-[350px] h-[350px] text-center py-8 border rounded-[8px]'>
          <h3 className="text-[#f17732] font-bold text-[20px] font-[lora]">Empowering Your Health Journey</h3>
          <p className='text-[16px] px-16 mt-8'>
            Our platform is designed to empower you in every step of your health journey. Easily track and manage your health information, from vital signs to medication history, all in one place. HealthGuard Pro becomes your personal health companion, putting valuable insights at your fingertips.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
