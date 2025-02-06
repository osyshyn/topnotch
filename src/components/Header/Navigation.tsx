import { Link } from "react-router-dom"
import { NAVIGATION_LINKS } from "./constants"


export const Navigation = () => {
    
    return(
        <nav>
            <ul className="flex  items-center py-4 gap-10 font-brand text-[18px] text-white mr-[200px]">
            {NAVIGATION_LINKS.map(({id, label, href }) => (
               <li key={id}>
                 <Link to={href}>
                {label}
                </Link>
               </li>
            ))}
        </ul>
        </nav>
        
    )
}