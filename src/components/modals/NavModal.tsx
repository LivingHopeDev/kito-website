import { Link } from "react-router-dom";
import { NavItem } from "../header/Navbar";
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

interface ModalProps {
  nav: NavItem[];
}

export default function NavModal({ nav }: ModalProps) {
  return (
    <>
      {/* Background Overlay */}
      <div className="fixed top-[5rem] left-0 right-0 bottom-0 bg-black bg-opacity-50 z-[99]" />

      {/* Modal Content */}
      <div className="bg-white rounded-lg shadow-md p-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[60%] z-[100]">
        <NavigationMenu>
          {/* Change layout to vertical */}
          <NavigationMenuList className="flex flex-col items-center space-y-4">
            {nav.map((item) => (
              <NavigationMenuItem
                key={item.id}
                className="text-black hover:text-[#68E33D] transition-colors duration-500 ease-in-out"
              >
                {item.dropdown ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger className="text-lg font-medium border-none focus:outline-none focus:ring-0">
                      {item.name}
                    </DropdownMenuTrigger>

                    {/* Dropdown content styled to stay on top */}
                    <DropdownMenuContent className="bg-[#D3D3D3] rounded-md p-2 shadow-md z-[9999] relative">
                      {item.dropdown.map((dropdownItem, index) => (
                        <DropdownMenuItem key={index}>
                          <Link
                            to={dropdownItem.link}
                            className="block px-4 py-2 text-[#274C5BF5] text-[1rem] rounded-md hover:text-[#68E33D] transition-colors duration-500 ease-in-out"
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

        {/* Contact Us Button */}
        <div className="mt-6">
          <button className="w-full">
            <Link to="#">
              <p className="bg-[#68E33D] font-medium px-4 py-2 text-lg rounded-md text-white transition-colors duration-500 ease-in-out hover:bg-white hover:text-[#68E33D]">
                Contact Us
              </p>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
