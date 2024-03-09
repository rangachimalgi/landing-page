import React from "react";

const sizes = {
  xs: "text-lg font-medium",
  lg: "text-[34px] font-normal leading-[150%]",
  s: "text-xl font-normal leading-[164.5%]",
  "2xl": "text-[58px] font-normal leading-[66px]",
  "3xl": "text-[80px] font-medium",
  xl: "text-[38px] font-medium leading-[164.5%]",
  md: "text-[26px] font-medium leading-[152.5%]",
};

const Text = ({ children, className = "", as, size = "s", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-white-A700 font-raleway ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
