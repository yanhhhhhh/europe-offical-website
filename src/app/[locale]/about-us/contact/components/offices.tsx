import { offices } from '@/constants/contact';

export default function Offices() {
  return (
    <div className="banner-offices lg:px-[345px] px-[40px] ">
      {offices.map((office, index) => (
        <div
          key={index}
          className="office-item py-[60px]  border-b last:border-b-0 border-gray-300"
        >
          <p className="office-country lg:text-[32px] text-[40px] font-bold mb-[16px]">
            {office.country}
          </p>
          <p className="office-title lg:text-[24px] text-[28px] mb-[16px]">
            {office.name}
          </p>
          <div className="office-address  lg:text-[24px] text-[28px] mb-[16px] flex gap-[8px]">
            Address:
            <span>{office.address}</span>
          </div>

          {/* 邮箱 mailTo */}
          <p className="office-email lg:text-[24px] text-[28px] mb-[16px]">
            <a className="!text-primary" href={`mailto:${office.email}`}>
              {office.email}
            </a>
          </p>
        </div>
      ))}
    </div>
  );
}
