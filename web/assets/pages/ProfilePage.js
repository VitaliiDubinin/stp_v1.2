// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Navbar from "../components/ui_components/Navbar";
// import { useCart } from "react-use-cart";
// import { Link } from "react-router-dom";
// import ProductCard from "../components/ui_components/ProductCard";
// import "../styles/app.css";
// import ProdCart from "../components/ui_components/ProdCart";

// function ProfilePage() {
//   const [products, setProducts] = useState([]);
//   const [search, setSearch] = useState("");
//   const [loading, setLoading] = useState(false);

//   const getProducts = () => axios.get("/api/products/all");

//   useEffect(() => {
//     setLoading(true);

//     Promise.all([getProducts()]).then(function (results) {
//       // console.log(results[0]);

//       const productsData = results[0];

//       setProducts(productsData.data);
//       setLoading(false);
//     });
//   }, []);

//   const { totalItems } = useCart();
//   // console.log(totalItems, "totalItems");

//   const productFilter = products.filter((res) => {
//     return res.product_name.toLowerCase().includes(search.toLowerCase());
//   });

//   const searchHandler = (e) => {
//     setSearch(e.target.value);
//     console.log(search);
//   };

//   return (
//     <div>
//       <form className="container-search">
//         <input type="text" name="search" placeholder=" 🔍 Search.." className="search" onChange={searchHandler} />
//       </form>
//       {/* <div className="search">
//         <input type="text" placeholder="🔍" onChange={searchHandler} />
//       </div> */}

//       <div className="browser">
//         {productFilter.map((product) => (
//           <ProductCard key={product.id} data={product} {...product} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProfilePage;
