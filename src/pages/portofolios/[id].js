import { useGetData } from "@/actions";
import BasePage from "@/components/BasePage";
import BaseLayout from "@/components/layouts/BaseLayout";
import { useRouter } from "next/router";

const Portofolio = () => {
  const router = useRouter();
  const { data: portofolio, loading } = useGetData(router.query.id ? `/api/v1/posts/${router.query.id}` : null);
  return (
    <BaseLayout>
      <BasePage>
        {loading && <p>Loading Data...</p>}
        {portofolio && (
          <>
            {/* {JSON.stringify(portofolio)} */}
            <h1>I am Portofolio Page</h1>
            <h1>{portofolio.title}</h1>
            <p>BODY: {portofolio.body}</p>
            <p>ID: {portofolio.id}</p>
          </>
        )}
      </BasePage>
    </BaseLayout>
  );
};

export default Portofolio;
