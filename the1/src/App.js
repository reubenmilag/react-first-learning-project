import NavBar from "./Components/NavBar";
import ScrollingNavBar from "./Components/ScrollingNavBar";
import SideBar from "./Components/SideBar";
import Footer from "./Components/Footer";

import "./Assets/Styles/main.css";

function App() {
  return (
    <div className="mainContainer row m-0 p-0">
      <div className="navContainer container-fluid col-12 m-0">
        <NavBar></NavBar>
        <ScrollingNavBar></ScrollingNavBar>
      </div>
      <div className="leftContainer col-2 m-0 p-0 bg-pastel-red">
        <SideBar></SideBar>
      </div>
      <div className="rightContainer col-10 m-0 bg-pastel-darkerred">
        RIGHT
        <br />
        RIGHT
        <br />
        RIGHT
        <br />
        RIGHT
        <br />
        RIGHT
        <br />
        RIGHT
        <br />
        RIGHT
        <br />
        RIGHT
        <br />
        RIGHT
        <br />
        RIGHT
        <br />
        RIGHT
        <br />
        RIGHT
        <br />
        RIGHT
        <br />
        RIGHT
        <br />
        RIGHT
        <br />
        RIGHT
        <br />
        RIGHT
        <br />
        RIGHT
        <br />
        RIGHT
        <br />
        RIGHT
        <br />
        RIGHT
        <br />
        RIGHT
        <br />
        RIGHT
        <br />
        RIGHT
        <br />
      </div>
      <footer className="footerContainer col-12 m-0 bg-pastel-yellow p-0">
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
