import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Col, Row, FormFeedback } from 'reactstrap';

const Worksample = () => {
    const [modal, setModal] = useState(false);
    const [formData, setFormData] = useState({
        workTitle: '',
        url: '',
        durationFromYear: '',
        durationFromMonth: '',
        durationToYear: '',
        durationToMonth: '',
        description: '',
        currentlyWorking: false
    });
    const [formErrors, setFormErrors] = useState({});
    const [workSampleEntries, setWorkSampleEntries] = useState([]);
    // const [showSuccess, setShowSuccess] = useState(false);
    const toggle = () => setModal(!modal);

    const handleSubmit = () => {
        const errors = validate();
        if (Object.keys(errors).length === 0) {
            setWorkSampleEntries([...workSampleEntries, formData]);
            setFormData({
                workTitle: '',
                url: '',
                durationFromYear: '',
                durationFromMonth: '',
                durationToYear: '',
                durationToMonth: '',
                description: '',
                currentlyWorking: false
            });
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 3000);
            toggle();
        } else {
            setFormErrors(errors);
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
    };

    const validate = () => {
        const errors = {};
        if (!formData.workTitle) errors.workTitle = 'This field is required';
        if (!formData.url) errors.url = 'This field is required';
        return errors;
    };

    const handleRemove = (index) => {
        const newEntries = workSampleEntries.filter((_, i) => i !== index);
        setWorkSampleEntries(newEntries);
    };
    return (
        <div className='profile-work-sample'>
            <div className="container">
                <div className="d-flex justify-content-between align-items-center work-sample-header mb-3">
                    <h5>Work Samples</h5>
                    <i
                        className="fa fa-pen"
                        style={{ cursor: 'pointer' }}
                        onClick={toggle}></i>
                </div>
                <div className="work-sample-body">
                    {workSampleEntries.map((entry, index) => (
                        <div key={index} className="work-sample-body-item">
                            <div className="d-flex justify-content-between align-items-center border-bottom pb-3">
                                <h5>Work Sample</h5>
                                <i
                                    className="fa fa-trash text-danger"
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => handleRemove(index)}></i>
                            </div>
                            <p className='fw-bold my-3'>{entry.workTitle} <i className="fa fa-pen" style={{ cursor: 'pointer' }} onClick={toggle}></i></p>
                            <a href={entry.url} className='text-primary d-block mb-2'>{entry.url}</a>
                            <p className='text-muted mb-2'>Duration: {new Date(entry.durationFromYear, entry.durationFromMonth - 1).toLocaleString('default', { month: 'short' })} {entry.durationFromYear} - {entry.currentlyWorking ? 'Present' : `${new Date(entry.durationToYear, entry.durationToMonth - 1).toLocaleString('default', { month: 'short' })} ${entry.durationToYear}`}</p>
                            <p className='text-muted'>{entry.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Modal isOpen={modal} toggle={toggle} size="lg">
                <ModalHeader toggle={toggle}>Work samples</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="workTitle">Work title <span className="text-danger">*</span></Label>
                            <Input type="text" name="workTitle" id="workTitle" placeholder="Enter work title" onChange={handleChange} invalid={!!formErrors.workTitle} />
                            <FormFeedback>{formErrors.workTitle}</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label for="url">URL <span className="text-danger">*</span></Label>
                            <Input
                                type="url"
                                name="url"
                                id="url"
                                placeholder="Enter URL here"
                                onChange={handleChange}
                                invalid={!!formErrors.url || (formData.url && !formData.url.startsWith('http'))}
                            />
                            <FormFeedback>
                                {formErrors.url || (formData.url && !formData.url.startsWith('http') && 'Please enter a valid URL.')}
                            </FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label>Duration from</Label>
                            <Row form>
                                <Col md={6}>
                                    <Input type="select" name="durationFromYear" onChange={handleChange}>
                                        <option value="">Select year</option>
                                        <option value="2022">2022</option>
                                        <option value="2021">2021</option>
                                        <option value="2020">2020</option>
                                        <option value="2019">2019</option>
                                        <option value="2018">2018</option>
                                        <option value="2017">2017</option>
                                        <option value="2016">2016</option>
                                        <option value="2015">2015</option>
                                        <option value="2014">2014</option>
                                        <option value="2013">2013</option>
                                        <option value="2012">2012</option>
                                        <option value="2011">2011</option>
                                        <option value="2010">2010</option>
                                    </Input>
                                </Col>
                                <Col md={6}>
                                    <Input type="select" name="durationFromMonth" onChange={handleChange}>
                                        <option value="">Select month</option>
                                        <option value="1">1 month</option>
                                        <option value="2">2 months</option>
                                        <option value="3">3 months</option>
                                        <option value="4">4 months</option>
                                        <option value="5">5 months</option>
                                        <option value="6">6 months</option>
                                        <option value="7">7 months</option>
                                        <option value="8">8 months</option>
                                        <option value="9">9 months</option>
                                        <option value="10">10 months</option>
                                        <option value="11">11 months</option>
                                    </Input>
                                </Col>
                            </Row>
                        </FormGroup>
                        {!formData.currentlyWorking && (
                            <FormGroup>
                                <Label>Duration to</Label>
                                <Row form>
                                    <Col md={6}>
                                        <Input type="select" name="durationToYear" onChange={handleChange}>
                                            <option value="">Select year</option>
                                            <option value="1">1 year</option>
                                            <option value="2">2 years</option>
                                            <option value="3">3 years</option>
                                            <option value="4">4 years</option>
                                            <option value="5">5 years</option>
                                            <option value="6">6 years</option>
                                            <option value="7">7 years</option>
                                            <option value="8">8 years</option>
                                            <option value="9">9 years</option>
                                            <option value="10">10 years</option>
                                            <option value="11">11 years</option>
                                            <option value="12">12 years</option>
                                            <option value="13">13 years</option>
                                            <option value="14">14 years</option>
                                            <option value="15">15 years</option>
                                            <option value="16">16 years</option>
                                        </Input>
                                    </Col>
                                    <Col md={6}>
                                        <Input type="select" name="durationToMonth" onChange={handleChange}>
                                            <option value="">Select month</option>
                                            <option value="1">1 month</option>
                                            <option value="2">2 months</option>
                                            <option value="3">3 months</option>
                                            <option value="4">4 months</option>
                                            <option value="5">5 months</option>
                                            <option value="6">6 months</option>
                                            <option value="7">7 months</option>
                                            <option value="8">8 months</option>
                                            <option value="9">9 months</option>
                                            <option value="10">10 months</option>
                                            <option value="11">11 months</option>
                                        </Input>
                                    </Col>
                                </Row>
                            </FormGroup>
                        )}
                        <FormGroup check style={{ display: 'flex', alignItems: 'center' }}>
                            <Input type="checkbox" name="currentlyWorking" onChange={handleChange} style={{ width: '1em' }} />
                            <Label check style={{ marginLeft: '0.5em' }}>I am currently working on this</Label>
                        </FormGroup>
                        <FormGroup>
                            <Label for="description">Description</Label>
                            <Input type="textarea" name="description" id="description" placeholder="Type here..." onChange={handleChange} />
                            <small className="form-text text-muted">500 Character(s) Left</small>
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

export default Worksample;
