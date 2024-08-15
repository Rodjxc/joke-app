import { Layout, Menu, Button, Drawer } from "antd";
import "./Navbar.css";
import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LanguageChanger } from "./LanguageChanger/LanguageChanger";
import { DarkModeSwitch } from "../../DarkMode/DarkModeSwitch";
import { useDarkMode } from "../../../Context/useDarkMode";

const { Header } = Layout;

export const Navbar = () => {
	const { darkMode } = useDarkMode();
	const { t } = useTranslation("translation");
	const [drawerVisible, setDrawerVisible] = useState(false);

	// Define menu items
	const menuItems = [
		{
			key: "submit",
			label: (
				<a href="/submit" style={{ color: darkMode ? "white" : "" }}>
					{t("navbar.submit")}
				</a>
			),
		},
		{
			key: "about",
			label: (
				<a href="/about" style={{ color: darkMode ? "white" : "" }}>
					{t("navbar.about")}
				</a>
			),
		},
		{
			key: "video",
			label: (
				<a href="/video" style={{ color: darkMode ? "white" : "" }}>
					{t("navbar.video")}
				</a>
			),
		},
	];

	// Show Drawer
	const showDrawer = () => {
		setDrawerVisible(true);
	};

	// Close Drawer
	const onClose = () => {
		setDrawerVisible(false);
	};

	return (
		<Header
			style={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				padding: "0 20px",
				backgroundColor: darkMode ? "black" : "white",
				borderBottom: darkMode ? "1px solid #444" : "1px solid #ddd",
			}}
		>
			{/* Logo */}
			<h1 style={{ color: darkMode ? "white" : "black" }}>Joke App</h1>

			{/* Desktop Menu */}
			<Menu
				mode="horizontal"
				theme={darkMode ? "dark" : "light"}
				style={{
					flex: 1,
					justifyContent: "center",
					backgroundColor: darkMode ? "black" : "white",
					borderBottom: "none",
					display: "none",
				}}
				className="menu-desktop"
				items={menuItems}
			/>

			{/* Mobile Menu Button */}
			<Button
				icon={<MenuOutlined />}
				onClick={showDrawer}
				style={{
					display: "block",
					color: darkMode ? "white" : "black",
				}}
				className="menu-mobile-button"
			/>

			{/* Drawer for Mobile Menu */}
			<Drawer
				title="Menu"
				placement="right"
				onClose={onClose}
				open={drawerVisible}
				bodyStyle={{
					backgroundColor: darkMode ? "black" : "white",
					color: darkMode ? "white" : "black",
				}}
			>
				<Menu
					mode="vertical"
					theme={darkMode ? "dark" : "light"}
					items={menuItems}
				/>
			</Drawer>

			<div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
				<LanguageChanger />
				<DarkModeSwitch />
			</div>
		</Header>
	);
};
