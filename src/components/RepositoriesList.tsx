const RepositoriesList: React.FC = () => {
  return (
    <div>
      <form>
        <label htmlFor="iSearch">Any thing you want to find</label>
        <input type="text" id="iSearch" name="iSearch" />

        <br />
        <button>Search</button>
      </form>
    </div>
  );
};

export default RepositoriesList;
