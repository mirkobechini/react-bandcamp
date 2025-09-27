//import images
import nav_logo from "./../../assets/img/logo.jpeg"

//import components
import AppSearchBar from "./AppSearchBar.jsx"

export default function AppNavBar({nav_menu}) {
    return (
        <>
            <nav className="navbar navbar-expand-lg app-bg-primary">
                <div className="container-fluid">
                    <img className="navbar-brand" src={nav_logo} width="150" />
                    
                    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <AppSearchBar
                        father = "navbar"
                    />
                    <div className="collapse navbar-collapse col-1" id="navbarNav">
                        <ul className="navbar-nav">
                            {
                                nav_menu.map(item =>
                                    <li className="nav-item px-1" key={item.id}>
                                        <a className="nav-link text-light" aria-current="page" href={`${item.link}`}>{item.text}</a>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}