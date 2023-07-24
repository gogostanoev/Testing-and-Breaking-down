import { useState, useEffect } from "react";
import "./Home.css";
import { ProductCard } from "../../Components/ProductsCard/ProductCard";

export const Home = () => {
  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];
  const URL = "https://fakestoreapi.com/products/category/";

  const [categorySelected, setCategorySelected] = useState("electronics");
  const [productsByCategory, setProductsByCategory] = useState([]);

  const handleSelectCategory = (category) => {
    setCategorySelected(category);
  };

  const getProductsByCategory = async (category) => {
    // const response = await fetch(URL + category)
    const response = await fetch(`${URL}${category}`);
    console.log("this is the response ", response)
    const result = await response.json();
    console.log("Result is: ", result);

    // tuka se pushnati(praznata niza se ispolnuva so rezultatot)
    setProductsByCategory(result)
  };

  useEffect(() => {
    // Vo useEffect ja povikuvame gornata funkcija koja shto go vrshi povikuvanjeto na API za proizvodi spored kategorii
    // vo samata funkcija stavame kako argument stavame categorySelected(category shto e gore) i toa vsushnost ke gi fetchne proizvodite
    // shto specifichno od taa kategorija
    getProductsByCategory(categorySelected);
  }, [categorySelected]);

  return (
    <div>
      <h1>Home page</h1>
      <hr />
      <br />

      <h2>Selected category: {categorySelected}</h2>
      <hr />
      <br />

      <div className="categories">
        {categories.map((category) => (
          <div
            // tuka vo onClick koga ja povikuvame funkcijata treba da ja stavime samata kategorija od sekoja iteracija
            onClick={() => handleSelectCategory(category)}
            // Ako kategorijata od samata iteracija e ednakvo na odbranata(stisnata) kategorija
            // togash ispolni ja pozadinata na taa kategorija so boja, ako ne se sovpagjaat
            // togash prazna neka bide. active-category e klasata vo CSS
            className={`${
              category === categorySelected ? "active-category" : ""
            } ${`category`}`}
            key={category}
          >
            {category}
          </div>
        ))}
      </div>

      {productsByCategory.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
