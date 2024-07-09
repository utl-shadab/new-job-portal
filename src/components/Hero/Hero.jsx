import React, { useState } from 'react';
import { FormGroup, Input, Button, Row, Col, Container } from 'reactstrap';
import "./hero.css"
import Banner from "../../assets/backgrounds/hero.png"
import Brief from "../../assets/small-icon/brief.png"
import Jobs from "../../assets/small-icon/job.png"
import Company from "../../assets/small-icon/company.png"
import Condidate from "../../assets/small-icon/condidate.png"

const Hero = () => {

  return (
    <div>
      <section
        className="bg-half-260"
        style={{
          backgroundImage: `url(${Banner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="bg-overlay bg-primary-gradient-overlay" />
        <Container>
          <div className="row  justify-content-center">
            <div className="col-lg-10">
              <div className="title-heading text-center">
                <h1 className="heading text-white fw-bold">
                  Your Career’s <span className='text-primary'>Opportunity</span>
                  <p className='text-white hero-desc'>2400 People are daily search in this portal, 100 user added job portal </p>
                </h1>
                <div className="frame">
                  <div className="box-wrapper d-flex justify-content-between align-items-center">
                    <div className="box d-flex justify-content-around align-items-center">
                      <img src={Brief} alt="" />
                      <div className="box-right">
                        <p className='text-white'>Current Opening</p>
                        <p className='text-primary'>908789</p>
                      </div>
                    </div>
                    <div className="box d-flex justify-content-around align-items-center">
                      <img src={Company} alt="" />
                      <div className="box-right">
                        <p className='text-white'>Current Opening</p>
                        <p className='text-primary'>908789</p>
                      </div>
                    </div>
                    <div className="box d-flex justify-content-around align-items-center">
                      <img src={Condidate} alt="" />
                      <div className="box-right">
                        <p className='text-white'>Current Opening</p>
                        <p className='text-primary'>908789</p>
                      </div>
                    </div>
                    <div className="box d-flex justify-content-around align-items-center">
                      <img src={Jobs} alt="" />
                      <div className="box-right">
                        <p className='text-white'>Current Opening</p>
                        <p className='text-primary'>908789</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="job-search-form">
                    <form>
                      <div className="row">
                        <div className="form-group col-lg-5 col-md-12 col-sm-12">
                          <span className="icon ri-search-line" />
                          <input
                            type="text"
                            placeholder="Job title, keywords, or company"
                            name="field_name"
                          />
                        </div>
                        <div className="form-group col-lg-7 col-md-12 col-sm-12 location">
                          <span className="icon ri-map-pin-line" />
                          <input type="text" placeholder="City, state, zip code, or “remote”" name="field_name" />
                        <div className="form-group  btn-box">
                          <button type="submit" className="theme-btn btn-style-one">
                            <span className="btn-title">Find Jobs</span>
                          </button>
                        </div>
                        </div>
                      </div>
                    </form>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

    </div>
  )
}

export default Hero
