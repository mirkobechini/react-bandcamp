//import images
import nav_logo from "./../../assets/img/logo.jpeg"

//import data
import nav_menu from "./../../data/nav_menu.js"

export default function AppNavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
                <div className="container-fluid">
                    <img className="navbar-brand" src={nav_logo} width="150" />
                    <div className="container-fluid">
                        <form className="d-flex col-3" role="search">
                            <div className="input-group">
                                <span className="input-group-text bg-secondary border-0 t">
                                    <i className="bi bi-search"></i>
                                </span>
                                <input className="form-control me-2 border-0 bg-secondary" type="search" placeholder="Search and discover music" aria-label="Search" />
                            </div>
                        </form>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse col-1" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            {
                                nav_menu.map(item =>
                                    <li className="nav-item px-1" key={item.id}>
                                        <a className="nav-link text-light" aria-current="page" href="#">{item.text}</a>
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