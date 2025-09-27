//import component
import AlbumList from "./Album/AlbumList/AlbumList"
import AlbumActive from "./Album/AlbumActive/AlbumActive"


export default function AppMain() {
    return (
        <>
            <div id="mainContainer" className="app-bg-primary">
                <div className="row">
                    <div className="col-9">
                        <AlbumList />
                    </div>
                    <div className="col-3">
                        <AlbumActive />
                    </div>
                </div>
            </div>
        </>
    )
}