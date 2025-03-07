import { FaFacebookF } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Footer() {
  return (
    <footer className="bg-primary text-white text-center py-10">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-2xl font-bold">Trầm Hương Tuệ Tâm</h2>
        <img
          src="./images/logo.png"
          alt=""
          className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mt-4"
        />
        <p className="mt-2 text-sm">
          ✨ Hãy sở hữu ngay vòng tay trầm hương mix charm để mang đến sự may
          mắn, bình an và phong cách riêng biệt cho bản thân! Bạn đã sẵn sàng để
          kết hợp tinh hoa xưa cũ với phong cách hiện đại chưa? 🌟
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link
            to={'/chinh-sach-bao-hanh'}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full shadow"
          >
            👀 HDSD - Bảo Hành
          </Link>
          <Link
            to={'/lien-he'}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full shadow"
          >
            🌼 Liên Hệ
          </Link>
        </div>
      </div>
      <div className="mt-10 border-t border-white/50 pt-6">
        <p className="text-sm mt-4">
          © 2025 Bản quyền thuộc{' '}
          <a href={'/'} className=" text-yellow-500">
            Trầm Hương Tuệ Tâm.
          </a>
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <a
            href="https://www.facebook.com/tuetamstore92"
            target="blank"
            className="w-8 h-8 flex items-center justify-center rounded-full border border-white/50"
          >
            <FaFacebookF />
          </a>
        </div>
      </div>
    </footer>
  );
}
