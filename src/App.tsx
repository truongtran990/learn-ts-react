import Parent from "./props/Parent";
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";

function App() {
  return (
    <div className="App">
      <h1>React 18 Alpha Demo</h1>

      <UserSearch />
      {/* <GuestList /> */}
      {/* <Parent /> */}
    </div>
  );
}

export default App;
