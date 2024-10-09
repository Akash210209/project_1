// pages/details.js

import { useRouter } from 'next/router';

const Details = () => {
  const router = useRouter();
  const { id, name, age, location } = router.query; // Get query parameters

  return (
    <div>
      <h1>Details Page</h1>
      <p><strong>ID:</strong> {id}</p>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Location:</strong> {location}</p>
    </div>
  );
};

export default Details;
