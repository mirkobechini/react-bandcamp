//image
import card_image from "./../../../../assets/img/a2734007037_5.jpg"

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

                    <img src={card_image} className="img-fluid" alt={`Album ${album_active.title} thumb`} />
                </div>
                {/*card title*/}
                <div className="card mb-2 app-bg-primary text-light border-0" style={{ maxwidth: "540px" }}>
                    <div className="d-flex align-items-center gap-3 pt-3">
                        <i className="bi bi-play-circle-fill app-play-icon"></i>
                        <div className="card-body ps-0 app-fs-x">
                            <span className="card-text d-block">Song</span>
                            <span className="card-text d-block">from {album_active.title} </span>
                            <span className="card-text d-block">by {album_active.author}</span>
                        </div>

                    </div>
                    {/*card title end */}
                </div>
                <div className="d-grid gap-2 app-bg-primary border-0">
                    <a className="btn btn-light" href="#" role="button">Go to album</a>
                    <a className="btn btn-dark border-light" href="#" role="button"><i className="bi bi-heart"></i> Wishlist</a>

                </div>
                <div className="pt-3 text-light">
                    <span> {album_active.tracks} tracks, {album_active.minutes} minutes</span>
                </div>
        </>
    )
}