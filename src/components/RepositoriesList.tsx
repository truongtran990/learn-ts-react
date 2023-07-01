import { useState } from "react";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
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
