import React, { useState } from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import paginationFactory from "react-bootstrap-table2-paginator";

export const stocks =[
    { code:3182, name:'GENTING', curr: 'MYR', ref: 5.100, open: 5.100, high: 5.100, low: 4.940, buyquantity: 52000, buy: 5.010, sell: 5.030, sellquantity: 23000, last: 5.020, lastvolumn: 500, change: -0.080, percentChange: -1.57, volume: 19843200 },
    { code:1155, name:'MAYBANK', curr: 'MYR', ref: 9.820, open: 9.820, high: 9.850, low: 9.780, buyquantity: 71500, buy: 9.800, sell: 9.830, sellquantity: 10000, last: 9.830, lastvolumn: 2000, change: 0.010, percentChange: 0.10, volume: 13954200 },
    { code:5296, name:'MRDIY', curr: 'MYR', ref: 1.500, open: 1.500, high: 1.500, low: 1.470, buyquantity: 305000, buy: 1.470, sell: 1.490, sellquantity: 230000, last: 1.480, lastvolumn: 100, change: -0.020, percentChange: -1.33, volume: 11874300 },
    { code:3689, name:'F&N', curr: 'MYR', ref: 29.220, open: 29.260, high: 29.700, low: 29.240, buyquantity: 1000, buy: 28.960, sell: 29.760, sellquantity: 400, last: 29.660, lastvolumn: 100, change: 0.440, percentChange: 1.51, volume: 143600 },
    { code:4707, name:'NESTLE', curr: 'MYR', ref: 120.600, open: 121.500, high: 121.900, low: 120.500, buyquantity: 200, buy: 120.800, sell: 121.300, sellquantity: 300, last: 121.000, lastvolumn: 1000, change: 0.400, percentChange: 0.33, volume: 74600 },
    { code: 1234, name: 'APPLE', curr: 'MYR', ref: 145.50, open: 145.80, high: 147.20, low: 144.90, buyquantity: 50000, buy: 145.20, sell: 145.70, sellquantity: 30000, last: 146.10, lastvolumn: 10000, change: 0.60, percentChange: 0.41, volume: 20567000 },
    { code: 5678, name: 'MICROSOFT', curr: 'MYR', ref: 250.75, open: 251.20, high: 253.50, low: 249.80, buyquantity: 40000, buy: 250.90, sell: 251.40, sellquantity: 35000, last: 251.80, lastvolumn: 8000, change: 1.05, percentChange: 0.42, volume: 15832000 },
    { code: 9101, name: 'AMAZON', curr: 'MYR', ref: 3000.00, open: 2998.50, high: 3015.75, low: 2980.25, buyquantity: 3000, buy: 3001.50, sell: 3003.25, sellquantity: 2000, last: 3005.50, lastvolumn: 500, change: 5.50, percentChange: 0.18, volume: 5487000 },
    { code: 2345, name: 'GOOGLE', curr: 'MYR', ref: 2800.00, open: 2805.50, high: 2825.00, low: 2798.75, buyquantity: 1000, buy: 2800.50, sell: 2810.25, sellquantity: 1500, last: 2820.75, lastvolumn: 300, change: 20.75, percentChange: 0.74, volume: 3529000 },
    { code: 6789, name: 'TESLA', curr: 'MYR', ref: 600.00, open: 605.50, high: 610.75, low: 598.25, buyquantity: 2000, buy: 600.25, sell: 601.50, sellquantity: 1800, last: 605.25, lastvolumn: 700, change: 5.25, percentChange: 0.88, volume: 1554000 },
    { code: 3456, name: 'FACEBOOK', curr: 'MYR', ref: 330.50, open: 332.20, high: 335.00, low: 328.75, buyquantity: 45000, buy: 331.75, sell: 332.90, sellquantity: 38000, last: 334.25, lastvolumn: 12000, change: 3.75, percentChange: 1.14, volume: 18756000 },
    { code: 7890, name: 'NETFLIX', curr: 'MYR', ref: 550.00, open: 551.80, high: 554.25, low: 548.50, buyquantity: 35000, buy: 549.75, sell: 551.00, sellquantity: 32000, last: 553.00, lastvolumn: 9000, change: 3.00, percentChange: 0.55, volume: 12879000 },
    { code: 1112, name: 'AMERICAN EXPRESS', curr: 'MYR', ref: 120.25, open: 121.50, high: 123.00, low: 119.75, buyquantity: 20000, buy: 120.00, sell: 120.75, sellquantity: 18000, last: 121.75, lastvolumn: 5000, change: 1.50, percentChange: 1.24, volume: 8562000 },
    { code: 1314, name: 'JOHNSON & JOHNSON', curr: 'MYR', ref: 150.75, open: 149.80, high: 152.25, low: 149.50, buyquantity: 30000, buy: 149.25, sell: 150.00, sellquantity: 28000, last: 151.25, lastvolumn: 7000, change: 0.50, percentChange: 0.33, volume: 10432000 },
    { code: 1516, name: 'WALMART', curr: 'MYR', ref: 140.00, open: 141.20, high: 143.50, low: 139.75, buyquantity: 25000, buy: 139.50, sell: 140.50, sellquantity: 23000, last: 142.00, lastvolumn: 6000, change: 2.00, percentChange: 1.43, volume: 9425000 },
    { code: 1718, name: 'COCA-COLA', curr: 'MYR', ref: 55.75, open: 56.20, high: 56.50, low: 55.50, buyquantity: 18000, buy: 55.50, sell: 56.00, sellquantity: 16000, last: 56.25, lastvolumn: 4000, change: 0.50, percentChange: 0.89, volume: 6878000 },
    { code: 1920, name: 'IBM', curr: 'MYR', ref: 120.50, open: 119.80, high: 121.75, low: 119.50, buyquantity: 22000, buy: 119.25, sell: 120.00, sellquantity: 20000, last: 121.50, lastvolumn: 5500, change: 1.00, percentChange: 0.83, volume: 8356000 },
    { code: 2122, name: 'WALT DISNEY', curr: 'MYR', ref: 170.00, open: 169.50, high: 172.25, low: 169.00, buyquantity: 28000, buy: 168.75, sell: 169.50, sellquantity: 25000, last: 171.00, lastvolumn: 6500, change: 1.00, percentChange: 0.59, volume: 7253000 },
    { code: 2324, name: 'BOEING', curr: 'MYR', ref: 220.25, open: 218.50, high: 222.75, low: 217.75, buyquantity: 35000, buy: 218.00, sell: 219.50, sellquantity: 32000, last: 222.00, lastvolumn: 8000, change: 1.75, percentChange: 0.79, volume: 9624000 },
    { code: 2526, name: 'VERIZON', curr: 'MYR', ref: 58.25, open: 57.80, high: 58.75, low: 57.50, buyquantity: 15000, buy: 57.50, sell: 58.00, sellquantity: 13000, last: 58.50, lastvolumn: 3500, change: 0.25, percentChange: 0.43, volume: 5345000 }
];

