import { useEffect, useState } from "react";
import api from "../../../services/getService"
import { GET_ALL_PRODUCTS } from "../../../utils/constants";
import { Col, Container, Row } from "react-bootstrap";
import type { Product } from "../../../utils/productInterface";
import CommonButton from "../../../components/common/commonButton/CommonButton";
import { CartIcon } from "../../../assets/images/icons/SvgIcons";
import "./Dashboard.scss";

const Dashboard = () => {

  const [products, setProducts] = useState<Product[]>([]);

  const getData = async () => {
    try {
      const data = await api({
        url: GET_ALL_PRODUCTS,
        method: "get",
        params: {}
      });
      console.log("data", data)
      setProducts(data?.data?.products)
    } catch (error) {
      console.log("error", error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="dashboard">
      <Container>
        <div className="dashboard_header">
          <h1>Products</h1>
          <p>Explore available products and open details to review full information.</p>
        </div>
        <Row className="g-4">
          {products.map((item) => (
            <Col key={item?.id} md={6} lg={4}>
              <div className="dashboard_card">
                <div className="dashboard_card_img">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="dashboard_card_content">
                  <h4>{item.name}</h4>
                  <p className="dashboard_card_category">{item.category}</p>
                  <p className="dashboard_card_description">{item.description}</p>
                </div>
                <div className="dashboard_card_footer">
                  <p className="dashboard_card_price">${item.price}</p>
                  <div className="dashboard_card_actions">
                    <CommonButton
                      title="View Details"
                      role="link"
                      to={`/dashboard/view-detail/${item.id}`}
                      className="small_btn border_btn"
                      fluid
                    />
                    <CommonButton title="Add to Cart" svgIcon={<CartIcon />} className="small_btn" fluid />
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Dashboard