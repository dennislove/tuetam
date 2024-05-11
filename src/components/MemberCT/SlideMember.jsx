import React, { useEffect, useState,useRef } from 'react';
import '../MemberCT/style.css'
import data from '../../assets/data.json'
import { getDatabase, ref, child, get } from "firebase/database";

function SlideMember() {
   
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const dbRef = ref(getDatabase());

    get(child(dbRef, `Product`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const fetchedProduct = Object.values(snapshot.val()); // Extract data as array
          setProduct(fetchedProduct);
        } else {
          console.log("No data available in Product");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);


    const [activeTab, setActiveTab] = useState(1);
    const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveTab((prevActiveTab) => (prevActiveTab + 1) % product.length);
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, [product.length]);

  const handleClickTab = (index) => {
    setActiveTab(index);
    clearInterval(intervalRef.current);
  };
  return (
    <div className='py-10'>
        <div className='mb-5 text-center '>
        <h2 className=' font-normal md:text-[40px] font-oxa sm:text-[35px] pm:text-[30px] text-white capitalize'>Sản Phẩm Từ Trầm Hương</h2>
    </div>
        <div className="fui-testimonial-1 mt-10">
            
        <div className="testimonialWrap">
            <ul className="testimonialBodyList text-white">
                {product.map((item, index) =>(
                    <li key={index} className={`testimonialBodyItem ${activeTab === index ? 'active' : ''}`} data-tab={item.id}>
                    <div className="testimonialRate text-yellow-600">Giá bán:<span className='text-white'>{item.price}</span>
                        
                    </div>
                    <p className='testimonialContent text-yellow-600 text-2xl font-bold'>Chi nhánh uy tín</p>
                    <p className="testimonialContent text-white text-xl">
                        {item.location}
                    </p>
                    <div className="testimonialBodyPersonal active">
                        <div className="testimonialBodyPersonalImg"><img src={item.imageUrl} alt={item.name} loading='lazy'/></div>
                        <h4 className="testimonialBodyPersonalName">{item.name}</h4>
                    </div>
                </li>
                ))}
                
               
            </ul>
            <ul className="testimoniaPersonalList ">
                {product.map((item,index) =>(
                    <li key={index} onClick={() => handleClickTab(index)} className={`testimoniaPersonalItem ${activeTab === index ? 'active' : ''}`} data-tab={item.id}>
                      <div className="testimoniaPersonalImage">
                        <img  src={item.imageUrl} loading='lazy' alt={item.name} className='text-white text-xs' />
                      </div>
                    </li>
                ))}
            </ul>
        </div>
    </div>
    </div>
  )
}

export default SlideMember
