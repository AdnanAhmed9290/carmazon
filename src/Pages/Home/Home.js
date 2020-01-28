import React, { useState } from 'react';
import {
  Carousel,
  CarouselIndicators,
  CarouselControl,
  CarouselItem,
  CarouselCaption,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Button,
  Label
} from 'reactstrap';
import MercedesImg from './../../Assets/images/car1.jpg';
import car1 from './../../Assets/images/1.jpg';
import car2 from './../../Assets/images/2.jpg';
import car3 from './../../Assets/images/3.jpg';
import car4 from './../../Assets/images/4.jpg';
import { CarDetails } from '../../Components';

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

          <Form className="search-form">
            <Row form className="text-left">
              <Col md={3} sm={4} xs={12}>
                <FormGroup className="mb-2 mb-sm-0">
                  <Label for="province">Year</Label>
                  <Input type="select" name="year" id="year">
                    <option>2015</option>
                    <option>2016</option>
                    <option>2017</option>
                    <option>2018</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md={3} sm={4} xs={12}>
                <FormGroup className="mb-2 mb-sm-0">
                  <Label for="province">Make</Label>
                  <Input type="select" name="make" id="make">
                    <option>Honda</option>
                    <option>Toyota</option>
                    <option>Suzuki</option>
                    <option>Chevrolet</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md={3} sm={4} xs={12}>
                <FormGroup className="mb-2 mb-sm-0">
                  <Label for="province">Model</Label>
                  <Input type="select" name="model" id="model">
                    <option>2010</option>
                    <option>2015</option>
                    <option>2016</option>
                    <option>2019</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md={3} sm={12} xs={12} className="mt-4 mt-md-0">
                <Button block>Find Cars</Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </section>
      <section className="car-info">
        <CarDetails carInfo={dummyCarData} />
      </section>
    </div>
  );
};

export default Home;
