import { useEffect, useState } from "react";
import "./App.css";
import KirmiziKutu from "./components/kirmizi_kutu";

function App() {
  const [number, setNumber] = useState(10);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        console.log(res);
      });
  }, []);
  const arttir = () => {
    setNumber(number + 1);
  };

  return (
    <div style={{ width: 200, height: 200, backgroundColor: "yellow" }}>
      {number}
      {data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
      <a onClick={arttir}>Arttır</a>
      <a href="/home">Anasayfa</a>
      <KirmiziKutu color="red" height={100} />
      <KirmiziKutu />
    </div>
  );
}
// background-color: red;
export default App;
