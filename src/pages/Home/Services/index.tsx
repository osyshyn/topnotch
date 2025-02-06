import { Company } from "./Company"
import { Residential } from "./Residential"

export const Services = () => {
    return(
        <div className="px-[80px] flex flex-col gap-12 mb-20 bg-brand-black w-full ">
        {/* Commercial Services */}
        <Company/>
        {/* Residential Services */}
        <Residential/>
      </div>
    )
}