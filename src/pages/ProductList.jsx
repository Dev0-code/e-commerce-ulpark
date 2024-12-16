import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import axios from 'axios'
import { Link } from 'react-router-dom';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ProductList() {

  const [product, setProduct] = useState([])
  const [sdata, setSdata] = useState(``)

  const fetchData = async () => {
    const result = await axios.get("https://fakestoreapi.com/products")
    console.log(result.data)
    setProduct(result.data)
  }


  useEffect(() => {
    fetchData()
  }, [sdata])

  const Search = () => {
    const Data = product.filter(i=>(i.title+i.category).toLowerCase().trim().includes(sdata.toLowerCase().trim()))
    setProduct(Data)
  }

  return (
    <>
      <Container>
        <Row className='py-5'>
          <Col lg={6}>
            <div className='p-4'><img src="https://png.pngtree.com/thumb_back/fh260/background/20220202/pngtree-cute-family-choosing-groceries-together-female-father-supermarket-photo-image_21254808.jpg" className='img-fluid rounded' alt="" /></div>
          </Col>
          <Col lg={6} className='d-flex flex-column justify-content-center align-items-center'>
            <h2 style={{ textAlign: "justify" }} className='text-center'>Welcome to Your Shopping World e-<span className='text-warning'>K</span>art</h2>
            <p style={{ textAlign: "justify" }} className='px-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio corrupti magni magnam molestias iusto, totam vel quod, officia, sapiente aut eos consectetur quis animi accusantium ipsa tempore porro obcaecati numquam?</p>
            <button className='btn btn-warning'>Shop Now</button>
          </Col>
        </Row>
      </Container>
      {

        product.length > 0 ?

          <div className='pb-5'>
            <Container>
              <h1 className='text-center py-3'>Shopping Items</h1>
              <div className='d-flex justify-content-center'>
                <FloatingLabel onChange={(e)=> setSdata(e.target.value)} controlId="floatingPassword" label="Search">
                  <Form.Control type="text" placeholder="Password" />
                </FloatingLabel>
                <Button onClick={Search} variant="secondary" className='ms-2'>Search</Button>
              </div>
              <Row className='py-3'>
                {
                  product.map(i => (
                    <Col lg={3} md={4} sm={6} key={i.id} className="d-flex justify-content-center">

                      <Card className='m-3 border-0 shadow p-3' style={{ width: '20rem', height: '530px' }}>
                        <Link to={`/view/${i.id}`} style={{ textDecoration: 'none', color:"black" }}>
                          <Card.Img variant="top" className='img-fluid' src={i.image} style={{ height: '300px' }} />
                          <Card.Body>
                            <Card.Title>{i.title}</Card.Title>
                            <Card.Text>
                              <br />
                              <b>Price : ${i.price}</b>
                            </Card.Text>
                          </Card.Body>
                        </Link>
                      </Card>

                    </Col>
                  ))
                }
              </Row>
            </Container>
          </div>

          :

          <div>
            <div className='text-center p-5'>
              <i class="fa-solid fa-spinner fa-spin fa-7x" style={{ color: 'white' }}></i>
              <h4 className='pt-2' style={{ color: 'black' }}>Loading</h4>
            </div>
          </div>
      }
    </>
  )
}

export default ProductList


