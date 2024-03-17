import { useState, useEffect} from 'react';
import Stack from 'react-bootstrap/Stack';
import NewsListComponent from './NewsListComponent';
import NewsTrendings from './NewsTrendings';
import Advertistment from './Advertistment'
import Pagination from 'react-bootstrap/Pagination';



function News() {
  const [ScreenSize, setScreenSize] = useState(window.innerWidth);
 
  const handleResize = () => {
    setScreenSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })

  return (
    <div className='w_tradingPagesBackground'>
      <Stack direction={ScreenSize > 800 ? "horizontal" : "vertical"} gap={10}>
        <div className="p-2 w_newspage"><NewsListComponent/></div>
        <div className="p-2 w_sidebar">
          <Stack direction={ScreenSize > 800 ? "vertical":"horizontal"}>
            <Stack direction={ScreenSize < 800 && ScreenSize > 640 ? "horizontal":"vertical"} gap={2} >
              <div className='w_sideContainer'>
                <NewsTrendings/>
              </div>
              <div className='w_sideContainer'>
                <Advertistment/>
              </div>
            </Stack>
          </Stack>
        </div>
      </Stack>
      <Pagination className="w_pagination">
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Item>{4}</Pagination.Item>
          <Pagination.Item>{5}</Pagination.Item>
          <Pagination.Item active>{6}</Pagination.Item>
          <Pagination.Item>{7}</Pagination.Item>
          <Pagination.Item disabled>{8}</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
    </div>
  );
  
}

export default News;