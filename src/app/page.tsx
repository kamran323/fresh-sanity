"use client";
import Header from "./Components/Header";
import Hero from "./Sections/Hero";
import CoreTracks from "./shared/CoreTracks";
import Outcome from "./shared/Outcome";
import SpecializedTracks from "./shared/SpecializedTracks";
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products')
      .then((response) => setProducts(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <main>
        <Hero />
        <CoreTracks />
        <SpecializedTracks />
        <Outcome />
        <section>
          <Header />
          <h2>Products</h2>
          <div>
            {products.map((product) => (
              <div key={product.slug}>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>{product.price}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
