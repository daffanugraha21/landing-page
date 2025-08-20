const stats = [
  { id: 1, name: "Pelajari cara membangun profil LinkedIn yang standout, menarik perhatian HR dan perekrut hanya dalam beberapa detik.", value: "Optimasi Profil Profesional" },
  { id: 2, name: "Pelajari strategi jitu untuk terkoneksi dengan profesional, mentor, hingga rekruter—buka lebih banyak pintu peluang karier.", value: "Bangun Jaringan Berkualitas" },
  { id: 3, name: "Mulai dari strategi job hunting, kirim pesan ke HR, hingga tips lolos screening—dibimbing sampai kamu benar-benar siap masuk dunia kerja.", value: "Langsung Siap Kerja" },
];

export default function Benefit() {
  return (
    <>
      <section id="Benefit">
        <div className="bg-gray-900 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="mx-auto flex max-w-xs flex-col gap-y-4"
                >
                  <dt className="text-base/7 text-gray-400">{stat.name}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
