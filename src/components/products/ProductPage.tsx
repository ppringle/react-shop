import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {IProductData, getProductById} from "./ProductData.ts";
import Product from "./Product.tsx";
import './Products.css';

const ProductPage: React.FC = () => {

    const [product, setProduct] = useState<IProductData | null>(null);
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const [_, setLoading] = useState(true);

    const params = useParams();

    useEffect(() => {
        (async () => {
            if (params.id) {
                const id: number = parseInt(params.id, 10);
                const foundProduct = await getProductById(id);
                if (foundProduct) {
                    setProduct(foundProduct);
                }
                setLoading(false);
            }
        })();
    }, []);

    const handleAddToCartBtnClick = (): void => {
        setIsAddedToCart(true);
    }

    return (
        <div className="page-container">
            {
                product ?
                    <Product
                        product={product}
                        inBasket={isAddedToCart}
                        onAddToBasket={handleAddToCartBtnClick}
                    /> :
                    <p>Product Not Found !</p>
            }
        </div>
    );
}

export default ProductPage;