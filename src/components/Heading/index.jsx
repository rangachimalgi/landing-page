import React from "react";

const sizes = {
  "3xl": "text-[80px] font-bold",
  "2xl": "text-[50px] font-bold",
  xl: "text-[40px] font-bold leading-[45px]",
  "4xl": "text-[180px] font-bold leading-[121.5%]",
  s: "text-[26px] font-bold",
  md: "text-3xl font-bold",
  xs: "text-xl font-semibold leading-9",
  lg: "text-[32px] font-semibold",
};

const Heading = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-900_01 font-raleway ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
