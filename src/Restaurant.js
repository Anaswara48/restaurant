import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Restaurant.css'
import { Link } from 'react-router-dom';


function Restaurant() {

    const [restList, setRest] = useState([])
    //api to access data
    const getData = async () => {
        const result = await fetch('/restaurants.json')
        result.json().then(data => setRest(data.restaurants))

    }
    console.log(restList);
    useEffect(() => {
        getData()

    }, [])
    return (
        <Row className='ms-5 mb-5 p-2'>

            {
                restList.map(rest => (
                    <Col id='c1' className='p-2' lg={4} md={6}>

                        <Link id='l1' to={`/viewRest/${rest.id}`}>

                        <Card className='mt-5 ms-5' style={{ width: '18rem', height:'550px' }}>
                            <Card.Img variant="top" style={{height:'400px'}} src={rest.photograph}/>
                            <Card.Body>
                                <Card.Title style={{color:'gold'}}>{rest.name}
                                </Card.Title>
                                <Card.Text style={{color:'white'}}>
                                    {rest.address}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        
                        </Link>
                    </Col>
                ))
            }
        </Row>
    )
}

export default Restaurant