import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { match } from 'path-to-regexp';

const PageTitleManager = () => {
  const location = useLocation();
  const titleMap = {
    '/': 'Trầm Hương Tuệ Tâm',
    '/gioi-thieu': 'THTT | Giới Thiệu',

    '/san-pham': 'THTT | Sản Phẩm',
    '/chi-tiet-san-pham/:id': 'THTT | Chi Tiết Sản Phẩm',

    '/lien-he': 'THTT | Liên Hệ',
    '/chinh-sach-bao-hanh': 'THTT | Chính Sách Bảo Hành',
    '/hinh-anh': 'THTT | Hình Ảnh'
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
