import { useState, useEffect } from "react";
import { ProductCard } from "../../Components/ProductsCard/ProductCard";

export const Products = () => {
    const URL = "https://fakestoreapi.com/products?limit=10";

    const [products, setProducts] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    const fetchProducts = async () => {
        try {
            const res = await fetch(URL)
            const result = await res.json();
            console.log(result)
            // Vo nizata shto se naogja vo useState-ot go stavame proizvodot (potochno vo funkcijata ja stavame nizata od proizvodi)
            // products = useState([])
            setProducts(result);
        } catch (error) {
            setErrorMessage(error.message)
            throw new Error(error);
        }
    }

    useEffect(() => {
        // ako nizata na produkti e pogolema od nula, prekinuva so logikata i ne vrakja nishto
        // ako nema nishto vo nizata povikaj ja funkcijata
        // ova e za postojano da ne fetchnuva za da bide blokirani
        if (products.length > 0) return;
        fetchProducts();
    }, [])

    return (
        <div>
            <h1>Products page</h1>

            <hr />
            <br />

            <div className="products">

                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );

    // return (
    //     <div>
    //         <h1>Products page</h1>

    //         <hr />
    //         <br />

    //         <div className="products">

    //             {products.map((product) => {
    //                 return (
    //                     <ProductCard key={product.id} product={product} />
    //                 )
    //             })}
    //         </div>
    //     </div>
    // );
};

