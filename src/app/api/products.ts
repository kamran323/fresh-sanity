// pages/api/products.js
import { client } from '../../lib/sanity';

export default async function handler(req, res) {
  const query = `*[_type == "product"] {
    slug,
    title,
    description,
    price
  }`;

  try {
    const products = await client.fetch(query);
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
