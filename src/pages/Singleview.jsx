import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import { useParams } from 'react-router-dom'

function Singleview() {

  const [view, setView] = useState([])

  const params = useParams()

  const singleData = async () => {
    const result = await axios.get(`https://fakestoreapi.com/products/${params.id}`)
    setView(result.data)
  }

  useEffect(() => {
    singleData()
  }, [])

  console.log(view)

  return (
    <>
      <div className='m-5 vh-100 pt-5'>
        <div className='container-fluid w-75 p-5'>
            <h1>View</h1>
          {
            view.id ?
              <Row className='bg-white rounded shadow p-5'>
                <Col lg={6} >
                  <img src={view?.image} className='w-100 p-5' style={{ height: "550px" }} alt="" />
                </Col>
                <Col lg={6}>
                  <div className="d-flex flex-column justify-content-center align-items-start h-100">
                    <h2 className='text-black'>{view.title}</h2>
                    <p className='text-black'>{view.category}</p>
                    <h4 className='text-black'>${view.price}</h4>
                    <p className='text-black'>{view.description}</p>
                    <p className='text-black'>Rating : {view.rating?.rate}</p>
                  </div>
                </Col>
              </Row>
              :
              <div>
                <div className='text-center p-5'>
                  <i class="fa-solid fa-spinner fa-spin fa-7x" style={{ color: 'white' }}></i>
                  <h4 className='pt-2' style={{ color: 'black' }}>Loading...</h4>
                </div>
              </div>
          }

        </div>
      </div>
    </>
  )
}

export default Singleview
