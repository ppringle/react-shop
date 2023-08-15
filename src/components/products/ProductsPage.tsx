import React, {useState, useEffect} from "react";
import {Link, useSearchParams} from "react-router-dom";
import {IProductData, products} from "./ProductData.ts";

const ProductsPage: React.FC = () => {

    const [productList, setProductList] = useState<IProductData[]>([]);
    const [searchTerm, setSearchTerm] = useState("");

    const [searchParams] = useSearchParams();

    useEffect(() => {
        setProductList(products);
        setSearchTerm(searchParams.get("searchTerm") || "");
    });

    return (
        <div className="page-container">
            <p>
                Welcome to the React Shop where can you get all your tools for ReactJS
            </p>
            <ul className="product-list">
                {
                    productList.map(product => {
                        if (!searchTerm || (searchTerm && product.name.toLowerCase()
                                .indexOf(searchTerm.toLowerCase()) > -1)) {
                            return (
                                <li key={product.id} className="product-list-item">
                                    <Link to={`/products/${product.id}`}>{product.name}</Link>
                                </li>
                            )
                        } else {
                            return null;
                        }
                    })
                }
            </ul>
        </div>
    );
}

export default ProductsPage;