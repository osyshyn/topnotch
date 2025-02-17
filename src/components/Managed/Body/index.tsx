import { Located } from '../Located';
import { ObviousChoice } from '../ObviousChoice';
import { Paln } from '../Plan';
import ServicesGrid from '../ServicesGrid';
import { SubInfo } from '../SubInfo';
import square from '../../../assets/icon/square-black.svg';

export const Body = () => {
  return (
    <div className="relative w-full bg-white px-5 py-16 sm:py-20 md:px-10 lg:mt-28 lg:mb-36 xl:px-6">
      <ObviousChoice />
      <ServicesGrid />
      <SubInfo />
      <Located />
      <Paln />
      <div className="absolute right-[12%] bottom-[20%] hidden lg:block">
        <img src={square} alt="" />
      </div>
    </div>
  );
};
