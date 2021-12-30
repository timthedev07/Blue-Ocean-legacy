import { LocaleType } from "../components/LanguageToggle";

type Translation = Record<string, string>;

export const getTranslation = <T extends Translation>(
  locale: LocaleType,
  en: T,
  es: T,
  zh: T
) => {
  switch (locale) {
    case "en-US":
      return en;
    case "es-ES":
      return es;
    case "zh-CN":
      return zh;
  }
};
