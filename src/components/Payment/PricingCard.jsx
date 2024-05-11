import React,{useState, useEffect} from 'react';
// import { useNavigate, useHistory} from 'react-router-dom';
import { useNavigate  } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import ButtonOutLine from '../Button/ButtonOutLine.jsx'


const PricingCard = ({option, description, price, priceOld,buttonLabel,features}) => {
    const navigate = useNavigate();
  const auth = getAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
        if (user) {
            setIsLoggedIn(true); // User is signed in.
        } else {
            setIsLoggedIn(false); // User is signed out.
        }
    });

    return () => unsubscribe(); // Clean up the subscription on unmount
}, []);
  const numericPrice = parseFloat(price.replace(/,/g, ''));
  const numericPriceOld = parseFloat(priceOld.replace(/,/g, ''));

  // Calculate discount
  const discount = numericPriceOld - numericPrice;
  const handleBuyNow = () => {
    if(isLoggedIn){
        navigate('/dich-vu/payment', { 
            state: { price: numericPrice, priceOld: numericPriceOld, discount } 
          });
    }else{
        navigate('/sign-in')
    }
  };

  return (
    <div className=" hover:border-yellow-600 hover:-translate-y-5 transform duration-300 flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                    <h4 className="mb-4 text-2xl font-semibold">{option}</h4>
                    <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">{description}</p>
                    <div className="flex justify-center items-baseline mt-8 mb-3">
                        <span className="mr-2 text-5xl font-extrabold">₫{price}</span>
                        <span className="text-gray-500 dark:text-gray-400">/tháng</span>
                    </div>
                    <div className="flex justify-center items-baseline mb-2 line-through">
                        
                        <span className="text-gray-500 dark:text-gray-400">₫{priceOld}/tháng</span>
                    </div>
                    <ul role="list" className="mb-8 space-y-4 text-left">
                    {features.map((item, index)=>(

                        <li className="flex items-center space-x-3" key={index}>
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                            <span>{item.title} <span className="font-semibold">{item.hot}</span></span>
                        </li>
                    ))}
                        
                    </ul>
             <ButtonOutLine onClick={handleBuyNow}  name = {buttonLabel}/> 
      </div>
  );
};

export default PricingCard;
