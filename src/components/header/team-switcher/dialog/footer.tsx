import {
    DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

const AddTeamDialogFooter = ({ close }: { close: () => void }) => {
    return (
        <DialogFooter>
            <Button variant="outline" onClick={close}>
                Cancel
            </Button>
            <Button type="submit">Continue</Button>
        </DialogFooter>
    )
}

export default AddTeamDialogFooter