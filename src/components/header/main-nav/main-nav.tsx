import { cn } from "@/lib/utils"


const navLinks = ["overview", "customers", "products", "settings"]
const MainNav = ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => {
    return (
        <nav className={cn("flex flex-wrap items-center gap-3 sm:gap-6 sm:mx-6", className)} {...props}>
            {navLinks.map(navLink => <a key={navLink} href="#" className="text-sm md:text-base lg:text-lg font-medium"> {navLink}</a>)}
        </nav>
    )
}

export default MainNav