import "./App.css";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import useAxios from "axios-hooks";

function App() {
  const [{ data, loading, error }, refetch] = useAxios(
    "http://localhost:4040/users"
  );
  const [users, setUsers] = useState([{}]);

  useEffect(() => {
    if (data !== undefined) {
      setUsers(data);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  return (
    <div className="App">
      {users.map((item, i) => (
        <p key={item.id}>
          {item.name} | amount- {item.amount} | credit-{item.credit}
        </p>
      ))}
    </div>
  );
}

export default App;
