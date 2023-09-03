import Navbarone from "../components/Navbarone";
import Sidebar from "../components/Sidebar";
const Main = (props) => {
    return (<>
    {console.log(props)}
    <Navbarone/>
    <div className="d-flex">
    <Sidebar/>
    <div className="container-fluid">{props.children}</div>
    </div>
    
    </>)
};

export default Main;