import { useTranslation } from "react-i18next";
import { Space, Button } from "antd";

export const LanguageChanger = () => {
	const { i18n } = useTranslation();

	const changeLanguage = (languageCode: string) => {
		i18n.changeLanguage(languageCode);
	};

	return (
		<Space>
			<Button
				onClick={() => changeLanguage("en")}
				className="p-0 bg-transparent border-none cursor-pointer"
			>
				<img src="/images/gb.png" alt="English" className="w-5 h-auto" />
			</Button>
			<Button
				onClick={() => changeLanguage("no")}
				className="p-0 bg-transparent border-none cursor-pointer"
			>
				<img src="/images/no.png" alt="Norwegian" className="w-5 h-auto" />
			</Button>
			<Button
				onClick={() => changeLanguage("es")}
				className="p-0 bg-transparent border-none cursor-pointer"
			>
				<img src="/images/es.png" alt="Spanish" className="w-5 h-auto" />
			</Button>
		</Space>
	);
};
