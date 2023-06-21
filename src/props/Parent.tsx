import { ChildAsFC } from "./Child";

const Parent = () => {
  return (
    <ChildAsFC color="red" onClick={() => console.log("Clicked!!!")}>
      Childrent properties
    </ChildAsFC>
  );
};

export default Parent;
