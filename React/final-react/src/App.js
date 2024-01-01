import 'bootstrap/dist/css/bootstrap.min.css'
import Routing from './component/Routing'
import { Provider } from 'react'
import Store from './Store/Store'



function App() {
  
  return (
    <>
    <Provider Store={Store}>

      <Routing/>
    </Provider>
    </>
  )
}

export default App