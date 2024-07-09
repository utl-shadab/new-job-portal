
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormFeedback, Row, Col } from 'reactstrap';
import Certification from '../../assets/small-icon/certificate.gif';
const Addcertificate = () => {
    const [modal, setModal] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        completionId: '',
        url: '',
        startMonth: '',
        startYear: '',
        endMonth: '',
        endYear: '',
        doesNotExpire: false
    });
    const [formErrors, setFormErrors] = useState({});
    const [submittedData, setSubmittedData] = useState([]);
    const toggle = () => setModal(!modal);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const validate = () => {
        const errors = {};
        if (!formData.name) errors.name = 'This field is required';
        if (!formData.completionId) errors.completionId = 'This field is required';
        if (!formData.url) {
            errors.url = 'This field is required';
        } else if (!formData.url.startsWith('https:')) {
            errors.url = 'URL must start with https:';
        }
        if (!formData.doesNotExpire) {
            if (!formData.startMonth || !formData.startYear || !formData.endMonth || !formData.endYear) {
                errors.validity = 'All validity fields are required';
            }
        }
        return errors;
    };
    const handleSubmit = () => {
        const errors = validate();
        if (Object.keys(errors).length === 0) {
            setSubmittedData([...submittedData, formData]);
            setFormData({
                name: '',
                completionId: '',
                url: '',
                startMonth: '',
                startYear: '',
                endMonth: '',
                endYear: '',
                doesNotExpire: false
            });
            setModal(false);
        } else {
            setFormErrors(errors);
        }
    };
    return (
        <div>
            <div className="certification-container">
                <div className="profile-work-sample">
                    <div className="container">
                        <div className="d-flex justify-content-between align-items-center certification-header mb-3">
                            <h5>Certification <span className="text-success"></span></h5>
                            <a href="#" className="add-button" onClick={toggle}>Add</a>
                        </div>
                        {!submittedData.length && <p>Add details of certifications you have completed</p>}
                        {submittedData.map((data, index) => (
                            <div key={index} className="certification-item d-flex align-items-start gap-3 my-3">
                                <div className="certification-logo-container">
                                    <img src={Certification} alt="Certification Logo" className="certification-logo" />
                                </div>
                                <div className="certification-details">
                                    <h6 style={{fontSize:'18px'}}>{data.name}</h6>
                                    <p style={{fontSize:'14px'}}>{data.completionId}</p>
                                    <a href={data.url} target="_blank" rel="noopener noreferrer">{data.url}</a>
                                    <p style={{fontSize:'14px'}}>
                                        Valid from {new Date(data.startYear, data.startMonth - 1).toLocaleString('default', { month: 'short' })} '{data.startYear.toString().slice(-2)}. {data.doesNotExpire ? 'Does not expire.' : `to ${new Date(data.endYear, data.endMonth - 1).toLocaleString('default', { month: 'short' })} '${data.endYear.toString().slice(-2)}.`}
                                    </p>
                                </div>
                                <i className="fa fa-pen" style={{ cursor: 'pointer' }} onClick={toggle}></i>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Certifications</ModalHeader>
                <ModalBody>
                    <p>Add details of Certifications you have achieved/completed</p>
                    <Form>
                        <FormGroup>
                            <Label for="name">Certification name <span className="text-danger">*</span></Label>
                            <Input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Please enter your certification name"
                                value={formData.name}
                                onChange={handleChange}
                                invalid={!!formErrors.name}
                            />
                            <FormFeedback>{formErrors.name}</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label for="completionId">Certification completion ID</Label>
                            <Input
                                type="text"
                                name="completionId"
                                id="completionId"
                                placeholder="Please mention your course completion ID"
                                value={formData.completionId}
                                onChange={handleChange}
                                invalid={!!formErrors.completionId}
                            />
                            <FormFeedback>{formErrors.completionId}</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label for="url">Certification URL</Label>
                            <Input
                                type="text"
                                name="url"
                                id="url"
                                placeholder="Please mention your completion URL"
                                value={formData.url}
                                onChange={handleChange}
                                invalid={!!formErrors.url}
                            />
                            <FormFeedback>{formErrors.url}</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label>Certification validity</Label>
                            <Row form>
                                <Col md={3}>
                                    <Input
                                        type="select"
                                        name="startMonth"
                                        value={formData.startMonth}
                                        onChange={handleChange}
                                        disabled={formData.doesNotExpire}
                                    >
                                        <option value="">MM</option>
                                        <option value="Jan">January</option>
                                        <option value="Feb">February</option>
                                        <option value="Mar">March</option>
                                        <option value="Apr">April</option>
                                        <option value="May">May</option>
                                        <option value="Jun">June</option>
                                        <option value="Jul">July</option>
                                        <option value="Aug">August</option>
                                        <option value="Sep">September</option>
                                        <option value="Oct">October</option>
                                        <option value="Nov">November</option>
                                        <option value="Dec">December</option>
                                    </Input>
                                </Col>
                                <Col md={3}>
                                    <Input
                                        type="select"
                                        name="startYear"
                                        value={formData.startYear}
                                        onChange={handleChange}
                                        disabled={formData.doesNotExpire}
                                    >
                                        <option value="">YYYY</option>
                                        <option value="2023">2023</option>
                                        <option value="2022">2022</option>
                                        <option value="2021">2021</option>
                                        <option value="2020">2020</option>
                                        <option value="2019">2019</option>
                                        <option value="2018">2018</option>
                                        <option value="2017">2017</option>

                                    </Input>
                                </Col>

                                <Col md={3}>
                                    <Input
                                        type="select"
                                        name="endMonth"
                                        value={formData.endMonth}
                                        onChange={handleChange}
                                        disabled={formData.doesNotExpire}
                                    >
                                        <option value="">MM</option>
                                        <option value="Jan">January</option>
                                        <option value="Feb">February</option>
                                        <option value="Mar">March</option>
                                        <option value="Apr">April</option>
                                        <option value="May">May</option>
                                        <option value="Jun">June</option>
                                        <option value="Jul">July</option>
                                        <option value="Aug">August</option>
                                        <option value="Sep">September</option>
                                        <option value="Oct">October</option>
                                        <option value="Nov">November</option>
                                        <option value="Dec">December</option>
                                    </Input>
                                </Col>
                                <Col md={3}>
                                    <Input
                                        type="select"
                                        name="endYear"
                                        value={formData.endYear}
                                        onChange={handleChange}
                                        disabled={formData.doesNotExpire}
                                    >
                                        <option value="">YYYY</option>
                                        <option value="2023">2023</option>
                                        <option value="2022">2022</option>
                                        <option value="2021">2021</option>
                                        <option value="2020">2020</option>
                                        <option value="2019">2019</option>
                                        <option value="2018">2018</option>
                                        <option value="2017">2017</option>
                                    </Input>
                                </Col>
                            </Row>
                            {formErrors.validity && <FormFeedback className="d-block">{formErrors.validity}</FormFeedback>}
                        </FormGroup>
                        <FormGroup check className='align-items-center d-flex gap-2'>
                            <Label check>
                                <Input
                                    type="checkbox"
                                    name="doesNotExpire"
                                    checked={formData.doesNotExpire}
                                    onChange={handleChange}
                                    style={{ width: '1em' }}
                                />
                                <span className='text-dark' style={{ marginLeft: '0.5em', fontSize: '14px', fontWeight: '600', lineHeight: '1.5', color: '#0B5ED7' }}>This certification does not expire</span>
                            </Label>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                    <Button color="primary" onClick={handleSubmit}>Save</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default Addcertificate
