import { Layout, Menu, Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LanguageChanger } from "./LanguageChanger/LanguageChanger";
import { DarkModeSwitch } from "../../DarkMode/DarkModeSwitch";
import { useDarkMode } from "../../../Context/useDarkMode";
import { menuItems } from "./menuItems";

const { Header } = Layout;

export const Navbar = () => {
	const { darkMode } = useDarkMode();
	const { t } = useTranslation("translation");
	const [drawerVisible, setDrawerVisible] = useState(false);

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
				backgroundColor: darkMode ? "#333333" : "white",
				borderBottom: darkMode ? "1px solid #444" : "1px solid #ddd",
			}}
		>
			{/* Logo */}
			<h1
				className={`text-2xl font-bold ${darkMode ? "text-white" : "text-black"}`}
			>
				Joke App
			</h1>

			{/* Desktop Menu */}
			<Menu
				mode="horizontal"
				theme={darkMode ? "dark" : "light"}
				className="hidden md:flex flex-1 justify-center"
				style={{
					backgroundColor: darkMode ? "#333333" : "white",
					borderBottom: "none",
				}}
				items={menuItems.map((item) => ({
					key: item.key,
					label: (
						<a
							href={item.route}
							style={{ color: darkMode ? "white" : "black" }}
						>
							{t(item.translationKey)}
						</a>
					),
				}))}
			/>

			{/* Mobile Menu Button */}
			<Button
				icon={
					<MenuOutlined
						style={{
							color: darkMode ? "white" : "black", // White lines in dark mode, black lines in light mode
						}}
					/>
				}
				onClick={showDrawer}
				className="block md:hidden"
				style={{
					border: darkMode ? "1px solid white" : "none", // White border in dark mode
					backgroundColor: darkMode ? "#333333" : "white", // Dark gray background in dark mode
				}}
			/>

			{/* Drawer for Mobile Menu */}
			<Drawer
				title="Menu"
				placement="right"
				onClose={onClose}
				open={drawerVisible}
				style={{
					backgroundColor: darkMode ? "#333333" : "white",
					color: darkMode ? "white" : "black",
				}}
			>
				<Menu
					mode="vertical"
					theme={darkMode ? "dark" : "light"}
					items={menuItems.map((item) => ({
						key: item.key,
						label: (
							<a
								href={item.route}
								style={{ color: darkMode ? "white" : "black" }}
							>
								{t(item.translationKey)}
							</a>
						),
					}))}
					style={{
						backgroundColor: darkMode ? "#000000" : "white",
					}}
				/>
			</Drawer>

			<div className="flex items-center space-x-4">
				<LanguageChanger />
				<DarkModeSwitch />
			</div>
		</Header>
	);
};
