import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function NewsTrendings() {
    const trends = [
        "New COVID Variant Emerges in Europe",
        "Stock Market Volatility Surges",
        "Global Climate Summit Held in Paris",
        "SpaceX Launches New Satellite",
        "Tech Giants Face Antitrust Scrutiny",
        "Celebrity Couple's Surprise Wedding",
        "Political Protests Erupt in Capital City",
        "Record-Breaking Heatwave Sweeps Across Region"
    ];
    return (
        <Card className='w_side'>
            <Card.Header className='w_cardHeader'><h6 className='w_cardHeaderText'>&nbsp;Trendings</h6></Card.Header>
            <ListGroup variant="flush">
                {trends.map((_, index) => (
                                <ListGroup.Item style={{fontSize:'13px'}} action href="#link">{trends[index]}</ListGroup.Item>
                            ))}
            </ListGroup>
        </Card>
                
            
    );
  }
  
  export default NewsTrendings;