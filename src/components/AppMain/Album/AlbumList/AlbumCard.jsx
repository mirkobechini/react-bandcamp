export default function AlbumCard({ album }) {

    return (
        <>

            <div className=" app-bg-primary pb-3" style={{ width: "100%" }}>
                <div className="app-sizer border app-border-tertiary">
                    <img src={album.thumb} className="card-img-top" alt={`Album_${album.title}_thumb`} />
                </div>
                <div className="card-body text-light pt-1">
                    <span className="card-text d-block text-truncate">{album.title}</span>
                    <span className="card-text d-block">by {album.author} </span>
                    <span className="card-text app-text-subtitle">{album.genre} </span>
                </div>
            </div>
        </>
    )
}