import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import ListGroup from 'react-bootstrap/ListGroup';
import Stack from 'react-bootstrap/Stack';
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import paginationFactory from "react-bootstrap-table2-paginator";

function SharesAtHand() {
    const { SearchBar, ClearSearchButton  } = Search;

    const label = ['Latest Date Purchase','Code','Name', 
                            'Currency', 'Last', 'Change','Average Price',
                            'Oversold Quantity','IDSS Buy Back Quantity',
                            'Total Quantity',
                            'Buy Value', 'Gross Market Value'];

    const stocks = [
        { latestdatepurchase: '25-01-2024',
          code:3182, 
          name:'GENTING', 
          currency: 'MYR', 
          last: '5.100', 
          change: '-0.0100',
          averageprice: '4.000', 
          totalquantity: 4000, 
          oversoldquantity: 0, 
          idssbuybackquantity: 0 },
        { latestdatepurchase: '01-12-2023',
          code:1155, 
          name:'MAYBANK', 
          currency: 'MYR', 
          last: '9.820', 
          change: '0.0100',
          averageprice: '9.750', 
          totalquantity: 3000, 
          oversoldquantity: 0, 
          idssbuybackquantity: 0 },
        { latestdatepurchase: '01-12-2023',
          code:5296, 
          name:'MRDIY', 
          currency: 'MYR', 
          last: '1.500', 
          change: '0.0000',
          averageprice: '1.670', 
          totalquantity: 10000, 
          oversoldquantity: 0, 
          idssbuybackquantity: 0 }
    ];

    const columns = label.map((columnName, index) => ({
      dataField: columnName.replace(/\s/g,'').toLowerCase(),
      text: columnName,
      sort: true
    }));

    const stocksWithAmounts = stocks.map(stock => ({
        ...stock,
        buyvalue: stock.totalquantity * stock.averageprice,
        grossmarketvalue: stock.totalquantity * stock.last
    }));

    const [totalbuy,setTotalBuy] = useState(0);
    const [totalgross,setTotalGross] = useState(0);
    var tempttbuy = 0;
    var tempttgross = 0;

    useEffect(() => {
      setTotalBuy(tempttbuy);
      setTotalGross(tempttgross);
    }, [tempttbuy, tempttgross]);

    return (
      <div className='w_tradingPagesBackground'>
        <h1 style={{margin:'15px'}}>Your Account</h1>
        <ListGroup className='w_simulationContainer'>
          <ListGroup.Item>
            <Stack direction="horizontal" gap={3}>
              <div className="p-2">Simulation Money Owned</div>
              <div className="p-2 ms-auto">MYR 23572.70</div>
            </Stack>
          </ListGroup.Item>
          <ListGroup.Item>
            <Stack direction="horizontal" gap={3}>
              <div className="p-2">Outstanding Balance</div>
              <div className="p-2 ms-auto">MYR 4800.00</div>
            </Stack>
          </ListGroup.Item>
        </ListGroup>
        <div className='w_simulationTableContainer'>
          <Table responsive bordered hover>
            <thead>
                <tr>
                  <th>CURRENCY</th>
                  <th>TOTAL BUY VALUE</th>
                  <th>TOTAL GROSS MARKET VALUE</th>
                </tr>
            </thead>
            <tbody>
              <tr>
                  <td>MYR</td>
                  <td>{totalbuy}</td>
                  <td>{totalgross}</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div>
          <h5 style={{margin:'20px'}}>Shares At Hand: </h5>
          <div className='w_simulationTableContainer'>
            <ToolkitProvider            
                keyField='code' 
                data={stocksWithAmounts}
                columns={columns}
                search
            >
                {props => (
                    <>
                        <div className='w_searchBarContainer'>
                            <SearchBar placeholder=' ' {...props.searchProps}/>
                            <ClearSearchButton {...props.searchProps}/>
                        </div>
                        <BootstrapTable 
                            bootstrap4
                            wrapperClasses="table-responsive"
                            rowClasses="text-nowrap"
                            responsive
                            striped
                            bordered 
                            hover
                            pagination={paginationFactory()}
                            {...props.baseProps}
                        />     
                    </>
                )}
            </ToolkitProvider>
          </div>
        </div>
      </div>
    );
  }
  
export default SharesAtHand;