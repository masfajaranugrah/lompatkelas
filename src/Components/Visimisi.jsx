import React from 'react';

function Visimisi() {
  return (
    <div id='visi-and-misi' className="py-12  my-20">
      <section className="container mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-7">Visi & Misi</h2>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Visi Section */}
          <div className="flex-1 bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center mb-6">
              <img src="images/icon-04.svg" alt="Visi Icon" className="w-12 h-12 mr-4" />
              <h4 className="text-2xl font-bold text-[#fa9161]">Visi</h4>
            </div>
            <ul className="list-disc pl-6 space-y-2">
              <li>Menjadi perusahaan konsultan kekayaan intelektual yang terkemuka di Indonesia.</li>
            </ul>
          </div>

          {/* Misi Section */}
          <div className="flex-1 bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center mb-6">
              <img src="images/icon-05.svg" alt="Misi Icon" className="w-12 h-12 mr-4" />
              <h4 className="text-2xl font-bold text-[#fa9161]">Misi</h4>
            </div>
            <ul className="list-disc pl-6 space-y-2">
              <li> Membantu pendaftaran kekayaan intelektual secara cepat dan akurat.</li>
              <li> Memberikan sosialisasi dan edukasi kepada masyarakat luas tentang pentingnya perlindungan dan penghargaan terhadap kekayaan intelektual.</li>
              <li> Membangun kerja sama yang saling menguntungkan dengan stakeholder di bidang kekayaan intelektual.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Visimisi;
