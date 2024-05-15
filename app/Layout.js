// components/Layout.js

import React from "react";
import page from "./page.tsx";

const Layout = ({ children }) => {
  return (
    <div>
      <page />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
