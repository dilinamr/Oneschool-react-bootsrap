import Navbarone from "../components/Navbarone";
import Sidebar from "../components/Sidebar";
const Main = ({children}) => {
    return (<>
   
    <Navbarone/>
    <div className="d-flex">
    <Sidebar/>
    <div className="container-fluid">{children}</div>
    </div>
    
    </>)
};

export default Main;