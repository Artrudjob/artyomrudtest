import React, { useState } from "react";
import styles from "./node.module.css"
import ITreeItem from "../../interface/interface";

type TProps = {
    item: ITreeItem,
    hasContents: boolean | undefined,
    activeNode: string,
    setActiveNode: (value: string) => void,
    level: number,
    onToggle: () => void
}

function Node({ item, hasContents, activeNode, setActiveNode, level, onToggle }: TProps) {

    const [isOpen, setOpen] = useState(false);

    function handleClick() {
        setOpen(prevValue => !prevValue);

        if (!isOpen) {
            setActiveNode(item.name)
        }
    }

    return (
        <div className={styles.node} style={{ paddingLeft: `${level * 16}px` }}>
             <div className={styles.node__flexBox}
                  {...((hasContents) && {style: {cursor: "pointer"}})}
                  {...((hasContents) && {
                      onClick: () => {
                          onToggle()
                          handleClick()
                      }
                  })}
             >
                <div className={`${styles.node__arrow} ${isOpen ? styles.node__arrow_bottom : styles.node__arrow_right}`}>
                </div>
                <div className={`${styles.node__text} ${activeNode === item.name ? styles.node__text_active : ""}`}>
                    {item.type === "directory" && item.name}
                </div>
            </div>
        </div>
    )
}

export default Node;
