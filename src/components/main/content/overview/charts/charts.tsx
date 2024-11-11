import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { overviewChartData } from '@/data/overview';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"



const Charts = () => {
    return (
        <Card className="col-span-4">
            <CardHeader>
                <CardTitle className="font-medium capitalize">
                    overview
                </CardTitle>
            </CardHeader>

            <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                    <BarChart data={overviewChartData}>
                        <XAxis
                            dataKey="name"
                            stroke="#888888"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                        />
                        <YAxis
                            stroke="#888888"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={(value) => `$${value}`}
                        />
                        <Bar
                            dataKey="total"
                            fill="currentColor"
                            radius={[4, 4, 0, 0]}
                            className="fill-primary"
                        />
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>

    )
}

export default Charts