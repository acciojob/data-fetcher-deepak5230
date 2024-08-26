import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'regenerator-runtime/runtime';


function ProductList() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        setProducts(response.data);  // Update state with fetched data
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);  // Ensure loading state is updated
      }
    };

    fetchData();  // Call the async function
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div id="root">
      <h1>Product List</h1>
      <pre>{JSON.stringify(products, null, 2)}</pre>
    </div>
  );
}

export default ProductList;
