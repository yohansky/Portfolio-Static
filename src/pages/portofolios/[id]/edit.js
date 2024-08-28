import { useGetPortfolio, useUpdatePortfolio } from "@/actions/portfolio";
import BasePage from "@/components/BasePage";
import BaseLayout from "@/components/layouts/BaseLayout";
import PortfolioForm from "@/components/PortfolioForm";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { Col, Row } from "reactstrap";

const PortfolioEdit = () => {
  const router = useRouter();
  const { data: initialData } = useGetPortfolio(router.query.id);
  console.log(initialData);

  const _updatePortfolio = async (data) => {
    await useUpdatePortfolio(router.query.id, data);
    toast.success("Portfolio has been updated!", { autoClose: 2000 });

    // useUpdatePortfolio(router.query.id, data)
    // .then(() => toast.success("Portfolio has been updated!", { autoClose: 2000 }))
    // .catch(() => toast.error('Ooops some error!', {autoClose: 2000}))
  };

  return (
    <BaseLayout>
      <BasePage header="Portfolio Edit">
        <Row>
          <Col md="8">{initialData && <PortfolioForm initialData={initialData} onSubmit={_updatePortfolio} />}</Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

export default PortfolioEdit;
