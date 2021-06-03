import "./App.css";
import products from "./products.js";

function App() {
  const arrayOfProducts = products.map((product) => (
    <div>
      <img className="candy-image" src={product.Image} />
      <h3>{product.name}</h3>
      <p>{product.price} JD </p>
    </div>
  ));

  return (
    <div>
      <h1 className="text">CANDY LOCO</h1>
      <h3 className="text">I Take you to the candy shop</h3>
      <img
        className="shop-image"
        src="https://i.pinimg.com/originals/84/34/b1/8434b1295b1d746bc163d660f710a2ac.jpg"
      />
      <div className="list">{arrayOfProducts}</div>
    </div>
  );
}

export default App;
