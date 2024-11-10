import { DollarSign, BarChart } from "lucide-react";
import { LucideProps } from "lucide-react";

interface OverviewItem {
	id: number;
	title: string;
	value: string;
	performance: string;
	icon: React.ComponentType<LucideProps>;
}

export const overviewData: OverviewItem[] = [
	{
		id: 1,
		title: "Total Revenue",
		value: "$45,231.89",
		performance: "+20.1% from last month",
		icon: DollarSign,
	},

	{
		id: 2,
		title: "Subscriptions",
		value: "+2350",
		performance: "+180.1% from last month",
		icon: BarChart,
	},
	{
		id: 3,
		title: "Sales Performance",
		value: "$32,654.72",
		performance: "-5.2% from last month",
		icon: DollarSign,
	},
	{
		id: 4,
		title: "Active Now",
		value: "+573",
		performance: "+201 since last hour",
		icon: BarChart,
	},
];
