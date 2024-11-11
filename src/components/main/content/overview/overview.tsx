import OverviewCards from "./cards/cards"
import Charts from "./charts/charts"
import Sales from "./sales/sales"

const Overview = () => {
    return (
        <>
            <OverviewCards />
            <div className="grid md:grid-cols-2 lg:grid-cols-7 gap-4 mt-4">
                <Charts />
                <Sales />
            </div>
        </>
    )
}

export default Overview