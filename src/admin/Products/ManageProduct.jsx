import React, { useEffect, useState } from 'react';

import { getDatabase, ref, child, get } from 'firebase/database';
import ProductAdmin from './index';

function ManageProduct() {
  // select database
  const [media, setMedia] = useState([]);
  const [filteredMedia, setFilteredMedia] = useState([]);

  useEffect(() => {
    const dbRef = ref(getDatabase());

    get(child(dbRef, `Products`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const fetchedMedia = Object.entries(snapshot.val()).map(
            ([id, value]) => ({
              ...value,
              id, // đây là ID từ Firebase
              createdAt: new Date(value.createdAt).toLocaleString()
            })
          );
          setMedia(fetchedMedia);
        } else {
          console.log('No data available in Media');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(filteredMedia);

  return (
    <div className="mt-12 mb-8 flex flex-col gap-4">
      <ProductAdmin />
    </div>
  );
}

export default ManageProduct;
