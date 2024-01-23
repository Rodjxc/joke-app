import {
  PieChartOutlined,
  SolutionOutlined,
  QuestionOutlined,
  BookOutlined,
  FormOutlined,
  WarningOutlined,
} from "@ant-design/icons";
import { Layout as AntdLayout, Menu, theme } from "antd";
import { useDarkMode } from "../../contexts/DarkModeContext";
import "./display.css";
import { useTranslation } from "react-i18next";
import DisplayJokes from "../JokeApp/JokeApp";
import Navbar from "./Navbar/NavbarTemp";

const { Header, Content, Sider } = AntdLayout;

const items1 = [
  {
    key: "overview",
    icon: <PieChartOutlined />,
    labelKey: "menu.overview",
  },
  {
    key: "joke",
    icon: <FormOutlined />,
    labelKey: "menu.joke",
  },
  {
    key: "fact",
    icon: <SolutionOutlined />,
    labelKey: "menu.fact",
  },
  {
    key: "question",
    icon: <QuestionOutlined />,
    labelKey: "menu.question",
  },
  {
    key: "divider1",
    isDivider: true,
  },
  {
    key: "docs",
    icon: <BookOutlined />,
    labelKey: "menu.docs",
  },
  {
    key: "help",
    icon: <WarningOutlined />,
    labelKey: "menu.help",
  },
];

const CustomLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const { darkMode } = useDarkMode();
  const { t } = useTranslation("translation");

  return (
    <AntdLayout>
      <Header className="header-navbar">
       <Navbar />
      </Header>
      <AntdLayout>
        {/* If the project scales further, this will also be a component vvvvvv*/}
        <Sider width={256}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["overview"]}
            defaultOpenKeys={["sub1"]}
            style={{
              height: "100%",
              borderRight: 0,
              background: darkMode ? "#333" : colorBgContainer,
              color: darkMode ? "white" : "",
            }}
          >
            {items1.map((item) => {
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
            <DisplayJokes />
          </Content>
        </AntdLayout>
      </AntdLayout>
    </AntdLayout>
  );
};

export default CustomLayout;
