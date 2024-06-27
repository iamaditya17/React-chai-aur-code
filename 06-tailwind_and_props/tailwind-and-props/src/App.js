import "./App.css";
import Cart from "./Components/Cart";

function App() {
  return (
    <>
      <h1 className="bg-green-400 font-bold p-4 rounded-xl text-center">
        Hello world!!!
      </h1>

      <Cart brandName={"Puma"} price={50000} />
    </>
  );
}

export default App;
