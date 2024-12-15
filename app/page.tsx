import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Alplotlib'e hoşgeldin 👋
      </h1>
      <p className="mb-4">{`Merhaba!

Ben Alp, burası öğrendiklerimi sizlerle paylaşmaktan keyif aldığım, ilham dolu bir blog alanı. Yazılarımda, bazen bir kod satırının ardındaki mantığı, bazen bir problemi nasıl çözdüğümü, bazen de yeni keşfettiğim bir teknolojiyi anlatıyorum. Amacım hem öğretici hem de keyifli bir deneyim sunabilmek.

Eğer siz de teknoloji, yazılım veya geliştirme üzerine bir şeyler öğrenmek istiyorsanız doğru yerdesiniz! Hadi, beraber keşfetmeye başlayalım. 🥳`}</p>

      <button className="bg-violet-600 py-1 rounded-full px-5 cursor-pointer font-bold mt-4">
        Yazılarım
      </button>

      <div className="my-4">
        <BlogPosts />
      </div>
    </section>
  );
}
