//import image
import image from "./../../../../assets/img/a2805471381_2.jpg"

export default function AlbumCard({ album }) {
    console.log(album.thumb);

    return (
        <>

            <div className=" app-bg-primary py-4" style={{ width: "18rem" }}>
                <div className="sizer border app-border-tertiary">
                    <img src={album.thumb} className="card-img-top" alt={`Album_${album.title}_thumb`} />
                </div>
                <div className="card-body text-light pt-1">
                    <h5 className="card-title ">{album.title}</h5>
                    <span className="card-text d-block">{album.author} </span>
                    <span className="card-text app-text-subtitle">{album.genre} </span>
                </div>
            </div>
        </>
    )
}