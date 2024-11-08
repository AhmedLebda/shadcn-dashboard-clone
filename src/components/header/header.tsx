import MainNav from "./main-nav/main-nav"
import Search from "./search/search"
import TeamSwitcher from "./team-switcher/team-switcher"
import UserNav from "./user-nav/user-nav"

const Header = () => {
    return (
        <header className='border-b flex py-4 items-center px-4 flex-wrap gap-4'>
            <TeamSwitcher />
            <MainNav />
            <div className='md:ml-auto flex items-center space-x-4'>
                <Search />
                <UserNav />
            </div>
        </header>
    )
}

export default Header