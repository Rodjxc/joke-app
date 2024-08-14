import { Layout, Menu } from "antd";
import { useTranslation } from "react-i18next";
import "./navbar.css";
import { LanguageChanger } from "./LanguageChanger/LanguageChanger";
import { useDarkMode } from "../../../Context/useDarkMode";
import { DarkModeSwitch } from "../../DarkMode/DarkModeSwitch";

const { Header } = Layout;

export const Navbar = () => {
	const { darkMode } = useDarkMode();
	const { t } = useTranslation("translation");

	// Define menu items
	const menuItems = [
		{
			key: "submit",
			label: <a href="/submit">{t("navbar.submit")}</a>,
		},
		{
			key: "about",
			label: <a href="/about">{t("navbar.about")}</a>,
		},
		{
			key: "video",
			label: <a href="/video">{t("navbar.video")}</a>,
		},
	];

	return (
		<Header className={`navbar ${darkMode ? "dark-mode" : ""}`}>
			{/* Logo */}
			<h1>Joke App</h1>

			{/* Middle: this could be separated into further components if they get given any use in the future */}
			<Menu
				mode="horizontal"
				className="navbar-pages"
				style={{
					background: darkMode ? "#333" : "",
					color: darkMode ? "white" : "inherit",
				}}
				items={menuItems} // Use the items prop instead of children
			/>
			<LanguageChanger />
			<DarkModeSwitch />
		</Header>
	);
};
