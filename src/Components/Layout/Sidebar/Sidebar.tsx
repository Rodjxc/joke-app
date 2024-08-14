import { Menu } from "antd";
import type { MenuProps } from "antd";
import { useTranslation } from "react-i18next";
import { sidebarItems } from "./sidebarItems";
import { useDarkMode } from "../../../Context/useDarkMode";

export const Sidebar = () => {
	const { darkMode } = useDarkMode();
	const { t } = useTranslation("translation");

	// Transform sidebarItems into the format expected by Menu's items prop
	const menuItems: MenuProps["items"] = sidebarItems.map((item) => {
		if (item.isDivider) {
			return {
				key: item.key,
				type: "divider",
			};
		}

		return {
			key: item.key,
			icon: item.icon,
			label: item.labelKey ? t(item.labelKey) : null,
		};
	});

	return (
		<Menu
			mode="inline"
			defaultSelectedKeys={["overview"]}
			className={`h-full border-r-0 ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}
			items={menuItems}
		/>
	);
};
