import { Col, Container, Row } from "react-bootstrap";
import CommonButton from "../../../components/common/commonButton/CommonButton";
import api from "../../../services/getService";
import { useEffect, useState } from "react";
import type { Product } from "../../../utils/productInterface";
import { ROUTES } from "../../../utils/routes";
import { useParams } from "react-router-dom";
import "./ViewDetail.scss";

const ViewDetail = () => {
  const [productDetail, setProductDetail] = useState<Product>();
  const { id } = useParams();

  const getProducts = async () => {
    try {
      const response = await api({
        url: `v1/products/${id}`,
        method: "get",
      });
      setProductDetail(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="view_detail">
      <Container>
        <div className="view_detail_back">
          <CommonButton
            title="Back to Dashboard"
            role="link"
            to={ROUTES.DASHBOARD}
            className="small_btn border_btn"
          />
        </div>
        <Row className="g-4">
          <Col lg={6}>
            <div className="view_detail_image">
              <img src={productDetail?.image} alt="Product" />
            </div>
          </Col>
          <Col lg={6}>
            <div className="view_detail_content">
              <h3 className="text-end ">{productDetail?.category}</h3>
              <h1>{productDetail?.name}</h1>
              <p className="view_detail_price">${productDetail?.price}</p>
              <p className="view_detail_description">
                {productDetail?.description}
              </p>
              <div className="view_detail_actions">
                <CommonButton title="Add to Cart" className="small_btn" />
                <CommonButton
                  title="Buy Now"
                  className="small_btn secondarybtn"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ViewDetail;
