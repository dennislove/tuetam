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
  

  const handleClick = (e) => {
    // Retrieve the id from the dataset of the clicked element
    const newsId = e.currentTarget.dataset.id;
    console.log("Clicked news ID:", newsId);
};

  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2 pm:grid-cols-1 gap-5'>
      {news.slice(0, -1).map((item, index) => (
    <Link onClick={handleClick} to={`/News/${item.slug}`} data-id={item.id} className='group rounded-lg bg-white overflow-hidden relative' key={index}>
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
  )
}

export default NewsComponent
