import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import Button from '../Button/Button';
import ButtonOutLine from '../Button/ButtonOutLine';
import SentWarning from './SentWarning';

function FormAds() {
    const [descriptions, setDescriptions] = useState([{ desc: '' }]);
    const [images, setImages] = useState([]);
    const [videos, setVideos] = useState([]);
    const [isAlertLink, setIsLertLink] = useState(false);
    const [isAlertImage, setIsLertImage] = useState(false);
    const [isAlertVideo, setIsLertVideo] = useState(false);

    const handleUploadFileImage = (event) => {
        // Filter for image files and ensure the total count does not exceed 10
        const selectedImages = Array.from(event.target.files).filter(file => file.type.startsWith('image'));
        if (selectedImages.length > 10) {
            return setIsLertImage(true)
        }
        setImages(selectedImages);
    };

    const handleUploadFileVideo = (event) => {
        // Filter for video files and ensure the total count does not exceed 2
        const selectedVideos = Array.from(event.target.files).filter(file => file.type.startsWith('video'));
        if (selectedVideos.length > 2) {
            // alert("Không thể upload quá 2 video.");
            return setIsLertVideo(true)
        }
        setVideos(selectedVideos);
    };

    const handleDescriptionChange = (index) => (event) => {
        const newDescriptions = descriptions.map((item, idx) => {
            if (idx === index) {
                return { ...item, desc: event.target.value };
            }
            return item;
        });
        setDescriptions(newDescriptions);
    };
    
    const handleAddDescription = () => {
        if(descriptions.length <6){
            setDescriptions([...descriptions, { desc: '' }]);
        }else{
            return setIsLertLink(true)
        }
      
    };
    
    const handleDeleteDescription = () => {
      if (descriptions.length > 1) {
          setDescriptions(descriptions.slice(0, -1));
      } 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Brand:', descriptions);
        console.log('Images:', images);
        console.log('Videos:', videos);
        // Here you would typically handle the submission, like sending data to a server
    };

    return (
       <div className=' relative'>
           <div className='bg-[url(images/bgform.png)] bg-cover px-auto py-20'>
            <h2 className='mt-5 mb-3 font-bold text-xl text-start ml-20'>GỬI THÔNG TIN QUẢNG CÁO</h2>
            </div>
            
            <form className="space-y-6 border-2 p-6 max-w-[1300px] m-auto relative pt-10 bg-white rounded-lg" onSubmit={handleSubmit}>
                <div className="rounded-md shadow-sm">
                {descriptions.map((item, index) => (
                   <div className='flex flex-col gap-1' key={index}>
                        <label htmlFor="Link">Nhập link bài viết số {index+1}</label>
                        <input
                            key={index}
                            className="form-control outline-none focus:ring-1 border rounded-lg p-2 mb-4 "
                            placeholder={`Link bài viết ${index + 1}`}
                            value={item.desc}
                            onChange={handleDescriptionChange(index)}
                        />
                   </div>
                ))}
                <div className='flex gap-3 w-full pb-5'>
                    <Button onClick={handleAddDescription} name="Thêm Link"/>
                 
                  {descriptions.length > 1 && (
                    <ButtonOutLine onClick={handleDeleteDescription} name="Xóa bớt"/>
                   
                  )}
                   {isAlertLink && <SentWarning title="Bạn đã đạt giới hạn của việc thêm tin !"/>}
                </div>
                    
                    <div className="custom-file py-3 border rounded px-2 mb-3">
                        <input type="file" multiple accept="image/*" onChange={handleUploadFileImage} />
                    </div>
                    {isAlertImage && <SentWarning title="Không thể upload quá 10 ảnh !"/>}
                    <div className="custom-file py-3 border rounded px-2 mb-3">
                        <input type="file" multiple accept="video/*" onChange={handleUploadFileVideo} />
                    </div>
                    {isAlertVideo && <SentWarning title="Không thể upload quá 2 video !"/>}
                    <button type="submit" className='py-3 w-full bg-yellow-600 text-white font-rob mt-4 rounded-lg'>GỬI ĐI</button>
                </div>
            </form>
            <Footer/>
       </div>
    );
}

export default FormAds;
