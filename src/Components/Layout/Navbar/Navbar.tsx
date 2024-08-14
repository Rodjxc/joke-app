import { Layout, Menu } from "antd";
import { useTranslation } from "react-i18next";
import { LanguageChanger } from "./LanguageChanger/LanguageChanger";
import { DarkModeSwitch } from "../../DarkMode/DarkModeSwitch";
import { useDarkMode } from "../../../Context/useDarkMode";

const { Header } = Layout;

export const Navbar = () => {
	const { darkMode } = useDarkMode();
	const { t } = useTranslation("translation");

	// Define menu items
	const menuItems = [
		{
			key: "submit",
			label: (
				<a href="/submit" style={{ color: darkMode ? "white" : "black" }}>
					{t("navbar.submit")}
				</a>
			),
		},
		{
			key: "about",
			label: (
				<a href="/about" style={{ color: darkMode ? "white" : "black" }}>
					{t("navbar.about")}
				</a>
			),
		},
		{
			key: "video",
			label: (
				<a href="/video" style={{ color: darkMode ? "white" : "black" }}>
					{t("navbar.video")}
				</a>
			),
		},
	];

	return (
		<Header
			className={`flex justify-between items-center px-5 ${
				darkMode
					? "bg-black border-b border-gray-700"
					: "bg-white border-b border-gray-300"
			}`}
		>
			{/* Logo */}
			<h1
				className={`text-xl font-bold ${darkMode ? "text-white" : "text-black"}`}
			>
				Joke App
			</h1>

			{/* Menu */}
			<Menu
				mode="horizontal"
				style={{
					backgroundColor: darkMode ? "black" : "white", // Force the background color
					borderBottom: "none",
				}}
				items={menuItems}
			/>
			<div className="flex items-center space-x-4">
				<LanguageChanger />
				<DarkModeSwitch />
			</div>
		</Header>
	);
};
