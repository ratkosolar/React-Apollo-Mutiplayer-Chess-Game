import React, { FC, ReactNode } from "react";

import { ThemeWrapper } from "../shared";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return <ThemeWrapper>{children}</ThemeWrapper>;
};

export default Layout;
