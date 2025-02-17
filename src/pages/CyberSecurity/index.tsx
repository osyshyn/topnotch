import { ButtonVariants } from '../../@types/button';
import SectionImage from '../../assets/cyber-security-1sec.svg';
import ArrowUp from '../../assets/icon/carbon_arrow-up-right.svg';
import CyberSecurityLogo from '../../assets/icon/cybersecurity.svg';
import SquareIcon from '../../assets/icon/sqaure.svg';
import { PageWrapper } from '../../components/Layouts/PageWrapper';
import PageTitle from '../../components/PageTitle';
import { Button } from '../../page-components/Button';
import Carousel from '../../page-components/Carusel/left';
import { Form } from '../Home/Form';

const CyberSecurityPage = () => {
  const cards = [
    {
      title: 'EDR/XDR',
      description:
        'Endpoint or Extended Detection and Response goes beyond traditional antivirus by scanning behavioral vectors and intervening at the first sign of potential threats.',
    },
    {
      title: 'CVM',
      description:
        'Continuous Vulnerability Management, comparing your systems against a government-published database of common vulnerabilities and exploits.',
    },
    {
      title: 'SOC Partnership',
      description:
        '24/7 access to a dedicated Security Operations Center with cybersecurity engineers ready for incident response and complex case escalations.',
    },
    {
      title: 'UTM',
      description:
        'Unified Threat Management with intelligent subscription services providing malware scanning, content filtering, and geocaching for your firewall router.',
    },
    {
      title: 'EDR/XDR',
      description:
        'Endpoint or Extended Detection and Response goes beyond traditional antivirus by scanning behavioral vectors and intervening at the first sign of potential threats.',
    },
    {
      title: 'CVM',
      description:
        'Continuous Vulnerability Management, comparing your systems against a government-published database of common vulnerabilities and exploits.',
    },
    {
      title: 'EDR/XDR',
      description:
        'Endpoint or Extended Detection and Response goes beyond traditional antivirus by scanning behavioral vectors and intervening at the first sign of potential threats.',
    },
    {
      title: 'CVM',
      description:
        'Continuous Vulnerability Management, comparing your systems against a government-published database of common vulnerabilities and exploits.',
    },
  ];
  return (
    <PageWrapper className="flex flex-col">
      <div className="flex min-h-screen w-full flex-col justify-start">
        {/* 1section */}
        <div className="bg-[#252423] px-20 pt-[80px]">
          <PageTitle title="Cybersecurity" />

          <div className="relative flex h-full w-full items-center justify-center gap-8 px-[200px]">
            <div className="flex flex-1 flex-col items-start justify-center">
              <h2 className="font-brand-title mb-2 text-4xl font-bold text-white">
                Partner with Top Notch
              </h2>
              <p className="font-brand mt-5 leading-[28px] text-white">
                Don’t leave your business vulnerable. Partner with Top Notch for
                superior cybersecurity and peace of mind. Protect your
                organization from the growing threat of cyberattacks and ensure
                your business’s safety and compliance.
              </p>
              <Button
                className="mt-10 rounded-full"
                variant={ButtonVariants.PRIMARY}
              >
                Let's Start Now
                <img
                  src={ArrowUp}
                  className="ml-2 h-4 w-4"
                  alt=""
                  aria-hidden="true"
                />
              </Button>
            </div>
            <div className="flex flex-1 justify-center">
              <img className="mt-[110px]" width={450} src={SectionImage} />
            </div>
            <img
              src={SquareIcon}
              className="absolute bottom-[-10%] left-[40%]"
            />
          </div>
          <div className="relative mt-[200px] flex min-h-screen w-full items-center justify-center gap-8 px-[80px]">
            <div className="min-h-[800px] w-[90%] rounded-[30px] bg-[#191919] px-[100px] py-[70px]">
              <div className="w-[80%]">
                <h3 className="font-brand-title text-[48px] text-white">
                  Extended Threat Detection and Response Services
                </h3>
              </div>
              <p className="font-brand mt-5 text-[18px] leading-[28px] text-white">
                Protect your business with our comprehensive threat detection
                and response services. Our team of experts will monitor your
                systems 24/7, identify potential threats, and respond swiftly to
                minimize any damage.
              </p>
              <div className="mt-10 flex w-full items-center justify-center">
                <div className="flex flex-1 items-center gap-5">
                  <div className="h-24 border-l-2 border-gray-500"></div>
                  <div className="flex flex-col">
                    <p className="font-brand text-[24px] text-white">
                      Detection
                    </p>
                    <p className="font-brand text-[18px] text-[#A1A1A1]">
                      Utilize advanced tools and technologies to detect and
                      analyze potential security threats.
                    </p>
                  </div>
                </div>
                <div className="flex flex-1 items-center gap-5">
                  <div className="h-24 border-l-2 border-gray-500"></div>
                  <div className="flex flex-col">
                    <p className="font-brand text-[24px] text-white">
                      Response
                    </p>
                    <p className="font-brand text-[18px] text-[#A1A1A1]">
                      Take immediate action to mitigate and neutralize security
                      incidents to protect your business.
                    </p>
                  </div>
                </div>
              </div>
              <p className="font-brand mt-10 text-[18px] leading-[28px] text-white">
                Waiting until your first cyber incident to get your house in
                order is one of the worst business decisions one can make.
                Proper technology and cybersecurity postures are now the
                hallmarks of a healthy organization. Alignment with modern
                security standards is now a requirement for all, even if your
                industry is unregulated. Proof of compliance now must be
                furnished to banks, insurance companies, investors, and often,
                even your clients. For CPAs, RIAs, CCIMs, and medical practices,
                failure to maintain proper security, data protection, and
                business continuity tools can result in severe financial
                penalties and/or the loss of your industry designation.
              </p>
              <Button
                className="mt-10 rounded-full"
                variant={ButtonVariants.PRIMARY}
              >
                See More
                <img
                  src={ArrowUp}
                  className="ml-2 h-4 w-4"
                  alt=""
                  aria-hidden="true"
                />
              </Button>
            </div>
          </div>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#252423"
            fill-opacity="1"
            d="M0,160L60,160C120,160,240,160,360,181.3C480,203,600,245,720,261.3C840,277,960,267,1080,229.3C1200,192,1320,128,1380,96L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>

        <div>
          <div className="bg-white">
            <div className="flex h-full min-h-screen w-full flex-col items-center justify-center gap-8 pl-[80px]">
              <div className="flex flex-col items-start justify-start">
                <h2 className="font-brand-title text-[48px] font-[700]">
                  Premium Offerings for Security & Compliance
                </h2>
                <p className="font-brand text-[18px] text-[#7A7A7A]">
                  The following tools, coupled with our industry-leading
                  response time guarantee, are available exclusively to clients
                  with a managed contract:
                </p>
              </div>
              <div className="w-full">
                <Carousel
                  cards={cards}
                  cardColor="bg-brand-blue"
                  textColor="text-white"
                  arrowColor="text-brand-black"
                />
              </div>
            </div>
          </div>
          <div className="bg-white">
            <div className="flex min-h-screen w-full items-center justify-center px-[120px]">
              <div className="flex flex-1 justify-center">
                <img width={400} src={CyberSecurityLogo} />
              </div>
              <div className="flex flex-1 flex-col items-center justify-center">
                <h2 className="font-brand-title text-[48px] font-bold">
                  Top Notch Cybersecurity: Proactive, Comprehensive, Unmatched
                </h2>
                <p className="font-brand mt-5 text-[18px]">
                  At Top Notch, we’re not just about fixing problems; we’re
                  about preventing them. Cyberattacks are increasing at an
                  alarming rate, and traditional defenses only catch a fraction
                  of the threats. As work environments evolve, users become
                  prime targets.
                </p>
                <div className="mt-10 flex w-full items-center justify-center gap-10">
                  <div className="flex flex-1 items-center gap-5">
                    <div className="h-32 border-l-2 border-gray-500"></div>
                    <div className="flex flex-col">
                      <p className="font-brand text-[24px]">One Click</p>
                      <p className="font-brand text-[18px] text-[#A1A1A1]">
                        Utilize advanced tools and technologies to detect and
                        analyze potential security threats.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-1 items-center gap-5">
                    <div className="h-32 border-l-2 border-gray-500"></div>
                    <div className="flex flex-col">
                      <p className="font-brand text-[24px]">Security Breach</p>
                      <p className="font-brand text-[18px] text-[#A1A1A1]">
                        Take immediate action to mitigate and neutralize
                        security incidents to protect your business.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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

export default CyberSecurityPage;
