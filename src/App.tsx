import React from "react";
import styles from "./app.module.css"
import { List } from "./components/List";
import { Header } from "./components/header";

const App = () => {
  return <>
    <div className={styles.contaianer}>
      <Header/>
      <List />
    </div>
    </>;
};

export default App;