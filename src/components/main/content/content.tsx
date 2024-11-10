import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Overview from "./overview/overview"
const Content = () => {
    return (
        <Tabs defaultValue="overview" className="mt-4 space-y-4">
            <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="analytics" disabled>Analytics</TabsTrigger>
                <TabsTrigger value="reports" disabled>Reports</TabsTrigger>
                <TabsTrigger value="notifications" disabled>Notifications</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
                <Overview />
            </TabsContent>
        </Tabs>

    )
}

export default Content