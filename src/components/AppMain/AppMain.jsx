//import component
import AlbumList from "./Album/AlbumList/AlbumList"
import AlbumActive from "./Album/AlbumActive/AlbumActive"


export default function AppMain({ album_list }) {
    return (
        <>
            <div id="app-mainContainer" className="app-bg-primary p-4">
                <div className="row ">
                    <div className="col-8 pe-3">
                        <div className="row">

                            <AlbumList album_list={album_list} />
                        </div>
                    </div>
                    <div className="col-4 border-start ps-3">
                        <AlbumActive album_list={album_list}/>
                    </div>
                </div>
            </div>
        </>
    )
}