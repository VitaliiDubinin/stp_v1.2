import React, { useState, useEffect } from "react";
import Navbar from "../components/ui_components/Navbar";
import axios from "axios";
import ProductCard from "../components/ui_components/ProductCard";

function Home() {

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  //const [loading, setLoading] = useState(false);

  const getProducts = () => axios.get("/api/products/all");

  useEffect(() => {
    setLoading(true);

    Promise.all([getProducts()]).then(function (results) {
      console.log(results[0]);

      const productsData = results[0];

      const countriesData = results[1];

      setProducts(productsData.data);
      setCountries(countriesData.data);
      setLoading(false);
    });
  }, []);

  const productFilter = products.filter((res) => {
    return res.name.toLowerCase().includes(search.toLowerCase());
  });

  const searchHandler = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  return (
    <div className="pageContainer">
      <Navbar />
      <h1 style={{ fontSize: "100" }}>Home</h1>
    <div>

    <div className="search">
        <input type="text" placeholder="🔍" onChange={searchHandler} />
      </div>
    </div>

    <div className="browser">
      {productFilter.map((product) => (
      <ProductCard key={product.id} {...product} />
      ))}
    </div>
    </div>
  );
}

export default Home;
