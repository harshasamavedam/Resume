import {BrowserRouter,Path,Route, Routes, Switch} from 'react-router-dom'
import Resume from './Components/Resume/resume'
import FrontEnd from './Components/FrontendProjects/frontendproects'
import Head from  './Components/HeadNav/Head'
import None from './Components/None/nonetodisp'
import './App.css'

function App() {
  return (
    
     <BrowserRouter>
     <Head/>
     <Routes>
      <Switch>
<Route exact path='/Resume' Component={Resume}/>
<Route eact path='/FrontEnd' Component={FrontEnd}/>
<Route Component={None}/>
</Switch>
</Routes>
     </BrowserRouter>
    
  );
}

export default App;
