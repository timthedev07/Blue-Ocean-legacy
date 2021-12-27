import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  MenuDivider,
  MenuItemOption,
  MenuOptionGroup,
} from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";

interface LanguageToggleProps {
  className?: string;
}

export const LanguageToggle: FC<LanguageToggleProps> = ({ className = "" }) => {
  const [selectedLang, setSelectedLang] = useState<string>(() => "en-US");

  useEffect(() => {
    const cached = window.localStorage.getItem("locale");
    if (!cached) return;
    setSelectedLang(cached);
  }, []);

  return (
    <div className={className}>
      <Menu matchWidth>
        <MenuButton as={Button}>MenuItem</MenuButton>
        <MenuList width="240px" zIndex={1000000}>
          <MenuOptionGroup defaultValue="asc" title="Order" type="radio">
            <MenuItemOption value="asc">Ascending</MenuItemOption>
            <MenuItemOption value="desc">Descending</MenuItemOption>
          </MenuOptionGroup>
          <MenuDivider />
          <MenuOptionGroup title="Country" type="checkbox">
            <MenuItemOption value="email">Email</MenuItemOption>
            <MenuItemOption value="phone">Phone</MenuItemOption>
            <MenuItemOption value="country">Country</MenuItemOption>
          </MenuOptionGroup>
        </MenuList>
      </Menu>
    </div>
  );
};
