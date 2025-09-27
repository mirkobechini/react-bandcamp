//Import components
import AppHeader from './components/AppHeader/AppHeader.jsx'
import AppMain from './components/AppMain/AppMain.jsx'

//import data
import nav_menu from "./data/nav_menu.js"

function App() {

  return (
    <>
     <AppHeader nav_menu={nav_menu}/>
     <AppMain/>
    </>
  )
}

export default App
