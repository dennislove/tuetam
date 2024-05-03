import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import { getDatabase, ref, child, get } from "firebase/database";
import { Link } from 'react-router-dom';

function NewsComponent() {

    const [news, setNews] = useState([])
    // const navigate = useNavigate(); 
    useEffect(() => {
      const dbRef = ref(getDatabase());
  
      get(child(dbRef, `News`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            // Here, we're converting the fetched data to include the Firebase keys as 'id'
            const fetchedNews = [];
            snapshot.forEach(childSnapshot => {
              const key = childSnapshot.key;
              const data = childSnapshot.val();
              fetchedNews.push({ id: key, ...data });
            });
            setNews(fetchedNews);
          } else {
            console.log("No data available in News");
          }
        })
        .catch((error) => {
          console.error(error);
        });
  }, []);

//---------show more - show less --------
  const total =news.length;
  // State ban đầu dựa trên kích thước màn hình
  const initialItemsPerPage = window.innerWidth >= 960 ? 6 : window.innerWidth <= 576 ? 3 : 4;
  const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage);
  const [visibleItems, setVisibleItems] = useState(itemsPerPage);

  // Xử lý thay đổi kích thước màn hình
  useEffect(() => {
      const handleResize = () => {
          let newItemsPerPage;
          if (window.innerWidth >= 960) {
              newItemsPerPage = 6;
          } else if (window.innerWidth <= 576) {
              newItemsPerPage = 3;
          } else {
              newItemsPerPage = 4;
          }
          setItemsPerPage(newItemsPerPage);
          setVisibleItems(newItemsPerPage);
      };

      // Thêm event listener
      window.addEventListener('resize', handleResize);

      // Cleanup function
      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, []);

  // Hàm xử lý khi người dùng click "View More" hoặc "View Less"
  const handleViewToggle = () => {
      setVisibleItems(prevVisibleItems =>
          prevVisibleItems === itemsPerPage ? total : itemsPerPage
      );
  };
  return (
   <div>
      <div className='grid md:grid-cols-3 sm:grid-cols-2 pm:grid-cols-1 gap-5'>
        {news.slice(0, visibleItems).map((item, index) => (
      <Link  to={`/News/${item.slug}`} data-id={item.id} className='group rounded-lg bg-white overflow-hidden relative' key={index}>
        <img loading='lazy' src={item.image} alt="" className='rounded-lg group-hover:scale-125 duration-300 
        transform ease-out '/>
  
        <div className='absolute flex flex-col bg-gradient-to-r from-yellow-100/70 to-yellow-50 w-full text-center top-0 h-full -translate-y-full opacity-0 group-hover:opacity-100 transform ease-linear duration-200 group-hover:translate-y-0'>
          <h2 className='text-black top-1/2 absolute left-1/2 -translate-x-1/2 -translate-y-3/4  text-lg font-semibold mt-2 '>
            {item.title}</h2>
            
              <div className='w-full h-[3px] bg-yellow-600 absolute top-3/4'></div>
            </div>
      </Link>
      ))} 
   
   </div>
  
   <div id='viewMoreBtn'
         onClick={handleViewToggle}
   className=" cursor-pointer mt-10 lg:px-8 md:px-6 lg:py-4 md:py-2 pm:px-6 pm:py-2 border-2
               border-yellow-600 font-semibold text-white rounded-lg transition-all bg-yellow-600  hover:bg-transparent
                  duration-1000 ease-in-out inline-block overflow-hidden relative capitalize shadow-md hover:text-yellow-600
                  before:absolute before:-left-[100%] hover:before:left-full before:top-0 before:w-full before:h-full
              before:bg-gradient-to-r before:from-transparent before:via-yellow-600 
              before:to-transparent before:transition-all before:duration-500 before:ease-linear">
               <h2>{visibleItems === total ? 'Ẩn Bớt' : 'Xem Thêm'}</h2>
    </div>
   </div>
  )
}

export default NewsComponent
