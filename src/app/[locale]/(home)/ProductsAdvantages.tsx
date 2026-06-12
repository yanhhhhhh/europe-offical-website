import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import homeAdvantagesImage from '@/assets/images/home/01-04.webp';
import homeAdvantagesMobileImage from '@/assets/images/home/01-04-m.webp';

export default async function ProductsAdvantages() {
  const t = await getTranslations();
  return (
    <div className="products-advantages w-full bg-white relative">
      {/* PC端 1920x800 */}
      <div className="hidden lg:block w-full h-[800px] relative">
        <div className="absolute inset-0">
          {/* 标题 - y=2523, 相对于y=2463容器，top=60px */}
          <h2 className="absolute left-1/2 -translate-x-1/2 top-[60px] text-[48px] font-bold text-center  whitespace-nowrap">
            {t('home.advantages.title')}
          </h2>

          {/* 中心六边形图片 - x="762" y="2709", 相对于y=2463, top=246px */}
          <div className="absolute left-1/2 -translate-x-1/2  top-[246px] w-auto h-[396px]">
            <Image
              src={homeAdvantagesImage}
              alt={t('home.advantages.imageAlt')}
              // width={880}
              // height={396}
              className="w-full h-full object-contain"
            />
          </div>

          {/* 左上角 - High Consistency - x="294.96875" y="2686", top=223px */}
          <div className="absolute left-[245px] top-[223px] w-[326px]">
            <div className="flex items-start gap-[14px]">
              <div className="w-[12px] h-[12px] rounded-full bg-[#1761FF] mt-[12px] shrink-0" />
              <div className="flex flex-col gap-[8px]">
                <h3 className="text-[36px] font-normal leading-[36px] text-[#202326]">
                  {t('home.advantages.highConsistency.title')}
                </h3>
                <p className="text-[24px] font-normal leading-[30px] text-[#6C737F]">
                  {t('home.advantages.highConsistency.text')}
                </p>
              </div>
            </div>
            {/* 连接线 - 从圆点指向中心 */}
            <div className="absolute top-[18px] left-[338px] w-[238px] h-[1px] bg-[#E6E9ED]" />
          </div>

          {/* 左下角 - Maximum safety - x="244.96875" y="2983", top=520px */}
          <div className="absolute left-[245px] top-[520px] w-[310px]">
            <div className="flex items-start gap-[14px]">
              <div className="w-[12px] h-[12px] rounded-full bg-[#1761FF] mt-[12px] shrink-0" />
              <div className="flex flex-col gap-[8px]">
                <h3 className="text-[36px] font-normal leading-[36px] text-[#202326]">
                  {t('home.advantages.maximumSafety.title')}
                </h3>
                <p className="text-[24px] font-normal leading-[30px] text-[#6C737F]">
                  {t('home.advantages.maximumSafety.text')}
                </p>
              </div>
            </div>
            {/* 连接线 */}
            <div className="absolute top-[18px] left-[365px] w-[149px] h-[1px] bg-[#E6E9ED]" />
          </div>

          {/* 右上角 - Maximum lifetime - x="1281.96875" y="2676", top=213px */}
          <div className="absolute left-[1282px] top-[213px] w-[518px]">
            <div className="flex items-start gap-[14px]">
              <div className="w-[12px] h-[12px] rounded-full bg-[#1761FF] mt-[12px] shrink-0" />
              <div className="flex flex-col gap-[8px]">
                <h3 className="text-[36px] font-normal leading-[36px] text-[#202326]">
                  {t('home.advantages.maximumLifetime.title')}
                </h3>
                <p className="text-[24px] font-normal leading-[30px] text-[#6C737F]">
                  {t('home.advantages.maximumLifetime.text')}
                </p>
              </div>
            </div>
            {/* 连接线 */}
            <div className="absolute top-[18px] right-[530px] w-[289px] h-[1px] bg-[#E6E9ED]" />
          </div>

          {/* 右下角 - Cost-effective - x="1207.96875" y="3088", top=625px */}
          <div className="absolute left-[1208px] top-[625px] w-[575px]">
            <div className="flex items-start gap-[14px]">
              <div className="w-[12px] h-[12px] rounded-full bg-[#1761FF] mt-[12px] shrink-0" />
              <div className="flex flex-col gap-[8px]">
                <h3 className="text-[36px] font-normal leading-[36px] text-[#202326]">
                  {t('home.advantages.costEffective.title')}
                </h3>
                <p className="text-[24px] font-normal leading-[30px] text-[#6C737F]">
                  {t('home.advantages.costEffective.text')}
                </p>
              </div>
            </div>
            {/* 连接线 */}
          </div>
        </div>
      </div>

      {/* 移动端 750x1210 - 垂直布局：标题 -> 图片 -> 文案列表 */}
      <div className="block lg:hidden w-full h-[1210px] relative bg-white">
        <div className="absolute inset-0">
          {/* 标题 - x="139" y="3682", 相对于y=3641容器, top=41px */}
          <h2 className="absolute left-[139px] top-[41px] w-[472px] text-[72px] font-normal leading-[72px] text-[#202326]">
            {t('home.advantages.title')}
          </h2>

          {/* 中心六边形图片 - y="3776", top=135px, 居中显示 */}
          <div className="absolute left-[1px] top-[135px] w-[748px] h-[424px]">
            <Image
              src={homeAdvantagesMobileImage}
              alt={t('home.advantages.imageAlt')}
              width={748}
              height={424}
              className="w-full h-full object-contain"
            />
          </div>

          {/* 文案1 - High Consistency - x="46" y="4249", top=608px */}
          <div className="absolute left-[46px] top-[608px] w-[285px]">
            <div className="flex items-start gap-[14px]">
              <div className="w-[12px] h-[12px] rounded-full bg-[#1761FF] mt-[12px] shrink-0" />
              <div className="flex flex-col gap-[8px]">
                <h3 className="text-[36px] font-normal leading-[36px] text-[#202326]">
                  {t('home.advantages.highConsistency.title')}
                </h3>
                <p className="text-[24px] font-normal leading-[30px] text-[#6C737F]">
                  {t('home.advantages.highConsistency.text')}
                </p>
              </div>
            </div>
          </div>

          {/* 文案2 - Maximum lifetime - x="395" y="4250", top=609px */}
          <div className="absolute left-[395px] top-[609px] w-[326px]">
            <div className="flex items-start gap-[14px]">
              <div className="w-[12px] h-[12px] rounded-full bg-[#1761FF] mt-[12px] shrink-0" />
              <div className="flex flex-col gap-[8px]">
                <h3 className="text-[36px] font-normal leading-[36px] text-[#202326]">
                  {t('home.advantages.maximumLifetime.title')}
                </h3>
                <p className="text-[24px] font-normal leading-[30px] text-[#6C737F]">
                  {t('home.advantages.maximumLifetime.text')}
                </p>
              </div>
            </div>
          </div>

          {/* 文案3 - Maximum safety - x="46" y="4442", top=801px */}
          <div className="absolute left-[46px] top-[801px] w-[307px]">
            <div className="flex items-start gap-[14px]">
              <div className="w-[12px] h-[12px] rounded-full bg-[#1761FF] mt-[12px] shrink-0" />
              <div className="flex flex-col gap-[8px]">
                <h3 className="text-[36px] font-normal leading-[36px] text-[#202326]">
                  {t('home.advantages.maximumSafety.title')}
                </h3>
                <p className="text-[24px] font-normal leading-[30px] text-[#6C737F]">
                  {t('home.advantages.maximumSafety.text')}
                </p>
              </div>
            </div>
          </div>

          {/* 文案4 - Cost-effective - x="395" y="4442", top=801px */}
          <div className="absolute left-[395px] top-[801px] w-[336px]">
            <div className="flex items-start gap-[14px]">
              <div className="w-[12px] h-[12px] rounded-full bg-[#1761FF] mt-[12px] shrink-0" />
              <div className="flex flex-col gap-[8px]">
                <h3 className="text-[36px] font-normal leading-[36px] text-[#202326]">
                  {t('home.advantages.costEffective.title')}
                </h3>
                <p className="text-[24px] font-normal leading-[30px] text-[#6C737F]">
                  {t('home.advantages.costEffective.text')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
