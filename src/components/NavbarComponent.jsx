import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

function Navbar() {

  return (
    <>
      <Nav variant="pills" className='w_navbarComp' defaultActiveKey="/StockPage">
        <Nav.Item>
          <Nav.Link as={NavLink} to="/market">
            Trading
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="/News">
            News
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink}to="/ChartComponent">
            Chart
          </Nav.Link>
        </Nav.Item>
        <NavDropdown title="Portfolio" id="nav-dropdown">
          <NavDropdown.Item as={NavLink} to="/SimulationAccount">Simulation Account</NavDropdown.Item>
          <NavDropdown.Item as={NavLink} to="/Transaction">Transaction History</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </>
  );
}

export default Navbar;