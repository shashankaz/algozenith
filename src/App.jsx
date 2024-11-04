import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/Menu/Menu";
import "./App.css";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="menu">
        <Navbar />
        <Menu />
      </div>
    </div>
  );
};

export default Home;
