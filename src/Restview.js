import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ListGroup } from 'react-bootstrap';
import Operatingtime from './Operatingtime';
import Review from './Review';


function Restview() {
  // create obj for useParams

  const [restList, setRest] = useState([])

  //api to access data
  const getData = async () => {
    const result = await fetch('/restaurants.json')
    result.json().then(data => setRest(data.restaurants))

  }

  const params = useParams()
  console.log(params.id);

  // find single restaurant data
  const singleRest = restList.find(i => i.id == params.id);
  console.log(singleRest);

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      {singleRest?
     ( <Row>
        <Col lg={6} md={6}>
          <img className='w-75 container p-5' style={{height:'690px'}}
           src={singleRest.photograph} />

        </Col>
        <Col lg={6} md={6} className='mt-5 fs-5 '  >
        <ListGroup className='pe-5'>
      <ListGroup.Item><h2 className='text-warning'>{singleRest.name}</h2></ListGroup.Item>
      <ListGroup.Item>Address<strong>{singleRest.address}</strong></ListGroup.Item>
      <ListGroup.Item>Neighbourhood<strong>{singleRest.neighbourhood}</strong></ListGroup.Item>
      <ListGroup.Item>Cusine Type<strong>{singleRest.cuisine_type}</strong></ListGroup.Item>
      <ListGroup.Item>
      
      <Operatingtime workingTime={singleRest.operating_hours}/>
       <Review reviewList={singleRest.reviews}/>
      </ListGroup.Item>
    </ListGroup>
        </Col>
      </Row>):""
      
}
    </>

  )
}

export default Restview