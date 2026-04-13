import pt from './pt.json';
import en from './en.json';

export type Locale = 'pt' | 'en';
export type TranslationKey = string;

const translations: Record<Locale, typeof pt> = { pt, en };

export function getTranslations(locale: Locale) {
  return translations[locale] ?? translations.pt;
}

export function t(locale: Locale, key: string): string {
  const messages = getTranslations(locale);
  const keys = key.split('.');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let value: any = messages;
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return key; // fallback to key if not found
    }
  }
  return typeof value === 'string' ? value : key;
}

export function getLocaleFromUrl(url: URL): Locale {
  const pathname = new URL(url).pathname;
  const locale = pathname.split('/')[1];
  if (locale === 'en') return 'en';
  return 'pt';
}

export function getAlternateUrl(url: URL, targetLocale: Locale): string {
  const pathname = new URL(url).pathname;
  const currentLocale = getLocaleFromUrl(url);
  const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '');
  return `/${targetLocale}${pathWithoutLocale || '/'}`;
}