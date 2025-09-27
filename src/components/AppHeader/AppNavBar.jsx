//import images
import nav_logo from "./../../assets/img/logo.jpeg"

//import components
import AppSearchBar from "./AppSearchBar.jsx"

export default function AppNavBar({ nav_menu }) {
    return (
        <>
            <nav className="navbar navbar-expand-lg app-bg-primary px-4">
                <div className="col-5 col-md-2 col-lg-1 pe-2">
                    <img className="navbar-brand" src={nav_logo} width={"100%"}/>
                </div>
                <div className="col-3 col-md-6 col-lg-3">

                    <AppSearchBar
                        father="navbar"
                    />
                </div>
                <div className="navbar col-4 col-md-4 col-lg-8 justify-content-end" id="navbarNav">
                        {
                            nav_menu.map(item =>
                                    <a className="nav-link text-light text-nowrap px-2" aria-current="page" href={`${item.link}` }key={item.id}>{item.text}</a>
                            )
                        }

                </div>
            </nav>
        </>
    )
}