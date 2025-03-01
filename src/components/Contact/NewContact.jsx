import React, { useRef, useState } from 'react';
import emailjs, { send } from '@emailjs/browser';

import ContactMap from './ContactMap';
import FormInput from './FormInput';
import ButtonOutLine from '../Button/ButtonOutLine.jsx';

import { ToastContainer, toast } from 'react-toastify';
function NewContact() {
  const inputs = [
    {
      id: 1,
      name: 'user_name',
      type: 'text',
      placeholder: 'Họ tên',
      errorMessage: 'Vui lòng nhập đúng họ tên',
      pattern: '^[\\p{L} ]{3,30}$',
      required: true
    },
    {
      id: 2,
      name: 'user_tel',
      type: 'tel',
      placeholder: 'Hotline',
      errorMessage: 'Vui lòng nhập đúng hotline',
      pattern: '^0[0-9]{9}',
      required: true
    },
    {
      id: 3,
      name: 'user_add',
      type: 'text',
      placeholder: 'Địa chỉ',
      errorMessage: 'Vui lòng không bỏ trống',
      required: true
    },
    {
      id: 4,
      name: 'user_email',
      type: 'email',
      placeholder: 'Email',
      errorMessage: 'Vui lòng nhập đúng email',
      pattern: '^([^s@]+@[^s@]+.[^s@]+)$',
      required: true
    }
  ];
  const [isSent, setIsSent] = useState(false);

  const handleSendEmail = () => {
    // Gửi email...
    setIsSent(true);
    notify();
  };
  const [values, setValues] = useState({
    username: '',
    phone: '',
    address: '',
    email: ''
  });
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const [error, setError] = useState(false);
  const notify = () => toast('Gửi mail thành công!');
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('tuetamstore92', 'template_ub6t0z4', form.current, {
        publicKey: 'i_bdxDSm3AJUylJI2'
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="  py-10 ">
      <div className=" max-w-[1300px] lg:m-auto  pm:mx-10 relative ">
        <div className="relative text-center ">
          <div className="mb-5 text-center ">
            <h2 className=" font-oxa font-semibold text-[50px] text-primary capitalize">
              Liên Hệ Chúng tôi
            </h2>
          </div>
        </div>
        <div className="grid md:grid-cols-2 pm:grid-cols-1 gap-10 p-2  border-primary border-2 rounded-lg">
          <div className="border p-5 rounded-lg bg-[#F1F0E9]">
            <form ref={form} onSubmit={sendEmail}>
              <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-2 pm:grid-cols-1 gap-5">
                {inputs.map((input) => (
                  <FormInput
                    key={input.id}
                    {...input}
                    value={values[input.name]}
                    onChange={onChange}
                  />
                ))}
              </div>

              {/* message */}
              <div>
                <div
                  className={`w-full border ${
                    error ? 'border-red-500' : 'border-[#443627]'
                  } rounded-xl focus:text-white focus:border-yellow-600 mt-5`}
                >
                  <textarea
                    className="w-full h-40 bg-transparent border-none border-0 text-black py-4 px-6  rounded-xl focus:text-[#443627] focus:outline-none"
                    placeholder="Nội dung"
                    name="message"
                  ></textarea>
                </div>
              </div>

              <div className="mt-5">
                <ButtonOutLine
                  value="Send"
                  onClick={handleSendEmail}
                  name="GỬI ĐI"
                />
              </div>
              {isSent && <ToastContainer />}
            </form>
          </div>
          <ContactMap />
        </div>
      </div>
    </div>
  );
}

export default NewContact;
