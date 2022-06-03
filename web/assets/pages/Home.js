import React, { useState, useEffect } from "react";
// import css from "../styles/pages.module.css";
import Navbar from "../components/ui_components/Navbar";
import axios from "axios";
import ProductCard from "../components/ui_components/ProductCard";

function Home() {
  const [countries, setCountries] = useState([]);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  //dummy axios
  // const getProducts = () => axios.get("http://localhost:3001/products");

  // const getProducts = () => axios.get("http://localhost:3010/recipes");
  // const getRecipes = () => axios.get("/api/recipes/all");
  const getProducts = () => axios.get("/api/products/all");

  const getCountries = () => axios.get("https://restcountries.com/v3.1/all");

  useEffect(() => {
    setLoading(true);
    // console.log(recipes);
    Promise.all([getProducts(), getCountries()]).then(function (results) {
      console.log(results[0]);
      // console.log(results[1]);
      const productsData = results[0];
      // console.log(recipesData);
      const countriesData = results[1];
      // console.log(countriesData);
      setProducts(productsData.data);
      setCountries(countriesData.data);
      setLoading(false);
    });
  }, []);

  // http://localhost:3010/recipes

  // const getProducts = () => {
   // return 

  // };

  // const productFilter = products.filter((res) => {
  //   return res.productName.toLowerCase().includes(search.toLowerCase());
  // });

  const productFilter = products.filter((res) => {
    return res.name.toLowerCase().includes(search.toLowerCase());
  });
  // const productFilter = products;

  const searchHandler = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  // useEffect(() => {
  //   setProducts(getProducts());
  //   //use axios to get the data from database:
  // }, []);

  return (
    // <div className={css.pageContainer}>
    <div className="pageContainer">
      <Navbar />
      <h1 style={{ fontSize: "100" }}>Home</h1>
      <div>
        {/* <div className={css.search}> */}
        <div className="search">
          <input type="text" placeholder="🔍" onChange={searchHandler} />
        </div>
      </div>

      {/* <div className={css.browser}> */}
      <div className="browser">
        {productFilter.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
