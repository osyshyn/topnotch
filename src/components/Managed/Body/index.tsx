import { Located } from '../Located';
import { ObviousChoice } from '../ObviousChoice';
import { Paln } from '../Plan';
import ServicesGrid from '../ServicesGrid';
import { SubInfo } from '../SubInfo';

export const Body = () => {
  return (
    <>
      <ObviousChoice />
      <ServicesGrid />
      <SubInfo />
      <Located />
      <Paln />
    </>
  );
};
