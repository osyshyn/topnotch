import ArrowUp from '../../../../assets/carbon_arrow-up-right.svg';
import Checkmark from '../../../../assets/checkmark-square-02.svg'

import Computer from '../../../../assets/computer.png'

export const Company = () => {
    return(
        <div className="flex  justify-between items-center">
            <div>
            <h2 className="text-5xl font-bold text-white font-brand-title ">Commercial Services</h2>
                  <p className="text-white text-[18px] font-[400] font-brand mt-4">
                    Design, development, implementation, and support all from one qualified provider.
                  </p>
                  <div className="grid grid-cols-2 gap-8 text-white mt-10">
  {/* Перша колонка */}
  <ul className="space-y-4 text-[16px] font-[400] font-brand">
    <li className="flex items-center gap-2">
    <img src={Checkmark} alt="" width={24} height={24}/>
      Network Support & Systems Administration
    </li>
    <li className="flex items-center gap-2">
    <img src={Checkmark} alt="" width={24} height={24}/>
      Staff Augmentation
    </li>
    <li className="flex items-center gap-2">
    <img src={Checkmark} alt="" width={24} height={24}/>
      Computer Equipment & Repairs
    </li>
  </ul>

  {/* Друга колонка */}
  <ul className="space-y-4 text-[16px] font-[400] font-brand">
    <li className="flex items-center gap-2">
    <img src={Checkmark} alt="" width={24} height={24}/>
      Management Software
    </li>
    <li className="flex items-center gap-2">
    <img src={Checkmark} alt="" width={24} height={24}/>
      Cyber Security
    </li>
    <li className="flex items-center gap-2">
    <img src={Checkmark} alt="" width={24} height={24}/>
      And many other services...
    </li>
  </ul>
</div>

<a 
                        href="/contact"
                        className="mt-10 inline-flex items-center px-6 py-3 bg-[#F15A29] hover:bg-[#d94d1f] transition-colors rounded-full text-white font-semibold text-base"
                    >
                        Contact Us
                        <img 
                            src={ArrowUp} 
                            className="ml-2 w-4 h-4" 
                            alt=""
                            aria-hidden="true"
                        />
                    </a>
            </div>
                 
                  <div className="mt-6">
                  <img src={Computer} alt="" width={500} height={400}/>
                  </div>

                 
                </div>
        
    )
}