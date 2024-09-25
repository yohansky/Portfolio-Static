import { deletePortfolio } from "@/actions/portfolio";
import BasePage from "@/components/BasePage";
import BaseLayout from "@/components/layouts/BaseLayout";
import PortfolioCard from "@/components/PortfolioCard";
import PortfolioApi from "@/lib/api/portfolios";
import { useRouter } from "next/router";
import { useState } from "react";
import { Row, Col, Button, Card, CardHeader, CardBody, CardTitle, CardText, ListGroupItemHeading, List } from "reactstrap";

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
          {/* {portfolios.map((portfolio) => (
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
          ))} */}
          {/* Blanja */}
          <Col
            // key={portfolio._id}
            md="4"
            // onClick={() => {
            //   router.push("/portofolios/[id]", `/portofolios/${portfolio._id}`);
            // }}
            onClick={() => {
              window.location.href = "https://github.com/yohansky/Fe-Blanja-React";
            }}
            style={{ cursor: "pointer" }}
          >
            {/* <PortfolioCard /> */}
            <Card className="portfolio-card">
              <CardHeader className="portfolio-card-header">Fullstack Web</CardHeader>
              <CardBody>
                <p className="portfolio-card-city">Fiber(Golang), ReactJS, PostgreSQL</p>
                <CardTitle className="portfolio-card-title">Blanja</CardTitle>
                <CardText className="portfolio-card-text">
                  Tech Used :
                  <ul>
                    <li>JWT</li>
                    <li>Migration</li>
                  </ul>
                </CardText>
              </CardBody>
            </Card>
          </Col>
          {/* Food Recipe */}
          <Col
            md="4"
            onClick={() => {
              window.location.href = "https://github.com/yohansky/Fe-Food-Recipe";
            }}
            style={{ cursor: "pointer" }}
          >
            <Card className="portfolio-card">
              <CardHeader className="portfolio-card-header">Fullstack Web</CardHeader>
              <CardBody>
                <p className="portfolio-card-city">Fiber(Golang), ReactJS, PostgreSQL</p>
                <CardTitle className="portfolio-card-title">Mama Recipe</CardTitle>
                <CardText className="portfolio-card-text">
                  Tech Used :
                  <ul>
                    <li>Cloudinary</li>
                    <li>JWT</li>
                    <li>Migration</li>
                  </ul>
                </CardText>
              </CardBody>
            </Card>
          </Col>
          {/* Pe World */}
          <Col
            md="4"
            onClick={() => {
              window.location.href = "https://github.com/yohansky/Fe-HireJob-Next";
            }}
            style={{ cursor: "pointer" }}
          >
            <Card className="portfolio-card">
              <CardHeader className="portfolio-card-header">Fullstack Web</CardHeader>
              <CardBody>
                <p className="portfolio-card-city">Fiber(Golang), NextJS, PostgreSQL</p>
                <CardTitle className="portfolio-card-title">Peworld Hiring</CardTitle>
                <CardText className="portfolio-card-text">
                  Tech Used :
                  <ul>
                    <li>JWT</li>
                    <li>Migration</li>
                  </ul>
                </CardText>
              </CardBody>
            </Card>
          </Col>
          {/* Laravel FS */}
          <Col
            md="4"
            onClick={() => {
              window.location.href = "https://github.com/yohansky/Minicamp-Laravel1";
            }}
            style={{ cursor: "pointer" }}
          >
            <Card className="portfolio-card">
              <CardHeader className="portfolio-card-header">Fullstack Web</CardHeader>
              <CardBody>
                <p className="portfolio-card-city">Laravel(PHP), MySQL</p>
                <CardTitle className="portfolio-card-title">E-Commerce Laravel</CardTitle>
                <CardText className="portfolio-card-text">
                  Tech Used :
                  <ul>
                    <li>Cloudinary</li>
                    <li>Migration</li>
                  </ul>
                </CardText>
              </CardBody>
            </Card>
          </Col>
          {/* Rest API Express Mongo */}
          <Col
            md="4"
            onClick={() => {
              window.location.href = "https://github.com/yohansky/express-basic";
            }}
            style={{ cursor: "pointer" }}
          >
            <Card className="portfolio-card">
              <CardHeader className="portfolio-card-header">Backend</CardHeader>
              <CardBody>
                <p className="portfolio-card-city">ExpressJS, MongoDB</p>
                <CardTitle className="portfolio-card-title">Express REST API</CardTitle>
                <CardText className="portfolio-card-text">
                  <ul>
                    <li>Migration</li>
                  </ul>
                </CardText>
              </CardBody>
            </Card>
          </Col>
          {/* Rest API SpringBoot Mysql */}
          <Col
            md="4"
            onClick={() => {
              window.location.href = "https://github.com/yohansky/SpringBoot-Backend-ems";
            }}
            style={{ cursor: "pointer" }}
          >
            <Card className="portfolio-card">
              <CardHeader className="portfolio-card-header">Backend</CardHeader>
              <CardBody>
                <p className="portfolio-card-city">Spring Boot, MySQL</p>
                <CardTitle className="portfolio-card-title">Employee Management System </CardTitle>
                <CardText className="portfolio-card-text">
                  <ul>
                    <li>Migration</li>
                    <li>Rest API</li>
                    <li>Relation</li>
                  </ul>
                </CardText>
              </CardBody>
            </Card>
          </Col>
          {/* Go React Docker (E-Commerce apps) */}
          <Col
            md="4"
            onClick={() => {
              window.location.href = "https://github.com/yohansky/Belajar-Docker2";
            }}
            style={{ cursor: "pointer" }}
          >
            <Card className="portfolio-card">
              <CardHeader className="portfolio-card-header">Backend</CardHeader>
              <CardBody>
                <p className="portfolio-card-city">Fiber(Golang), MySQL</p>
                <CardTitle className="portfolio-card-title">Untitle E-Commerce REST API</CardTitle>
                <CardText className="portfolio-card-text">
                  Work In Progress(WIP) <br />
                  Tech Used :
                  <ul>
                    <li>Docker</li>
                    <li>Migration</li>
                    <li>JWT</li>
                    <li>Redis</li>
                    <li>Stripe</li>
                    <li>SMTP</li>
                  </ul>
                  Features :
                  <ul>
                    <li>Creating an extensive backend with FIber</li>
                    <li>Working with a MySQL database andd GORM</li>
                    <li>JWT authentication with HTTP-Only cookie</li>
                    <li>Creating custom authentication middleware</li>
                    <li>Integrating the Stripe API</li>
                    <li>SMTP & Much more!</li>
                  </ul>
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

// export async function getStaticProps() {
//   const json = await new PortfolioApi().getAll();
//   const portfolios = json.data;

//   return {
//     props: { portfolios },
//   };
// }

export default Portfolios;
