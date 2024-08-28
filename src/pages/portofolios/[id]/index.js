import BasePage from "@/components/BasePage";
import BaseLayout from "@/components/layouts/BaseLayout";
import PortfolioApi from "@/lib/api/portfolios";

const Portfolio = ({ portfolio }) => {
  return (
    <BaseLayout>
      <BasePage header="Portfolio Detail">{JSON.stringify(portfolio)}</BasePage>
    </BaseLayout>
  );
};

// SSR

// export async function getServerSideProps({ query }) {
//   const json = await new PortfolioApi().getById(query.id);
//   const portfolio = json.data;

//   return { props: { portfolio } };
// }

// Static

//this func is execute at the build time
export async function getStaticPaths() {
  const json = await new PortfolioApi().getAll();
  const portfolios = json.data;
  // get path we want pre-render based on portfolio ID
  const paths = portfolios.map((portfolio) => {
    return {
      params: { id: portfolio._id },
    };
  });
  //fallback: false means that "not found pages" will be resolved into 404 page
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const json = await new PortfolioApi().getById(params.id);
  const portfolio = json.data;
  return { props: { portfolio } };
}

export default Portfolio;
