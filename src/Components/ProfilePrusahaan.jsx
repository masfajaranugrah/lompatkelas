import React from 'react'

const ProfilePerusahaan = () => {
  return (
    <div id='profile-perusahaan'>
      <section className="py-12 bg-gray-100 ">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Image Section */}
            <div className="flex justify-center w-full lg:w-1/2">
              <img src="images/2.jpg" alt="About" className="rounded-lg shadow-lg w-full max-w-[500px]" />
            </div>

            {/* Text Section */}
            <div className="text-left w-full lg:w-1/2 px-4 lg:px-8">
              <h4 className="text-lg font-bold text-[#fa9161] mb-2"># Profile Perusahaan</h4>
              <h2 className="text-4xl font-bold text-black leading-tight mb-6">PT. Lompat Kelas</h2>

              <p className="text-lg mb-6">Konsultan Kekayaan Intelektual, Konsultan Manajemen dan Bisnis</p>


              <div className="mt-10">
                {/* <h3 className="text-2xl font-bold mb-4">Bidang Usaha:</h3> */}

                <h3 className="text-2xl font-bold mb-4">Izin dan Kelengkapan Usaha:</h3>
                <ul className="list-disc pl-6 text-lg space-y-2">
                  <li>NPWP: 74.111.086.0-011.000</li>
                  <li>Surat Keputusan Menteri Hukum dan HAM Republik Indonesia: AHU-2463609.AH.01.01.Tahun 2015</li>
                  <li>Surat Izin Usaha Perdagangan (SIUP): 5145/24.1PM/31.74/-1.824.27/2015</li>
                  <li>Tanda Daftar Perusahaan (TDP): 09.03.1.70.101744</li>
                  <li>BPJS Ketenagakerjaan: NPP.19104434</li>
                  <li>Surat Keputusan Pengangkatan Konsultan Kekayaan Intelektual: M.HH-01.HI.09.01 TAHUN 2015</li>
                  <li>Merek: J002015037396</li>
                  <li>Website: <a href="https://www.lompatkelas.com" className="text-blue-500 underline">www.patenonline.com</a></li>
                  <li>Instagram: <a href="https://www.instagram.com/patenonline" className="text-blue-500 underline">@patenonline</a></li>
                  <li>Alamat Kantor: Epicentrum Walk Building Lt. 3 Unit A-306, Kawasan Taman Rasuna, Jl. H.R. Rasuna Said, Kuningan, Jakarta</li>
                  <li>Alamat Kantor Operasional: Perum Tiara Ardi Purbayan, Jl. Mawar IV No.22, Baki, Sukoharjo, Jawa Tengah</li>
                  <li>Bank: 
                    <ul className="list-none pl-0 mt-2">
                      <li>BCA No. 1533366680 a.n. PT. Paten Online Indonesia</li>
                      <li>BNI Syariah No. 0828200884 a.n. PT. Paten Online Indonesia</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProfilePerusahaan
