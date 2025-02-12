import { Window } from '../../../page-components/Window';
import HumanImg from '../../../assets/img/human.png';

export const SubInfo = () => {
  return (
    <div>
      <div className="mt-[70px] flex justify-between gap-20 px-20">
        <div>
          <img src={HumanImg} alt="PersonImg" />
        </div>
        <Window className="border-brand-gray max-w-[735px] border bg-white">
          <div>
            <div className="mt-6 flex flex-col gap-1 text-[18px] font-[400]">
              <p className="font-brand text-brand-gray font-brand-weight mb-1.5 text-[19px]">
                I have known and worked with Christian Argie and Top Notch for
                several years – first in support of our farm-based business and
                then in support of Mangham Associates, Inc., a financial
                advisory firm that I ran for over three decades. During my
                career I witnessed the growing capabilities of harnessing
                technology in business and the growing complexity due to
                cyber-threats and regulatory compliance demands.
              </p>
              <p className="font-brand text-brand-gray font-brand-weight mb-6 text-[19px]">
                I worked with several technology firms to support our growing
                needs over the years. Under Christian’s leadership and his
                capable team, I can say without hesitation that Top Notch was
                the best technology firm that I worked with. Top Notch excels at
                the difficult task of really understanding their clients and
                fitting technological solutions to clients’ needs. This
                attention to understanding their clients and proactively
                suggesting and implementing solutions is a rare marriage of
                listening, understanding, and technology. If given the
                opportunity I would not hesitate to hire Top Notch again.
              </p>
              <p className="text-brand-black font-brand text-[20px] font-semibold">
                Joel M. Managing Partner, Heritage Wealth Advisors
              </p>
            </div>
          </div>
        </Window>
      </div>
    </div>
  );
};
