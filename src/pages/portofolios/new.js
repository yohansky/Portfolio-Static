import { createPortfolio } from "@/actions/portfolio";
import BasePage from "@/components/BasePage";
import BaseLayout from "@/components/layouts/BaseLayout";
import PortfolioForm from "@/components/PortfolioForm";
import Header from "@/components/shared/Header";
import { Col, Row } from "reactstrap";

const PortfolioNew = () => {
  const _createPortfolio = (data) => {
    createPortfolio(data);
  };
  return (
    <BaseLayout>
      <BasePage header="Create Portfolio">
        <Row>
          <Col md="8">
            <PortfolioForm onSubmit={_createPortfolio} />
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

export default PortfolioNew;
