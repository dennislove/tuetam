
import Project from "../pages/Project/Project";
import HomePage from "../pages/HomePage/HomePage";
import InterViewCT from "../pages/Interview/InterViewCT";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import NewsPage from "../pages/News/NewsPage";
import ProductSer from "../pages/Service/ProductSer";
import ContactPage from "../pages/ContactCT/ContactPage";
import DefauComponent from '../admin/DefautComponent/DefautComponent'
import DetailNewsPage from "../pages/News/DetailNewsPage";
import SignUp from "../admin/Account/SignUp";
import { withAuthProtected } from "../admin/Account/ProtectedAuth";
import SignInClient from "../components/auth/sign-in";
import SignUpClient from "../components/auth/sign-up";
import PayBill from "../components/Payment/PayBill";
import FormAds from "../components/Form/FormAds";

export const routes = [
    {
        path:'/',
        element:HomePage,
        isShowHeader: true,
        
    },
    {
        path:'/gioi-thieu',
        element:InterViewCT,
        isShowHeader: true,
        
    },
    {
        path:'/dich-vu/ads',
        element:FormAds,
        isShowHeader: true,
        
    },
    {
        path:'/dich-vu',
        element:Project,
        isShowHeader: true,
        
    },
    {
        path:'/don-vi',
        element:ProductSer,
        isShowHeader: true,
        
    },
    {
        path:'/News',
        element:NewsPage,
        isShowHeader: true,
        
    },
    {
        path:'/News/:slug',
        element:DetailNewsPage,
        isShowHeader: true,
        
    },
    {
        path:'/lien-he',
        element:ContactPage,
        isShowHeader: true,
        
    },
    {
        path:'/dich-vu/payment',
        element:PayBill,
        isShowHeader: true,
        
    },
    {
        path:'*',
        title: "404",
        element:NotFoundPage
    },
    {
        path:'admin/api/news',
        element:withAuthProtected(DefauComponent),
        protected: true
    },
    {
        path:'admin/api/sign-up',
        element:SignUp,
        protected: false
    },
    {
        path:'/sign-in',
        element:SignInClient,
        isShowHeader: true,
        protected: false
    },
    {
        path:'/sign-up',
        element:SignUpClient,
        isShowHeader: true,
    },
]