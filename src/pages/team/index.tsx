/* eslint-disable @next/next/no-img-element */
import member1 from "src/assets/doc (1).jpg";
import member2 from "src/assets/doc (2).jpg";
import member3 from "src/assets/doc (3).jpg";
import member4 from "src/assets/doc (4).jpg";
import member5 from "src/assets/doc (5).jpg";
import member6 from "src/assets/doc (6).jpg";
import Link from 'next/link';

const OurTeam = () => {
  return (
    <section>
      <div className="banner-wraper">
        <div className="page-banner">
          <h1 className="font-[Montserrat, san-serif]">Doctors</h1>
          <div className="group min-w-[350px] flex items-center justify-center bg-[#565acf] py-6 rounded-[8px]">
            <Link className="group-hover:border-slate-50 pr-10 border-r border-slate-300 text-slate-300 hover:text-slate-50 transition-all duration-300" href={"/"}>
              Home
            </Link>
            <Link className="group-hover:border-slate-50 pl-10 border-l border-slate-300 text-slate-300 hover:text-slate-50 transition-all duration-300" href={"/team"}>
              Doctors
            </Link>
          </div>
        </div>
      </div>

      <div className="team_members my-20 flex items-center justify-center gap-20 flex-wrap px-12 lg:px-20 md:px-18 sm:px-16">
        <div className="team_member">
          <div className="team-media">
            <img src={member3.src} alt="img" />
          </div>
          <div className="team-info">
            <div className="team-info-comntent">
              <h4 className="title">Dr. Margaret Jude</h4>
              <span className="text-secondary">Dentist</span>
            </div>
          </div>
        </div>
        <div className="team_member">
          <div className="team-media">
            <img src={member4.src} alt="img" />
          </div>
          <div className="team-info">
            <div className="team-info-comntent">
              <h4 className="title">Dr. Amina Babajide</h4>
              <span className="text-secondary">Cardiologist</span>
            </div>
          </div>
        </div>
        <div className="team_member">
          <div className="team-media">
            <img src={member6.src} alt="img" />
          </div>
          <div className="team-info">
            <div className="team-info-comntent">
              <h4 className="title">Dr. Tijani Guidjera</h4>
              <span className="text-secondary">Neurologist</span>
            </div>
          </div>
        </div>
        <div className="team_member">
          <div className="team-media">
            <img src={member1.src} alt="img" />
          </div>
          <div className="team-info">
            <div className="team-info-comntent">
              <h4 className="title">Dr. Sam Smith</h4>
              <span className="text-secondary">Physiotherapist</span>
            </div>
          </div>
        </div>
        <div className="team_member">
          <div className="team-media">
            <img src={member2.src} alt="img" />
          </div>
          <div className="team-info">
            <div className="team-info-comntent">
              <h4 className="title">Dr. Kola Bala</h4>
              <span className="text-secondary">ENT</span>
            </div>
          </div>
        </div>
        <div className="team_member">
          <div className="team-media">
            <img src={member5.src} alt="img" />
          </div>
          <div className="team-info">
            <div className="team-info-comntent">
              <h4 className="title">Dr. Daniella Collins</h4>
              <span className="text-secondary">Operations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
