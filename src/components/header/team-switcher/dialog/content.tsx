
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Input } from "@/components/ui/input"

import { Label } from "@/components/ui/label"


const AddTeamDialogContent = () => {
    return (
        <div className="space-y-4 py-2 pb-4">
            <div className="space-y-2">
                <Label htmlFor="team-name">Team Name</Label>
                <Input id="team-name" type="text" placeholder="Acme Inc." />
            </div>

            <div className="space-y-2">
                <Label htmlFor="plan">Subscription plan</Label>
                <Select>
                    <SelectTrigger id="plan" className="">
                        <SelectValue placeholder="Select a plan" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="free">
                            <span className="font-medium">Free</span> -{" "}
                            <span className="text-muted-foreground">
                                Trial for two weeks
                            </span>
                        </SelectItem>

                        <SelectItem value="pro">
                            <span className="font-medium">Pro</span> -{" "}
                            <span className="text-muted-foreground">
                                $9/month per user
                            </span>
                        </SelectItem>

                    </SelectContent>
                </Select>
            </div>
        </div>
    )
}

export default AddTeamDialogContent