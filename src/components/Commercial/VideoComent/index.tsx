import { VideoPlayer } from '../../../page-components/VideoPlayer';
import { Window } from '../../../page-components/Window';
import apostrophe from '../../../assets/img/“.png';

export const VideoComent = () => {
  return (
    <div className="mx-20 mt-[70px] grid grid-cols-2 gap-20 pb-[150px]">
      <div>
        <VideoPlayer />
      </div>
      <div>
        <Window className="flex flex-wrap justify-center bg-[#191919] px-20 py-16 text-center">
          <div>
            <img src={apostrophe} alt="apostrophe" />
          </div>
          <p className="mt-10 text-[18px] font-[400] text-white">
            IT MSP’s are a dime a dozen these days. What you don’t see every day
            are firms that properly employ technology to grow, market, and scale
            your business-not just maintain your computers and networks. Firms
            that view information security as an enabler, rather than a
            hindrance. Companies that give you the tools you need to succeed,
            inside and outside of IT.
          </p>
          <p className="mt-4 text-2xl font-semibold text-white">
            Christian Argie, President
          </p>
        </Window>
      </div>
    </div>
  );
};
