import React, { useEffect, useRef } from "react";
import { mount } from "leftSideBar/leftSideBar";

const LeftSidebarModule = () => {
  const ref = useRef(null);
  useEffect(() => {
    mount();
  }, []);
  return (
    <div className="left-sidebar-module">
      <app-root></app-root>
    </div>
  );
};

export default LeftSidebarModule;
