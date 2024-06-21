import './App.css';
import AllRoutes from './Routes/AllRoutes';
import Header from './components/Header';
import SideBar from './components/SideBar';

function App() {
  return (
    <>
     <Header/>
     <div className='secondMainContainerBox'>
        <div className='sideBarContainer'><SideBar/></div>
        <div className='rightMainContentContainer'><AllRoutes/></div>
      </div>
   
    </>
  );
}

export default App;
