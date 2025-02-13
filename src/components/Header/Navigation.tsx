import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { NAVIGATION_LINKS, navItems } from './constants';

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
      <ul className="font-brand mr-10 flex items-center gap-10 py-4 text-[18px] text-white xl:mr-[200px]">
        {NAVIGATION_LINKS.map(({ id, label, href }) => {
          const hasSubmenu = navItems.find((item) => item.label === label);

          return (
            <li
              key={id}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link to={href} className="hover:text-[#f06e19]">
                {label}
              </Link>

              {/* Dropdown for "Services" */}
              {hasSubmenu && isDropdownOpen && (
                <div
                  className="absolute top-full left-1/2 mt-7 w-[1280px] -translate-x-1/2 transform rounded-[20px] border border-[#f06e19] bg-white px-8 py-8 text-black shadow-lg"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="grid grid-cols-4 gap-x-20 gap-y-10">
                    {hasSubmenu.submenu.map((subItem) => (
                      <div key={subItem.path} className="text-left">
                        <Link
                          to={subItem.path}
                          className="block text-lg font-bold hover:text-[#f06e19]"
                        >
                          {subItem.label}
                        </Link>
                        <p className="mt-1 text-sm text-gray-500">
                          Lorem ipsum dolor sit amet consectetur. Felis
                          ullamcorper nunc vel tincidunt ultrices.
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
