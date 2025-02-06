import ArrowUp from '../../../../assets/carbon_arrow-up-right.svg';
import Checkmark from '../../../../assets/checkmark-square-02.svg'

import Computer from '../../../../assets/comp2.png'

        export const Residential = () => {
            return(
                <div className="space-y-6 flex justify-between items-center">
                   <div className="mt-6">
          <img src={Computer} alt="" width={500} height={400}/>
          </div>

          <div>
          <h2 className="text-5xl font-bold text-white font-brand-title ">Residential Services</h2>
          <p className="text-white text-[18px] font-[400] font-brand mt-4">
          Professional, personalized services in the Charlottesville, Richmond, and D.C. areas for PCs, Macs, and home networks.
          </p>
          <ul className="space-y-4 text-white text-[16px] font-[400] font-brand mt-10">
            <li className="flex items-center gap-2">
            <img src={Checkmark} alt="" width={24} height={24}/>
              Computer Diagnostics & Repairs
            </li>
            <li className="flex items-center gap-2">
              <img src={Checkmark} alt="" width={24} height={24}/>
              New, Used, Refurbished, & Custom PCs
            </li>
            <li className="flex items-center gap-2">
            <img src={Checkmark} alt="" width={24} height={24}/>
              Networking & Printing Solutions
            </li>
            <li className="flex items-center gap-2">
            <img src={Checkmark} alt="" width={24} height={24}/>
              Virus & Spyware Removal
            </li>
          </ul>
          <a 
                        href="/contact"
                        className="mt-10 inline-flex items-center px-6 py-3 bg-[#F15A29] hover:bg-[#d94d1f] transition-colors rounded-full text-white font-semibold text-base"
                    >
                        Residential
                        <img 
                            src={ArrowUp} 
                            className="ml-2 w-4 h-4" 
                            alt=""
                            aria-hidden="true"
                        />
                    </a>
         
          </div>
        </div>
            )
        }