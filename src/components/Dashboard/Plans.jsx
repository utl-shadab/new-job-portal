import React, { useState } from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane, Container, Row, Col, Button } from 'reactstrap';
import classnames from 'classnames';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Premium from '../../assets/dashboard/premium.png'
import './dashboard.css'; 

const Plans = () => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
    <Navbar />
    <div className='plans-container container' style={{ height: "calc(100vh - 100px)" }}>
      <h2 className="text-center my-4">Services included in Premium & Platinum Plans</h2>
      <Nav tabs className="plans-tabs">
        <NavItem>
          <NavLink
            className={classnames('plans-tab', { active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
            style={{
              color: activeTab === '1' ? '#6C63FF' : '#A0A0A0',
              borderBottom: activeTab === '1' ? '2px solid #6C63FF' : 'none',
              paddingBottom: '10px',
              cursor: 'pointer',
              fontWeight: activeTab === '1' ? 'bold' : 'normal'
            }}
          >
            Premium Services
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames('plans-tab', { active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
            style={{
              color: activeTab === '2' ? '#6C63FF' : '#A0A0A0',
              borderBottom: activeTab === '2' ? '2px solid #6C63FF' : 'none',
              paddingBottom: '10px',
              cursor: 'pointer',
              fontWeight: activeTab === '2' ? 'bold' : 'normal'
            }}
          >
            Platinum Services
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Container>
            <Row className='align-items-center'>
              <Col md="6">
                <ul>
                  <li className="d-flex align-items-start mb-3">
                    <i className="fas fa-check-circle me-2 text-primary"></i>
                    <div>
                      <span className="premium-title">Rank Higher in Recruiter Searches</span>
                      <p className="mb-0 premium-text">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                  </li>
                  <li className="d-flex align-items-start mb-3">
                    <i className="fas fa-check-circle me-2 text-primary"></i>
                    <div>
                      <span className="premium-title">Rank Higher in Recruiter Searches</span>
                      <p className="mb-0 premium-text">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                  </li>
                  <li className="d-flex align-items-start mb-3">
                    <i className="fas fa-check-circle me-2 text-primary"></i>
                    <div>
                      <span className="premium-title">Rank Higher in Recruiter Searches</span>
                      <p className="mb-0 premium-text">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                  </li>
                </ul>
                <Button color="primary" className="buy-now-btn">
                  Buy Now <span className="arrow">→</span>
                </Button>
              </Col>
              <Col md="6" className="text-center">
                <img src={Premium} alt="Premium Services" className="img-fluid" />
              </Col>
            </Row>
          </Container>
        </TabPane>
        <TabPane tabId="2">
          <Container>
            <Row className='align-items-center'>
            <Col md="6">
                <ul>
                  <li className="d-flex align-items-start mb-3">
                    <i className="fas fa-check-circle me-2 text-primary"></i>
                    <div>
                      <span className="premium-title">Rank Higher in Recruiter Searches</span>
                      <p className="mb-0 premium-text">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                  </li>
                  <li className="d-flex align-items-start mb-3">
                    <i className="fas fa-check-circle me-2 text-primary"></i>
                    <div>
                      <span className="premium-title">Rank Higher in Recruiter Searches</span>
                      <p className="mb-0 premium-text">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                  </li>
                  <li className="d-flex align-items-start mb-3">
                    <i className="fas fa-check-circle me-2 text-primary"></i>
                    <div>
                      <span className="premium-title">Rank Higher in Recruiter Searches</span>
                      <p className="mb-0 premium-text">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                  </li>
                </ul>
                <Button color="primary" className="buy-now-btn">
                  Buy Now <span className="arrow">→</span>
                </Button>
              </Col>
              <Col md="6" className="text-center">
                <img src={Premium} alt="Premium Services" className="img-fluid" />
              </Col>
            </Row>
          </Container>
        </TabPane>
      </TabContent>
    </div>
    <Footer />
  </div>
  );
};

export default Plans;