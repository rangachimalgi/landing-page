import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[36px]",
};
const variants = {
  fill: {
    deep_purple_400: "bg-deep_purple-400 text-white-A700",
    white_A700: "bg-white-A700 text-deep_purple-400",
  },
};
const sizes = {
  xs: "h-[73px] px-[35px] text-2xl",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "round",
  variant = "fill",
  size = "xs",
  color = "white_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer text-2xl font-bold border-deep_purple-400 border-4 border-solid rounded-[36px] ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["deep_purple_400", "white_A700"]),
};

export { Button };
