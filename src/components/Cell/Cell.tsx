import React from "react";
import styles from "./cell.module.css";

type TProps = {
    text: string,
    title: string
}

const Cell= ({ text, title }: TProps): JSX.Element => {

    return (
        <div className={styles.cell} title={title}>
            <p className={styles.cell__text}>{text}</p>
        </div>
    )
}

export default Cell;
