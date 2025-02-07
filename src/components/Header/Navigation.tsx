import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { NAVIGATION_LINKS, navItems } from "./constants";

export const Navigation = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const timeoutRef = useRef<number | undefined>(undefined);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 300); // ⏳ Затримка 300 мс перед закриттям
  };

  return (
    <nav>
      <ul className="flex items-center py-4 gap-10 font-brand text-[18px] text-white mr-[200px]">
        {NAVIGATION_LINKS.map(({ id, label, href }) => {
          const hasSubmenu = navItems.find((item) => item.label === label);

          return (
            <li key={id} className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <Link to={href} className="hover:text-[#f06e19]">
                {label}
              </Link>

              {/* Dropdown for "Services" */}
              {hasSubmenu && isDropdownOpen && (
  <div
    className="absolute left-1/2 transform -translate-x-1/2 w-[1280px] top-full mt-7 bg-white text-black rounded-[20px] shadow-lg border border-[#f06e19] py-8 px-8"
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  >
    <div className="grid grid-cols-4 gap-x-20 gap-y-10">
      {hasSubmenu.submenu.map((subItem) => (
        <div key={subItem.path} className="text-left">
          <Link to={subItem.path} className="block text-lg font-bold hover:text-[#f06e19]">
            {subItem.label}
          </Link>
          <p className="text-sm text-gray-500 mt-1">
            Lorem ipsum dolor sit amet consectetur. Felis ullamcorper nunc vel tincidunt ultrices.
          </p>
        </div>
      ))}
    </div>
  </div>
)}

            </li>
          );
        })}
      </ul>
    </nav>
  );
};
