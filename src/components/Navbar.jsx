import React from "react";
import {
  AiFillFileAdd,
  AiFillNotification,
  AiOutlineHome,
} from "react-icons/ai";

import { RiLogoutBoxFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { COLORS } from "../general/colors";

const NavItem = ({ to, value, closed, Icon }) => {
  const commonClasses =
    "flex items-center space-x-2 w-full p-2 block whitespace-nowrap";
  const activeClass = commonClasses + " bg-swatch_1 text-swatch_5";
  const inActiveClass = commonClasses + "  text-swatch_2";
  return (
    <NavLink
      className={({ isActive }) => (isActive ? activeClass : inActiveClass)}
      to={to}
    >
      {Icon}
      <span
        className={
          closed
            ? "w-0 transition-width overflow-hidden"
            : "w-full transition-width"
        }
      >
        {value}
      </span>
    </NavLink>
  );
};

export default function Navbar({ closed, setLogOut }) {
  return (
    <nav>
      {/* <div className="flex justify-center p-3"> */}
      <div className="flex justify-center">
        <img className="w-14" src="./logo.png" alt="" height={70} width={50} />
      </div>

      <ul>
        <li>
          <NavItem
            closed={closed}
            to="/"
            value="Home"
            Icon={<AiOutlineHome size={24} />}
          />
        </li>
        <li>
          <NavItem
            closed={closed}
            to="/transactions"
            value="Transactions"
            Icon={<AiFillFileAdd size={24} />}
          />
        </li>
        <li>
          <NavItem
            closed={closed}
            to="/buy"
            value="Buy"
            Icon={<AiFillNotification size={24} />}
          />
        </li>

        <li>
          {/* <div className="flex"> */}
          {/* <button
            onClick={setLogOut}
            className="ml-2 items-center flex  text-red-700"
          >
            <RiLogoutBoxFill size={24} />
            <span
              className={
                closed
                  ? "w-0 transition-width overflow-hidden"
                  : "w-full transition-width p-2"
              }
            >
              Last
            </span>
          </button> */}
          {/* </div> */}
        </li>
      </ul>
    </nav>
  );
}
