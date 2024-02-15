import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiMenuAlt1 } from "react-icons/hi";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function Header() {
  const [tab, setTab] = useState("");
  const [open, setOpen] = useState(true)
  const [darkMode, setDarkMode] = useState(true)
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    setTab(tabFromUrl);
  }, [location.search]);

  return (
    <nav className="sticky py-2 mx-6 transition-all duration-250 rounded-xl lg:justify-start top-[2%] bg-white border border-gray-200 z-50">
      <div className="flex items-center justify-between w-full px-4 py-1 mx-auto">
        <div className="flex flex-wrap pt-1">
          <div className="leading-normal text-sm opacity-80">
            <p className="text-slate-600 ">
              Pages /{" "}
              <span className="text-sm capitalize text-slate-800 font-semibold">
                dashboard
              </span>
            </p>
            <h6 className="font-bold capitalize text-[18px] text-slate-900">
              {tab}
            </h6>
          </div>
        </div>
        <div className="flex items-center gap-2 opacity-70">
          <Link>About</Link>
          {open ? (
            <HiMenuAlt1
              className="rotate-180 cursor-pointer"
              size={18}
              onClick={() => setOpen((prev) => !prev)}
            />
          ) : (
            <HiMenu size={18} onClick={() => setOpen((prev) => !prev)} />
          )}
          {darkMode ? (
            <MdLightMode
              size={18}
              onClick={() => setDarkMode((prev) => !prev)}
            />
          ) : (
            <MdDarkMode
              size={18}
              onClick={() => setDarkMode((prev) => !prev)}
            />
          )}
        </div>
      </div>
    </nav>
  );
}
