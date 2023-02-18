import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { getusersfetch } from "./Redux/actions/actions";

function App() {
  const users = useSelector((state) => state.allusers.users);
  const dispatch = useDispatch();
  console.log("userData", users);
  return (
    <div className="App">
      WELCOME ...
      <button onClick={() => dispatch(getusersfetch())}>CALL API</button>
      {users.map((user, index) => (
        <>
          <h1 key={index}>Name:&nbsp; {user.name}</h1>
          <h3>
            Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {user.email}
          </h3>
        </>
      ))}
    </div>
  );
}

export default App;
