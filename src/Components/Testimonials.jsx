import React from "react";

export default function InfiniteMovingCardsDemo() {
  const Testimonials = [
    {
      id: "1",
      images: "./images/aaa.jpg",
      name: "Didik Sugiarto, S.Si, Apt",
      des: "Owner Apotek XP Farma Yogyakarta",
      pesan:
        "Banyak yang berpikir bahwa daftar 'paten' merek itu hanya bisa dilakukan oleh perusahaan besar. Padahal usaha yang tidak besar seperti saya juga bisa!",
    },
    {
      id: "2",
      images: "./images/a1.jpg",
      name: "Muhammad Rifky Syaifullah",
      des: "Produsen obat herbal SIMPROFIT Pekanbaru-Riau",
      pesan:
        "Bangga! Dengan pendaftaran merek, akhirnya merek obat herbal kami bisa tercatat secara nasional dan internasional dalam Global Brand Database.",
    },
  ];

  return (
    <main id="testimoni">
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-bold text-4xl text-black">Testimoni</h2>
            <h3 className="font-semibold text-xl text-black mb-7">
              Apa Kata Pelanggan Kami
            </h3>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 20"
              className="w-full h-6 lg:h-10"
            >
              <path
                d="M0,10 Q50,0 100,10 T200,10"
                stroke="#f7c948"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {Testimonials.map((data) => (
              <li
                className="list-none bg-white rounded-2xl border border-gray-200 p-8 shadow-md"
                key={data.id}
              >
                <div className="flex items-center">
                  <div className="w-24 h-24 overflow-hidden rounded-full">
                    <img
                      className="w-full h-full object-cover"
                      src={data.images}
                      alt={data.name}
                    />
                  </div>
                  <div className="ml-5">
                    <h2 className="text-xl font-bold text-black mb-2">
                      {data.name}
                    </h2>
                    <p className="text-md font-medium text-gray-700">
                      {data.des}
                    </p>
                  </div>
                </div>
                <p className="mt-6 text-gray-900 text-[30px] leading-relaxed">
                  {data.pesan}
                </p>
              </li>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
