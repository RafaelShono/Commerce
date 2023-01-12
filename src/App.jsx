import React, { useState, useEffect } from 'react';
import commerce from './lib/commerce';
import ProductsList from './components/ProductList'

import './App.css'
const App = () => {

  const [products, setProducts] = useState([]);

  /**
 * Fetch products data from Chec and stores in the products data object.
 * https://commercejs.com/docs/sdk/products
 */
  const fetchProducts = () => {

    commerce.products.list().then((products) => {

      console.log(products)
      setProducts(products.data);
    }).catch((error) => {
      console.log('There was an error fetching the products', error)
    });
  }


  useEffect(() => {

    fetchProducts()
  }, [])

  //  <ProductsList products={products} />
  return (
    <div className="app">
      <ProductsList products={products} />
    </div>
  );

};

export default App;