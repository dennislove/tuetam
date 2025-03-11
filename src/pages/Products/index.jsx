import ProductCard from './ProductCard';

import { useEffect, useState, useMemo } from 'react';
import { getDatabase, ref, onValue, off } from 'firebase/database';
import AutoSlider from '../../components/AutoSlider';
export default function Products() {
  const useRealtimeDatabase = (path) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const db = useMemo(() => getDatabase(), []);
    const dbRef = useMemo(() => ref(db, path), [db, path]);
    useEffect(() => {
      const handleValueChange = (snapshot) => {
        if (snapshot.exists()) {
          const fetchedData = [];
          snapshot.forEach((childSnapshot) => {
            const key = childSnapshot.key;
            const value = childSnapshot.val();
            fetchedData.push({ id: key, ...value });
          });
          setData(fetchedData);
        } else {
          console.log('No data available');
          setData([]);
        }
        setLoading(false);
      };

      const handleError = (error) => {
        console.error('Error fetching data:', error);
        setError(error);
        setLoading(false);
      };

      // Lắng nghe dữ liệu thời gian thực
      onValue(dbRef, handleValueChange, handleError);

      // Cleanup listener khi component unmount
      return () => {
        off(dbRef, 'value', handleValueChange);
      };
    }, [path]);

    return { data, loading, error };
  };
  const { data: products } = useRealtimeDatabase('Products');

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <AutoSlider />
      <h2 className=" text-center font-oxa font-semibold mt-14 mb-4 text-[50px] text-primary capitalize">
        Danh Sách Sản Phẩm
      </h2>
      <div className="max-w-7xl mx-auto ">
        <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-4">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              tensp={product.name}
              giaban={product.price}
              image_1={product.image_1}
              image_2={product.image_2}
              image_3={product.image_3}
              image_4={product.image_4}
              image_5={product.image_5}
              id={product.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
