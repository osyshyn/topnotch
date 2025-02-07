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

      {/* Wave Separator */}
      <div className="relative w-full">
        <div
          className="absolute h-20 w-full bg-white"
          style={{
            clipPath: 'polygon(0 0, 100% 100%, 100% 100%, 0% 100%)',
          }}
        ></div>
      </div>

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
