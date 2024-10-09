import { useState } from "react";

const Home = () => {
  const [todolist, setToDoList] = useState([
    { Day: "Monday", List: "coded list", id: 1 },
    { Day: "Tuesday", List: "coded list", id: 2 },
    { Day: "Wednesday", List: "coded list", id: 3 },
    { Day: "Thursday", List: "coded list", id: 4 },
    { Day: "Friday", List: "coded list", id: 5 },
    { Day: "Saturday", List: "coded list", id: 6 },
    { Day: "Sunday", List: "coded list", id: 7 },
  ]);
  return (
    <div className="home">
      {todolist.map((list) => (
        <div className="list-preview" key={list.id}>
          <h2>{list.Day}</h2>
        </div>
      ))}
    </div>
  );
};

export default Home;
