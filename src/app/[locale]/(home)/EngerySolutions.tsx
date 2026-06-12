import { getTranslations } from 'next-intl/server';
import { homeSolutions } from '@/constants/home';
import Image from 'next/image';
export default async function EnergySolutions() {
  const t = await getTranslations();
  return (
    <div className=" lg:py-[60px] lg:px-[216px] py-[42px]">
      <h1 className="text-[48px] font-bold lg:mb-[10px] text-center">
        {t(homeSolutions.title)}
      </h1>
      <p className="lg:text-[20px] lg:mb-[120px] text-center text-[30px] px-[50px] mb-[10px]">
        {t(homeSolutions.description)}
      </p>
      <div className="solutions grid grid-cols-1 lg:grid-cols-2 lg:gap-[60px] gap-[20px] px-[18px] lg:px-0">
        {homeSolutions.solutions.map((solution, index) => (
          <div className="relative text-white" key={index}>
            <Image src={solution.image} alt={t(solution.title)} />

            <h2 className="absolute font-bold lg:top-[30px] lg:left-[40px] text-[24px]  top-[26px] left-[34px]">
              {t(solution.title)}
            </h2>
            <p className="absolute lg:bottom-[30px] lg:left-[40px] w-[calc(100%-80px)] text-[16px] lg:text-[14px]  bottom-[26px] left-[34px] ">
              {t(solution.description)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
