import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {IProductData, products} from "./ProductData.ts";
import Product from "./Product.tsx";
import './Products.css';

const ProductPage: React.FC = () => {

    const [product, setProduct] = useState<IProductData | null>(null);
    const [isAddedToCart, setIsAddedToCart] = useState(false);

    const params = useParams();

    useEffect(() => {
        if (params.id) {
            const id: number = parseInt(params.id, 10);
            const product = products.filter(p => p.id === id)[0];
            setProduct(product);
        }
    }, []);

    const handleAddToCartBtnClick = (): void => {
        setIsAddedToCart(true);
    }

    return (
        <div className="page-container">
            {
                product ?
                    <Product product={product} inBasket={isAddedToCart} onAddToBasket={handleAddToCartBtnClick}/> :
                    <p>Product Not Found !</p>
            }
        </div>
    );
}

export default ProductPage;