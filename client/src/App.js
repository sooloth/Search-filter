import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import Table from "./Components/table/Table";
import axios from "axios";
import { DeleteForever } from "@material-ui/icons";

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(`http://localhost:5000?q=${query}`);
      setData(res.data);
    };
    if (query.length === 0 || query.length > 1) fetchUsers();
  }, [query]);
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search ..."
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="btn">CreateCustomer</button>
      <button className="btn">DeleteCustomer</button>
      <button className="btn">CustomerInfo</button>
      <Table data={data} />
    </div>
  );
}

export default App;

// import "./App.css";
// import { Users } from "./Components/User/User";
// import { useState } from "react";
// function App() {
//   const [query, setQuery] = useState("");
//   console.log(
//     Users.filter((user) => user.firstname.toLowerCase().includes("po"))
//   );
//   return (
//     <div className="App">
//       <input
//         type="text"
//         placeholder="Search..."
//         className="search"
//         onChange={(e) => setQuery(e.target.value)}
//       />
//       <ul className="list">
//         {Users.filter((user) =>
//           user.firstname.toLowerCase().includes(query)
//         ).map((user) => (
//           <li key={user.id} className="listItem">
//             {user.firstname}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
