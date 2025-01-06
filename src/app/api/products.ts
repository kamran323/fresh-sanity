import { client } from '../../lib/sanity'; // Ensure path is correct

export default async function handler(req, res) {
  const query = `*[_type == "product"]`;
  const products = await client.fetch(query);
  res.status(200).json(products);
}
