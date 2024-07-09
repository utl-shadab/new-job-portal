import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Col, Row, FormFeedback } from 'reactstrap';

const Employment = () => {
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({
    currentEmployment: '',
    employmentType: '',
    experienceYears: '',
    experienceMonths: '',
    companyName: '',
    jobTitle: '',
    joiningYear: '',
    joiningMonth: '',
    salary: '',
    noticePeriod: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [employmentEntries, setEmploymentEntries] = useState([]);
  const [currency, setCurrency] = useState('₹');
  const [showSuccess, setShowSuccess] = useState(false);
  const toggle = () => setModal(!modal);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };
  const validate = () => {
    const errors = {};
    if (!formData.currentEmployment) errors.currentEmployment = 'This field is required';
    if (!formData.employmentType) errors.employmentType = 'This field is required';
    if (!formData.experienceYears) errors.experienceYears = 'This field is required';
    if (!formData.experienceMonths) errors.experienceMonths = 'This field is required';
    if (!formData.companyName) errors.companyName = 'This field is required';
    if (!formData.jobTitle) errors.jobTitle = 'This field is required';
    if (!formData.joiningYear) errors.joiningYear = 'This field is required';
    if (!formData.joiningMonth) errors.joiningMonth = 'This field is required';
    if (!formData.salary) errors.salary = 'This field is required';
    if (!formData.noticePeriod) errors.noticePeriod = 'This field is required';
    return errors;
  };

  const handleSubmit = () => {
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      setEmploymentEntries([...employmentEntries, { ...formData, currency }]);
      setFormData({
        currentEmployment: '',
        employmentType: '',
        experienceYears: '',
        experienceMonths: '',
        companyName: '',
        jobTitle: '',
        joiningYear: '',
        joiningMonth: '',
        salary: '',
        noticePeriod: ''
      });
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
      toggle();
    } else {
      setFormErrors(errors);
    }
  };
  const handleRemove = (index) => {
    const newEntries = employmentEntries.filter((_, i) => i !== index);
    setEmploymentEntries(newEntries);
  };
  return (
    <div className='profile-employment'> 
      <div className="container">

      <div className="d-flex justify-content-between align-items-center employment-header mb-3">
        <h5 >Employmentssss</h5>
        <i
              className="fa fa-pen"
              style={{ cursor: 'pointer' }}
              onClick={toggle}></i>
      </div>
      <div className="employment-body">
          {employmentEntries.map((entry, index) => (
            <div key={index} className="employment-body-item">
              {entry.currentEmployment === 'yes' && showSuccess && (
                <div className="alert alert-success fade-in-out">
                  <i className="fa fa-check"></i> Current Employment
                </div>
              )}
              <div className="d-flex justify-content-between align-items-center border-bottom pb-3">
                <h5 className={showSuccess ? '' : 'dont-show'}>Employment</h5>
                <i
                  className="fa fa-trash text-danger"
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleRemove(index)}></i>
              </div>
              <p className='fw-bold my-3'>Company:&nbsp; <span className='text-muted'>{entry.companyName}</span></p>
              <p className='fw-bold mb-3'>Designation:&nbsp; <span className='text-muted'>{entry.jobTitle}</span></p>
              <p className='fw-bold mb-3'>Employment Type:&nbsp; <span className='text-muted'>{entry.employmentType}</span></p>
              <p className='fw-bold mb-3'>Joining Date:&nbsp; <span className='text-muted'>{entry.joiningYear} {entry.joiningMonth}</span></p>
              <p className='fw-bold mb-3'>Salary:&nbsp; <span className='text-muted'>{entry.currency} {entry.salary}</span></p>
              <p className='fw-bold mb-3'>Notice Period:&nbsp; <span className='text-muted'>{entry.noticePeriod}</span></p>
            </div>
          ))}
        </div>
      </div>
      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle}>Employment</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label>Is this your current employment?</Label>
              <div>
                <FormGroup check inline>
                  <Label check>
                    <Input type="radio" name="currentEmployment" value="yes" onChange={handleChange} invalid={!!formErrors.currentEmployment} /> Yes
                  </Label>
                </FormGroup>
                <FormGroup check inline>
                  <Label check>
                    <Input type="radio" name="currentEmployment" value="no" onChange={handleChange} invalid={!!formErrors.currentEmployment} /> No
                  </Label>
                </FormGroup>
                <FormFeedback>{formErrors.currentEmployment}</FormFeedback>
              </div>
            </FormGroup>
            <FormGroup>
              <Label>Employment type</Label>
              <div>
                <FormGroup check inline>
                  <Label check>
                    <Input type="radio" name="employmentType" value="full-time" onChange={handleChange} invalid={!!formErrors.employmentType} /> Full-time
                  </Label>
                </FormGroup>
                <FormGroup check inline>
                  <Label check>
                    <Input type="radio" name="employmentType" value="internship" onChange={handleChange} invalid={!!formErrors.employmentType} /> Internship
                  </Label>
                </FormGroup>
                <FormFeedback>{formErrors.employmentType}</FormFeedback>
              </div>
            </FormGroup>
            <FormGroup>
              <Label>Total experience</Label>
              <Row form>
                <Col md={6}>
                  <Input type="select" name="experienceYears" onChange={handleChange} invalid={!!formErrors.experienceYears}>
                    <option value="">Select Year</option>
                    <option>1 Year</option>
                    <option>2 Years</option>
                    <option>3 Years</option>
                    {/* Add more options as needed */}
                  </Input>
                  <FormFeedback>{formErrors.experienceYears}</FormFeedback>
                </Col>
                <Col md={6}>
                  <Input type="select" name="experienceMonths" onChange={handleChange} invalid={!!formErrors.experienceMonths}>
                    <option value="">Select Month</option>
                    <option>1 Month</option>
                    <option>2 Months</option>
                    <option>3 Months</option>
                    {/* Add more options as needed */}
                  </Input>
                  <FormFeedback>{formErrors.experienceMonths}</FormFeedback>
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Label for="companyName">Current company name</Label>
              <Input type="text" name="companyName" id="companyName" placeholder="Type your organization" onChange={handleChange} invalid={!!formErrors.companyName} />
              <FormFeedback>{formErrors.companyName}</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label for="jobTitle">Current job title</Label>
              <Input type="text" name="jobTitle" id="jobTitle" placeholder="Type your designation" onChange={handleChange} invalid={!!formErrors.jobTitle} />
              <FormFeedback>{formErrors.jobTitle}</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label>Joining date</Label>
              <Row form>
                <Col md={6}>
                  <Input type="select" name="joiningYear" onChange={handleChange} invalid={!!formErrors.joiningYear}>
                    <option value="">Select Year</option>
                    <option>2022</option>
                    <option>2023</option>
                    <option>2024</option>
                  </Input>
                  <FormFeedback>{formErrors.joiningYear}</FormFeedback>
                </Col>
                <Col md={6}>
                  <Input type="select" name="joiningMonth" onChange={handleChange} invalid={!!formErrors.joiningMonth}>
                    <option value="">Select Month</option>
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                  </Input>
                  <FormFeedback>{formErrors.joiningMonth}</FormFeedback>
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Label for="salary">Current salary</Label>
              <Row form>
                <Col md={3}>
                  <Input type="select" name="currency" onChange={handleCurrencyChange}>
                    <option value="₹">₹</option>
                    <option value="$">$</option>
                  </Input>
                </Col>
                <Col md={9}>
                  <Input type="number" name="salary" id="salary" placeholder="Enter amount" onChange={handleChange} invalid={!!formErrors.salary} />
                  <FormFeedback>{formErrors.salary}</FormFeedback>
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Label for="noticePeriod">Notice period</Label>
              <Input type="select" name="noticePeriod" id="noticePeriod" onChange={handleChange} invalid={!!formErrors.noticePeriod}>
                <option value="">Select notice period</option>
                <option>15 days or Less</option>
                <option>1 Month</option>
                <option>2 Months</option>
              </Input>
              <FormFeedback>{formErrors.noticePeriod}</FormFeedback>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
          <Button color="primary" onClick={handleSubmit}>Save</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Employment;