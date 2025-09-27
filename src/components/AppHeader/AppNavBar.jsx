//import images
import nav_logo from "./../../assets/img/logo.jpeg"

//import components
import AppSearchBar from "./AppSearchBar.jsx"

export default function AppNavBar({nav_menu}) {
    return (
        <>
            <nav className="navbar navbar-expand-lg app-bg-primary ps-3 container-fluid">
                    <img className="navbar-brand" src={nav_logo}  />
                    
                    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <AppSearchBar
                        father = "navbar"
                    />
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav px-1">
                            {
                                nav_menu.map(item =>
                                    <li className="nav-item " key={item.id}>
                                        <a className="nav-link text-light text-nowrap" aria-current="page" href={`${item.link}`}>{item.text}</a>
                                    </li>
                                )
                            }
                        </ul>
                    
                </div>
            </nav>
        </>
    )
}