import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {IProductData, products} from "./ProductData.ts";
import {Fragment} from "react";

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

    const currencyFormat = new Intl.NumberFormat("en-US", {
        style: 'currency',
        currency: 'USD'
    });

    const handleAddToCartBtnClick = (): void => {
        setIsAddedToCart(true);
    }

    return (
        <div className="page-container">
            {
                product ?
                    <Fragment>
                        <h1>{product.name}</h1>
                        <p>{product.description}</p>
                        <p className="product-price">
                            {currencyFormat.format(product.price)}
                        </p>
                        { !isAddedToCart &&
                            <button onClick={handleAddToCartBtnClick}>Add To Basket</button>}
                    </Fragment> :
                    <p>Product Not Found !</p>
            }
        </div>
    );
}

export default ProductPage;