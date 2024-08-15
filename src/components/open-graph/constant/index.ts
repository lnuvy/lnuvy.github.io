import { GS_TYPE } from './google-snippet';

/** ------------------------------------------------------------------------------
 * 
 * Open Graph name/property Object
 * 
 ------------------------------------------------------------------------------ */
export const OG = {
  author: 'author',
  description: 'description',
  'twitter:card': 'twitter:card',
  'twitter:site': 'twitter:site',
  'twitter:creator': 'twitter:creator',
  'twitter:title': 'twitter:title',
  'twitter:description': 'twitter:description',
  'twitter:image': 'twitter:image',
  'naver-site-verification': 'naver-site-verification',
  'og:title': 'og:title',
  'og:url': 'og:url',
  'og:type': 'og:type',
  'og:locale': 'og:locale',
  'og:site_name': 'og:site_name',
  'og:description': 'og:description',
  'og:image': 'og:image',
};

/** ------------------------------------------------------------------------------
 * 
 * Common Info
 * 
 ------------------------------------------------------------------------------ */
export const HEAD_COMMON_INFO = {
  TYPE: 'website',
  NAME: 'lnuvy',
  CATCHPHRASE: '프론트엔드 개발자 이한울입니다.',
  DESCRIPTION: '함께 일하고 싶은 동료가 되기위해 노력하며, 새로운 기술과 환경을 즐깁니다.',
  URL: 'https://lnuvy.github.io',
  EMAIL: 'lnuvy.code@gmail.com',
  IMAGE: '', // TODO: 이미지 채우기
};

/** ------------------------------------------------------------------------------
 * 
 * Address Schema
 * 
 ------------------------------------------------------------------------------ */
export const JSONLD_ADDRESS = {
  '@type': 'PostalAddress',
  addressCountry: 'KR',
  addressLocality: 'Seoul, Korea',
  postalCode: '06131',
  streetAddress: '서울특별시 강남구 테헤란로25길 15-10, 203호',
};

/** ------------------------------------------------------------------------------
 * 
 * Contacts Schema
 * 
 ------------------------------------------------------------------------------ */
export const JSONLD_CONTACTS = [
  {
    '@type': 'ContactPoint',
    telephone: '+10-10-2731-4241',
    contactType: 'customer service',
    areaServed: 'KR',
  },
];

/** ------------------------------------------------------------------------------
 * 
 * Logo Schema
 * 
 ------------------------------------------------------------------------------ */
export const JSONLD_ORGANIZATION_LOGO = {
  '@type': 'ImageObject',
  '@id': '', // TODO: 이미지
  url: '', // TODO: 이미지
  width: '112',
  height: '112',
};

/** ------------------------------------------------------------------------------
 * 
 * Organization Schema
 * 
 ------------------------------------------------------------------------------ */
export const JSONLD_ORGANIZATION = {
  '@type': GS_TYPE['ORGANIZATION'],
  '@id': HEAD_COMMON_INFO.URL,
  url: HEAD_COMMON_INFO.URL,
  name: HEAD_COMMON_INFO.NAME,
  email: HEAD_COMMON_INFO.EMAIL,
  logo: JSONLD_ORGANIZATION_LOGO,
  address: JSONLD_ADDRESS,
  contactPoint: JSONLD_CONTACTS,
};
