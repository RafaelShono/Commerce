import React from 'react';
import PropTypes from 'prop-types';
import ProdutoItem from './ProdutoItem'
import '../css/ProductList.css'
const ProductsList = ({ products }) => {


    return (
        <div className="products" id="products">
            {products.map((product) => (
                <ProdutoItem
                    key={product.id}
                    product={product}
                />
            ))}
        </div>
    );
};

ProductsList.propTypes = {
    products: PropTypes.array,
};

export default ProductsList;