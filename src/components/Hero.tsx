import { Typewriter } from "react-simple-typewriter";
import spyImg from "../assets/spy.jpg";

interface HeroProps {
  setCursorHover: React.Dispatch<React.SetStateAction<boolean>>;
}

const Hero: React.FC<HeroProps> = ({ setCursorHover }) => {
  function calculateAge(birthDate: Date): { years: number; months: number } {
    // Mevcut tarihin değerini al
    const currentDate = new Date();

    // Doğum tarihini kullanarak yaş hesapla
    const years = currentDate.getFullYear() - birthDate.getFullYear();
    const months = currentDate.getMonth() - birthDate.getMonth();

    // Ay hesabı negatif ise, yıl sonundan önceki ayları hesaplamak için 12 ay ekleyin.
    if (
      months < 0 ||
      (months === 0 && currentDate.getDate() < birthDate.getDate())
    ) {
      return { years: years - 1, months: months + 12 };
    }

    // Yaş ve ay değerlerini bir nesne olarak döndür
    return { years, months };
  }

  return (
    <div
      id="home"
      className="flex flex-col-reverse text-center gap-10 md:flex-row md:text-left justify-between items-center p-10 max-w-4xl mx-auto mt-20"
    >
      <div className="text-3xl sm:text-5xl flex flex-col w-80 sm:w-[500px] gap-5">
        <div>
          <span>Hi! I'm </span>
          <Typewriter
            words={[
              "Selim",
              `${calculateAge(new Date(2004, 10)).years}`,
              "Web Developer",
              "Student",
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </div>
        <p className="text-sm  sm:text-base font-light text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          praesentium quibusdam nam a doloribus sed dolorem possimus sequi
          repellat voluptas!
        </p>
      </div>
      <div className="relative">
        <div className="absolute rounded-full w-40 h-40 sm:w-56 sm:h-56 border animate-ping"></div>
        <img
          onMouseEnter={() => setCursorHover(true)}
          onMouseLeave={() => setCursorHover(false)}
          className="relative rounded-full w-40 h-40 sm:w-56 sm:h-56 object-cover"
          src={spyImg}
          alt="profile img"
        />
      </div>
    </div>
  );
};

export default Hero;
