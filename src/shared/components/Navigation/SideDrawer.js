import React from 'react';
import ReactDOM from 'react-dom';

import './SideDrawer.css';

const SideDrawer = props => {
  const constant = <aside className="side-drawer">{props.children}</aside>

  return ReactDOM.createPortal(constant, document.getElementById('drawer-hook'))
};

export default SideDrawer;