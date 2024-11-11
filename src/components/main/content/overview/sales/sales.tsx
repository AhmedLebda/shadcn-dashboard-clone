import CustomAvatar from "@/components/header/custom-avatar"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { overviewSalesData } from "@/data/overview"

const Sales = () => {
    return (
        <Card className="col-span-3">
            <CardHeader>
                <CardTitle className="font-medium capitalize">
                    recent sales
                </CardTitle>
                <CardDescription>
                    You made 265 sales this month.
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-8 max-h-80 overflow-y-auto">
                {overviewSalesData.map(item => (
                    <div key={item.id} className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <CustomAvatar src="https://placehold.co/40/2e2e2e/png"
                                alt="placeholder image"
                                fallback="PH"
                                className="h-10 w-10" />
                            <div>
                                <p className="font-medium md:text-lg">{item.name}</p>
                                <p className="text-muted-foreground text-sm">{item.email}</p>
                            </div>
                        </div>
                        <p>{item.amount}</p>

                    </div>
                ))}
            </CardContent>
        </Card>

    )
}

export default Sales