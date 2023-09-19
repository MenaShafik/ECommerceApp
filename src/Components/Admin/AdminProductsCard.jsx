import React from "react";
import { Button, Card, Col, Modal, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DeleteIcon, EditIcon,StarIcon } from "../Icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../Redux/Actions/ProductsAction";
export default function AdminProductsCard({item}) {
  const handleClose = () => setShow(false);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const handleDelete = async () =>{
    await
dispatch(deleteProduct(item._id))
setShow(false);
// reload the page after the delete
window.location.reload();
  } 
//
//
//

  return (
    <Col xs="12" sm="6" md="5" lg="4" className="d-flex">

      <Modal  show={show} onHide={handleClose}>
        <Modal.Header className="font">
          <Modal.Title><div>تأكيد الحذف !!</div></Modal.Title>
        </Modal.Header>
        <Modal.Body className="font">
          <div className="font">هل أنت متأكد من أنك تريد حذف المنتج ؟؟</div>
        </Modal.Body>
        <Modal.Footer className="font">
          <Button  variant="outline-success" onClick={handleClose}>تراجع   
          </Button>
          <Button  variant="outline-danger" onClick={handleDelete}>تأكيد الحذف
          </Button>
        </Modal.Footer> 
      </Modal>

      <Card
        className="my-2"
        style={{
          width: "100%",
          height: "350px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Row className="d-flex justify-content-center px-2">
          <Col className=" d-flex justify-content-between">
            <div className="d-inline item-delete-edit" onClick={handleShow}>
        {DeleteIcon()}
              ازاله
            </div>
            <Link to={`/admin/editProduct/${item._id}`} style={{ textDecoration: "none" }}>
            <div className="d-inline item-delete-edit">
              {EditIcon()}
              تعديل
            </div>
            </Link>
          </Col>
        </Row>
        <Link to={`/products/${item._id}`} style={{ textDecoration: "none" }}>
          <Card.Img style={{ height: "228px", width: "100%" }} src={item.imageCover} />
          <Card.Body>
            <Card.Title>
              <div className="card-title">
{item.title}
              </div>
            </Card.Title>
            <Card.Text>
              <div className="d-flex justify-content-between">
                <div className="card-rate" style={{ fontSize: "18px" }}>
                  {/* <BsStarFill
                    className="mx-2 "
                    style={{ color: "Orange", width: "20px", height: "20px" }}
                  /> */}
                  <StarIcon/>
                  {item.ratingsQuantity}
                </div>
                <div className="d-flex">
                  <div className="card-currency mx-1">جنيه</div>
                  <div className="card-price">{item.price}</div>
                </div>
              </div>
            </Card.Text>
          </Card.Body>
        </Link>
      </Card>
    </Col>
  );
}
