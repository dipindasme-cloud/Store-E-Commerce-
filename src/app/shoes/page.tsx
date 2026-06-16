"use client";
import React from "react";
import ProductDetails from "@/components/demoproductdetail/ProductDetails";
import { demoProduct } from "@/components/demoproductdetail/demo-product";

import {SimilarProducts} from "../../components/demoproductdetail/SimilarProducts";


export default function HomePage() {
  return (
    <>
      
      <ProductDetails product={demoProduct} />
      <SimilarProducts />
      

    </>
  );
}