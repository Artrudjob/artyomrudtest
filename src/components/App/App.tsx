import React from "react";
import styles from "./app.module.css";
import { DataContext } from "../../context/dataContext";
import { data } from "../../consts/data";
import Table from "../Table/Table";

function App() {

    return (
        <DataContext.Provider value={data}>
            <div className={styles.app}>
                <Table />
            </div>
        </DataContext.Provider>
    );
}

export default App;
