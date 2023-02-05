import React, { useState } from "react";
import ITreeItem from "../../interface/interface";
import Node from "../Node/Node";

type TProps = {
    item: ITreeItem,
    level: number,
    activeNode: string,
    setActiveNode: (value: string) => void,
    tableData: ITreeItem[] | undefined,
    updateTableData: (value: ITreeItem[]) => void
}

function Branch({ item, level, activeNode, setActiveNode, tableData, updateTableData }: TProps) {

    const [selected, setSelected] = useState(item.selected ?? false);
    const hasContents = item.contents && item.contents.length !== 0;

    function renderBranches() {
        if (hasContents) {
            const newLevel = level + 1;

            return item.contents?.map((child, index) => {
                return (
                    <Branch item={child} level={newLevel} setActiveNode={setActiveNode} activeNode={activeNode}
                            key={index} updateTableData={updateTableData} tableData={tableData} />
                )
            })
        }

        return null;
    }

    function toggleSelected()  {
        if (item.contents) {
            updateTableData(item.contents.filter(el => el.type === "file"));
        }
        setSelected(prev => !prev);
    }

    return (
        <>
            {item.type === "directory" && <Node item={item} hasContents={hasContents} level={level}
                                                setActiveNode={setActiveNode}
                                                activeNode={activeNode} onToggle={() => toggleSelected()} />}
            {selected && renderBranches()}
        </>
    )

}

export default Branch;
