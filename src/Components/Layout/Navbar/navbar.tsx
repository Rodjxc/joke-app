import { Layout, Menu, Space } from "antd";
import DarkMode from "./DarkMode/DarkMode";
import "./navbar.css";
import { useDarkMode } from "../../../contexts/DarkModeContext";
import {useTranslation} from 'react-i18next'
import i18n from "../../../translations/i18n";

const { Header } = Layout;


const Navbar: React.FC = () => {
  const { darkMode } = useDarkMode();
  const { t } = useTranslation('translation');
  const changeLanguage = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
  };

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
          <a>{t('navbar.submit')}</a>
        </Menu.Item>
        <Menu.Item key="about">
          <a>{t('navbar.about')}</a>
        </Menu.Item>
        <Menu.Item key="video">
          <a>{t('navbar.video')}</a>
        </Menu.Item>
      </Menu>

      {/* Language */}
      <section className="navbar-language">
        <Space>
          <button onClick={()=> changeLanguage('en')} className="flag-button">
            <img src="/images/gb.png" alt="en-flag" className="language-flag" />
          </button>
          <button onClick={()=> changeLanguage('no')} className="flag-button">
            <img src="/images/no.png" alt="no-flag" className="language-flag" />
          </button>
          <button onClick={()=> changeLanguage('es')} className="flag-button">
            <img src="/images/es.png" alt="es-flag" className="language-flag" />
          </button>
        </Space>
      </section>

      {/* Dark Mode Button */}
      <DarkMode />
    </Header>
  );
};

export default Navbar;
