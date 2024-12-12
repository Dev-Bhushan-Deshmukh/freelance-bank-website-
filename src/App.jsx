
import {Routes ,Route ,BrowserRouter} from 'react-router-dom'

import Home from './imports/imports'
import { Service } from './pages/services/Service'
import { Branch } from './pages/branches/Branch'
import { Loan } from './pages/loan/Loan'
import Carousal from './components/carousal/Carousal'
import { About } from './pages/About us/About'
import { DefaultPage } from './pages/default pages/DefaultPage'
function App() {


  return (
  <BrowserRouter>


<Routes>

<Route path='/' element={<Home/>}  />
<Route path='*' element={<DefaultPage/>}  />
<Route path='/service' element={<Service/>}  />

<Route path='/loan' element={<Loan/>}  />
<Route path='/branch' element={<Branch/>}  />
<Route path='/slider' element={<Carousal/>}  />
{/* <Route path='/slider' element={<Carousal/>}  /> */}


</Routes>

  </BrowserRouter>
  )
}

export default App
