import {
	PieChartOutlined,
	SolutionOutlined,
	QuestionOutlined,
	BookOutlined,
	FormOutlined,
	WarningOutlined,
} from "@ant-design/icons";

export type SidebarItem = {
	key: string;
	icon?: React.ReactNode;
	labelKey?: string;
	isDivider?: boolean;
};

export const sidebarItems: SidebarItem[] = [
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
