import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./components/product/Product";
const productData = [
  {
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with noise-cancellation.",
    price: 99.99,
    imageUrl: "https://via.placeholder.com/300", // Replace with your image URL
  },
  {
    name: "Bluetooth Speaker",
    description: "Portable speaker with great sound quality.",
    price: 49.99,
    imageUrl: "https://via.placeholder.com/300", // Replace with your image URL
  },
  {
    name: "Smart Watch",
    description: "A stylish and functional smart watch with health tracking features.",
    price: 199.99,
    imageUrl: "https://via.placeholder.com/300", // Replace with your image URL
  },
];
function App() {
  return (
    <div className="App">
      <h3>Hi from React</h3>
      <Header />
      {productData.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      <Footer />
    </div>
  );
}

export default App;
