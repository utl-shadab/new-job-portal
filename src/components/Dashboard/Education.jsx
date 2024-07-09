import React, { useState } from 'react';
import { Button, Modal, Row, Col, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import './dashboard.css'; // Import the CSS file for styling

const Education = () => {
    const [modal, setModal] = useState(false);
    const [formData, setFormData] = useState({
        education: '',
        board: '',
        passingYear: '',
        schoolMedium: '',
        marks: '',
        englishMarks: '',
        mathsMarks: '',
        university: '',
        course: '',
        specialization: '',
        courseType: 'full-time',
        startingYear: '',
        endingYear: '',
        gradingSystem: ''
    });
    const [formErrors, setFormErrors] = useState({});
    const [submittedData, setSubmittedData] = useState(null);
    // const toggle = () => setModal(!modal);
    const toggle = (education = '') => {
        setFormData({ ...formData, education });
        setModal(!modal);
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const validate = () => {
        const errors = {};
        if (!formData.education) errors.education = 'This field is required';
        if (formData.education === 'classX' || formData.education === 'classXII') {
            if (!formData.board) errors.board = 'This field is required';
            if (!formData.passingYear) errors.passingYear = 'This field is required';
            if (!formData.schoolMedium) errors.schoolMedium = 'This field is required';
            if (!formData.marks) errors.marks = 'This field is required';
        } else {
            if (!formData.university) errors.university = 'This field is required';
            if (!formData.course) errors.course = 'This field is required';
            if (!formData.specialization) errors.specialization = 'This field is required';
            if (!formData.startingYear) errors.startingYear = 'This field is required';
            if (!formData.endingYear) errors.endingYear = 'This field is required';
        }
        return errors;
    };

    const handleSubmit = () => {
        const errors = validate();
        if (Object.keys(errors).length === 0) {
            setSubmittedData(formData);
            setFormData({
                education: '',
                board: '',
                passingYear: '',
                schoolMedium: '',
                marks: '',
                englishMarks: '',
                mathsMarks: '',
                university: '',
                course: '',
                specialization: '',
                courseType: 'full-time',
                startingYear: '',
                endingYear: '',
                gradingSystem: ''
            });
            setModal(false);
        } else {
            setFormErrors(errors);
        }
    };
    return (
        <div className="education-container">
            <div className="profile-work-sample">
                <div className="container">

                    <div className="d-flex justify-content-between align-items-center education-header mb-3">
                        <h5>Education <span className="text-success"></span></h5>
                        <i
                            className="fa fa-pen"
                            style={{ cursor: 'pointer' }}
                            onClick={toggle}></i>
                    </div>
                    {!submittedData && (
                        <p>Your qualifications help employers know your educational background</p>
                    )}
                   <ul className="education-list">
                {submittedData ? (
                    <div>
                        <h6>{submittedData.education} <i className="fa fa-pen" style={{ cursor: 'pointer' }} onClick={() => toggle(submittedData.education)}></i></h6>
                        {submittedData.education === 'classX' || submittedData.education === 'classXII' ? (
                            <>
                                <p>{submittedData.board}</p>
                                <p>{submittedData.passingYear} | {submittedData.schoolMedium}</p>
                                <p>Marks: {submittedData.marks}</p>
                                {submittedData.education === 'classXII' && (
                                    <>
                                        <p>English Marks: {submittedData.englishMarks}</p>
                                        <p>Maths Marks: {submittedData.mathsMarks}</p>
                                    </>
                                )}
                            </>
                        ) : (
                            <>
                                <p>{submittedData.university}</p>
                                <p>{submittedData.course}</p>
                                <p>{submittedData.specialization}</p>
                                <p>{submittedData.startingYear} - {submittedData.endingYear} | {submittedData.courseType.charAt(0).toUpperCase() + submittedData.courseType.slice(1)}</p>
                                <p>Marks: {submittedData.marks}</p>
                            </>
                        )}
                    </div>
                ) : (
                    <>
                        <li onClick={() => toggle('doctorate')}>Add doctorate/PhD</li>
                        <li onClick={() => toggle('masters')}>Add masters/post-graduation</li>
                        <li onClick={() => toggle('graduation')}>Add graduation/diploma</li>
                        <li onClick={() => toggle('classXII')}>Add class XII</li>
                        <li onClick={() => toggle('classX')}>Add class X</li>
                    </>
                )}
            </ul>
                </div>
            </div>
            <Modal isOpen={modal} toggle={() => toggle('')} size="lg">
            <ModalHeader toggle={() => toggle('')}>Education</ModalHeader>
            <ModalBody>
                <Form>
                <FormGroup>
                            <Label for="education">Education <span className="text-danger">*</span></Label>
                            <Input type="select" name="education" id="education" onChange={handleChange} invalid={!!formErrors.education} value={formData.education}>
                                <option value="">Select education</option>
                                <option value="doctorate">Doctorate/PhD</option>
                                <option value="masters">Masters/post-graduation</option>
                                <option value="graduation">Graduation/diploma</option>
                                <option value="classXII">Class XII</option>
                                <option value="classX">Class X</option>
                            </Input>
                            <FormFeedback>{formErrors.education}</FormFeedback>
                        </FormGroup>
                        {(formData.education === 'classX' || formData.education === 'classXII') ? (
                            <>
                                <FormGroup>
                                    <Label for="board">Board <span className="text-danger">*</span></Label>
                                    <Input type="text" name="board" id="board" placeholder="Select board" onChange={handleChange} invalid={!!formErrors.board} />
                                    <FormFeedback>{formErrors.board}</FormFeedback>
                                </FormGroup>
                            <FormGroup>
                                <Label for="passingYear">Passing out year <span className="text-danger">*</span></Label>
                                <Input type="select" name="passingYear" id="passingYear" onChange={handleChange} invalid={!!formErrors.passingYear}>
                                    <option value="">Select passing out year</option>
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
                                    <option value="2009">2009</option>
                                    <option value="2008">2008</option>
                                    <option value="2007">2007</option>
                                    <option value="2006">2006</option>
                                    <option value="2005">2005</option>
                                    <option value="2004">2004</option>
                                    <option value="2003">2003</option>
                                    <option value="2002">2002</option>
                                    <option value="2001">2001</option>
                                    <option value="2000">2000</option>
                                </Input>
                                <FormFeedback>{formErrors.passingYear}</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label for="schoolMedium">School medium <span className="text-danger">*</span></Label>
                                <Input type="select" name="schoolMedium" id="schoolMedium" onChange={handleChange} invalid={!!formErrors.schoolMedium}>
                                    <option value="">Select medium</option>
                                    <option value="english">English</option>
                                    <option value="hindi">Hindi</option>
                                    <option value="other">Other</option>
                                </Input>
                                <FormFeedback>{formErrors.schoolMedium}</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label for="marks">Marks <span className="text-danger">*</span></Label>
                                <Input type="text" name="marks" id="marks" placeholder="% marks of 100 maximum" onChange={handleChange} invalid={!!formErrors.marks} />
                                <FormFeedback>{formErrors.marks}</FormFeedback>
                            </FormGroup>
                            {formData.education === 'classXII' && (
                                <>
                            <FormGroup>
                                <Label for="englishMarks">English marks</Label>
                                <Input type="text" name="englishMarks" id="englishMarks" placeholder="Marks (out of 100)" onChange={handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="mathsMarks">Maths marks</Label>
                                <Input type="text" name="mathsMarks" id="mathsMarks" placeholder="Marks (out of 100)" onChange={handleChange} />
                            </FormGroup>
                                </>
                            )}
                            </>
                    ) : (
                        <>
                            <FormGroup>
                                <Label for="university">University/Institute <span className="text-danger">*</span></Label>
                                <Input type="text" name="university" id="university" placeholder="Select university/institute" onChange={handleChange} invalid={!!formErrors.university} />
                                <FormFeedback>{formErrors.university}</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label for="course">Course <span className="text-danger">*</span></Label>
                                <Input type="select" name="course" id="course" onChange={handleChange} invalid={!!formErrors.course}>
                                    <option value="">Select course</option>
                                    <option value="bachelorOfScience">Bachelor of Science</option>
                                    <option value="bachelorOfArts">Bachelor of Arts</option>
                                    <option value="bachelorOfCommerce">Bachelor of Commerce</option>
                                    <option value="bachelorOfEngineering">Bachelor of Engineering</option>
                                    <option value="bachelorOfTechnology">Bachelor of Technology</option>
                                    <option value="masterOfScience">Master of Science</option>
                                    <option value="masterOfArts">Master of Arts</option>
                                    <option value="masterOfCommerce">Master of Commerce</option>
                                    <option value="masterOfEngineering">Master of Engineering</option>
                                    <option value="masterOfTechnology">Master of Technology</option>
                                    <option value="doctorOfPhilosophy">Doctor of Philosophy</option>
                                </Input>
                                <FormFeedback>{formErrors.course}</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label for="specialization">Specialization <span className="text-danger">*</span></Label>
                                <Input type="text" name="specialization" id="specialization" placeholder="Select specialization" onChange={handleChange} invalid={!!formErrors.specialization}>
                                <option value="">Select specialization</option>
                                <option value="computerScience">Computer Science</option>
                                <option value="mechanicalEngineering">Mechanical Engineering</option>
                                <option value="electricalEngineering">Electrical Engineering</option>
                                <option value="civilEngineering">Civil Engineering</option>
                                <option value="businessAdministration">Business Administration</option>
                                <option value="psychology">Psychology</option>
                                <option value="economics">Economics</option>
                                <option value="biology">Biology</option>
                                <option value="chemistry">Chemistry</option>
                                <option value="physics">Physics</option>
                                <option value="mathematics">Mathematics</option>
                                <option value="englishLiterature">English Literature</option>
                            </Input>
                            <FormFeedback>{formErrors.specialization}</FormFeedback>
                        </FormGroup>
                        
                        <FormGroup>
                            <Label>Course type <span className="text-danger">*</span></Label>
                            <div>
                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="radio" name="courseType" value="full-time" onChange={handleChange} checked={formData.courseType === 'full-time'} /> Full time
                                    </Label>
                                </FormGroup>
                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="radio" name="courseType" value="part-time" onChange={handleChange} checked={formData.courseType === 'part-time'} /> Part time
                                    </Label>
                                </FormGroup>
                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="radio" name="courseType" value="distance-learning" onChange={handleChange} checked={formData.courseType === 'distance-learning'} /> Correspondence/Distance learning
                                    </Label>
                                </FormGroup>
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <Label>Course duration <span className="text-danger">*</span></Label>
                            <Row form>
                                <Col md={6}>
                                    <Input type="select" name="startingYear" onChange={handleChange} invalid={!!formErrors.startingYear}>
                                        <option value="">Starting year</option>
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
                                        <option value="2009">2009</option>
                                        <option value="2008">2008</option>
                                        <option value="2007">2007</option>
                                        <option value="2006">2006</option>
                                        <option value="2005">2005</option>
                                        <option value="2004">2004</option>
                                        <option value="2003">2003</option>
                                        <option value="2002">2002</option>
                                        <option value="2001">2001</option>
                                        <option value="2000">2000</option>
                                    </Input>
                                    <FormFeedback>{formErrors.startingYear}</FormFeedback>
                                </Col>
                                <Col md={6}>
                                    <Input type="select" name="endingYear" onChange={handleChange} invalid={!!formErrors.endingYear}>
                                        <option value="">Ending year</option>
                                        <option value="2022">2022</option>
                                        <option value="2023">2023</option>
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
                                    <FormFeedback>{formErrors.endingYear}</FormFeedback>
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Label for="gradingSystem">Grading system</Label>
                            <Input type="select" name="gradingSystem" id="gradingSystem" onChange={handleChange}>
                                <option value="">Select grading system</option>
                                <option value="scale10">Scale 10 Grading System</option>
                                <option value="scale4">Scale 4 Grading System</option>
                                <option value="percent100"> % Marks of 100 Maximum</option>
                                <option value="passRequired">Course Requires a Pass</option>
                            </Input>

                            {formData.gradingSystem === 'scale10' && (
                                <React.Fragment>
                                    <Label for="marks" style={{ marginTop: '1rem' }}>Marks</Label>
                                    <Input type="text" name="marks" id="marks" onChange={handleChange} required />
                                </React.Fragment>
                            )}
                            {formData.gradingSystem === 'scale4' && (
                                <React.Fragment>
                                    <Label for="marks" style={{ marginTop: '1rem' }}>Marks</Label>
                                    <Input type="text" name="marks" id="marks" onChange={handleChange} required />
                                </React.Fragment>
                            )}
                            {formData.gradingSystem === 'percent100' && (
                                <React.Fragment>
                                    <Label for="marks" style={{ marginTop: '1rem' }}>Marks</Label>
                                    <Input type="text" name="marks" id="marks" onChange={handleChange} required />
                                </React.Fragment>
                            )}
                        </FormGroup>
                        </>
                    )}
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={() => toggle('')}>Cancel</Button>
                    <Button color="primary" onClick={handleSubmit}>Save</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default Education;