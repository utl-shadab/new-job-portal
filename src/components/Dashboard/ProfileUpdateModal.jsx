import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { useForm, Controller } from 'react-hook-form';
import CurrencyInput from "react-currency-input-field";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProfileUpdateModal = ({ isOpen, toggle }) => {
    const { handleSubmit, control, formState: { errors }, register } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        toast.success('Great! You are almost there.');
        // You can handle form submission logic here, e.g., send data to backend
    };

    const prefix = "₹ ";

    return (
        <Modal isOpen={isOpen} toggle={toggle}>
            <ModalHeader toggle={toggle}>Basic details
                <p className='grey'>Fill Your all basic details</p>
            </ModalHeader>
            <ModalBody>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <FormGroup>
                        <Label for="name">Name <span>*</span> </Label>
                        <Input
                            id="name"
                            type="text"
                            {...register('name', { required: 'Name is required' })}
                            invalid={!!errors.name}
                            placeholder="Type your name"
                        />
                        {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
                    </FormGroup>

                    <FormGroup>
                        <Label for="currentJobTitle">Current Job Title <span>*</span></Label>
                        <Input
                            id="currentJobTitle"
                            type="text"
                            {...register('currentJobTitle', { required: 'Current job title is required' })}
                            invalid={!!errors.currentJobTitle}
                            placeholder="Type your current job title"
                        />
                        {errors.currentJobTitle && <div className="invalid-feedback">{errors.currentJobTitle.message}</div>}
                    </FormGroup>

                    <FormGroup>
                        <Label for="currentAddress">Location <span>*</span></Label>
                        <Input
                            id="currentAddress"
                            type="text"
                            {...register('currentAddress', { required: 'Location is required' })}
                            invalid={!!errors.currentAddress}
                            placeholder="Type your Location"
                        />
                        {errors.currentAddress && <div className="invalid-feedback">{errors.currentAddress.message}</div>}
                    </FormGroup>

                    <Row>
                        <Label for="totalExperience">Total Experience <span>*</span></Label>
                        <Col md={6}>
                            <FormGroup>
                                <Controller
                                    name="experienceMonth"
                                    control={control}
                                    rules={{ required: 'Month is required' }}
                                    render={({ field }) => (
                                        <Input
                                            id="experienceMonth"
                                            type="select"
                                            {...field}
                                            invalid={!!errors.experienceMonth}
                                        >
                                            <option value="">Month</option>
                                            {[...Array(12).keys()].map(i => (
                                                <option key={i} value={i + 1}>{i + 1}</option>
                                            ))}
                                        </Input>
                                    )}
                                />
                                {errors.experienceMonth && <div className="invalid-feedback">{errors.experienceMonth.message}</div>}
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Controller
                                    name="experienceYear"
                                    control={control}
                                    rules={{ required: 'Year is required' }}
                                    render={({ field }) => (
                                        <Input
                                            id="experienceYear"
                                            type="select"
                                            {...field}
                                            invalid={!!errors.experienceYear}
                                        >
                                            <option value="">Year</option>
                                            {[...Array(50).keys()].map(i => (
                                                <option key={i} value={i + 1}>{i + 1}</option>
                                            ))}
                                        </Input>
                                    )}
                                />
                                {errors.experienceYear && <div className="invalid-feedback">{errors.experienceYear.message}</div>}
                            </FormGroup>
                        </Col>
                    </Row>

                    <FormGroup>
                        <Label for="salary">Current Salary <span>*</span></Label>
                        <CurrencyInput
                            id="salary"
                            name="salary"
                            className='form-control'
                            placeholder="Type your salary"
                            prefix={prefix}
                            allowDecimals={false}
                            onValueChange={(value) => console.log(value)}
                            {...register('salary', { required: 'Salary is required' })}
                            invalid={!!errors.salary}
                        />
                        {errors.salary && <div className="invalid-feedback">{errors.salary.message}</div>}
                    </FormGroup>

                    <FormGroup>
                        <Label for="mobileNumber">Mobile Number <span>*</span></Label>
                        <PhoneInput
                            country={'in'}
                            inputProps={{
                                name: 'phone',
                                required: true,
                                autoFocus: true,
                                placeholder: 'Enter phone number'
                            }}
                            {...register('mobileNumber', { required: 'Mobile number is required' })}
                            invalid={!!errors.mobileNumber}
                        />
                        {errors.mobileNumber && <div className="invalid-feedback">{errors.mobileNumber.message}</div>}
                    </FormGroup>

                    <FormGroup>
                        <Label for="companyName">Company Name <span>*</span></Label>
                        <Input
                            id="companyName"
                            type="text"
                            placeholder='Type your company name'
                            {...register('companyName', { required: 'Company name is required' })}
                            invalid={!!errors.companyName}
                        />
                        {errors.companyName && <div className="invalid-feedback">{errors.companyName.message}</div>}
                    </FormGroup>

                    <ModalFooter>
                        <Button className='text-primary' color="" onClick={toggle}>Cancel</Button>
                        <Button type="submit" color="primary">Submit</Button>
                    </ModalFooter>
                </Form>
            </ModalBody>
        </Modal>
    );
};

export default ProfileUpdateModal;
