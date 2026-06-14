import { getTranslations } from 'next-intl/server';

const officialEmail = 'ress@hithium.com';
export default async function FooterContactEmail() {
  const t = await getTranslations();
  return (
    <div className="lg:flex lg:flex-row flex-col  lg:justify-between  pb-[60px] ">
      <div>
        <p className="lg:text-[28px] text-[40px] font-bold text-white">
          {t('footer.forMoreInformation')}
        </p>
        <p className="lg:text-[20px] text-[32px]  text-white">
          {t('footer.pleaseContactUsViaOurOfficialEmail')}
        </p>
      </div>

      <a
        href={`mailto:${officialEmail}`}
        className="flex font-bold  justify-center items-center lg:text-[20px] text-[32px]  lg:px-[110px] py-[20px] mt-[20px] lg:mt-[0] bg-white !text-primary rounded-[60px] "
      >
        {officialEmail}
      </a>
    </div>
  );
}
