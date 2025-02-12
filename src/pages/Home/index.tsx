import { PageWrapper } from '../../components/Layouts/PageWrapper';
import { Hero } from './Hero';
import { Services } from './Services';
import { SuccessStory } from './SuccessStory';
import { ServicesGrid } from './ServicesGrid';
import { Form } from './Form';
// import { About } from "./About";
// import { Title } from "../../page-components/Title";

const Home = () => {
  return (
    <PageWrapper mainClassName="flex flex-col ">
      {/* Hero Section */}
      <Hero />

      {/* Services Sections */}
      <Services />

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#252423"
          fill-opacity="1"
          d="M0,160L60,160C120,160,240,160,360,181.3C480,203,600,245,720,261.3C840,277,960,267,1080,229.3C1200,192,1320,128,1380,96L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>

      {/* Success Story Section */}
      <SuccessStory />

      {/* <About/> */}

      {/* Services Grid */}
      <ServicesGrid />

      {/* Contact Form */}
      <Form />
    </PageWrapper>
  );
};

export default Home;
