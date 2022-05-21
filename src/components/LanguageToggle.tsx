import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";

interface LanguageToggleProps {
  className?: string;
}

export const Locales = ["en-US", "es-ES", "zh-CN"] as const;
export type LocaleType = typeof Locales[number];
export const LocaleString: Record<LocaleType, string> = {
  "en-US": "English",
  "es-ES": "Español(ES)",
  "zh-CN": "中文(简体)",
};

const LocaleImage: FC<{ locale: LocaleType }> = ({ locale }) => {
  return (
    <div className="h-7 w-7 relative mr-2">
      <Image alt="" layout="fill" src={`/images/${locale}.png`} />
    </div>
  );
};

export const LanguageToggle: FC<LanguageToggleProps> = ({ className = "" }) => {
  const [selectedLang, setSelectedLang] = useState<LocaleType>(
    () => Locales[0]
  );
  const { push, asPath, locale } = useRouter();

  useEffect(() => {
    setSelectedLang(locale as LocaleType);
  }, [locale]);

  const handleChangeLocale = (newLocale: LocaleType) => {
    setSelectedLang(newLocale);
    push(asPath, asPath, {
      locale: newLocale,
    });
  };

  return (
    <div className={className + " w-80"}>
      <Menu>
        <MenuButton as={Button} className="w-80">
          <div className="flex items-center justify-center">
            <LocaleImage locale={selectedLang} />
            {LocaleString[selectedLang]}
          </div>
        </MenuButton>
        <MenuList width="250px" zIndex={1000000}>
          {Locales.filter((each) => each !== selectedLang).map((each) => {
            return (
              <MenuItem
                key={each}
                value={each}
                onClick={() => handleChangeLocale(each)}
              >
                <LocaleImage locale={each} />
                {LocaleString[each]}
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    </div>
  );
};
