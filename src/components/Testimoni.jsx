const people = [
  {
    name: "Fahmi Rahman – Backend Developer – Gojek",
    role: "Setelah optimasi profil LinkedIn lewat program ini, saya dapet interview pertama dari recruiter luar negeri. Sekarang kerja di Gojek.",
    imageUrl:
      "https://ui-avatars.com/api/?name=Belajar+LinkedIn&background=4f46e5&color=fff",
  },
  {
    name: "Nadya Fitri – UI/UX Designer – Bukalapak",
    role: "“BelajarLinkedIn bikin saya paham cara bikin profil yang stand out. Cuma seminggu setelah update, langsung dipanggil wawancara.",
    imageUrl:
      "https://ui-avatars.com/api/?name=Belajar+LinkedIn&background=4f46e5&color=fff",
  },
  {
    name: "Dewi Lestari – Data Analyst – Telkom Indonesia",
    role: "Dulu gak pede apply kerja. Setelah ikut kelas, mulai aktif di LinkedIn dan akhirnya keterima di Telkom.",
    imageUrl:
      "https://ui-avatars.com/api/?name=Belajar+LinkedIn&background=4f46e5&color=fff",
  },
  {
    name: "Arif Setiawan – Mobile Developer – Ruangguru",
    role: "Dulu cuma apply via job portal. Sekarang, recruiter yang kontak saya duluan. Kelas ini ngebuka peluang besar banget.",
    imageUrl:
      "https://ui-avatars.com/api/?name=Belajar+LinkedIn&background=4f46e5&color=fff",
  },
  {
    name: "Yulianto – DevOps Engineer – Ruang Belajar",
    role: "LinkedIn saya dulunya sepi. Setelah ikut kelas, jadi ramai interaksi dan dilirik HRD. Keren banget hasilnya!",
    imageUrl:
      "https://ui-avatars.com/api/?name=Belajar+LinkedIn&background=4f46e5&color=fff",
  },
  {
    name: "Salsabila Anjani – Software Engineer – Shopee",
    role: "Materinya praktis dan gampang dipahami. Profil saya langsung lebih profesional dan akhirnya dapet kerja impian.",
    imageUrl:
      "https://ui-avatars.com/api/?name=Belajar+LinkedIn&background=4f46e5&color=fff",
  },
];

export default function Testimoni() {
  return (
    <>
      <section id="Testimoni">
        <div className="bg-gray-900 py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
            <div className="max-w-xl">
              <h2 className="text-3xl font-semibold tracking-tight text-pretty text-white sm:text-4xl">
                Testimoni Alumni
              </h2>
              <p className="mt-6 text-lg/8 text-gray-400">
                Dengarkan langsung cerita sukses para alumni yang telah merasakan manfaat dari program BelajarLinkedIn. Mereka datang dari berbagai latar belakang dan kini berhasil meniti karier impian di industri teknologi. Pengalaman nyata mereka bisa jadi inspirasi dan bukti bahwa langkah kecil hari ini bisa membuka peluang besar esok hari.
              </p>
            </div>
            <ul
              role="list"
              className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
            >
              {people.map((person) => (
                <li key={person.name}>
                  <div className="flex items-center gap-x-6">
                    <img
                      alt=""
                      src={person.imageUrl}
                      className="size-16 rounded-full outline-1 -outline-offset-1 outline-white/10"
                    />
                    <div>
                      <h3 className="text-base/7 font-semibold tracking-tight text-white">
                        {person.name}
                      </h3>
                      <p className="text-sm/6 font-semibold text-indigo-400">
                        {person.role}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
