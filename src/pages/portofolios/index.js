import BasePage from "@/components/BasePage";
import BaseLayout from "@/components/layouts/BaseLayout";
import PortfolioCard from "@/components/PortfolioCard";
import PortfolioApi from "@/lib/api/portfolios";
import Link from "next/link";
import { useRouter } from "next/router";
import { Row, Col } from "reactstrap";

const Portofolios = ({ portfolios }) => {
  const router = useRouter();
  // const renderPortfolios = (portfolios) => {
  //   return portfolios.map((portfolio) => (
  //     <li key={portfolio._id} style={{ fontSize: "20px" }}>
  //       <Link as={`/portfolios/${portfolio._id}`} href="/portfolios/[id]">
  //         {portfolio.title}
  //       </Link>
  //     </li>
  //   ));
  // };
  return (
    <BaseLayout>
      <BasePage header="Portfolios" className="portfolio-page">
        {/* {JSON.stringify(portfolios)} */}
        {/* <ul>{renderPortfolios(portfolios)}</ul> */}
        <Row>
          {portfolios.map((portfolio) => (
            <Col
              key={portfolio._id}
              md="4"
              onClick={() => {
                router.push("/portofolios/[id]", `/portofolios/${portfolio._id}`);
              }}
            >
              <PortfolioCard portfolio={portfolio} />
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

export default Portofolios;
