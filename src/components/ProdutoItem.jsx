import React, { Component } from "react";
import '../css/ProdutoItem.css'
import { stripHtml } from "string-strip-html";
import stars from '../../public/stars.png'

import PropTypes from 'prop-types';

const ProdutoItem = ({ product }) => {


    const { result } = stripHtml(product.description);
    console.log(product)

    return (
        <div className="product__card">
            <img className="product__image" src={product.image?.url} alt={product.name} />

            <div className="product__info">
                <p className="product__category">{product.categories.map(slug => slug.slug)}</p>
                <h4 className="product__name">{product.name}</h4>
                <img className="product__rating" src={stars} />
                <p className="product__description">
                    {/* product description stripped of html tags */}
                    {result}
                </p>
                <div className="product__details">
                    <p className="product__price">
                        {product.price.formatted_with_symbol}
                    </p>
                </div>
            </div>
        </div>
    );
};

ProdutoItem.propTypes = {
    product: PropTypes.object,
};

export default ProdutoItem;