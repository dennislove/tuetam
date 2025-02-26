import Project from '../pages/Project/Project';
import HomePage from '../pages/HomePage/HomePage';

import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

import ContactPage from '../pages/ContactCT/ContactPage';
import DefauComponent from '../admin/DefautComponent/DefautComponent';

import { withAuthProtected } from '../admin/Account/ProtectedAuth';

import Manager from '../admin/DefautComponent/Manager';

export const routes = [
  {
    path: '/',
    element: HomePage,
    isShowHeader: true
  },

  {
    path: '/san-pham',
    element: Project,
    isShowHeader: true
  },

  {
    path: '/lien-he',
    element: ContactPage,
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
