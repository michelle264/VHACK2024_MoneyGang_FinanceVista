import React, { useState } from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import paginationFactory from "react-bootstrap-table2-paginator";

function Transaction() {
    const label = ['Date','ID','Type','Code','Name', 
                            'Quantity', 'Price', 'Gross Amount','Net Amount',
                            'Settlement Amount','Status'];

    const stocks = [
      { date: '25-01-2024',
          id: 'A0004',
          type:'P',
          code:3182, 
          name:'GENTING', 
          quantity: 1000, 
          price: '4.000', 
          status: 'Not Complete' },
        { date: '25-01-2024',
          id: 'A0003',
          type:'P',
          code:3182, 
          name:'GENTING', 
          quantity: 3000, 
          price: '4.000', 
          status: 'Paid Success' },
        { date: '01-12-2023',
        id: 'A0002',
          type:'P',
          code:1155, 
          name:'MAYBANK', 
          quantity: 3000, 
          price: '9.750', 
          status: 'Paid Success' },
        { date: '01-12-2023',
        id: 'A0001',
          type:'P',
          code:5296, 
          name:'MRDIY', 
          quantity: 10000, 
          price: '1.670', 
          status: 'Paid Success' },
        { date: '23-11-2023',
        id: 'B0001',
          type:'S',
          code:5296, 
          name:'MRDIY', 
          quantity: 1000, 
          price: '1.930', 
          status: 'Completed' }
    ];

    const columns = label.map((columnName, index) => ({
        dataField: columnName.replace(/\s/g,'').toLowerCase(),
        text: columnName,
        sort: true,
        formatter: (cellContent, row) => {
          if (columnName === 'Status' && row.status === 'Not Complete' ) {
              return (
                  <button className="btn btn-primary btn-xs" onClick={() => {}}>Pay Now</button>
              );
          } else {
              return cellContent;
          }
      }
    }));
    
    const stocksWithAmounts = stocks.map(stock => {
      const grossamount = stock.price * stock.quantity;
      const netamount = stock.type === 'P' ? grossamount * 1.2 : grossamount * 0.8;
      const settlementamount = stock.type === 'P' ? grossamount * 1.2 : grossamount * 0.8;
  
      return {
          ...stock,
          grossamount,
          netamount,
          settlementamount
      };
  });

    const { SearchBar, ClearSearchButton  } = Search;
    
    return (
      <div className='w_transactionTableContainer w_tradingPagesBackground'>
        <h1 style={{margin:'15px'}}>Transaction History</h1>

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
    );
  }
  
export default Transaction;
