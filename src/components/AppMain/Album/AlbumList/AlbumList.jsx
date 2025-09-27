//import components
import AlbumCard from "./AlbumCard"


export default function AlbumList({album_list}){
    return(
        <>
        {album_list.map(album =>

        <div className="col-3" key={album.id}>
            <AlbumCard
                album = {album}
            />
        </div>
        )}
        </>
    )
}