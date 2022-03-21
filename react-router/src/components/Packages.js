import Package from './Package'
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import { Card } from "react-bootstrap"

export default function Packages({ packages }) {
    const displayPackages = packages.map((eachPackage, index) => <ListGroup.Item key={index}><Package name={eachPackage}/></ListGroup.Item>)

    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title>Our Packages</Card.Title>
                    <Card.Text>
                        Check out some of our packages!
                    </Card.Text>
                </Card.Body>
                <ListGroup>
                    {displayPackages}
                </ListGroup>
            </Card>
        </Container>
        
    )
}