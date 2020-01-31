import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
  Carousel,
  CarouselControl,
  CarouselItem,
  CarouselCaption,
  Container,
  Row,
  Col,
  Button
} from 'reactstrap';

import MercedesImg from './../../Assets/images/car1.jpg';
import car1 from './../../Assets/images/1.jpg';
import car2 from './../../Assets/images/2.jpg';
import car3 from './../../Assets/images/3.jpg';
import car4 from './../../Assets/images/4.jpg';
import { CarDetails, SelectField } from '../../Components';

const items = [
  {
    src: car1,
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: car2,
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: car3,
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: car4,
    altText: 'Slide 4',
    caption: 'Slide 4'
  }
];

const dummyCarData = {
  title: 'Mercedes-Benz A-Class',
  model: '2019',
  imgUrl: MercedesImg
};

const CarFinderValidationSchema = Yup.object().shape({
  year: Yup.string().required('Required'),
  make: Yup.string().required('Required'),
  model: Yup.string().required('Required')
});

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const slides = items.map(item => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}>
        <img className="carousel-img img-fluid" src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const handleCarSearch = fValues => {
    console.log('Car Finder Form Values: ', fValues);
  };

  return (
    <div className="home-page">
      <div className="intro-slider">
        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
      </div>
      <section className="car-finder">
        <Container className="search-container">
          <h1>Find Cars</h1>
          <p className="lead">With thousands of cars, we have just the right one for you</p>
          <Formik
            validationSchema={CarFinderValidationSchema}
            onSubmit={handleCarSearch}
            initialValues={{}}>
            <Form>
              <div className="search-form">
                <Row form className="text-left">
                  <Col md={3} sm={4} xs={12}>
                    <SelectField
                      name="year"
                      label="Year"
                      options={['2015', '2016', '2017', '2018']}
                      formGroupClass="mb-2 mb-sm-0"
                    />
                  </Col>
                  <Col md={3} sm={4} xs={12}>
                    <SelectField
                      name="make"
                      label="Make"
                      options={['Honda', 'Toyota', 'Suzuki', 'Chevrolet']}
                      formGroupClass="mb-2 mb-sm-0"
                    />
                  </Col>
                  <Col md={3} sm={4} xs={12}>
                    <SelectField
                      name="model"
                      label="Model"
                      options={['2015', '2016', '2017', '2018']}
                      formGroupClass="mb-2 mb-sm-0"
                    />
                  </Col>
                  <Col md={3} sm={12} xs={12} className="mt-4 mt-md-0">
                    <Button block type="submit">
                      Find Cars
                    </Button>
                  </Col>
                </Row>
              </div>
            </Form>
          </Formik>
        </Container>
      </section>
      <section className="car-info">
        <CarDetails carInfo={dummyCarData} />
      </section>
    </div>
  );
};

export default Home;
