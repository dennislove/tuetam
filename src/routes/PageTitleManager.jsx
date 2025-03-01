import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { match } from 'path-to-regexp';

const PageTitleManager = () => {
  const location = useLocation();
  const titleMap = {
    '/': 'Tuệ Tâm',
    '/gioi-thieu': 'TT | Giới Thiệu',

    '/san-pham': 'TT | Sản Phẩm',
    '/chi-tiet-san-pham/:id': 'TT | Chi Tiết Sản Phẩm',

    '/lien-he': 'TT | Liên Hệ',
    '/chinh-sach-bao-hanh': 'TT | Chính Sách Bảo Hành',
    '/hinh-anh': 'TT | Hình Ảnh',

    '/admin/api/news': 'Admin || Tuệ Tâm'
  };

  useEffect(() => {
    const updateTitle = () => {
      let title = '404';
      for (let path in titleMap) {
        const matcher = match(path, {
          decode: decodeURIComponent
        });
        if (matcher(location.pathname)) {
          title = titleMap[path];
          break;
        }
      }
      document.title = title;
    };

    updateTitle();
  }, [location]); // Phụ thuộc vào location

  return null;
};

export default PageTitleManager;
