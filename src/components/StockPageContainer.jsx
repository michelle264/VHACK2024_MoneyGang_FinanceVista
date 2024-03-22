import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StockTable from "./StockTable";
import MarketQueue from "./MarketQueue";
import OrderPad from "./OrderPad";
import React, { useState } from 'react';


function StockPageContainer() {
    const [selectedRow, setSelectedRow] = useState(null);

    const handleRowClick = (row) => {
      setSelectedRow(row.code); 
    };

    return (
      <div className='w_tradingPagesBackground'>
        <h1 style={{margin:'15px'}}>Trading Market</h1>
        <Container fluid>
          <Row>
            <Col><StockTable onRowClick={handleRowClick}/></Col>
          </Row>
          <hr/>
          <Row>
            <Col><MarketQueue selectedRow={selectedRow}/></Col>
            <Col className='w_orderPadContainer'><OrderPad /></Col>
          </Row>
        </Container>
      </div>
    );
  }
  
  export default StockPageContainer;