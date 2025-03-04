"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const getProducts = async (searchParams) => {
    setLoading(true);
    const response = await axios.get(
      "https://fakestoreapi.com/products" + `?${searchParams?.toString()}`
    );
    setLoading(false);
    if (response.status === 200) {
      setProducts(response.data);
      return response.data;
    }
  };
  useEffect(() => {
    if (!products.length) getProducts();
  }, [products]);
  return [products, getProducts, loading];
}
