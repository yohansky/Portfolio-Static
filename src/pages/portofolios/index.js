import { useGetPost } from "@/actions";
import BasePage from "@/components/BasePage";
import BaseLayout from "@/components/layouts/BaseLayout";
import Link from "next/link";

// const fetcher = (url) => axios.get(url).then((res) => res.data);
const Portofolio = () => {
  const { data, error, loading } = useGetPost();

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
        {error && <div className="alert alert-danger">{error.message}</div>}
        {data && <ul>{renderPosts(data)}</ul>}
      </BasePage>
    </BaseLayout>
  );
};

export default Portofolio;
