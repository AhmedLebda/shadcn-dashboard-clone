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

export const overviewChartData = [
	{
		name: "Jan",
		total: Math.floor(Math.random() * 5000) + 1000,
	},
	{
		name: "Feb",
		total: Math.floor(Math.random() * 5000) + 1000,
	},
	{
		name: "Mar",
		total: Math.floor(Math.random() * 5000) + 1000,
	},
	{
		name: "Apr",
		total: Math.floor(Math.random() * 5000) + 1000,
	},
	{
		name: "May",
		total: Math.floor(Math.random() * 5000) + 1000,
	},
	{
		name: "Jun",
		total: Math.floor(Math.random() * 5000) + 1000,
	},
	{
		name: "Jul",
		total: Math.floor(Math.random() * 5000) + 1000,
	},
	{
		name: "Aug",
		total: Math.floor(Math.random() * 5000) + 1000,
	},
	{
		name: "Sep",
		total: Math.floor(Math.random() * 5000) + 1000,
	},
	{
		name: "Oct",
		total: Math.floor(Math.random() * 5000) + 1000,
	},
	{
		name: "Nov",
		total: Math.floor(Math.random() * 5000) + 1000,
	},
	{
		name: "Dec",
		total: Math.floor(Math.random() * 5000) + 1000,
	},
];
