import React, { useContext, useState } from "react";
import styles from "./table.module.css";
import Cell from "../Cell/Cell";
import { DataContext } from "../../context/dataContext";
import Tree from "../Tree/Tree";
import ITreeItem from "../../interface/interface";
import { v4 as uuidv4 } from "uuid"
import { getCreateDate } from "../../utils/utils";

function Table() {

    const [tableData, setTableData] = useState<ITreeItem[]>([]);
    const data = useContext(DataContext);

    function updateTableData(arrFiles: ITreeItem[]) {
        setTableData(arrFiles);
    }

    function getTableData(tableData: ITreeItem[]) {
        return tableData.map((el) => {
            const date = getCreateDate(el.time!)
            return (
                <div className={styles.table__gridBox} key={uuidv4()}>
                    <Cell text={el.name} title={el.name} />
                    <Cell text={el.size!} title={""}/>
                    <Cell text={date} title={""}/>
                </div>
            )
        })
    }

    return (
        <section className={styles.table}>
            <nav className={styles.table__navigate}>
                {<Tree data={data} tableData={tableData} updateTableData={updateTableData} />}
            </nav>
            <div className={styles.table__flexBox}>
                <div className={`${styles.table__titleBox}`}>
                    <div className={styles.table__title} style={{ width: "16.75%"}}>
                        <p className={styles.table__text}>File name</p>
                    </div>
                    <div className={styles.table__title} style={{ width: "25.1%"}}>
                        <p className={styles.table__text}>Size</p>
                    </div>
                    <div className={styles.table__title} style={{ width: "50%"}}>
                        <p className={styles.table__text}>Last Modification</p>
                    </div>
                </div>
                {getTableData(tableData)}
            </div>
        </section>
    )
}

export default Table;
