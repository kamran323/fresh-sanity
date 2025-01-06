import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'yourProjectId', // Replace with your project ID
  dataset: 'yourDataset',     // Replace with your dataset name
  useCdn: true,               // `false` if you want to ensure fresh data
  apiVersion: '2021-10-21'    // Use a UTC date string
});
