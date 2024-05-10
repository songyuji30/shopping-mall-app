'use client';
import { useState, useEffect } from 'react';
import { ProductList } from "@/components/component/product-list";

const Page = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch('https://shopping-mall.fly.dev/api/v1/products/?page=0&limit=8');
        const jsonData = await res.json();
        setProducts(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchProducts();
  }, []);

  if(!products) return <div>Loading...</div>;

  return (
    <div>
      <ProductList products={products}/>
    </div>
  );
};

export default Page;
