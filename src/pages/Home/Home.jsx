import React from "react";
import PostSide from "../../components/PostSide/PostSide";
import { Col, Container, Row, Spinner, ListGroup } from "react-bootstrap";

import "./Home.css";
import RightSide from "../../components/RightSide/RightSide";
import Main from "../../components/main/homes/Main";
import Discover from "../../components/discover/Discover";
import Footer from "../../components/footer/Footer";


const Home = () => {

  return (
    <>
      <div className="Home">
        <Container>
          <Row style={{ width: '100%' }}>


            {/* <Col md={9} className="blog-main d-flex pb-4 flex-wrap gap-4 ">
             {articles.map((article, idx) => (
                            <ArticlePreview article={article} key={idx} />
                    ))
                    } 
          </Col> */}
            {/* <Col mb={3} className="blog-sidebar py-4">
            <ListGroup variant="flush">
              <h2>Latest Articles</h2>

               {sidebarArticles.map((article, idx) => (
                            <LinkContainer to={`/article/${article._id}`} key={idx}>
                                 <ListGroup.Item>{article.title}</ListGroup.Item>
                            </LinkContainer>
                        ))} 
            </ListGroup>
          </Col> */}
            <Main />
            <Discover />
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Home;
