import { useGetData } from "@/actions";
import BasePage from "@/components/BasePage";
import BaseLayout from "@/components/layouts/BaseLayout";
import Link from "next/link";

const Portofolio = () => {
  const { data, loading } = useGetData("api/v1/posts");

  const renderPosts = (posts) => {
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
        {loading && <p>Loading data...</p>}
        {data && <ul>{renderPosts(data)}</ul>}
      </BasePage>
    </BaseLayout>
  );
};

export default Portofolio;
