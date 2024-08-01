import BasePage from "@/components/BasePage";
import BaseLayout from "@/components/layouts/BaseLayout";
import Header from "@/components/shared/Header";
import axios from "axios";
import Link from "next/link";

const Portofolio = ({ posts }) => {
  const renderPosts = () => {
    return posts.map((post) => (
      <li key={post.id}>
        <Link href={`/portofolios/${post.id}`}>{post.title}</Link>
      </li>
    ));
  };
  return (
    <BaseLayout>
      <BasePage>
        <h1>I am Portofolio page</h1>
        <ul>{renderPosts()}</ul>
      </BasePage>
    </BaseLayout>
  );
};

Portofolio.getInitialProps = async () => {
  let posts = [];

  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    posts = res.data;
  } catch (e) {
    console.log(e);
  }

  return { posts: posts.slice(0, 10) };
};

export default Portofolio;
