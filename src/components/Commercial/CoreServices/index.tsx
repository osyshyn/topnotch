import Carousel from '../../../page-components/Carusel/left';

export const CoreServices = () => {
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
    <div className="mx-[80px] w-full py-20">
      <div className="mb-16 flex max-w-7xl flex-col flex-wrap items-start justify-between gap-4 lg:flex-row">
        <h2 className="font-brand-title mb-8 text-4xl font-bold text-white lg:mb-0 lg:text-5xl">
          Core Services
        </h2>
      </div>

      <div className="w-full">
        <Carousel cards={cards} />
      </div>
    </div>
  );
};
