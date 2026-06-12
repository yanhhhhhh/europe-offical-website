import { useTranslations } from 'next-intl';
import { IProduct } from '@/constants/products';
import IconDownload from '@/components/icons/icon-svg/download.svg?component';
import IconQrCode from '@/components/icons/icon-svg/icon_qr_code.svg?component';
import IconZhankai from '@/components/icons/icon-svg/zhankai.svg?component';

import { QRCode } from 'antd';

interface UserManualTableProps {
  contentList: IProduct[];
  expandedProduct: string;
  onToggleExpansion: (productKey: string) => void;
  productRefs: React.MutableRefObject<{
    [key: string]: HTMLTableRowElement | null;
  }>;
}

const renderProductTableThClassName =
  ' p-[16px] lg:p-[12px] text-center font-medium text-[36px] lg:text-[18px] text-nowrap ';

const renderProductTableTdClassName =
  'p-[8px] lg:p-[12px] text-center text-[36px] lg:text-[18px] text-gray-600 border-b border-gray-100 align-middle text-nowrap ';

const UserManualTable: React.FC<UserManualTableProps> = ({
  contentList,
  expandedProduct,
  onToggleExpansion,
  productRefs,
}) => {
  const t = useTranslations();
  const productFeaturesT = useTranslations('service.downloads');

  const downloadAction = (product: IProduct, type: 'brochure' | 'manual') => {
    const url = type === 'brochure' ? product.albumUrl : product.manualUrl;
    if (!url) return;

    window.open(url);

    // Track download
  };

  const renderProductFeatures = (product: IProduct) => {
    if (!product.productFeatures) return null;

    const features = product.productFeatures;

    return (
      <div className="p-[16px] lg:p-[10px] pr-0 mt-[8px]">
        <h3 className="text-[36px] lg:text-[18px] font-semibold  mb-[16px] ">
          {t('service.downloads.productFeatures')}
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[8px] lg:gap-[12px]">
          {features.map(({ key, value }) => {
            return (
              <div key={key} className="flex items-center ">
                <span className="font-medium text-gray-700 mr-[8px] text-[32px] lg:text-[18px]">
                  {productFeaturesT(key)}:
                </span>
                <span className="text-gray-600 text-[32px] lg:text-[18px]">
                  {value || '/'}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse  rounded-[8px] overflow-hidden shadow-lg">
        <thead>
          <tr className="bg-primary text-white">
            <th
              className={`${renderProductTableThClassName} !text-left  lg:!pl-[32px] pl-[32px]`}
            >
              {t('service.downloads.productName')}
            </th>
            <th className={renderProductTableThClassName}>
              {t('service.downloads.diagram')}
            </th>
            <th className={renderProductTableThClassName}>
              {t('service.downloads.batteryCapacity')}
            </th>
            <th className={renderProductTableThClassName}>
              {t('service.downloads.cellCapacity')}
            </th>
            <th className={renderProductTableThClassName}>
              {t('service.downloads.ratedVoltage')}
            </th>
            <th className={renderProductTableThClassName}>
              {t('service.downloads.netWeight')}
            </th>
            <th className={renderProductTableThClassName}>
              {t('service.downloads.brochureDownload')}
            </th>
            <th className={renderProductTableThClassName}>
              {t('service.downloads.userManualDownload')}
            </th>
          </tr>
        </thead>
        <tbody>
          {contentList.map((product) =>
            [
              <tr
                key={`${product.productKey}-main`}
                className={`cursor-pointer odd:bg-[#F6F6F6] even:bg-[#FBF9FA] transition-colors duration-300  ${
                  expandedProduct === product.productKey ? 'bg-blue-50' : ''
                }`}
                ref={(el) => {
                  if (product.productKey) {
                    productRefs.current[product.slug] = el;
                  }
                }}
                onClick={() => {
                  if (product.productKey) {
                    onToggleExpansion(product.productKey);
                  }
                }}
              >
                <td className="text-nowrap p-[12px] lg:p-[12px] text-center text-[36px] lg:text-[18px] text-gray-600 border-b border-gray-100 align-middle">
                  <div className="flex text-primary font-semibold items-center  cursor-pointer  lg:py-[8px] lg:px-[16px] p-[16px]">
                    {product.name}
                    <IconZhankai
                      className={`w-[30px] h-[30px] lg:w-[16px] lg:h-[16px] transition-transform duration-300 ml-[8px] text-primary ${
                        expandedProduct === product.productKey
                          ? 'rotate-180'
                          : ''
                      }`}
                    />
                  </div>
                </td>
                <td className={renderProductTableTdClassName}>
                  <img
                    src={
                      product.image?.src || '/images/product-placeholder.png'
                    }
                    alt={product.name}
                    className="w-[80px] h-[80px] lg:w-[64px] lg:h-[64px] object-contain rounded-[4px]"
                  />
                </td>

                <td className={renderProductTableTdClassName}>
                  {product.batteryCapacity || '/'}
                </td>
                <td className={renderProductTableTdClassName}>
                  {product.cellCapacity || '/'}
                </td>
                <td className={renderProductTableTdClassName}>
                  {product.ratedVoltage || '/'}
                </td>
                <td className={renderProductTableTdClassName}>
                  {product.netWeight || '/'}
                </td>
                <td className={renderProductTableTdClassName}>
                  <div className="flex items-center justify-around lg:justify-center gap-[8px]">
                    <IconDownload
                      className="w-[48px] h-[48px] lg:w-[24px] lg:h-[24px] cursor-pointer  mr-[8px] text-primary"
                      onClick={(e) => {
                        e.stopPropagation();
                        downloadAction(product, 'brochure');
                      }}
                    />

                    <IconQrCode className="w-[48px] h-[48px] lg:w-[24px] lg:h-[24px] text-primary cursor-pointer" />
                  </div>
                </td>
                <td className={renderProductTableTdClassName}>
                  <div className="flex items-center justify-around lg:justify-center gap-[8px]">
                    <IconDownload
                      className="w-[48px] h-[48px] lg:w-[24px] lg:h-[24px] cursor-pointer text-primary mr-[8px]"
                      onClick={(e) => {
                        e.stopPropagation();
                        downloadAction(product, 'manual');
                      }}
                    />

                    <IconQrCode className="w-[48px] h-[48px] lg:w-[24px] lg:h-[24px] text-primary cursor-pointer" />
                  </div>
                </td>
              </tr>,
              expandedProduct === product.productKey && (
                <tr key={`${product.productKey}-expanded`} className="bg-white">
                  <td className="p-[16px] lg:pl-[28px] text-left" colSpan={6}>
                    {renderProductFeatures(product)}
                  </td>
                  <td className={renderProductTableTdClassName}>
                    <div className="flex flex-col items-center gap-[8px] justify-center">
                      <div className="flex items-center justify-center">
                        <QRCode
                          value={product.albumUrl || '-'}
                          className="!w-[190px] !h-[190px] lg:!w-[116px] lg:!h-[116px] text-gray-500 !p-[2px]"
                        />
                      </div>
                      <span className="text-[24px] lg:text-[14px] text-gray-600 text-center">
                        {t('service.downloads.brochureDownload')}
                      </span>
                    </div>
                  </td>
                  <td className={renderProductTableTdClassName}>
                    <div className="flex flex-col items-center gap-[8px] justify-center">
                      <div className="flex items-center justify-center">
                        <QRCode
                          value={product.manualUrl || '-'}
                          className="!w-[190px] !h-[190px] lg:!w-[116px] lg:!h-[116px] text-gray-500 !p-[2px]"
                        />
                      </div>
                      <span className="text-[24px] lg:text-[14px] text-gray-600 text-center">
                        {t('service.downloads.userManualDownload')}
                      </span>
                    </div>
                  </td>
                </tr>
              ),
            ].filter(Boolean),
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserManualTable;
