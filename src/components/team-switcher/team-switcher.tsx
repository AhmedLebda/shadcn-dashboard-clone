import { ComponentPropsWithRef, useState } from "react"
// Utils
import { cn } from "@/lib/utils"
// Data
import { groups, Team } from "@/data/team-switcher"
// Icons
import { ChevronsUpDown } from "lucide-react"
// Custom Components
import TeamSwitcherMenu from "./popover/menu"
import AddTeamDialogHeader from "./dialog/header"
import AddTeamDialogContent from "./dialog/content"
import AddTeamDialogFooter from "./dialog/footer"
import CustomAvatar from "./custom-avatar"
// ShadCn-ui components
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

type PopoverTriggerProps = ComponentPropsWithRef<typeof PopoverTrigger>

const TeamSwitcher = ({ className }: PopoverTriggerProps) => {
    const [showNewTeamDialog, setShowNewTeamDialog] = useState(false)
    const [open, setOpen] = useState(false)
    const [selectedTeam, setSelectedTeam] = useState<Team>(groups[0].teams[0])

    const handleTeamSelect = (team: Team) => {
        setSelectedTeam(team)
        setOpen(false)
    }

    const handleTeamCreate = () => {
        setShowNewTeamDialog(true)
        setOpen(false)
    }

    const handleDialogClose = () => {
        setShowNewTeamDialog(false)
    }

    return (
        <Dialog open={showNewTeamDialog} onOpenChange={setShowNewTeamDialog}>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        className={cn("w-[200px] justify-between", className)}
                        role="combobox"
                        aria-expanded={open}
                        aria-label="Select a team">


                        <CustomAvatar
                            src="https://avatar.vercel.sh/acme-inc.png"
                            alt={selectedTeam.label}
                            fallback="AL"
                        />

                        {selectedTeam.label}

                        <ChevronsUpDown className="ml-auto opacity-50" />
                    </Button>
                </PopoverTrigger>

                <PopoverContent>
                    <TeamSwitcherMenu
                        selectedTeam={selectedTeam}
                        handleTeamSelect={handleTeamSelect}
                        handleTeamCreate={handleTeamCreate}
                    />
                </PopoverContent>
            </Popover>

            <DialogContent>
                <AddTeamDialogHeader />

                <AddTeamDialogContent />

                <AddTeamDialogFooter close={handleDialogClose} />
            </DialogContent>
        </Dialog>

    )
}

export default TeamSwitcher