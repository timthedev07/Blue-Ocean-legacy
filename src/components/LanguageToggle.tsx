import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";

interface LanguageToggleProps {
  className?: string;
}

const Locales = ["en-US", "es-ES", "zh-CN"] as const;
type LocaleType = typeof Locales[number];
const LocaleString: Record<LocaleType, string> = {
  "en-US": "English(US)",
  "es-ES": "Español(ES)",
  "zh-CN": "中文(简体)",
};

const LocaleImage: FC<{ locale: LocaleType }> = ({ locale }) => {
  return (
    <img alt="" className="w-7 h-auto mr-2" src={`/images/${locale}.png`} />
  );
};

export const LanguageToggle: FC<LanguageToggleProps> = ({ className = "" }) => {
  const [selectedLang, setSelectedLang] = useState<LocaleType>(
    () => Locales[0]
  );

  useEffect(() => {
    const cached = window.localStorage.getItem("locale") as LocaleType | null;
    if (!cached) {
      window.localStorage.setItem("locale", Locales[0]);
      setSelectedLang(Locales[0]);
      return;
    }
    setSelectedLang(cached);
  }, []);

  const handleChangeLocale = (e: any) => {
    const newLocale = e.target.value as LocaleType;
    setSelectedLang(newLocale);
    if (typeof window === "undefined") return;
    window.localStorage.setItem("locale", newLocale);
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
              <MenuItem key={each} value={each} onClick={handleChangeLocale}>
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