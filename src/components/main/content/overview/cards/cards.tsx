import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


import { overviewData } from "@/data/overview"

const OverviewCards = () => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {overviewData.map(item => (
                <Card key={item.id}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            {item.title}
                        </CardTitle>
                        <item.icon size={16} />
                    </CardHeader>

                    <CardContent>
                        <p className="text-2xl font-bold">{item.value}</p>
                        <span className="text-xs text-muted-foreground">{item.performance}</span>
                    </CardContent>
                </Card>

            ))}
        </div>

    )
}

export default OverviewCards