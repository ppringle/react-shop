import React, {Fragment} from "react";
import {IProductData} from "./ProductData.ts";
import Tabs, {Tab} from "../tabs/Tabs.tsx";

interface IProps {
    product: IProductData,
    inBasket: boolean,
    onAddToBasket: () => void,
}

const Product: React.FC<IProps> = (props) => {

    const {product, inBasket, onAddToBasket} = props;

    const currencyFormat = new Intl.NumberFormat("en-US", {
        style: 'currency',
        currency: 'USD'
    });

    return (
        <Fragment>
            <h1>{product.name}</h1>
            <Tabs>
                <Tab
                    name="Description"
                    initialActive={true}
                    heading={() => <b>Description</b>}
                >
                    <p>{product.description}</p>
                </Tab>
                <Tab
                    name="Reviews"
                    heading={() => "Reviews"}
                >
                    <div>
                        <ul className="product-reviews">
                            {product.reviews.map(review => {
                                return (
                                    <div>
                                        <li key={review.reviewer} className="product-review-item">
                                            <i>"{review.comment}"</i> - {review.reviewer}
                                        </li>
                                    </div>
                                );
                            })}
                        </ul>
                    </div>
                </Tab>
            </Tabs>
            <p className="product-price">
                {currencyFormat.format(product.price)}
            </p>
            {!inBasket &&
                <button onClick={onAddToBasket}>Add To Basket</button>}
        </Fragment>
    )
};

export default Product;