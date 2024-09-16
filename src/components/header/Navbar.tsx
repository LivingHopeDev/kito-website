import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import NavModal from "../modals/NavModal";
import iconClose from "../../assets/icon-close.svg";
import hamburger from "../../assets/icon-hamburger.svg";

export interface NavItem {
  id: number;
  name: string;
  link?: string;
  dropdown?: Array<{ name: string; link: string }>;
}

const nav: NavItem[] = [
  {
    id: 1,
    name: "Home",
    link: "#",
  },
  {
    id: 2,
    name: "About Us",
    link: "#",
  },
  {
    id: 3,
    name: "Our Product",
    dropdown: [
      { name: "Yieldmax", link: "#" },
      { name: "EProcure", link: "#" },
      { name: "Combotrader", link: "#" },
      { name: "StorageX", link: "#" },
    ],
  },
  {
    id: 4,
    name: "Resources",
    dropdown: [
      { name: "Gallery", link: "#" },
      { name: "Blog", link: "#" },
    ],
  },
];

const NavBar = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalChange = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };

  return (
    <nav className="flex justify-between items-center md:px-20 px-5 py-10">
      <div>
        <img
          src="../logo.svg"
          alt="logo"
          className="w-[5rem] sm:w-[7rem] md:w-[10rem]"
        />
      </div>

      <div className="hidden sm:block ">
        <NavigationMenu>
          <NavigationMenuList className="flex justify-between items-center space-x-5">
            {nav.map((item) => (
              <NavigationMenuItem
                key={item.id}
                className="text-white hover:text-[#68E33D] transition-colors duration-500 ease-in-out"
              >
                {item.dropdown ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger className="text-lg font-medium border-none focus:outline-none focus:ring-0">
                      {item.name}
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-[#D3D3D3] rounded-md p-2 shadow-md">
                      {item.dropdown.map((dropdownItem, index) => (
                        <DropdownMenuItem key={index}>
                          <Link
                            to={dropdownItem.link}
                            className="block px-4 py-2 text-[#274C5BF5] text-[1rem] rounded-md hover:text-[#68E33D]  transition-colors duration-500 ease-in-out"
                          >
                            {dropdownItem.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  item.link && (
                    <Link to={item.link}>
                      <p className="text-lg font-medium">{item.name}</p>
                    </Link>
                  )
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="hidden sm:block flex space-x-3 items-center">
        <button>
          <Link to="#">
            <p className="bg-[#68E33D] font-medium px-2 py-1 text-lg rounded-md transition-colors duration-500 ease-in-out text-background border-none hover:bg-white hover:text-[#68E33D]">
              Contact Us
            </p>
          </Link>
        </button>
      </div>
      <div className="sm:hidden">
        <img
          src={showModal ? iconClose : hamburger}
          alt="menu-icon"
          onClick={handleModalChange}
          className="cursor-pointer"
        />
      </div>
      {showModal && <NavModal nav={nav} />}
    </nav>
  );
};

export default NavBar;
