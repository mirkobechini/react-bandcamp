//import component
import AlbumList from "./Album/AlbumList/AlbumList"
import AlbumActive from "./Album/AlbumActive/AlbumActive"


export default function AppMain(){
    return(
        <>
        <div id="mainContainer" className="app-bg-primary">
        <AlbumList/>
        <AlbumActive/>
        </div>
        </>
    )
}