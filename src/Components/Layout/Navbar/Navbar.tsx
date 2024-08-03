import { Layout, Menu } from "antd";
import { useTranslation } from "react-i18next";
import DarkMode from "./DarkMode/DarkMode";
import "./navbar.css";
import { LanguageChanger } from "./LanguageChanger/LanguageChanger";
import { useDarkMode } from "../../../Context/useDarkMode";

const { Header } = Layout;

const Navbar: React.FC = () => {
	//We access the dark mode state
	const { darkMode } = useDarkMode();
	//we import the i18n to translate the pages.
	const { t } = useTranslation("translation");

	return (
		<Header className={`navbar ${darkMode ? "dark-mode" : ""}`}>
			{/* Logo */}
			<h1>Joke App</h1>

			{/* Middle: this could be separated in further components if they get given any use in the future */}
			<Menu
				mode="horizontal"
				className="navbar-pages"
				style={{
					background: darkMode ? "#333" : "",
					color: darkMode ? "white" : "inherit",
				}}
			>
				<Menu.Item key="submit">
					<a>{t("navbar.submit")}</a>
				</Menu.Item>
				<Menu.Item key="about">
					<a>{t("navbar.about")}</a>
				</Menu.Item>
				<Menu.Item key="video">
					<a>{t("navbar.video")}</a>
				</Menu.Item>
			</Menu>

			{/* Language */}
			<LanguageChanger />

			{/* Dark Mode Button */}
			<DarkMode />
		</Header>
	);
};

export default Navbar;
