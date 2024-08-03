import { useTranslation } from "react-i18next";
import { Space, Button } from "antd";
import "./LanguageChanger.css";

export const LanguageChanger = () => {
	const { i18n } = useTranslation();

	const changeLanguage = (languageCode: string) => {
		i18n.changeLanguage(languageCode);
	};

	return (
		<Space>
			<Button onClick={() => changeLanguage("en")} className="flag-button">
				<img src="/images/gb.png" alt="English" className="language-flag" />
			</Button>
			<Button onClick={() => changeLanguage("no")} className="flag-button">
				<img src="/images/no.png" alt="Norwegian" className="language-flag" />
			</Button>
			<Button onClick={() => changeLanguage("es")} className="flag-button">
				<img src="/images/es.png" alt="Spanish" className="language-flag" />
			</Button>
		</Space>
	);
};
