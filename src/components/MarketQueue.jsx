import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { stocks } from './StockTable.jsx';


const MarketQueue = ({ selectedRow }) => {
    const [name, setName] = useState(['Buy Traders', 'Buy Quantity', 'Buy', 'Sell', 'Sell Quantity', 'Sell Traders']);

    const stocksMarket = stocks.map(stock => ({
        code: stock.code,
        name: stock.name,
        buytraders: [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)],
        buyquantity: [Math.floor(Math.random() * 100000), Math.floor(Math.random() * 100000), Math.floor(Math.random() * 100000)],
        buy: [stock.ref.toFixed(3), (stock.ref - 0.1).toFixed(3), (stock.ref - 0.2).toFixed(3)],
        sell: [stock.ref.toFixed(3), (stock.ref + 0.1).toFixed(3), (stock.ref + 0.2).toFixed(3)],
        sellquantity: [Math.floor(Math.random() * 50000), Math.floor(Math.random() * 50000), Math.floor(Math.random() * 50000)],
        selltraders: [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]
    }));

    const selectedStock = stocksMarket.find(stock => stock.code === selectedRow);

    return (
        <div>
            <h5>Market Queue: {selectedRow}</h5>
            <Table responsive bordered hover>
                <thead>
                    <tr>
                        {name.map((key, index) => (
                            <th key={index}>{key}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {selectedStock && Array.from({ length: 3 }).map((_, index) => (
                        <tr>
                            <td>{selectedStock.buytraders[index]}</td>
                            <td>{selectedStock.buyquantity[index]}</td>
                            <td>{selectedStock.buy[index]}</td>
                            <td>{selectedStock.sell[index]}</td>
                            <td>{selectedStock.sellquantity[index]}</td>
                            <td>{selectedStock.selltraders[index]}</td>
                        </tr>
                    ))}
                    
                </tbody>
            </Table>
        </div>
        
    );
  }
  
  export default MarketQueue;