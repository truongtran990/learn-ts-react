import { useState } from "react";
import { useDispatch } from "react-redux"; // use to dispatch to function creators

import { actionCreators } from "../state";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    dispatch(actionCreators.searchRepositories(term) as any);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="iSearch">Any thing you want to find</label>
        <input
          type="text"
          id="iSearch"
          name="iSearch"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />

        <br />
        <button>Search</button>
      </form>
    </div>
  );
};

export default RepositoriesList;
