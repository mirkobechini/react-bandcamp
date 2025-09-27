//import component
import AlbumList from "./Album/AlbumList/AlbumList"
import AlbumActive from "./Album/AlbumActive/AlbumActive"


export default function AppMain({ album_list }) {
    return (
        <>
            <div id="mainContainer" className="app-bg-primary ps-4 py-1">
                <div className="row">
                    <div className="col-8">
                        <div className="row">

                            <AlbumList album_list={album_list} />
                        </div>
                    </div>
                    <div className="col-4">
                        <AlbumActive />
                    </div>
                </div>
            </div>
        </>
    )
}