import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import { getDatabase, ref, child, get } from "firebase/database";
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

function NewsComponent() {

    const [news, setNews] = useState([])
    const [filteredNews, setFilteredNews] = useState([]);
    const [query, setQuery] = useState('');

    const handleSearchChange = (event) => {
      setQuery(event.target.value.toLowerCase());
    };
    
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

    useEffect(() => {
      // Filter news based on the query
      const results = news.filter(newsItem =>
          (newsItem.title && newsItem.title.toLowerCase().includes(query)) 
      );
      setFilteredNews(results);
  }, [query, news]);

const clearInput = () => {
  setQuery('');
  setFilteredNews([]); 
};
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
      <div className="relative my-4 flex items-center">
        <input
          type="text"
          value={query} 
          onChange={handleSearchChange}
          placeholder="Tìm kiếm tin tức..."
          className="w-full p-3 border-none focus:outline-none rounded-l text-gray-700 "
        />
         {query && (
              <div className='bg-white p-3'>
                <svg onClick={clearInput} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-gray-500">
                <path fillRule="evenodd" d="M8.707 10l-3.147 3.146a.5.5 0 0 0 .708.708L10 10.707l3.146 3.147a.5.5 0 0 0 .708-.708L10.707 10l3.147-3.146a.5.5 0 0 0-.708-.708L10 9.293 6.854 6.146a.5.5 0 0 0-.708.708L9.293 10z" clipRule="evenodd" />
            </svg>
              </div>
            )}
      <div className='py-3 px-10 bg-yellow-600 text-white rounded-r' >
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      </div>

      </div>

      <div className='grid md:grid-cols-3 sm:grid-cols-2 pm:grid-cols-1 gap-5'>
     
          {filteredNews.slice(0, visibleItems).map((item, index) => (
        <Link  to={`/News/${item.slug}`} data-id={item.id} className='group rounded-lg bg-white overflow-hidden relative' key={index}>
          <img loading='lazy' src={item.image} alt="" className='rounded-lg group-hover:scale-125 duration-300 
          transform ease-out '/>
    
          <div className='absolute flex flex-col bg-gradient-to-r from-yellow-100/70 to-yellow-50 w-full text-center top-0 h-full -translate-y-full opacity-0 group-hover:opacity-100 transform ease-linear duration-200 group-hover:translate-y-0'>
            <h4 className='text-black top-1/2 absolute left-1/2 -translate-x-1/2 -translate-y-3/4  text-lg font-semibold mt-2 '>
              {item.title}</h4>
              
                <div className='w-full h-[3px] bg-yellow-600 absolute top-3/4'></div>
              </div>
        </Link>
        ))} 
      
   </div>
  
 <div className='mt-10'>
    <Button onClick={handleViewToggle} name={visibleItems === total ? 'Ẩn Bớt' : 'Xem Thêm'}/>
 </div>
   </div>
  )
}

export default NewsComponent
