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
			className={`flex justify-between items-center px-5 ${
				darkMode
					? "bg-black border-b border-gray-200"
					: "bg-white border-b border-gray-300"
			}`}
		>
			{/* Logo */}
			<h1
				className={`text-xl font-bold ${darkMode ? "text-white" : "text-black"}`}
			>
				Joke App
			</h1>

			{/* Desktop Menu */}
			<Menu
				mode="horizontal"
				theme={darkMode ? "dark" : "light"}
				className="hidden md:flex flex-1 justify-center"
				style={{
					backgroundColor: darkMode ? "black" : "white",
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
				icon={<MenuOutlined />}
				onClick={showDrawer}
				className="block md:hidden"
				style={{
					color: darkMode ? "white" : "black",
				}}
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
			</Drawer>

			<div className="flex items-center space-x-4">
				<LanguageChanger />
				<DarkModeSwitch />
			</div>
		</Header>
	);
};
