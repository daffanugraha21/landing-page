export default function Daftar() {
  return (
    <section id="Daftar">
      <div className="bg-white">
        <div className="mx-auto max-w-7xl min-h-screen flex items-center justify-center px-6 sm:px-6 lg:px-8">
          <div className="relative isolate w-full max-w-3xl px-8 py-16 shadow-2xl sm:rounded-3xl sm:px-16 lg:px-24 bg-gradient-to-r from-yellow-300 to-blue-300">
            {/* Konten Tengah */}
            <div className="max-w-2xl mx-auto text-center text-black">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                DAFTAR SEKARANG JUGA
              </h2>
              <p className="mt-6 text-lg">
                Kuota terbatas, jangan sampai ketinggalan!
              </p>
              <p className="mt-1 text-lg">
                Klik Daftar Sekarang dan wujudkan impianmu.
              </p>
              <div className="mt-10 flex justify-center">
                <a
                  href="#"
                  className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Daftar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