const TrendingStocksTable = ({ onRowClick }) => {

    const { SearchBar, ClearSearchButton  } = Search;

    const name = ['Code','Name','Curr','Ref',
                            'Open','High','Low','Buy Quantity','Buy','Sell',
                            'Sell Quantity', 'Last', 'Last Volumn', 'Change', '%Change','Volume'];

    const columns = name.map((columnName, index) => ({
        dataField: columnName.startsWith('%') ? 'percentChange' : columnName.replace(/\s/g,'').toLowerCase(),
        text: columnName,
        sort: true
    }));
    
    const rowEvents = {
        onClick: (e, row, rowIndex) => {
          onRowClick(row);
        }
      };

      const sizePerPageRenderer = ({
      }) => (<div></div>);
      
      const options = {
        sizePerPageRenderer
      };

    return (
      <>
        <ToolkitProvider            
            keyField='code' 
            data={stocks}
            columns={columns}
            search
        >
            {props => (
                <div style={{height:'620px'}}>
                    <div className='w_searchBarContainer'>
                        <SearchBar placeholder='Search in Table' {...props.searchProps}/>
                        <ClearSearchButton {...props.searchProps}/>
                    </div>
                    <BootstrapTable  
                        bootstrap4
                        rowClasses="text-nowrap"
                        wrapperClasses="table-responsive"
                        responsive
                        striped
                        bordered 
                        hover
                        pagination={paginationFactory(options)}
                        id = "w_stockTable"
                        rowEvents={rowEvents} 
                        {...props.baseProps} 
                    />     
                </div>
            )}
        </ToolkitProvider>
      </>
  );
};

export default TrendingStocksTable;
