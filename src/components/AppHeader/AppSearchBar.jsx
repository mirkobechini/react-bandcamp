export default function AppSearchBar(props) {
    
    return (
        <>
            <div className="container-fluid" >
                <form className="d-flex col-3" role="search">
                    <div className="input-group py-2 ">
                        <span className={`input-group-text app-bg-tertiary ${(props.father == "navbar") ? "border-0" : "border-end-0 rounded-start-pill"} `} >
                            <i className="bi bi-search"></i>
                        </span>
                        <input className={`form-control me-2 app-bg-tertiary ${(props.father == "navbar") ? "border-0" : "border-start-0 rounded-end-pill"} `} type="search" placeholder={`${(props.father == "navbar") ? "Search and discover music" : "Add a genre, location, or tag"} `} aria-label="Search" />
                    </div>
                </form>
            </div>
        </>
    )
}