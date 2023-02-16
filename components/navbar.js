import React from "react";
import Icon from "@/components/icon";

const Navbar = ({ actionList }) => {
  const onMenuItemClick = (func, params) => {
    const elem = document.activeElement;
    if(elem){
      elem.blur();
    }

    if (params) { return func(params); }
    return func();
  };

  return (
    <div
      className="navbar fixed top-0 z-10 shadow-lg bg-neutral text-neutral-content"
    >
      <div className="px-2 mx-2 navbar-start">
        <span className="text-2xl font-bold text-blue-400">MyChatBot</span>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost">
            <Icon name="more" size="h-6 w-6" />
          </label>
          <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
          {actionList.map(({ label, onClickHandler }) => (
            <li key={label}><a onClick={() => onMenuItemClick(onClickHandler, false)}>{label}</a></li>
          ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
