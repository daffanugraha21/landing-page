const links = [
  { name: "Open roles", href: "#" },
  { name: "Internship program", href: "#" },
  { name: "Our values", href: "#" },
  { name: "Meet our leadership", href: "#" },
];
const stats = [
  { name: "Offices worldwide", value: "12" },
  { name: "Full-time colleagues", value: "300+" },
  { name: "Hours per week", value: "40" },
  { name: "Paid time off", value: "Unlimited" },
];

export default function About() {
  return (
    <>
      <section id="About">
        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVldGluZ3xlbnwwfHwwfHx8MA%3D%3D"
            className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center opacity-20"
          />
          <div
            aria-hidden="true"
            className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:-top-112 sm:ml-16 sm:translate-x-0"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            />
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-7xl lg:mx-0 flex flex-col lg:flex-row gap-x-12">
              <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
                About 
              </h2>
              <p className="mt-8 lg:mt-0 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8 flex-1">
                Belajar LinkedIn dari 0 sampai keterima kerja adalah program komprehensif yang dirancang untuk membantu pemula memahami dan memaksimalkan penggunaan LinkedIn sebagai alat profesional. Mulai dari membuat profil yang menarik, membangun jaringan yang relevan, hingga strategi mencari kerja dan membangun personal branding yang kuat. Program ini mengajarkan langkah demi langkah bagaimana mengoptimalkan fitur LinkedIn agar profilmu lebih mudah ditemukan oleh perekrut dan perusahaan. Selain itu, peserta akan mendapatkan tips praktis untuk berinteraksi dengan profesional lain, mengikuti grup, serta memanfaatkan LinkedIn Learning untuk pengembangan keterampilan. Dengan pendekatan yang mudah dipahami dan contoh nyata, kamu akan siap menghadapi proses pencarian kerja dengan percaya diri dan peluang lebih besar untuk diterima kerja melalui platform LinkedIn.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
