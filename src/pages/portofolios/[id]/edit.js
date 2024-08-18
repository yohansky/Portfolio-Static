import BasePage from "@/components/BasePage";
import BaseLayout from "@/components/layouts/BaseLayout";
import { useRouter } from "next/router";

const Portofolio = () => {
  const router = useRouter();

  return (
    <BaseLayout>
      <BasePage header="Portfolio Detail">{JSON.stringify(portfolio)}</BasePage>
    </BaseLayout>
  );
};

export default Portofolio;
