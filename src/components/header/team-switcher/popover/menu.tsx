import { cn } from "@/lib/utils"
import { Check, PlusCircle } from "lucide-react"
import { groups, Team } from "@/data/team-switcher"

import CustomAvatar from "../../custom-avatar"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"

import {
  DialogTrigger,
} from "@/components/ui/dialog"

interface TeamSwitcherMenuProps {
  selectedTeam: Team;
  handleTeamSelect: (team: Team) => void;
  handleTeamCreate: () => void;
}

const TeamSwitcherMenu = ({ selectedTeam, handleTeamSelect, handleTeamCreate }: TeamSwitcherMenuProps) => {
  return (
    <Command>
      <CommandInput placeholder="Search team..." />

      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        {
          groups.map(group => (
            <CommandGroup key={group.label} heading={group.label}>

              {group.teams.map(team => (
                <CommandItem
                  key={team.value}
                  onSelect={() => handleTeamSelect(team)}
                  className="text-sm"
                >
                  <CustomAvatar
                    src="https://avatar.vercel.sh/acme-inc.png"
                    alt={team.label}
                    fallback="AL"
                  />

                  {team.label}

                  <Check className={cn("ml-auto", selectedTeam.value === team.value ? "opacity-100" : "opacity-0")} />

                </CommandItem>
              ))}

            </CommandGroup>
          ))
        }
        <CommandSeparator />



        <CommandGroup>
          <DialogTrigger asChild >
            <CommandItem onSelect={handleTeamCreate}>
              <PlusCircle className="h-5 w-5" />
              Create Team
            </CommandItem>
          </DialogTrigger>
        </CommandGroup>

      </CommandList>
    </Command>
  )
}

export default TeamSwitcherMenu