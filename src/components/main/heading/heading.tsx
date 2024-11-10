import { Button } from "@/components/ui/button"
import DateRangePicker from "./date-range-picker"

const Heading = () => {
    return (
        <div className="flex items-center justify-between space-y-2">
            <h1 className="font-bold md:text-3xl tracking-tight">Dashboard</h1>
            <div className="flex items-center gap-4 ">
                <DateRangePicker />
                <Button className="capitalize">download</Button>
            </div>
        </div>

    )
}

export default Heading