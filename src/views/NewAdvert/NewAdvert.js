import React, {useEffect, useState} from 'react';
import * as yup from 'yup';
import {Formik} from 'formik';
import {Button, Col, Form, InputGroup, ListGroup, Row} from "react-bootstrap";
import axios from "axios";
import {useNavigate} from 'react-router-dom';

const schema = yup.object().shape({
    title: yup.string().required().max(50).min(3, 'tekst jako opis'),
    price: yup.string().required(),
    seller: yup.string().required().email('Podaj poprawny adres'),
    sellerPhone: yup.string(),
    canNegotiate: yup.bool(), //.required().oneOf([true], 'canNegotiate must be accepted'),
    categoryId: yup.string(),
    description: yup.string().required(),

});

const initialValues = {
    title: 'test',
    price: 'Otto',
    seller: '',
    sellerPhone: '',
    canNegotiate: false,
    categoryId: '',
    description: '',


}

const NewAdvert = () => {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('/categories');
            setCategories(response.data);
        }
        fetchData();
    }, []);
    const handleSubmitFormik = async (values) => {
        const request = {
            ...values,
            createdOn: new Date().toISOString(),
            image: "http://placeimg.com/400/400/business?i=0"
        }
        const response = await axios.post('/adverts', request);
        navigate(`/advert/${response.data.id}`)
    }
    return (
        <div>
            <Formik
                validationSchema={schema}
                //                onSubmit={console.log}
                onSubmit={handleSubmitFormik}
                initialValues={initialValues}
            >
                {({
                      handleSubmit,
                      handleChange,
                      handleBlur,
                      values,
                      touched,
                      isValid,
                      errors,
                  }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="4" controlId="validationFormik01">
                                <Form.Label>title</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="title"
                                    value={values.title}
                                    onChange={handleChange}
                                    isInvalid={!!errors.title}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.title}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormik01">
                                <Form.Label>price</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="price"
                                    value={values.price}
                                    onChange={handleChange}
                                    isInvalid={!!errors.price}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.price}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationSeller">
                                <Form.Label>seller</Form.Label>
                                <Form.Control
                                    type="string"
                                    name="seller"
                                    value={values.seller}
                                    onChange={handleChange}
                                    isInvalid={!!errors.seller}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.seller}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationSeller">
                                <Form.Label>sellerPhone</Form.Label>
                                <Form.Control
                                    type="phone"
                                    name="sellerPhone"
                                    value={values.sellerPhone}
                                    onChange={handleChange}
                                    isInvalid={!!errors.sellerPhone}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.sellerPhone}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="4" controlId="validationSeller">
                                <Form.Label>description</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="description"
                                    value={values.description}
                                    onChange={handleChange}
                                    isInvalid={!!errors.description}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.description}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="4" controlId="validationSeller">
                                <Form.Label>categoryId</Form.Label>
                                <Form.Select
                                    value={values.categoryId}
                                    onChange={handleChange}
                                    name={"categoryId"}
                                    isInvalid={!!errors.categoryId}
                                    aria-label="Default select example">
                                    <option/>

                                    {categories.map(category => (
                                        <option key={category.id} value={category.id}>{category.title}</option>
                                    ))}

                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                    {errors.categoryId}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3">
                            <Form.Check
                                required
                                name="canNegotiate"
                                label="Agree to canNegotiate and conditions"
                                onChange={handleChange}
                                isInvalid={!!errors.canNegotiate}
                                feedback={errors.canNegotiate}
                                feedbackType="invalid"
                                id="validationFormik0"
                            />
                        </Form.Group>
                        <Button type="submit">Submit form</Button>

                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default NewAdvert;