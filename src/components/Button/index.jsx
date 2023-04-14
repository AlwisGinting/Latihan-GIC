import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder10: "rounded-[10px]",
  CustomBorderLR10:
    "rounded-bl-none rounded-br-[10px] rounded-tl-none rounded-tr-[10px]",
  RoundedBorder20: "rounded-[20px]",
};
const variants = {
  FillBlue100: "bg-blue_100 text-gray_900",
  OutlineGray900:
    "bg-white_A700 border border-gray_900 border-solid text-gray_900",
  GradientOrangeA701DeeporangeA200: "bg-gradient1  text-white_A700",
  FillWhiteA700: "bg-white_A700 text-gray_901",
  GradientPink600Red500: "bg-gradient  text-white_A700",
  OutlineBlack9001e: "bg-gradient  shadow-bs text-white_A700",
};
const sizes = {
  sm: "p-4",
  md: "p-[25px] sm:px-5",
  lg: "sm:pl-5 pl-[21px] pr-[15px] py-[25px]",
  xl: "p-[30px] sm:px-5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
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
  shape: PropTypes.oneOf([
    "RoundedBorder10",
    "CustomBorderLR10",
    "RoundedBorder20",
  ]),
  variant: PropTypes.oneOf([
    "FillBlue100",
    "OutlineGray900",
    "GradientOrangeA701DeeporangeA200",
    "FillWhiteA700",
    "GradientPink600Red500",
    "OutlineBlack9001e",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
};

Button.defaultProps = { className: "", shape: "", variant: "", size: "" };
export { Button };
