import React from "react";

const variantClasses = {
  h1: "font-black sm:text-5xl md:text-5xl text-[90px]",
  h2: "sm:text-5xl md:text-5xl text-6xl",
  h3: "font-semibold text-5xl sm:text-[38px] md:text-[44px]",
  h4: "font-semibold sm:text-[32px] md:text-[38px] text-[42px]",
  h5: "font-bold text-4xl sm:text-[32px] md:text-[34px]",
  h6: "font-normal sm:text-3xl md:text-[32px] text-[34px]",
  body1: "font-semibold md:text-3xl sm:text-[28px] text-[32px]",
  body2: "font-medium text-3xl sm:text-[26px] md:text-[28px]",
  body3: "sm:text-2xl md:text-[26px] text-[28px]",
  body4: "font-normal md:text-2xl sm:text-[22px] text-[26px]",
  body5: "font-normal text-2xl md:text-[22px] sm:text-xl",
  body6: "font-medium sm:text-[19px] md:text-[21px] text-[23px]",
  body7: "text-[22px] sm:text-lg md:text-xl",
  body8: "font-normal text-xl",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
