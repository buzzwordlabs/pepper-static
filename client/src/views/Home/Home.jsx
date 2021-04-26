import React from 'react';
import { Tier } from '../../components';
import { Card, Row, Container, Col } from 'react-bootstrap';
import css from './Home.module.css';
import { app, signup, confirm } from '../../assets/images';

const smallDevice = window.innerWidth <= 760;

export default function Home(props) {
  const [state, setState] = React.useState({
    emailInput: ''
  });

  React.useEffect(() => {
    (async () => {
      const urlRef = props.location.pathname.split('/ref=');
      if (urlRef.length === 2) {
        await fetch(`https://api.callpepper.co/web/?ref=${urlRef[1]}`, {
          method: 'GET'
        });
      }
    })();
    // eslint-disable-next-line
  }, []);

  const onChange = (e) => {
    // Store the name of the property being changed
    let name = e.target.name;
    // Store the value the property will change to (the current input)
    let value = e.target.value;
    setState({
      // Update only the property that should be changed
      [name]: value
    });
  };

  return (
    <>
      <Container
        fluid
        className={smallDevice ? 'px-2' : 'px-5'}
        style={{ overflowX: 'hidden' }}
      >
        <div>
          <Hero emailInput={state.emailInput} onChange={onChange} />
          <hr className="mx-5" />
          <HowItWorks />
          <hr className="mx-5" />
          <Pricing />
        </div>
      </Container>
    </>
  );
}

const Hero = (props) => (
  <Row>
    <Col xs={12} md={6} className={smallDevice ? 'px-3' : 'px-5'}>
      <h1 className="mt-0 font-weight-bold">
        Robocalls Will Become A Thing of the Past
      </h1>
      <br />
      <p className="p-text">
        Everyone gets them and everyone hates them — including us.
      </p>
      <p className="p-text">
        That's why we built a mobile app that blocks robocalls. So far, not a
        single robocaller has beat our filter.
      </p>
      <p>We currently only work in the USA.</p>
      <h5>
        Pepper has been shut down. Thanks to everyone that joined us on this
        journey!
      </h5>
      <br />
      {/* <div className="mt-2 mx-auto d-inline-block">
        <h5>We have one week free trials!</h5>
        <br />
        <a href="https://apps.apple.com/us/app/pepper-robocall-blocker/id1487400263">
          <img
            src="https://linkmaker.itunes.apple.com/images/badges/en-us/badge_appstore-lrg.svg"
            alt="App Store Logo"
            style={{ width: '12.5rem' }}
            className="m-2"
          />
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.buzzwordlabs.pepper">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="App Store Logo"
            style={{ width: '12.5rem' }}
            className="m-2"
          />
        </a>
        <br />
        <br />
      </div> */}
    </Col>
    <Col xs={12} md={6} className="my-5">
      <iframe
        title="Product Hunt"
        style={{ border: 'none' }}
        className={css.productHuntGif}
        src="https://cards.producthunt.com/cards/posts/178311?v=1"
        frameborder="0"
        scrolling="no"
        allowfullscreen
      ></iframe>
      <a
        href="https://www.producthunt.com/posts/pepper-7?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-pepper-7"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=178311&theme=light"
          alt="Pepper - Block robocalls before they ring your phone ❌🤖 | Product Hunt Embed"
          style={{ width: '250px', height: '54px' }}
          width="250px"
          height="54px"
        />
      </a>
    </Col>
  </Row>
);

const HowItWorks = () => (
  <Row>
    <Col xs={12} className="text-center my-5">
      <h1>How It Works</h1>
    </Col>
    <Col xs={12} md={4}>
      <Card className={`mb-5 ${css.cardOverride}`}>
        <Card.Img variant="top" src={app} className={css.imgOverride} />
        <Card.Body>
          <h3>Download Our App</h3>
          <Card.Text>Think of it like a spam filter for robocalls.</Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col xs={12} md={4}>
      <Card className={`mb-5 ${css.cardOverride}`}>
        <Card.Img variant="top" src={signup} className={css.imgOverride} />
        <Card.Body>
          <h3>Sign Up</h3>
          <Card.Text>
            Make a Pepper account and get a one week free trial in just a few
            minutes. We don't ask for much information, we promise.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col xs={12} md={4}>
      <Card className={`mb-5 ${css.cardOverride}`}>
        <Card.Img variant="top" src={confirm} className={css.imgOverride} />
        <Card.Body>
          <h3>Be robocall free</h3>
          <Card.Text>
            We start blocking robocalls for you ASAP. <br /> Fun Fact: Not a
            single robocall has gotten past our spam filter.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  </Row>
);

const Pricing = () => {
  const tiers = [
    {
      name: 'Pepper',
      flatPrice: '$6/month',
      numFlames: 1
    }
  ];

  return (
    <Row className="text-center mx-0">
      <Col xs={12} md={{ span: 10, offset: 1 }} className="my-4 p-0">
        <h1 className="my-5 text-center">Our Pricing Options</h1>
        <h6>We like to keep things simple.</h6>
        <Row>
          {tiers.map((tier, key) => {
            return (
              <Col xs={12} lg={{ span: 6, offset: 3 }} key={key}>
                <Tier
                  flatPrice={tier.flatPrice}
                  name={tier.name}
                  numFlames={tier.numFlames}
                />
              </Col>
            );
          })}
        </Row>
      </Col>
    </Row>
  );
};
