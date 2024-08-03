import { Switch } from "antd";
import { useDarkMode } from "../../../../Context/useDarkMode";

const DarkModeSwitch: React.FC = () => {
	//We get those 2 functions from the DarkModeContext context.
	const { darkMode, toggleDarkMode } = useDarkMode();

	//When we onChange the switch, we trigger darkMode on and off
	return (
		<div className="dark-mode-toggle">
			<Switch
				checked={darkMode}
				onChange={toggleDarkMode}
				checkedChildren="Dark Mode"
				unCheckedChildren="Light Mode"
			/>
		</div>
	);
};

export default DarkModeSwitch;
