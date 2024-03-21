import NavBar from "./NavBar";
import Notes from "./Notes";
import styles from "./Home.module.css";
import { useState } from "react";

const Home = () => {

    const [arr , setArr] = useState([]);
    const [obj , setObj] = useState({title: "", text: ""});

  return (
    <div className={styles.home}>
        <NavBar obj={obj} setObj={setObj} arr={arr} setArr={setArr}></NavBar>
        <Notes obj={obj} setObj={setObj}></Notes>
    </div>
  )
}

export default Home;
