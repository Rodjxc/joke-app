import { Menu } from "antd";
import { useDarkMode } from "../../Contexts/DarkModeContext";
import { useTranslation } from "react-i18next";
import { sidebarItems } from "./sidebarItems";

export const Sidebar = () => {
  const { darkMode } = useDarkMode();
  const { t } = useTranslation("translation");

  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={["overview"]}
      style={{
        height: "100%",
        borderRight: 0,
        background: darkMode ? "#333" : "",
        color: darkMode ? "white" : "",
      }}
    >
      {sidebarItems.map((item) => {
        if (item.isDivider) {
          return <Menu.Divider key={item.key} />;
        }

        return item.labelKey ? (
          <Menu.Item key={item.key} icon={item.icon}>
            {t(item.labelKey)}
          </Menu.Item>
        ) : null;
      })}
    </Menu>
  );
};
