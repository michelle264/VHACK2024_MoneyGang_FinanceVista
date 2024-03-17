import Card from 'react-bootstrap/Card';

function Advertistment() {
    return (
      <Card className='w_side' >
        <Card.Img className='w_adsImg' />
        <Card.Body className='w_ads'>
          <Card.Title>Advertistment</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, eveniet praesentium. Iusto pariatur quae, voluptatem corporis provident eaque laudantium, omnis voluptate, ullam deserunt magnam hic nulla suscipit reiciendis cupiditate in!
          </Card.Text>
          <Card.Link href="#">Go to website</Card.Link>
        </Card.Body>
      </Card>
    );
  }
  
  export default Advertistment;