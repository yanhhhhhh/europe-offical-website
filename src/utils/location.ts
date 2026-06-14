// 获取完整路径
export function getFullPath(locale: string, link: string) {
  // const globalLocale = 'en-GLOBAL';
  // if (locale === globalLocale) {
  //   return `${process.env.NEXT_PUBLIC_ROUTER_BASE}${link}`;
  // }

  return `/${locale}${link}`;
}
export function decodeURIComponentString(str?: string) {
  return str ? decodeURIComponent(str) : '';
}
