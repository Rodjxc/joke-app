import { Switch } from 'antd';
import { useDarkMode } from '../../../../contexts/DarkModeContext';

const DarkModeSwitch: React.FC = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="dark-mode-toggle">
      <Switch checked={darkMode} onChange={toggleDarkMode} checkedChildren="Dark Mode" unCheckedChildren="Light Mode"/>
    </div>
  );
};

export default DarkModeSwitch;
