/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';

function ContactMap() {
  return (
    <div className="border p-5 rounded-lg bg-[#443627]">
      <div className="flex flex-col gap-6 mt-6">
        <div className="text-yellow-600 text-center">
          <h3 className="font-oxa font-bold text-3xl">TRẦM HƯƠNG TUỆ TÂM</h3>
          <h3 className="font-pop font-normal text-xl mt-1">
            Tuệ tâm tỏa sáng – Hương trầm vĩnh cửu
          </h3>
        </div>

        <div className="flex text-white gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
              clipRule="evenodd"
            />
          </svg>
          <h3 className="font-pop font-semibold text-xl">Địa chỉ:</h3>
          <h3 className="font-pop font-normal text-xl">
            Tam Thanh, Tam Kỳ, Quảng Nam
          </h3>
        </div>
        <div className="flex text-white gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
              clipRule="evenodd"
            />
          </svg>

          <h3 className="font-pop font-semibold text-xl">Số điện thoại:</h3>
          <h3 className="font-pop font-normal text-xl">+84 38 279 9160</h3>
        </div>
        <div className="flex text-white gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
          </svg>

          <h3 className="font-pop font-semibold text-xl">Email:</h3>
          <h3 className="font-pop font-normal text-xl">
            tuetamstore92@gmail.com
          </h3>
        </div>

        <div className="w-full">
          <iframe
            key={1}
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d645.6555792178594!2d108.52827373178384!3d15.618161016693906!3m2!1i1024!2i768!4f13.1!5e1!3m2!1svi!2s!4v1740575040861!5m2!1svi!2s"
            className="w-full"
            height="300"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactMap;
