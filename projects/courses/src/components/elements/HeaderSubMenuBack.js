import React from "react";

export default ({ value, level }) => {
  return (
    <li
      className={`header-menu-submenu-element header-menu-submenu-element--lvl${level} header-menu-submenu-element--back header-menu-submenu-element--top`}>
      <button type='button' className='header-menu-submenu-back' data-header-back>
        {value}
      </button>
    </li>
  );
};
