import { PageWrapper } from '../../components/Layouts/PageWrapper';
import { Body } from '../../components/NetworkManagement/Body';
import { Hero } from '../../components/NetworkManagement/Hero';
import { Form } from '../Home/Form';

const NetworkManagement = () => {
  return (
    <PageWrapper>
      <Hero />
      <Body />
      <Form />
    </PageWrapper>
  );
};
export default NetworkManagement;
