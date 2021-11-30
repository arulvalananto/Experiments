import { Tree, TreeNode } from "react-organizational-chart";
import { MdClear } from "react-icons/md";

// import data from "./data";
import "./Trees.css";

import data from "./chart-test1.json";
import ZoomBox from "./ZoomBox";

const PrintChild = ({ data }) => {
  if (!data) return <h2>End</h2>;

  return data?.map((child, index) => (
    <TreeNode
      key={index}
      label={<div className="childNode">{child?.name}</div>}
    >
      <PrintChild data={child?.childs} />
    </TreeNode>
  ));
};

const Trees = () => {
  return (
    <Tree
      lineWidth={"2px"}
      lineColor={"red"}
      lineBorderRadius={"10px"}
      label={<div className="userNode">{data.output.name}</div>}
    >
      <PrintChild data={data.output.childs} />
    </Tree>
  );
};

export default Trees;
