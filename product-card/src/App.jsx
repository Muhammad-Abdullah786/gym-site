import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";
function App() {
  return (
    <UserContextProvider>
      <h1 className="text-3xl text-center text-black bg-zinc-500 border-spacing-2 border-solid border-amber-900">
        React || handeling Context api{" "}
      </h1>
      <Login></Login>
      <Profile></Profile>
    </UserContextProvider>
  );
}

export default App;
