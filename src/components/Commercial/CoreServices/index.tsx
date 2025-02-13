import Carousel from '../../../page-components/Carusel/left';

export const CoreServices = () => {
  const cards = [
    {
      title: 'Network Support and System-administration',
      description:
        'No matter your size, we can build, overhaul, scale, and support your technology with ease. Employing as-needed combinations of Microsoft, Apple, Unix, cloud, & virtualization technologies to serve you best.',
    },
    {
      title: 'Staff Augmentation',
      description:
        'When IT’s smooth, staff stay idle; in crises, you need more hands. Our scalable talent model fits seamlessly with your team—cost-effective and ready when you need it.',
    },
    {
      title: 'Computer Equipment & Repairs',
      description:
        'From hand-built production workstations and servers to professional-grade notebooks to affordable office machines, we’ve got you covered on both sales and service.',
    },
    {
      title: 'Cyber Security',
      description:
        'Risk assessments. Gap analysis. Penetration testing. Audits, best practices analysis & implementation. Cleanups from breach or compromise. Being a full-service firm, we also shine when it comes to the paperwork, politics, and compliance side of things.',
    },
    {
      title: 'Network Support and System-administration',
      description:
        'No matter your size, we can build, overhaul, scale, and support your technology with ease. Employing as-needed combinations of Microsoft, Apple, Unix, cloud, & virtualization technologies to serve you best.',
    },
    {
      title: 'Staff Augmentation',
      description:
        'When IT’s smooth, staff stay idle; in crises, you need more hands. Our scalable talent model fits seamlessly with your team—cost-effective and ready when you need it.',
    },
    {
      title: 'Computer Equipment & Repairs',
      description:
        'From hand-built production workstations and servers to professional-grade notebooks to affordable office machines, we’ve got you covered on both sales and service.',
    },
    {
      title: 'Cyber Security',
      description:
        'Risk assessments. Gap analysis. Penetration testing. Audits, best practices analysis & implementation. Cleanups from breach or compromise. Being a full-service firm, we also shine when it comes to the paperwork, politics, and compliance side of things.',
    },
  ];
  return (
    <div className="w-full py-20">
      <div className="mb-16 flex max-w-7xl flex-col flex-wrap items-start justify-between gap-4 lg:flex-row">
        <h2 className="font-brand-title mb-8 text-4xl font-bold text-white lg:mb-0 lg:text-5xl">
          Core Services
        </h2>
      </div>

      <div className="w-full">
        <Carousel
          cards={cards}
          cardColor="bg-brand-orange"
          arrowColor="text-white "
          textColor="text-white"
        />
      </div>
    </div>
  );
};
