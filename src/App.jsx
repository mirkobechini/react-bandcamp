//Import components
import AppHeader from './components/AppHeader/AppHeader.jsx'
import AppMain from './components/AppMain/AppMain.jsx'

//import data
import nav_menu from "./data/nav_menu.js"
import album_list from "./data/album_list.js"

function App() {

  return (
    <>
     <AppHeader nav_menu={nav_menu}/>
     <AppMain album_list={album_list}/>
    </>
  )
}

export default App
