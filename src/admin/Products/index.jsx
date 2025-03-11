import React, { useState } from 'react';
import {
  database,
  storage,
  ref,
  set,
  push,
  storageRef,
  uploadBytes,
  getDownloadURL,
  serverTimestamp
} from '../../App';

function ProductAdmin() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [images, setImages] = useState({
    image_1: null,
    image_2: null,
    image_3: null,
    image_4: null,
    image_5: null
  });

  const handleImageUpload = (event, key) => {
    if (event.target.files[0]) {
      setImages((prev) => ({ ...prev, [key]: event.target.files[0] }));
    } else {
      console.log(`No image file selected for ${key}.`);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!images.image_1 || !name || !price) {
      alert('Please enter complete information');
      return;
    }

    const uploadedImages = {};
    for (const key in images) {
      const imageRef = storageRef(storage, `images/${images[key].name}`);
      const imageSnapshot = await uploadBytes(imageRef, images[key]);
      uploadedImages[key] = await getDownloadURL(imageSnapshot.ref);
    }

    const newsRef = push(ref(database, 'Products'));
    set(newsRef, {
      name,
      price,
      image_1: uploadedImages.image_1,
      image_2: uploadedImages.image_2,
      image_3: uploadedImages.image_3,
      image_4: uploadedImages.image_4,
      image_5: uploadedImages.image_5,
      createdAt: serverTimestamp()
    })
      .then(() => {
        alert('Data uploaded successfully!');
      })
      .catch((error) => {
        alert('Failed to upload data: ' + error);
      });
  };

  return (
    <form
      className="space-y-6 border-2 p-6 bg-white rounded-lg"
      onSubmit={handleSubmit}
    >
      <div className="rounded-md shadow-sm">
        <h1>Thêm sản phẩm</h1>
        <div className="flex flex-col gap-3 my-3">
          <input
            type="text"
            className="form-control outline-none border rounded-lg p-2"
            placeholder="Tên sản phẩm"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            className="form-control outline-none border rounded-lg p-2"
            placeholder="Giá"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="custom-file flex flex-col gap-3">
          <label className="flex flex-col border rounded-lg p-3">
            Ảnh 1
            <input
              type="file"
              className="form-control"
              onChange={(e) => handleImageUpload(e, 'image_1')}
            />
          </label>
          <label className="flex flex-col border rounded-lg p-3">
            Ảnh 2
            <input
              type="file"
              className="form-control"
              onChange={(e) => handleImageUpload(e, 'image_2')}
            />
          </label>
          <label className="flex flex-col border rounded-lg p-3">
            Ảnh 3
            <input
              type="file"
              className="form-control"
              onChange={(e) => handleImageUpload(e, 'image_3')}
            />
          </label>
          <label className="flex flex-col border rounded-lg p-3">
            Ảnh 4
            <input
              type="file"
              className="form-control"
              onChange={(e) => handleImageUpload(e, 'image_4')}
            />
          </label>
          <label className="flex flex-col border rounded-lg p-3">
            Ảnh 5
            <input
              type="file"
              className="form-control"
              onChange={(e) => handleImageUpload(e, 'image_5')}
            />
          </label>
        </div>
        <button
          type="submit"
          className="py-3 w-full bg-[#6366f1] text-white font-rob mt-4 rounded-lg"
        >
          Đăng
        </button>
      </div>
    </form>
  );
}

export default ProductAdmin;
