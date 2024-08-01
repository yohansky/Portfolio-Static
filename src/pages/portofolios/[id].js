import BasePage from "@/components/BasePage";
import BaseLayout from "@/components/layouts/BaseLayout";
import axios from "axios";
import { useRouter } from "next/router";

const Portofolio = ({ portofolio }) => {
  const router = useRouter();
  return (
    <BaseLayout>
      <BasePage>
        <h1>I am Portofolio Page</h1>
        {/* <h2>{router.query.id}</h2> */}
        <h1>{portofolio.title}</h1>
        <p>BODY: {portofolio.body}</p>
        <p>ID: {portofolio.id}</p>
      </BasePage>
    </BaseLayout>
  );
};

Portofolio.getInitialProps = async ({ query }) => {
  let post = {};

  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`);
    post = res.data;
  } catch (err) {
    console.log(err);
  }

  return { portofolio: post };
};

export default Portofolio;
