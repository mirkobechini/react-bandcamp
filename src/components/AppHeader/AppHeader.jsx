//import navbar
import AppNavBar from "./AppNavBar"
import AppSearchBar from "./AppSearchBar"

export default function AppHeader({ nav_menu }) {
    return (
        <>
                <div className="row m-0 app-bg-primary">
                    <AppNavBar nav_menu={nav_menu} />
                </div>
                <div className="row m-0 p-0 app-bg-secondary px-3">

                    <div className="col-12 col-md-8 col-lg-4 " >
                        <AppSearchBar
                            father="header"
                        />
                    </div>
            </div>
        </>
    )
}