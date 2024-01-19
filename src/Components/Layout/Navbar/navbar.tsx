// src/components/Navbar.js
import { Layout, Menu, Button, Space } from 'antd';
import "./navbar.css"

const { Header } = Layout;

const Navbar: React.FC = () => {
  return (
    <Header className="navbar">
      {/* Logo */}
      <Space>
        <div className="navbar-logo">
        <a href='#'><img src="/images/ELABlogo.webp" alt="Logo" className="logo-image" /></a> 
        </div>
      </Space>
    

      {/* Middle */}
      <Menu mode="horizontal" className="navbar-pages">
        <Menu.Item key="submit" >
          <a>Submit Jokes</a>
        </Menu.Item>
        <Menu.Item key="about">
          <a>About</a>
        </Menu.Item>
        <Menu.Item key="video">
          <a>Video Pranks</a>
        </Menu.Item>
      </Menu>

      {/* Language*/}
      <div className="navbar-language">
        <Space>
            <a href='#'><img src="/images/gb.png" alt="en-flag" className="language-flag" /></a> 
            <a href='#'><img src="/images/no.png" alt="no-flag" className="language-flag" /></a> 
            <a href='#'><img src="/images/es.png" alt="es-flag" className="language-flag" /></a> 
        </Space>
      </div>

      {/* Dark Mode Button */}
      <Space>
      <div className="navbar-night-mode">
        <Button className="night-mode-button">
          Night Mode
        </Button>
      </div>
      </Space>
     
    </Header>
  );
};

export default Navbar;


