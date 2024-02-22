import Image from "next/image";
import about1 from "src/assets/pic5.44c2a542.jpg";
import about2 from "src/assets/pic-2.0593bc2f.jpg";
import about3 from "src/assets/pic1.a3848a11.jpg";

const AboutUs = () => {
  return (
    <section className="about_us my-32 px-12 lg:px-20 md:px-18 sm:px-16">
      <div className="flex flex-wrap gap-20 items-center justify-center">
        <div className="flex flex-col max-w-[500px] max-h-[550px] lg:max-w-[450px] lg:max-h-[550px] md:max-w-[400px] md:max-h-[450px]">
          <div className="flex h-[47%] mb-8 items-end gap-8">
            <div className="h-fit rounded-r-[60px] rounded-bl-[60px] overflow-hidden">
              <Image src={about1} alt="img" />
            </div>

            <div className="h-fit rounded-l-[60px] rounded-br-[60px] overflow-hidden">
              <Image src={about2} alt="img" />
            </div>
          </div>

          <div className="flex h-[48%] justify-center gap-8">
            <div className="h-fit w-[200px] rounded-t-[60px] rounded-br-[60px] overflow-hidden">
              <Image src={about3} alt="img" />
            </div>
            <div className="exp-bx">
              7
              <span>Years of Experience</span>
            </div>
          </div>
        </div>

        <div className="max-w-[650px] lg:max-w-[650px] md:max-w-[500px]">
          <div className="header">
            <p className="text-[#f17732] font-bold text-[20px] font-[lora]">About Us</p>
            <h2 className="title text-[#1f2278] font-bold text-[36px] leading-[1.2] my-4">
              The Great Place Of Medical Hospital Center
            </h2>
            <p className="mb-8">
              We provide the special tips and advice’s of heath care
              treatment and high level of best technology involve in the our
              hospital.
            </p>
          </div>

          <div className="features flex items-center justify-center lg:justify-start md:justify-start flex-wrap gap-10">
            <div className="feature border-2 w-[300px] lg:w-[300px] md:w-[230px] border-[#565acf] flex gap-3 items-center rounded-[8px] overflow-hidden">
              <div className="bg-[#ecfcff] h-[50px] w-[70px] rounded-tr-[70%] flex items-center justify-center">
                icon
              </div>
              <h4 className="font-bold text-[#1f2278]">Emergency Help</h4>
            </div>

            <div className="feature border-2 w-[300px] lg:w-[300px] md:w-[230px] border-[#565acf] flex gap-3 items-center rounded-[8px] overflow-hidden">
              <div className="bg-[#ecfcff] h-[50px] w-[70px] rounded-tr-[70%] flex items-center justify-center">
                icon
              </div>
              <h4 className="font-bold text-[#1f2278]">Qualified Doctors</h4>
            </div>

            <div className="feature border-2 w-[300px] lg:w-[300px] md:w-[230px] border-[#565acf] flex gap-3 items-center rounded-[8px] overflow-hidden">
              <div className="bg-[#ecfcff] h-[50px] w-[70px] rounded-tr-[70%] flex items-center justify-center">
                icon
              </div>
              <h4 className="font-bold text-[#1f2278]">Best Professionals</h4>
            </div>

            <div className="feature border-2 w-[300px] lg:w-[300px] md:w-[230px] border-[#565acf] flex gap-3 items-center rounded-[8px] overflow-hidden">
              <div className="bg-[#ecfcff] h-[50px] w-[70px] rounded-tr-[70%] flex items-center justify-center">
                icon
              </div>
              <h4 className="font-bold text-[#1f2278]">Medical Treatment</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
