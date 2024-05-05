
import Project from "../pages/Project/Project";
import HomePage from "../pages/HomePage/HomePage";
import InterViewCT from "../pages/Interview/InterViewCT";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import NewsPage from "../pages/News/NewsPage";
import ProductSer from "../pages/Service/ProductSer";
import ContactPage from "../pages/ContactCT/ContactPage";
// import NewsTable from "../admin/News/NewsTable";
import DefauComponent from '../admin/DefautComponent/DefautComponent'
import DetailNewsPage from "../pages/News/DetailNewsPage";
import SignIn from "../admin/Account/SignIn";
import SignUp from "../admin/Account/SignUp";
import { withAuthProtected } from "../admin/Account/ProtectedAuth";
import SignInClient from "../components/auth/sign-in";
import SignUpClient from "../components/auth/sign-up";
import Payment from "../components/Payment/Payment";

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
        path:'/sign-in',
        element:SignInClient,
        isShowHeader: true,
        
    },
    {
        path:'/sign-up',
        element:SignUpClient,
        isShowHeader: true,
        
    },
    
    {
        path:'*',
        title: "404",
        element:NotFoundPage
    },
    {
        path:'admin/api/news',
        // element:DefauComponent,
        element:withAuthProtected(DefauComponent),
        protected: true
    },
    {
        path:'admin/api/signin',
        element:SignIn,
        protected: false
    },
    {
        path:'admin/api/signup',
        element:SignUp
    },
]