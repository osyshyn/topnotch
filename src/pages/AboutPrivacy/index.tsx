import { Body } from '../../components/AboutPrivacy/Body';
import { PageWrapper } from '../../components/Layouts/PageWrapper';
import PageTitle from '../../components/PageTitle';
import { Form } from '../Home/Form';

import square from '../../assets/icon/sqaure.svg';

const AboutPrivacy = () => {
  return (
    <PageWrapper className="flex flex-col">
      <div className="bg-brand-black">
        <div className="mx-[80px] flex flex-col items-center justify-center py-20">
          <PageTitle
            title={<>Privacy Policy</>}
            subtitle=""
          />
        </div>
      </div>
      <div className="absolute right-[60%] mt-[80px] hidden lg:block">
        <img src={square} alt="" />
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#252423"
          fill-opacity="1"
          d="M0,160L60,160C120,160,240,160,360,181.3C480,203,600,245,720,261.3C840,277,960,267,1080,229.3C1200,192,1320,128,1380,96L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
      <Body />
      <svg
        className="w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#252423"
          fillOpacity="1"
          d="M0,96L60,106.7C120,117,240,139,360,160C480,181,600,203,720,192C840,181,960,139,1080,122.7C1200,107,1320,117,1380,122.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      <Form />
    </PageWrapper>
  );
};

export default AboutPrivacy;
