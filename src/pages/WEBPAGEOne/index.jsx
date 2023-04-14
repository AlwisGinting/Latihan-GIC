import React from "react";

import { Img, Text, Button, Input } from "components";
import Footer from "components/Footer";

const WEBPAGEOnePage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-lato justify-start mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <div className="md:h-[620px] h-[688px] md:px-5 relative w-full">
            <Img
              src="images/img_rectangle353_441x1366.png"
              className="absolute h-[441px] inset-x-[0] mx-auto object-cover rotate-[90deg] top-[0] w-full"
              alt="rectangle353"
            />
            <Img
              src="images/img_whatsappimage20221104.png"
              className="absolute bottom-[0] h-[620px] inset-x-[0] mx-auto object-cover rounded-[20px] w-[91%]"
              alt="whatsappimageTwenty"
            />
          </div>
          <Text
            className="font-bold leading-[90.00px] mt-3.5 text-center text-gray_900 uppercase"
            as="h2"
            variant="h2"
          ></Text>
          <div className="flex md:flex-col flex-row font-roboto gap-6 items-start justify-start max-w-[874px] mt-2 mx-auto md:px-5 self-stretch w-full">
            <div className="flex md:flex-1 flex-col justify-start rounded-[35px] shadow-bs w-auto md:w-full">
              <Text
                className="bg-clip-text bg-gradient1  md:ml-[0] ml-[38px] text-center text-transparent w-auto"
                variant="body2"
              >
                Periode Pendaftaran
              </Text>
              <Text
                className="mt-1 not-italic text-center text-gray_900 w-auto"
                variant="body4"
              >
                29 Oktober s/d 31 Desember 2022
              </Text>
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start rounded-[35px] shadow-bs w-auto md:w-full">
              <Text
                className="bg-clip-text bg-gradient1  text-center text-transparent w-auto"
                variant="body2"
              >
                Periode Transaksi
              </Text>
              <Text
                className="mt-1 not-italic text-center text-gray_900 w-auto"
                variant="body4"
              >
                s/d 23 Februari 2023
              </Text>
            </div>
          </div>
          <div className="flex font-roboto items-start justify-start mt-[90px] px-16 md:px-5 py-6 self-stretch w-auto md:w-full">
            <Text
              className="font-semibold text-indigo_900 text-left tracking-[2.00px] w-auto"
              as="h2"
              variant="h2"
            >
              Hadiah Gebyar GIC{" "}
            </Text>
          </div>
        </div>
        <div className="flex font-roboto items-end mt-[59px] md:pl-10 sm:pl-5 pl-[58px] w-full">
          <div className="sm:h-[1070px] h-[1080px] md:h-[4151px] relative w-full">
            <Text
              className="absolute not-italic right-[0] text-center text-white_A700 top-[0] w-auto"
              variant="body5"
            >
              Kirim OTP
            </Text>
            <div className="absolute flex flex-col gap-[30px] h-max inset-y-[0] items-start justify-start left-[0] my-auto self-stretch w-auto">
              <Text
                className="font-semibold text-gray_900 text-left w-auto"
                variant="body3"
              >
                *1 GICT = IDR 14,343.12
              </Text>
              <div className="flex md:flex-col flex-row font-inter md:gap-5 items-start justify-start self-stretch w-auto md:w-full">
                <div className="flex flex-col items-start justify-start w-[579px] sm:w-full">
                  <Button
                    className="cursor-pointer font-semibold leading-[normal] md:text-2xl sm:text-[22px] text-[26px] text-center text-gray_900 w-[579px]"
                    size="sm"
                    variant="FillBlue100"
                  >
                    Hadiah
                  </Button>
                  <div className="flex items-center justify-start sm:pl-5 pl-8 pr-2 py-4 w-[579px] sm:w-full">
                    <Text
                      className="font-medium text-gray_900 text-left w-auto"
                      variant="body7"
                    >
                      Mitsubishi Xpander Sport CVT
                    </Text>
                  </div>
                  <Input
                    wrapClassName="w-full"
                    className="font-medium leading-[normal] md:text-xl p-0 placeholder:text-gray_900 sm:text-lg text-[22px] text-gray_900 text-left w-full"
                    name="frame997"
                    placeholder="Logam Mulia 100 gr"
                    size="sm"
                    variant="FillBlue100"
                  ></Input>
                  <div className="flex items-center justify-start sm:pl-5 pl-8 pr-2 py-4 w-[579px] sm:w-full">
                    <Text
                      className="font-medium text-gray_900 text-left w-auto"
                      variant="body7"
                    >
                      Vespa Sprint
                    </Text>
                  </div>
                  <Input
                    wrapClassName="w-full"
                    className="font-medium leading-[normal] md:text-xl p-0 placeholder:text-gray_900 sm:text-lg text-[22px] text-gray_900 text-left w-full"
                    name="frame999"
                    placeholder="New NMAX"
                    size="sm"
                    variant="FillBlue100"
                  ></Input>
                  <div className="flex items-center justify-start sm:pl-5 pl-8 pr-2 py-4 w-[579px] sm:w-full">
                    <Text
                      className="font-medium text-gray_900 text-left w-auto"
                      variant="body7"
                    >
                      Tour Kuala Lumpur, Genting Highland 1 Pax (3N4D)
                    </Text>
                  </div>
                  <Input
                    wrapClassName="w-full"
                    className="font-medium leading-[normal] md:text-xl p-0 placeholder:text-gray_900 sm:text-lg text-[22px] text-gray_900 text-left w-full"
                    name="frame1001"
                    placeholder="Tour Phinisi Labuan Bajo 4 Pax (3N4D)"
                    size="sm"
                    variant="FillBlue100"
                  ></Input>
                  <div className="flex items-center justify-start sm:pl-5 pl-8 pr-2 py-4 w-[579px] sm:w-full">
                    <Text
                      className="font-medium text-gray_900 text-left w-auto"
                      variant="body7"
                    >
                      Iphone 14
                    </Text>
                  </div>
                  <Input
                    wrapClassName="w-full"
                    className="font-medium leading-[normal] md:text-xl p-0 placeholder:text-gray_900 sm:text-lg text-[22px] text-gray_900 text-left w-full"
                    name="frame1003"
                    placeholder="Voucher 1000 GICT"
                    size="sm"
                    variant="FillBlue100"
                  ></Input>
                  <div className="flex items-center justify-start sm:pl-5 pl-8 pr-2 py-4 w-[579px] sm:w-full">
                    <Text
                      className="font-medium text-gray_900 text-left w-auto"
                      variant="body7"
                    >
                      Zenbook 12 OLED
                    </Text>
                  </div>
                  <Input
                    wrapClassName="w-full"
                    className="font-medium leading-[normal] md:text-xl p-0 placeholder:text-gray_900 sm:text-lg text-[22px] text-gray_900 text-left w-full"
                    name="frame1005"
                    placeholder="Apple Watch Series 7"
                    size="sm"
                    variant="FillBlue100"
                  ></Input>
                  <div className="flex items-center justify-start sm:pl-5 pl-8 pr-2 py-4 w-[579px] sm:w-full">
                    <Text
                      className="font-medium text-gray_900 text-left w-auto"
                      variant="body7"
                    >
                      Logam Mulia 5 gr
                    </Text>
                  </div>
                  <Input
                    wrapClassName="w-full"
                    className="font-medium leading-[normal] md:text-xl p-0 placeholder:text-gray_900 sm:text-lg text-[22px] text-gray_900 text-left w-full"
                    name="frame1007"
                    placeholder="Single Wheel Electric Scooter"
                    size="sm"
                    variant="FillBlue100"
                  ></Input>
                  <div className="flex items-center justify-start sm:pl-5 pl-8 pr-2 py-4 w-[579px] sm:w-full">
                    <Text
                      className="font-medium text-gray_900 text-left w-auto"
                      variant="body7"
                    >
                      Voucher 200 GICT
                    </Text>
                  </div>
                  <Input
                    wrapClassName="w-full"
                    className="font-medium leading-[normal] md:text-xl p-0 placeholder:text-gray_900 sm:text-lg text-[22px] text-gray_900 text-left w-full"
                    name="frame1009"
                    placeholder="Hoverboard Balance Wheel"
                    size="sm"
                    variant="FillBlue100"
                  ></Input>
                  <div className="flex items-center justify-start sm:pl-5 pl-8 pr-2 py-4 w-[579px] sm:w-full">
                    <Text
                      className="font-medium text-gray_900 text-left w-auto"
                      variant="body7"
                    >
                      Voucher Gopay 1 Juta
                    </Text>
                  </div>
                  <Input
                    wrapClassName="w-full"
                    className="font-medium leading-[normal] md:text-xl p-0 placeholder:text-gray_900 sm:text-lg text-[22px] text-gray_900 text-left w-full"
                    name="frame1011"
                    placeholder="JBL Go Portable"
                    size="sm"
                    variant="FillBlue100"
                  ></Input>
                </div>
                <div className="flex flex-col items-start justify-start w-[259px]">
                  <Button
                    className="cursor-pointer font-semibold leading-[normal] md:text-2xl sm:text-[22px] text-[26px] text-center text-gray_900 w-[259px]"
                    size="sm"
                    variant="FillBlue100"
                  >
                    Lot Requirement
                  </Button>
                  <div className="flex items-center justify-start sm:px-5 px-8 py-4 w-[259px]">
                    <Text
                      className="font-medium text-center text-gray_900 w-auto"
                      variant="body7"
                    >
                      5500
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-[22px] text-center text-gray_900 sm:text-lg md:text-xl w-[259px]"
                    size="sm"
                    variant="FillBlue100"
                  >
                    1500
                  </Button>
                  <div className="flex items-center justify-start sm:px-5 px-8 py-4 w-[259px]">
                    <Text
                      className="font-medium text-center text-gray_900 w-auto"
                      variant="body7"
                    >
                      1000
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-[22px] text-center text-gray_900 sm:text-lg md:text-xl w-[259px]"
                    size="sm"
                    variant="FillBlue100"
                  >
                    700
                  </Button>
                  <div className="flex items-center justify-start sm:px-5 px-8 py-4 w-[259px]">
                    <Text
                      className="font-medium text-center text-gray_900 w-auto"
                      variant="body7"
                    >
                      700
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-[22px] text-center text-gray_900 sm:text-lg md:text-xl w-[259px]"
                    size="sm"
                    variant="FillBlue100"
                  >
                    600
                  </Button>
                  <div className="flex items-center justify-start sm:px-5 px-8 py-4 w-[259px]">
                    <Text
                      className="font-medium text-center text-gray_900 w-auto"
                      variant="body7"
                    >
                      350
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-[22px] text-center text-gray_900 sm:text-lg md:text-xl w-[259px]"
                    size="sm"
                    variant="FillBlue100"
                  >
                    375
                  </Button>
                  <div className="flex items-center justify-start sm:px-5 px-8 py-4 w-[259px]">
                    <Text
                      className="font-medium text-center text-gray_900 w-auto"
                      variant="body7"
                    >
                      240
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-[22px] text-center text-gray_900 sm:text-lg md:text-xl w-[259px]"
                    size="sm"
                    variant="FillBlue100"
                  >
                    175
                  </Button>
                  <div className="flex items-center justify-start sm:px-5 px-8 py-4 w-[259px]">
                    <Text
                      className="font-medium text-center text-gray_900 w-auto"
                      variant="body7"
                    >
                      120
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-[22px] text-center text-gray_900 sm:text-lg md:text-xl w-[259px]"
                    size="sm"
                    variant="FillBlue100"
                  >
                    100
                  </Button>
                  <div className="flex items-center justify-start sm:px-5 px-8 py-4 w-[259px]">
                    <Text
                      className="font-medium text-center text-gray_900 w-auto"
                      variant="body7"
                    >
                      75
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-[22px] text-center text-gray_900 sm:text-lg md:text-xl w-[259px]"
                    size="sm"
                    variant="FillBlue100"
                  >
                    50
                  </Button>
                  <div className="flex items-center justify-start sm:px-5 px-8 py-4 w-[259px]">
                    <Text
                      className="font-medium text-center text-gray_900 w-auto"
                      variant="body7"
                    >
                      30
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-[22px] text-center text-gray_900 sm:text-lg md:text-xl w-[259px]"
                    size="sm"
                    variant="FillBlue100"
                  >
                    25
                  </Button>
                </div>
                <div className="flex flex-col items-start justify-start w-[158px]">
                  <Button
                    className="cursor-pointer font-semibold leading-[normal] md:text-2xl sm:text-[22px] text-[26px] text-center text-gray_900 w-[158px]"
                    size="sm"
                    variant="FillBlue100"
                  >
                    Duration
                  </Button>
                  <div className="flex items-center justify-start sm:px-5 px-8 py-4 w-[158px]">
                    <Text
                      className="font-medium text-center text-gray_900 w-auto"
                      variant="body7"
                    >
                      4 Bulan
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-[22px] text-center text-gray_900 sm:text-lg md:text-xl w-[158px]"
                    size="sm"
                    variant="FillBlue100"
                  >
                    3 Bulan
                  </Button>
                  <div className="flex items-center justify-start sm:px-5 px-8 py-4 w-[158px]">
                    <Text
                      className="font-medium text-center text-gray_900 w-auto"
                      variant="body7"
                    >
                      2 Bulan
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-[22px] text-center text-gray_900 sm:text-lg md:text-xl w-[158px]"
                    size="sm"
                    variant="FillBlue100"
                  >
                    2 Bulan
                  </Button>
                  <div className="flex items-center justify-start sm:px-5 px-8 py-4 w-[158px]">
                    <Text
                      className="font-medium text-center text-gray_900 w-auto"
                      variant="body7"
                    >
                      2 Bulan
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-[22px] text-center text-gray_900 sm:text-lg md:text-xl w-[158px]"
                    size="sm"
                    variant="FillBlue100"
                  >
                    2 Bulan
                  </Button>
                  <div className="flex items-center justify-start sm:px-5 px-8 py-4 w-[158px]">
                    <Text
                      className="font-medium text-center text-gray_900 w-auto"
                      variant="body7"
                    >
                      2 Bulan
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-[22px] text-center text-gray_900 sm:text-lg md:text-xl w-[158px]"
                    size="sm"
                    variant="FillBlue100"
                  >
                    1 Bulan
                  </Button>
                  <div className="flex items-center justify-start sm:px-5 px-8 py-4 w-[158px]">
                    <Text
                      className="font-medium text-center text-gray_900 w-auto"
                      variant="body7"
                    >
                      1 Bulan
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-[22px] text-center text-gray_900 sm:text-lg md:text-xl w-[158px]"
                    size="sm"
                    variant="FillBlue100"
                  >
                    1 Bulan
                  </Button>
                  <div className="flex items-center justify-start sm:px-5 px-8 py-4 w-[158px]">
                    <Text
                      className="font-medium text-center text-gray_900 w-auto"
                      variant="body7"
                    >
                      1 Bulan
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-[22px] text-center text-gray_900 sm:text-lg md:text-xl w-[158px]"
                    size="sm"
                    variant="FillBlue100"
                  >
                    1 Bulan
                  </Button>
                  <div className="flex items-center justify-start sm:px-5 px-8 py-4 w-[158px]">
                    <Text
                      className="font-medium text-center text-gray_900 w-auto"
                      variant="body7"
                    >
                      1 Bulan
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-[22px] text-center text-gray_900 sm:text-lg md:text-xl w-[158px]"
                    size="sm"
                    variant="FillBlue100"
                  >
                    1 Bulan
                  </Button>
                  <div className="flex items-center justify-start sm:px-5 px-8 py-4 w-[158px]">
                    <Text
                      className="font-medium text-center text-gray_900 w-auto"
                      variant="body7"
                    >
                      1 Bulan
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-[22px] text-center text-gray_900 sm:text-lg md:text-xl w-[158px]"
                    size="sm"
                    variant="FillBlue100"
                  >
                    1 Bulan
                  </Button>
                </div>
                <div className="flex flex-col items-start justify-start w-[253px]">
                  <Button
                    className="cursor-pointer font-semibold leading-[normal] md:text-2xl sm:text-[22px] text-[26px] text-center text-gray_900 w-[253px]"
                    size="sm"
                    variant="FillBlue100"
                  >
                    Minimal Deposit
                  </Button>
                  <div className="flex items-center justify-start sm:px-5 px-8 py-4 w-[253px]">
                    <Text
                      className="font-medium text-center text-gray_900 w-auto"
                      variant="body7"
                    >
                      1000 GICT
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-[22px] text-center text-gray_900 sm:text-lg md:text-xl w-[253px]"
                    size="sm"
                    variant="FillBlue100"
                  >
                    750 GICT
                  </Button>
                  <div className="flex items-center justify-start sm:px-5 px-8 py-4 w-[253px]">
                    <Text
                      className="font-medium text-center text-gray_900 w-auto"
                      variant="body7"
                    >
                      600 GICT
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-[22px] text-center text-gray_900 sm:text-lg md:text-xl w-[253px]"
                    size="sm"
                    variant="FillBlue100"
                  >
                    500 GICT
                  </Button>
                  <div className="flex items-center justify-start sm:px-5 px-8 py-4 w-[253px]">
                    <Text
                      className="font-medium text-center text-gray_900 w-auto"
                      variant="body7"
                    >
                      500 GICT
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-[22px] text-center text-gray_900 sm:text-lg md:text-xl w-[253px]"
                    size="sm"
                    variant="FillBlue100"
                  >
                    500 GICT
                  </Button>
                  <div className="flex items-center justify-start sm:px-5 px-8 py-4 w-[253px]">
                    <Text
                      className="font-medium text-center text-gray_900 w-auto"
                      variant="body7"
                    >
                      500 GICT
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-[22px] text-center text-gray_900 sm:text-lg md:text-xl w-[253px]"
                    size="sm"
                    variant="FillBlue100"
                  >
                    450 GICT
                  </Button>
                  <div className="flex items-center justify-start sm:px-5 px-8 py-4 w-[253px]">
                    <Text
                      className="font-medium text-center text-gray_900 w-auto"
                      variant="body7"
                    >
                      300 GICT
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-[22px] text-center text-gray_900 sm:text-lg md:text-xl w-[253px]"
                    size="sm"
                    variant="FillBlue100"
                  >
                    200 GICT
                  </Button>
                  <div className="flex items-center justify-start sm:px-5 px-8 py-4 w-[253px]">
                    <Text
                      className="font-medium text-center text-gray_900 w-auto"
                      variant="body7"
                    >
                      200 GICT
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-[22px] text-center text-gray_900 sm:text-lg md:text-xl w-[253px]"
                    size="sm"
                    variant="FillBlue100"
                  >
                    200 GICT
                  </Button>
                  <div className="flex items-center justify-start sm:px-5 px-8 py-4 w-[253px]">
                    <Text
                      className="font-medium text-center text-gray_900 w-auto"
                      variant="body7"
                    >
                      200 GICT
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-[22px] text-center text-gray_900 sm:text-lg md:text-xl w-[253px]"
                    size="sm"
                    variant="FillBlue100"
                  >
                    200 GICT
                  </Button>
                  <div className="flex items-center justify-start sm:px-5 px-8 py-4 w-[253px]">
                    <Text
                      className="font-medium text-center text-gray_900 w-auto"
                      variant="body7"
                    >
                      200 GICT
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-[22px] text-center text-gray_900 sm:text-lg md:text-xl w-[253px]"
                    size="sm"
                    variant="FillBlue100"
                  >
                    200 GICT
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex font-roboto items-center justify-start md:ml-[0] ml-[37px] mt-3.5 md:px-5 px-6 py-4 self-stretch w-auto">
          <Text
            className="bg-clip-text bg-gradient1  text-center text-transparent underline w-auto"
            variant="body6"
          >
            Syarat dan Ketentuan Berlaku
          </Text>
        </div>
        <div className="flex flex-col font-lato md:gap-10 gap-[100px] items-center mt-[71px] w-full">
          <Button
            className="cursor-pointer font-extrabold min-w-[384px] sm:min-w-full md:text-3xl sm:text-[28px] text-[32px] text-center text-white_A700 tracking-[0.96px] w-auto"
            shape="RoundedBorder20"
            size="xl"
            variant="OutlineBlack9001e"
          >
            DAFTAR SEKARANG
          </Button>
          <Footer className="bg-bluegray_700 flex items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default WEBPAGEOnePage;
