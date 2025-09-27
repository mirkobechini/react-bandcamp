//import navbar
import AppNavBar from "./AppNavBar"
import AppSearchBar from "./AppSearchBar"

export default function AppHeader({ nav_menu }) {
    return (
        <>
            <div className="row">
                <AppNavBar className="col-12" nav_menu={nav_menu} />
                <div className="row app-bg-secondary ">

                    <div className="col-12 col-md-8 col-lg-4 ps-3" >
                        <AppSearchBar
                            father="header"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}