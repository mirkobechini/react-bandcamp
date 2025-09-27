//import navbar
import AppNavBar from "./AppNavBar"
import AppSearchBar from "./AppSearchBar"

export default function AppHeader({nav_menu}) {
    return (
        <>
           <AppNavBar nav_menu={nav_menu}/>
           <div className="app-bg-secondary" >
            <AppSearchBar
                father = "header"
            />
           </div>
        </>
    )
}