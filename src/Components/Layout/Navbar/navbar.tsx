import { Layout, Menu, Space } from "antd";
import DarkMode from "./DarkMode/DarkMode";
import "./navbar.css";
import { useDarkMode } from "../../../contexts/DarkModeContext";

const { Header } = Layout;

const Navbar: React.FC = () => {
  const { darkMode } = useDarkMode();

  return (
    <Header className={`navbar ${darkMode ? "dark-mode" : ""}`}>
      {/* Logo */}
      <Space>
        <div className="navbar-logo">
          <a href="#">
            <img
              src="/images/ELABlogo.webp"
              alt="Logo"
              className="logo-image"
            />
          </a>
        </div>
      </Space>

      {/* Middle */}
      <Menu
        mode="horizontal"
        className="navbar-pages"
        style={{
          background: darkMode ? "#333" : "",
          color: darkMode ? "white" : "inherit",
        }}
      >
        <Menu.Item key="submit">
          <a>Submit Jokes</a>
        </Menu.Item>
        <Menu.Item key="about">
          <a>About</a>
        </Menu.Item>
        <Menu.Item key="video">
          <a>Video Pranks</a>
        </Menu.Item>
      </Menu>

      {/* Language */}
      <section className="navbar-language">
        <Space>
          <a href="#">
            <img src="/images/gb.png" alt="en-flag" className="language-flag" />
          </a>
          <a href="#">
            <img src="/images/no.png" alt="no-flag" className="language-flag" />
          </a>
          <a href="#">
            <img src="/images/es.png" alt="es-flag" className="language-flag" />
          </a>
        </Space>
      </section>

      {/* Dark Mode Button */}
      <DarkMode />
    </Header>
  );
};

export default Navbar;
