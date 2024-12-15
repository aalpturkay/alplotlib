import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Alplotlib'e hoşgeldin 👋
      </h1>
      <p className="mb-4">{`Merhaba, ben Alp burası blog yazılarımı okuyabileceğiniz ve öğrendiklerimi sizlere aktardığım bir alan. Umarım öğretici ve eğlenceli olur 🥳`}</p>
      <div className="my-8">{/* <BlogPosts /> */}</div>
    </section>
  );
}
