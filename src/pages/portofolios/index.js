import { deletePortfolio } from "@/actions/portfolio";
import BasePage from "@/components/BasePage";
import BaseLayout from "@/components/layouts/BaseLayout";
import PortfolioCard from "@/components/PortfolioCard";
import PortfolioApi from "@/lib/api/portfolios";
import { useRouter } from "next/router";
import { useState } from "react";
import { Row, Col, Button } from "reactstrap";

const Portfolios = ({ portfolios: initialPortfolios }) => {
  const router = useRouter();
  const [portfolios, setPortfolios] = useState(initialPortfolios);
  const _deletePortfolio = async (e, portfolioId) => {
    e.stopPropagation();
    const isConfirm = confirm("Are you sure you want to delete this portfolio?");
    if (isConfirm) {
      await deletePortfolio(portfolioId);
      setPortfolios(portfolios.filter((p) => p._id !== portfolioId));
    }
  };

  return (
    <BaseLayout>
      <BasePage header="Portfolios" className="portfolio-page">
        <Row>
          {portfolios.map((portfolio) => (
            <Col
              key={portfolio._id}
              md="4"
              onClick={() => {
                router.push("/portofolios/[id]", `/portofolios/${portfolio._id}`);
              }}
            >
              <PortfolioCard portfolio={portfolio}>
                <>
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push("/portofolios/[id]/edit", `/portofolios/${portfolio._id}/edit`);
                    }}
                    className="mr-2"
                    color="warning"
                  >
                    Edit
                  </Button>
                  <Button onClick={(e) => _deletePortfolio(e, portfolio._id)} color="danger">
                    Delete
                  </Button>
                </>
              </PortfolioCard>
            </Col>
          ))}
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

export async function getStaticProps() {
  const json = await new PortfolioApi().getAll();
  const portfolios = json.data;

  return {
    props: { portfolios },
  };
}

export default Portfolios;
