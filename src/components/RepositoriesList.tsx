import { useState } from "react";

import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { searchRepositories } = useActions();
  const { loading, error, data } = useTypedSelector(
    (state) => state.repositories
  );

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    searchRepositories(term);
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
