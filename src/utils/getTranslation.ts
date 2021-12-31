type Translation = Record<string, string | string[]>;

export const getTranslation = <T extends Translation>(
  locale: string | undefined,
  en: T,
  es: T,
  zh: T
) => {
  switch (locale) {
    case "es-ES":
      return es;
    case "zh-CN":
      return zh;
    default:
      return en;
  }
};
