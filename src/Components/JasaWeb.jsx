import React, { useState } from 'react';
import { jasaWeb } from '../db/db';

function JasaWeb() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <section className="relative bg-gray-50">
        <img className="absolute top-0 left-0 w-full h-full object-cover z-0" src="images/shape-16.svg" alt="Bg Shape" />
        
        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center max-w-7xl mx-auto px-4 py-16 space-y-8 lg:space-y-0 lg:space-x-16">
          <div className="animate_left flex-1 lg:text-left text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-6">
              Ayo Segera Patenkan !
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Nama Usaha, Nama Product, Logo, Brand 
              <br/>
               Solusi Kemanan untuk Perlindungan Bisnis
               <br/>
              dan dapatkan <strong>website company profile</strong>  mu sekarang!

            </p>
            <a href="https://demo.lompatkelas.com" target='_blank' className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition">
              Lihat website company profile 👈
            </a>
          </div>
          
          <div className="animate_right flex-1 flex flex-wrap justify-center lg:justify-end space-x-4 space-y-4">
            {jasaWeb.map((item, index) => (
              <img
                key={index}
                className="w-[1000%] rounded-lg object-cover cursor-pointer"
                src={item.images}
                alt={`Image ${index}`}
                onClick={() => openImage(item.images)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal for full-screen image */}
      {selectedImage && (
        <div
          className="fixed z-[99999] inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeImage}
        >
          <img
            src={selectedImage}
            alt="Full Size"
            className="max-w-full max-h-full rounded-lg"
          />
        </div>
      )}
    </div>
  );
}

export default JasaWeb;
