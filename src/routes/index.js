import Products from '../pages/Products';
import ProductDetailPage from '../pages/Products/ProductDetailPage';
import HomePage from '../pages/HomePage/HomePage';
import WarrantyGuide from '../pages/WarrantyGuide';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

import ContactPage from '../pages/ContactCT/ContactPage';
import DefauComponent from '../admin/DefautComponent/DefautComponent';

import { withAuthProtected } from '../admin/Account/ProtectedAuth';

import Manager from '../admin/DefautComponent/Manager';
import Gallery from '../pages/Gallery';

export const routes = [
  {
    path: '/',
    element: HomePage,
    isShowHeader: true
  },

  {
    path: '/san-pham',
    element: Products,
    isShowHeader: true
  },
  {
    path: '/hinh-anh',
    element: Gallery,
    isShowHeader: true
  },
  {
    path: '/chi-tiet-san-pham/:id',
    element: ProductDetailPage,
    isShowHeader: true
  },
  {
    path: '/lien-he',
    element: ContactPage,
    isShowHeader: true
  },
  {
    path: '/chinh-sach-bao-hanh',
    element: WarrantyGuide,
    isShowHeader: true
  },
  {
    path: '*',
    title: '404',
    element: NotFoundPage
  },
  {
    path: 'admin/api/news',
    element: withAuthProtected(DefauComponent),
    protected: true
  },
  {
    path: 'admin/api/manage-account',
    element: withAuthProtected(Manager),
    protected: true
  }
];
