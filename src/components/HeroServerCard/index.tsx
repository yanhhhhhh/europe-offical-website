import { PropsWithChildren } from 'react';

import styles from './index.module.css';
import { getLocale, getTranslations } from 'next-intl/server';
import { getLanguageCode } from '@/utils/languageCode';

export type MoreType = 'learnMoreInfo' | 'learnMore' | 'contactUs';

export interface HeroServerCardProps extends PropsWithChildren {
  title: string;
  description?: string;
  fontColor?: string;
  backgroundWidth?: string;
  backgroundHeight?: string;
  backgroundImage?: string;

  backgroundMobileImage?: string;
  titleClassName?: string;
  titleStyle?: React.CSSProperties;
  descriptionClassName?: string;
  descriptionStyle?: React.CSSProperties;
  contentClassName?: string;
  contentStyle?: React.CSSProperties;
  cardClassName?: string;
  cardStyle?: React.CSSProperties;
  moreClassName?: string;
  moreStyle?: React.CSSProperties;
  //链接
  more?: string;
  moreType?: MoreType;

  descriptionInnerHtml?: boolean;
}
export const HeroServerCard = async (pros: HeroServerCardProps) => {
  const locale = await getLocale();
  const t = await getTranslations({ locale });
  const languageCode = getLanguageCode(locale);

  const {
    title,
    description,
    backgroundImage,
    backgroundMobileImage,
    fontColor = '#ffffff',

    titleStyle = {},
    descriptionStyle = {},
    contentStyle = {},

    cardStyle = {},
    moreType = 'learnMoreInfo',
    more,
    children,

    descriptionInnerHtml = false,
    titleClassName = '',
    descriptionClassName = '',
    contentClassName = '',
    cardClassName = '',
    moreClassName = '',
  } = pros;

  return (
    <div
      className={`${styles.heroCard} ${
        languageCode ? styles[languageCode] : ''
      } ${cardClassName} relative w-screen lg:h-[800px] h-[1210px] `}
      style={{
        ...cardStyle,
      }}
    >
      <img
        className="hero-layout-pc w-full h-full absolute top-0 left-0 "
        src={backgroundImage}
        alt={t(title)}
      />
      <img
        className="hero-layout-mobile w-full h-full absolute top-0 left-0 "
        src={backgroundMobileImage}
        alt={t(title)}
      />
      <div
        className={`${styles.heroCardContent} ${contentClassName} relative z-10  `}
        style={{ color: fontColor, ...contentStyle }}
      >
        <div
          className={`${styles.heroCardTitle} ${titleClassName} `}
          style={titleStyle}
        >
          {title && t(title)}
        </div>
        {!descriptionInnerHtml
          ? description && (
              <div
                className={`${styles.heroCardDescription} ${descriptionClassName} `}
                style={descriptionStyle}
              >
                {t(description)}
              </div>
            )
          : description && (
              <div
                className={`${styles.heroCardDescription} innerHtml ${descriptionClassName} `}
                style={descriptionStyle}
                dangerouslySetInnerHTML={{ __html: t(description) }}
              ></div>
            )}
        {moreType === 'learnMoreInfo' && more && (
          <a className={`${styles.heroCardMore} ${moreClassName} `} href={more}>
            {t('button.learnMoreInfo')}&gt;
          </a>
        )}
        {moreType === 'contactUs' && more && (
          <a
            className={`${styles.heroCardMore} ${moreClassName} `}
            href={more}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('button.contactUs')} &gt;
          </a>
        )}
        {moreType === 'learnMore' && more && (
          <div className={`${styles.heroCardMore} ${moreClassName} `}>
            {t('button.learnMore')}&gt;
          </div>
        )}
      </div>
      {children}
    </div>
  );
};
