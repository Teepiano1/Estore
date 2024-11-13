import {useState} from "react";
import "./Home.css";
import Header from "../../components/Navbar/Header/Header";
import ExploreMenu from "../../components/Navbar/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/Navbar/foodDisplay/FoodDisplay";
import AppDownlod from "../../components/AppDownload/AppDownlod";

const Home = () => {

  const [category, setCategory] = useState("All")
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category}/>
      <AppDownlod/>
    </div>
  );
};

export default Home;
