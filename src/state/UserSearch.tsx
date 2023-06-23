import { useState } from "react";

interface user {
  name: string;
  age: number;
}

const USERS = [
  { name: "Truong Tran", age: 24 },
  { name: "Anh Nguyen", age: 24 },
  { name: "Anh Tran", age: 18 },
];

const UserSearch: React.FC = () => {
  const [inputSearch, setInputSearch] = useState("");
  const [searchResults, setSearchResults] = useState<user[] | null>([]);

  const handleSearchUsers = (query: string) => {
    const results = USERS.filter((user) => {
      return user.name.toLocaleLowerCase().includes(query.toLocaleLowerCase());
    });
    console.log(results);
    setSearchResults(results);
  };

  return (
    <>
      <div>User Search</div>
      <input
        type="text"
        name="inputSearch"
        id="inputSearch"
        value={inputSearch}
        onChange={(e) => {
          const query = e.target.value;
          setInputSearch(query);
          handleSearchUsers(query);
        }}
      />
      <button onClick={() => handleSearchUsers(inputSearch)}>Find Users</button>

      <div>
        {searchResults &&
          searchResults.map((user) => {
            return (
              <li key={user.name}>
                {user.name} is {user.age} years old
              </li>
            );
          })}
      </div>
    </>
  );
};

export default UserSearch;
