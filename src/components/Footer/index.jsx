import React from "react";

import { Text, Img } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="h-11 sm:h-[148px] md:h-[304px] mx-auto my-[52px] relative w-[1276px] md:w-full">
          <div className="absolute bg-bluegray_700 h-[43px] inset-[0] m-auto w-full"></div>
          <Text
            className="absolute font-lato h-full inset-y-[0] left-[0] my-auto text-left text-white_A700 w-auto"
            as="h5"
            variant="h5"
          >
            Contact us:
          </Text>
          <div className="absolute flex md:flex-col flex-row gap-[38px] h-max inset-y-[0] items-center justify-between my-auto right-[0] self-stretch w-auto">
            <div className="flex sm:flex-col flex-row gap-4 items-center justify-start self-stretch w-auto sm:w-full">
              <Img
                src="images/img_globe.svg"
                className="h-10 w-10"
                alt="globe"
              />
              <Text
                className="font-roboto not-italic text-left text-white_A700 w-auto"
                as="h6"
                variant="h6"
              >
                globalinvestacapital.com
              </Text>
            </div>
            <div className="flex flex-row gap-4 items-center justify-start self-stretch w-auto">
              <Img src="images/img_call.svg" className="h-10 w-10" alt="call" />
              <Text
                className="font-roboto not-italic text-left text-white_A700 w-auto"
                as="h6"
                variant="h6"
              >
                +62817-0095-888
              </Text>
            </div>
            <div className="flex flex-row gap-4 items-center justify-start self-stretch w-auto">
              <Img
                src="images/img_bxlinstagramalt.svg"
                className="h-10 w-10"
                alt="bxlinstagramalt"
              />
              <Text
                className="font-roboto not-italic text-left text-white_A700 w-auto"
                as="h6"
                variant="h6"
              >
                gictrade
              </Text>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
