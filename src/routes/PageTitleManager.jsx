import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { match } from 'path-to-regexp';

const PageTitleManager = () => {
  const location = useLocation();
  const titleMap = {
    '/': 'Tuệ Tâm',
    '/gioi-thieu': 'TT | Giới Thiệu',
    '/News': 'TT | Tin Tức',
    '/News/:slug': 'TT | Tin Tức', // Đường dẫn này sử dụng tham số
    '/dich-vu': 'TT | Dịch Vụ',
    '/don-vi': 'TT | Đơn Vị',
    '/lien-he': 'TT | Liên Hệ',
    '/sign-in': 'TT | Đăng Nhập',
    '/sign-up': 'TT | Đăng Ký',
    '/admin/api/news': 'Admin || Tuệ Tâm',
    '/admin/api/signin': 'Admin || Login',
    // Không định nghĩa '*' tại đây
  };

  useEffect(() => {
    const updateTitle = () => {
      let title = '404'; // Tiêu đề mặc định khi không khớp bất kỳ đường dẫn nào

      // Kiểm tra xem có khớp với bất kỳ đường dẫn nào trong titleMap không
      for (let path in titleMap) {
        const matcher = match(path, { decode: decodeURIComponent, end: path === '/News/:slug' ? false : true });
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
