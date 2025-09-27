//import image
import image from "./../../../../assets/img/a2805471381_2.jpg"

export default function AlbumCard({ album }) {
    console.log(album.thumb);

    return (
        <>

            <div className=" app-bg-primary py-3" style={{ width: "195px" }}>
                <div className="sizer border app-border-tertiary">
                    <img src={album.thumb} className="card-img-top" alt={`Album_${album.title}_thumb`} />
                </div>
                <div className="card-body text-light pt-1">
                    <span className="card-text d-block text-truncate">{album.title}</span>
                    <span className="card-text d-block">by{album.author} </span>
                    <span className="card-text app-text-subtitle">{album.genre} </span>
                </div>
            </div>
        </>
    )
}