// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

// nav data
export const navData = [
  { name: "Accueil", path: "/", icon: <HiHome /> },
  { name: "About", path: "/about", icon: <HiUser /> },

  { name: "Albums", path: "/work", icon: <HiViewColumns /> },

  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen  ">
      {/* iiner */}
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[px] bg-neutral-800 xl:h-max py-8 sm:py-4 bg-white/10 packdrop-blur-sm text-3xl xl:text-xl xl:rounded-full ">
        {navData.map((link, index) => {
          return (
            <Link
              className={`${
                link.path === pathname && `text-accent`
              } relative flex items-center group hover:text-accent transition-all duration-300 ` }
              href={link.path}
              key={index}
            >
              {/* tooltip */}
              <div className="absolute pr-20 right-0 hidden xl:group-hover:flex">
                <div className="bg-white relative flex text-primary items center p-[10px] rounded-sm-[3px] ">
                  <div className="text-[12px] leading-none font-semibold capitalize">
                    {link.name}
                  </div>
                  {/* triangle */}
                  <div className="border-solid border-l-white  border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
                </div>
              </div>
              {/* icon */}
              <div className=""> {link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
