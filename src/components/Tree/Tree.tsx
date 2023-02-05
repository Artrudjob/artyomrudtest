import React, { useState } from "react";
import ITreeItem from "../../interface/interface";
import Branch from "../Branch/Branch";

type TProps = {
    data: ITreeItem[],
    tableData: ITreeItem[],
    updateTableData: (value: ITreeItem[]) => void
}

function Tree ({ data, tableData, updateTableData }: TProps) {

    const [activeNode, setActiveNode] = useState<string>("");

    return (
        <div>
            {data.map((item, index) => {
                return (
                    <Branch item={item} level={0} setActiveNode={setActiveNode} activeNode={activeNode} key={index}
                            tableData={tableData} updateTableData={updateTableData}/>
                )

            })}
        </div>
    )
}

export default Tree;
