import Link from 'next/link';
import IconSurger from 'src/assets/icons8-surgery-tools-66.png';
import IconTreament from 'src/assets/icons8-medicine-50.png';
import IconConsult from 'src/assets/icons8-stethoscope-64.png';
import IconLaboratory from 'src/assets/icons8-laboratory-50.png';
import Image from 'next/image';
import { discountCalculator } from 'src/utils/discountCalculator';
import { countryDetails } from 'src/utils/getContinent';
import { useLocalContent } from 'src/lib/hooks/use-local-content';
import { useEffect, useState } from 'react';

const Services = () => {
  const { country } = useLocalContent();
  const [continent, setContinent] = useState<any>('');

  type Service = {
    name: string;
    icon: any;
  };

  const services: Array<Service> = [
    {
      name: "Surgery",
      icon: IconSurger,
    },
    {
      name: "Consult",
      icon: IconConsult,
    },
    {
      name: "Lab",
      icon: IconLaboratory,
    },
    {
      name: "Treatment",
      icon: IconTreament,
    }
  ]

  useEffect(() => {
    const getContinent = async () => {
      const continent = await countryDetails(country || '')
      setContinent(continent);
    }
    getContinent();

  }, [country]);

  return (
    <section className="services_section px-12 py-20 my-40 lg:px-20 md:px-16 sm:px-12">
      <div className="flex flex-wrap items-start justify-center gap-10">
        <div className="max-w-[500px]">
          <div className="heading-bx">
            <h3 className="font-[lora] text-[#f17732] font-bold text-[18px]">Services</h3>
            <h2 className="title leading-[1.3]">
              We Cover A Big Variety Of Medical Services
            </h2>
            <p className='text-[18px]'>
              We provide the special tips and advice’s of heath care
              treatment.
            </p>
          </div>
          <button className="px-10 py-6 rounded-[8px] bg-[#565acf] text-[#f7f7f7] min-w-[150px] shadow-[0px_0px_10px_#b9b9b9]">
            <Link href="/">All Services</Link>
          </button>
        </div>

        <div className="services flex flex-wrap max-w-[550px] items-center justify-center gap-10">
          {services.map((service, index) => (
            <div className="service shadow-[0_0_10px_#e9e9e9] w-[260px] rounded-[8px] h-[200px] px-8 flex flex-col items-start justify-center gap-8" key={index}>
              <div className="service_icon w-[70px] h-[70px]">
                <Image style={{ objectFit: "contain" }} width={70} height={70} src={service.icon.src} alt={service.name} />
              </div>
              <div className="service_info">
                <h3 className="font-bold text-[28px] text-[#1f2278] font-[lora] flex items-start gap-2">
                  {service.name}
                  <span className='font-bold text-[14px] w-fit text-[#f17732]'>
                    -{discountCalculator(service.name, continent || '')}%
                  </span>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
