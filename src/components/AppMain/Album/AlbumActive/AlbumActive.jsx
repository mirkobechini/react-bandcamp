
export default function AlbumActive({ album_list }) {

    const album_active = album_list.filter(album => {
        if (album.is_active) {
            return true
        }
        return false
    })[0]

    return (
        <>

            <div className="app-sizer border app-border-tertiary">
                <img src={album_active.thumb} className="img-fluid" alt={`Album ${album_active.title} thumb`} width={"100%"} />
            </div>
            {/*card play*/}
            <div className="card mb-2 app-bg-primary text-light border-0" style={{ maxwidth: "100%" }}>
                <div className="d-flex align-items-center gap-3 pt-3">
                    <i className="bi bi-play-circle-fill app-play-icon"></i>
                    <div className="card-body ps-0 app-fs-x">
                        <span className="card-text d-block">Song</span>
                        <span className="card-text d-block text-truncate" style={{ overflow: "hidden" }}>from {album_active.title} </span>
                        <span className="card-text d-block">by {album_active.author}</span>
                    </div>

                </div>
            </div>
            {/*card play end */}
            <div className="d-grid gap-2 app-bg-primary border-0">
                <a className="btn btn-light" href="#" role="button">Go to album</a>
                <a className="btn btn-dark border-light" href="#" role="button"><i className="bi bi-heart"></i> Wishlist</a>
            </div>
            <div className="pt-3 text-light">
                <span className="d-block"> {album_active.tracks} tracks, {album_active.minutes} minutes</span>
                <span className="d-block"> released {album_active.tracks}</span>
            </div>
            {/*card song author*/}
            <div className="card mb-2 app-bg-primary text-light border-0" style={{ maxwidth: "100%" }}>
                <div className="d-flex align-items-center gap-3 pt-3">
                    <div className="app-sizer rounded-circle" style={{width:"50px" }} >
                        <img src={album_active.thumb} className="img-fluid" alt={`Album ${album_active.title} thumb`} width={"100%"} />
                    </div>
                    <div className="card-body ps-0 app-fs-x">
                        <span className="card-text d-block">{album_active.author}</span>
                        <span className="card-text d-block">{album_active.author}, state</span>
                    </div>

                </div>
            </div>
            <div className="d-grid gap-2 app-bg-primary border-0">
                <a className="btn btn-dark border-light" href="#" role="button"> Follow</a>

            </div>
            {/*card song author end */}

        </>
    )
}