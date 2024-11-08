import {
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
const AddTeamDialogHeader = () => {
    return (
        <DialogHeader>
            <DialogTitle>Create team</DialogTitle>
            <DialogDescription>
                Add a new team to manage products and customers.
            </DialogDescription>
        </DialogHeader>
    )
}

export default AddTeamDialogHeader