import { Layout as AntdLayout, theme } from "antd";
import "./Display.css";
import { JokeApp } from "../JokeApp/JokeApp";
import { Navbar } from "./Navbar/Navbar";
import { useDarkMode } from "../../Context/useDarkMode";
import { Sidebar } from "./Sidebar/Sidebar";

const { Header, Content, Sider } = AntdLayout;

export const CustomLayout = () => {
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();

	const { darkMode } = useDarkMode();

	return (
		<AntdLayout>
			<Header className="header-navbar">
				<Navbar />
			</Header>
			<AntdLayout>
				<Sider width={256}>
					<Sidebar />
				</Sider>
				<AntdLayout
					style={{
						padding: "24px 24px 24px",
						background: darkMode ? "#151313" : "",
					}}
				>
					<Content
						style={{
							padding: 24,
							margin: 0,
							minHeight: 600,
							background: darkMode ? "#333" : colorBgContainer,
							borderRadius: borderRadiusLG,
						}}
					>
						<JokeApp />
					</Content>
				</AntdLayout>
			</AntdLayout>
		</AntdLayout>
	);
};
