import React, { useRef, useState } from 'react';
import emailjs, { send } from '@emailjs/browser';
import EmailSentNotification from './EmailSentNotification';
import ContactMap from './ContactMap';
import FormInput from './FormInput';
import ButtonOutLine from '../Button/ButtonOutLine.jsx';

function NewContact() {
  const inputs = [
    {
      id: 1,
      name: "user_name",
      type: "text",
      placeholder: "Đơn vị",
      errorMessage: "Vui lòng nhập đúng đơn vị",
      pattern:"^[A-Za-z0-9]{3,30}$",
      required:true
    },
    {
      id: 2,
      name: "user_tel",
      type: "tel",
      placeholder: "Hotline",
      errorMessage: "Vui lòng nhập đúng hotline",
      pattern:"^0[0-9]{9}",
      required:true
    },
    {
      id: 3,
      name: "user_add",
      type: "text",
      placeholder: "Địa chỉ",
      errorMessage: "Vui lòng không bỏ trống",
      required:true
    },
    {
      id: 4,
      name: "user_email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Vui lòng nhập đúng email",
      pattern:"^([^\s@]+@[^\s@]+\.[^\s@]+)$",
      required:true
    },
   
  ]
  const [isSent, setIsSent] = useState(false);

  const handleSendEmail = () => {
    // Gửi email...
    setIsSent(true);
  };
  const [values, setValues] = useState({
    username: "",
    phone: "",
    address: "",
    email: "",
  })
  const onChange = (e) =>{
    setValues({...values, [e.target.name]: e.target.value})
  }
 
  const [error, setError] = useState(false)

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_tuetam', 
      'template_st3ewci',
       form.current, {
        publicKey: 'CvbjwskOPXvbtYvm4',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
 
  return (
    <div className=" bg-[#000022] pt-10 ">
    <div className=' max-w-[1300px] lg:m-auto  pm:mx-10 relative'>
        <div className='relative text-center '>
            <div className='mb-5 text-center font-oxa'>
                <h2 className='  font-normal text-[40px] text-white capitalize'>Liên Hệ Quảng Cáo</h2>
            </div>
            
        </div>
       <div className='grid md:grid-cols-2 pm:grid-cols-1 gap-10'>
        <div className='border p-5'>
          <form ref={form} onSubmit={sendEmail}>
               <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-2 pm:grid-cols-1 gap-5'>
            {inputs.map((input) =>(
               <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
              ))}
             </div>
            {/* topic */}
              <div>
                <div className={`w-full border ${error ? 'border-red-500' : 'border-[#cbd5e1]'} rounded-xl focus:text-white focus:border-yellow-600 mt-5`}>
                  <input className='w-full bg-transparent py-4 px-6 text-yellow-50 focus:outline-none' name='title' type='text' placeholder='Chủ đề'/>
                  </div>
              </div>

              {/* message */}
             <div>
                <div className={`w-full border ${error ? 'border-red-500' : 'border-[#cbd5e1]'} rounded-xl focus:text-white focus:border-yellow-600 mt-5`}>
                  <textarea className='w-full bg-transparent border-none border-0 text-yellow-50 py-4 px-6  rounded-xl focus:text-white focus:outline-none'  placeholder='Nội dung' name="message">
                  </textarea>
                </div>
             </div>

          <div className='w-full border mt-5 border-[#cbd5e1] rounded-xl focus:text-white focus:border-yellow-600'>
            <input className='w-full bg-transparent py-4 px-6 text-yellow-50 focus:outline-none' type='file' name='file' accept='.jpg, .jpeg, .png, .pdf, .docs, .doc' />
          </div>
          <div className='mt-5'>
            
            <ButtonOutLine value="Send" onClick={handleSendEmail} name="GỬI ĐI"/>
        </div>
        {isSent && <EmailSentNotification />}
          </form>
        </div>
       <ContactMap/>
       </div>
    </div>
   
</div>
    )
  }


export default NewContact
