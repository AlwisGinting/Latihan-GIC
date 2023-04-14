import React from "react";

import { Img, Text, Line, Input, Button, List } from "components";
import Footer from "components/Footer";

const WEBPAGEPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex items-center justify-start mx-auto w-full">
        <div className="flex flex-col justify-start w-full">
          <div className="md:h-[620px] h-[688px] md:px-5 relative w-full">
            <Img
              src="images/img_rectangle353.png"
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
            className="font-bold font-lato leading-[90.00px] md:ml-[0] ml-[101px] mt-3.5 text-center text-gray_900 uppercase"
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
          <div className="flex md:flex-col flex-row gap-[7px] items-start justify-end ml-auto mt-[86px] md:px-5 w-[95%] md:w-full">
            <div className="flex md:flex-col flex-row font-lato gap-8 items-center justify-start self-stretch w-auto md:w-full">
              <div className="flex flex-col gap-8 items-start justify-start w-[481px] sm:w-full">
                <div className="flex items-start justify-start py-6 self-stretch w-auto">
                  <Text
                    className="text-center text-indigo_900 tracking-[2.00px] w-auto"
                    as="h3"
                    variant="h3"
                  >
                    Cara Bergabung
                  </Text>
                </div>
                <div className="flex font-roboto h-[603px] sm:h-[771px] justify-end relative w-full">
                  <Line className="bg-orange_A701 h-[556px] mb-[7px] ml-[30px] mt-auto w-0.5" />
                  <div className="absolute flex flex-col gap-[47px] h-full inset-[0] items-start justify-start m-auto self-stretch w-auto">
                    <div className="flex sm:flex-col flex-row gap-6 items-center justify-start self-stretch w-auto sm:w-full">
                      <Text
                        className="bg-white_A700 border-2 border-orange_A701 border-solid font-normal h-[60px] not-italic pl-[22px] pr-[26px] sm:px-5 py-[13px] rounded-[50%] text-left text-orange_A701 w-[60px]"
                        variant="body3"
                      >
                        1
                      </Text>
                      <Text
                        className="leading-[32.00px] max-w-[397px] md:max-w-full not-italic text-gray_901 text-left"
                        variant="body5"
                      >
                        Daftar Akun GIC pada form di samping
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-6 items-center justify-start self-stretch w-auto sm:w-full">
                      <Text
                        className="bg-white_A700 border-2 border-orange_A701 border-solid flex font-normal h-[60px] items-center justify-center not-italic sm:px-5 rounded-[50%] text-center text-orange_A701 w-[60px]"
                        variant="body3"
                      >
                        2
                      </Text>
                      <Text
                        className="leading-[32.00px] md:max-w-full max-w-sm not-italic text-gray_901 text-left"
                        variant="body5"
                      ></Text>
                    </div>
                    <div className="flex flex-row gap-6 items-center justify-start self-stretch w-auto sm:w-full">
                      <Text
                        className="bg-white_A700 border-2 border-orange_A701 border-solid flex font-normal h-[60px] items-center justify-center not-italic sm:px-5 rounded-[50%] text-center text-orange_A701 w-[60px]"
                        variant="body3"
                      >
                        3
                      </Text>
                      <Text
                        className="not-italic text-gray_901 text-left w-auto"
                        variant="body5"
                      >
                        Lakukan Verifikasi Diri
                      </Text>
                    </div>
                    <div className="flex flex-row gap-6 items-center justify-start self-stretch w-auto sm:w-full">
                      <Text
                        className="bg-white_A700 border-2 border-orange_A701 border-solid flex font-normal h-[60px] items-center justify-center not-italic sm:px-5 rounded-[50%] text-center text-orange_A701 w-[60px]"
                        variant="body3"
                      >
                        4
                      </Text>
                      <Text
                        className="not-italic text-gray_901 text-left w-auto"
                        variant="body5"
                      >
                        Buat akun trading
                      </Text>
                    </div>
                    <div className="flex flex-row gap-6 items-center justify-start self-stretch w-auto sm:w-full">
                      <Text
                        className="bg-white_A700 border-2 border-orange_A701 border-solid flex font-normal h-[60px] items-center justify-center not-italic sm:px-5 rounded-[50%] text-center text-orange_A701 w-[60px]"
                        variant="body3"
                      >
                        5
                      </Text>
                      <Text
                        className="not-italic text-gray_901 text-left w-auto"
                        variant="body5"
                      >
                        Lakukan Deposit
                      </Text>
                    </div>
                    <div className="flex flex-row gap-6 items-center justify-start self-stretch w-auto sm:w-full">
                      <Text
                        className="bg-white_A700 border-2 border-orange_A701 border-solid flex font-normal h-[60px] items-center justify-center not-italic sm:px-5 rounded-[50%] text-center text-orange_A701 w-[60px]"
                        variant="body3"
                      >
                        6
                      </Text>
                      <Text
                        className="not-italic text-gray_901 text-left w-auto"
                        variant="body5"
                      >
                        Mulai Trading
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-col gap-8 items-center justify-start md:px-10 px-12 sm:px-5 py-8 rounded-[20px] self-stretch shadow-bs1 w-auto md:w-full">
                <div className="flex items-end justify-start self-stretch w-auto sm:w-full">
                  <Text
                    className="text-left text-orange_A700 uppercase w-auto"
                    variant="body1"
                  >
                    daftar AKUN sekarang
                  </Text>
                </div>
                <div className="flex flex-col font-roboto gap-8 items-center justify-start self-stretch w-auto md:w-full">
                  <div className="flex flex-col gap-4 items-start justify-start self-stretch w-auto md:w-full">
                    <Input
                      wrapClassName="w-full"
                      className="font-normal leading-[normal] md:text-[22px] not-italic p-0 placeholder:text-gray_500 sm:text-xl text-2xl text-gray_500 text-left w-full"
                      name="groupFive"
                      placeholder="Nama Lengkap Sesuai Identitas"
                      shape="RoundedBorder10"
                      size="lg"
                      variant="OutlineGray900"
                    ></Input>
                    <Input
                      wrapClassName="w-full"
                      className="font-normal leading-[normal] md:text-[22px] not-italic p-0 placeholder:text-gray_500 sm:text-xl text-2xl text-gray_500 text-left w-full"
                      type="email"
                      name="groupSix"
                      placeholder="Email"
                      shape="RoundedBorder10"
                      size="md"
                      variant="OutlineGray900"
                    ></Input>
                    <Input
                      wrapClassName="w-full"
                      className="font-normal leading-[normal] md:text-[22px] not-italic p-0 placeholder:text-gray_500 sm:text-xl text-2xl text-gray_500 text-left w-full"
                      type="password"
                      name="groupSeven"
                      placeholder="Password"
                      shape="RoundedBorder10"
                      size="md"
                      variant="OutlineGray900"
                    ></Input>
                    <div className="flex md:flex-col flex-row gap-6 items-start justify-start self-stretch w-auto md:w-full">
                      <Button
                        className="cursor-pointer font-normal leading-[normal] min-w-[92px] not-italic text-2xl md:text-[22px] text-center text-gray_900 sm:text-xl w-auto"
                        shape="RoundedBorder10"
                        size="md"
                        variant="OutlineGray900"
                      >
                        +62
                      </Button>
                      <div className="flex items-center justify-start w-[81%] md:w-full">
                        <div className="bg-white_A700 border border-gray_900 border-solid flex flex-row items-center justify-between sm:pl-5 pl-[31px] rounded-[10px] w-full">
                          <Text
                            className="not-italic text-gray_500 text-left w-auto"
                            variant="body5"
                          >
                            Contoh : 873621863
                          </Text>
                          <Button
                            className="cursor-pointer font-medium leading-[normal] min-w-[146px] text-2xl md:text-[22px] text-center text-white_A700 sm:text-xl w-auto"
                            shape="CustomBorderLR10"
                            size="lg"
                            variant="GradientOrangeA701DeeporangeA200"
                          >
                            Kirim OTP
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-start w-full">
                      <div className="flex items-center justify-start w-full">
                        <div className="md:h-20 h-[81px] relative w-full">
                          <div className="font-lato md:h-20 h-[81px] m-auto w-full">
                            <div className="absolute bg-white_A700 border border-bluegray_700 border-solid h-20 inset-[0] justify-center m-auto rounded-[10px] w-full"></div>
                            <Text
                              className="absolute bottom-[0] left-[4%] not-italic text-gray_500 text-left w-[15%] sm:w-full"
                              variant="body5"
                            >
                              Password
                            </Text>
                          </div>
                          <Input
                            wrapClassName="absolute inset-[0] m-auto w-full"
                            className="font-normal font-roboto justify-center leading-[normal] md:text-[22px] not-italic p-0 placeholder:text-gray_500 sm:text-xl text-2xl text-gray_500 text-left w-full"
                            name="groupTwo"
                            placeholder="Kode OTP"
                            shape="RoundedBorder10"
                            size="lg"
                            variant="OutlineGray900"
                          ></Input>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-start w-full">
                      <div className="flex items-center justify-start w-full">
                        <div className="md:h-20 h-[81px] relative w-full">
                          <div className="font-lato md:h-20 h-[81px] m-auto w-full">
                            <div className="absolute bg-white_A700 border border-bluegray_700 border-solid h-20 inset-[0] justify-center m-auto rounded-[10px] w-full"></div>
                            <Text
                              className="absolute bottom-[0] left-[4%] not-italic text-gray_500 text-left w-[15%] sm:w-full"
                              variant="body5"
                            >
                              Password
                            </Text>
                          </div>
                          <Input
                            wrapClassName="absolute inset-[0] m-auto w-full"
                            className="font-normal font-roboto justify-center leading-[normal] md:text-[22px] not-italic p-0 placeholder:text-gray_500 sm:text-xl text-2xl text-gray_500 text-left w-full"
                            type="email"
                            name="groupThree"
                            placeholder="Email Referral (optional)"
                            shape="RoundedBorder10"
                            size="lg"
                            variant="OutlineGray900"
                          ></Input>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row font-lato gap-[30px] items-center justify-start w-[603px] md:w-full">
                      <div className="border border-orange_A700 border-solid h-8 rounded-[5px] w-8"></div>
                      <Text
                        className="flex-1 max-w-[541px] md:max-w-full not-italic text-gray_500 text-left"
                        variant="body5"
                      ></Text>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-extrabold min-w-[254px] md:text-3xl sm:text-[28px] text-[32px] text-center text-white_A700 tracking-[0.96px] w-auto"
                    shape="RoundedBorder10"
                    size="sm"
                    variant="GradientOrangeA701DeeporangeA200"
                  >
                    DAFTAR
                  </Button>
                </div>
              </div>
            </div>
            <Text
              className="font-roboto md:mt-0 mt-[181px] not-italic text-center text-white_A700 w-auto"
              variant="body5"
            >
              Kirim OTP
            </Text>
          </div>
          <div className="font-montserrat h-[1204px] md:h-[996px] mt-[92px] md:px-5 relative w-full">
            <Img
              src="images/img_image.png"
              className="absolute h-[315px] object-cover right-[17%] top-[0] w-3/5"
              alt="image_Two"
            />
            <div className="absolute bg-gradient4  bottom-[0] flex inset-x-[0] items-center justify-start mx-auto w-full">
              <div className="md:h-[903px] h-[904px] relative w-full">
                <div className="md:h-[903px] h-[904px] m-auto w-full">
                  <div className="md:h-[903px] h-[904px] m-auto w-full">
                    <div className="absolute md:h-[903px] h-[904px] inset-[0] justify-center m-auto w-full">
                      <div className="absolute md:h-[903px] h-[904px] inset-y-[0] my-auto right-[0] w-[56%] md:w-full">
                        <div className="flex flex-col h-full items-end justify-start m-auto w-full">
                          <div className="flex relative w-full">
                            <Img
                              src="images/img_vector.png"
                              className="h-[475px] ml-[undefinedpx] my-auto object-cover w-auto z-[1]"
                              alt="vector"
                            />
                            <Img
                              src="images/img_vector_475x534.png"
                              className="h-[475px] ml-[-73.3px] my-auto object-cover w-auto z-[1]"
                              alt="vector_One"
                            />
                            <Img
                              src="images/img_vector_475x534.png"
                              className="h-[475px] ml-[undefinedpx] my-auto object-cover w-auto z-[1]"
                              alt="vector_Two"
                            />
                          </div>
                          <div className="h-[428px] relative w-[91%] md:w-full">
                            <Img
                              src="images/img_vector_475x534.png"
                              className="h-[428px] my-auto object-cover w-auto"
                              alt="vector_Three"
                            />
                            <Img
                              src="images/img_vector_475x534.png"
                              className="absolute h-[428px] inset-[0] justify-center m-auto object-cover w-auto"
                              alt="vector_Four"
                            />
                          </div>
                        </div>
                        <Img
                          src="images/img_vector_475x534.png"
                          className="absolute h-[207px] inset-y-[0] my-auto object-cover right-[0] w-auto"
                          alt="vector_Five"
                        />
                      </div>
                      <Img
                        src="images/img_vector_475x534.png"
                        className="absolute h-[475px] left-[10%] object-cover top-[0] w-auto"
                        alt="vector_Six"
                      />
                      <Img
                        src="images/img_vector_475x534.png"
                        className="absolute h-[475px] left-[0] object-cover top-[0] w-auto"
                        alt="vector_Seven"
                      />
                      <Img
                        src="images/img_vector.png"
                        className="absolute bottom-[0] h-[428px] inset-x-[0] mx-auto object-cover w-auto"
                        alt="vector_Eight"
                      />
                    </div>
                    <Img
                      src="images/img_vector_475x534.png"
                      className="absolute bottom-[0] h-[428px] left-[10%] object-cover w-auto"
                      alt="vector_Nine"
                    />
                    <Img
                      src="images/img_vector_475x534.png"
                      className="absolute bottom-[0] h-[428px] left-[0] object-cover w-auto"
                      alt="vector_Ten"
                    />
                  </div>
                  <Img
                    src="images/img_vector_475x534.png"
                    className="absolute h-[207px] inset-y-[0] left-[0] my-auto object-cover w-auto"
                    alt="vector_Eleven"
                  />
                </div>
                <List
                  className="absolute flex-col gap-5 grid inset-[0] items-center justify-center m-auto w-[90%]"
                  orientation="vertical"
                >
                  <div className="flex md:flex-col flex-row gap-5 h-[395px] md:h-auto items-start justify-start max-w-[1225px] w-full">
                    <div className="flex md:flex-1 flex-col items-center justify-start w-[33%] md:w-full">
                      <Img
                        src="images/img_image2.png"
                        className="h-[294px] sm:h-auto object-cover w-[84%] md:w-full"
                        alt="imageTwo"
                      />
                      <div className="bg-white_A700 flex items-start justify-start p-2 rounded-[20px] w-[395px] sm:w-full">
                        <Text
                          className="text-center text-gray_901 tracking-[0.23px] w-auto"
                          variant="body6"
                        >
                          Mitsubishi Xpander Sport CVT
                        </Text>
                      </div>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-[15px] items-center justify-start w-[33%] md:w-full">
                      <Img
                        src="images/img_image5.png"
                        className="h-[273px] md:h-auto object-cover rounded-[20px] w-[273px]"
                        alt="imageFive"
                      />
                      <div className="flex items-center justify-start w-full">
                        <Button
                          className="cursor-pointer font-medium sm:text-[19px] md:text-[21px] text-[23px] text-center text-gray_901 tracking-[0.23px] w-[395px]"
                          shape="RoundedBorder20"
                          size="md"
                          variant="FillWhiteA700"
                        >
                          Logam Mulia 100 gr
                        </Button>
                      </div>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-[17px] items-center justify-start w-[33%] md:w-full">
                      <Img
                        src="images/img_image5_262x302.png"
                        className="h-[262px] md:h-auto object-cover w-[77%]"
                        alt="imageFive_One"
                      />
                      <div className="flex items-center justify-start w-full">
                        <Button
                          className="cursor-pointer font-medium sm:text-[19px] md:text-[21px] text-[23px] text-center text-gray_901 tracking-[0.23px] w-[395px]"
                          shape="RoundedBorder20"
                          size="md"
                          variant="FillWhiteA700"
                        >
                          Vespa Sprint
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row gap-5 h-[395px] md:h-auto items-start justify-start max-w-[1225px] w-full">
                    <div className="flex md:flex-1 flex-col gap-3.5 items-center justify-start w-[33%] md:w-full">
                      <Img
                        src="images/img_image6.png"
                        className="h-[225px] md:h-auto object-cover w-[86%]"
                        alt="imageSix"
                      />
                      <div className="flex items-center justify-start w-full">
                        <Button
                          className="cursor-pointer font-medium sm:text-[19px] md:text-[21px] text-[23px] text-center text-gray_901 tracking-[0.23px] w-[395px]"
                          shape="RoundedBorder20"
                          size="md"
                          variant="FillWhiteA700"
                        >
                          New NMAX
                        </Button>
                      </div>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-[49px] items-center justify-start w-[33%] md:w-full">
                      <Img
                        src="images/img_image7.png"
                        className="h-[214px] md:h-auto object-cover rounded-[10px] w-[81%]"
                        alt="imageSeven"
                      />
                      <div className="flex items-center justify-start w-full">
                        <Button
                          className="cursor-pointer font-medium sm:text-[19px] md:text-[21px] text-[23px] text-center text-gray_901 tracking-[0.23px] w-[395px]"
                          shape="RoundedBorder20"
                          size="md"
                          variant="FillWhiteA700"
                        >
                          Tour Kuala Lumpur
                        </Button>
                      </div>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-11 items-center justify-start w-[33%] md:w-full">
                      <Img
                        src="images/img_image10.png"
                        className="h-[219px] md:h-auto object-cover rounded-[10px] w-[78%]"
                        alt="imageTen"
                      />
                      <div className="flex items-center justify-start w-full">
                        <div className="flex items-center justify-start w-full">
                          <Button
                            className="cursor-pointer font-medium sm:text-[19px] md:text-[21px] text-[23px] text-center text-gray_901 tracking-[0.23px] w-[395px]"
                            shape="RoundedBorder20"
                            size="md"
                            variant="FillWhiteA700"
                          >
                            Tour Labuan Bajo
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
          <Button
            className="cursor-pointer font-bold font-roboto leading-[normal] min-w-[387px] sm:min-w-full md:ml-[0] ml-[489px] mt-12 md:text-3xl sm:text-[28px] text-[32px] text-center text-white_A700 tracking-[2.00px] w-auto"
            shape="RoundedBorder10"
            size="md"
            variant="GradientPink600Red500"
          >
            Lihat Semua Hadiah
          </Button>
          <div className="flex font-roboto items-start justify-start md:ml-[0] ml-[303px] mt-[62px] px-16 md:px-5 py-6 self-stretch w-auto md:w-full">
            <Text
              className="text-indigo_900 text-left tracking-[2.00px] w-auto"
              as="h4"
              variant="h4"
            >
              Syarat dan Ketentuan Program
            </Text>
          </div>
          <Text
            className="font-arial leading-[50.00px] md:ml-[0] ml-[306px] mt-[7px] text-gray_900 text-left tracking-[0.20px]"
            variant="body8"
          >
            <>
              Periode GIC Gebyar Hadiah berlaku 28 Oktober 2022 s/d 31 desember
              2022
              <br />
              Program berlaku untuk nasabah yang melakukan pembukaan akun real
              barudi GIC, mendaftar dan melakukan verifikasi untuk mengikuti
              program ini.
              <br />
              Peserta pada program ini harus berusia 21 tahun ke atas. <br />
              Kriteria pemenang GIC Gebyar Hadiah adalah berdasarkan deposit
              awal dan total jumlah lot transaksi selama periode langsung
              <br />
              Hanya berlaku untuk Forex, Metal, Energy, dan Indices
            </>
          </Text>
          <div className="flex flex-row font-roboto items-center justify-start md:ml-[0] ml-[538px] mt-8 md:px-5 self-stretch w-auto">
            <div className="flex items-center justify-start sm:px-5 px-6 py-4 self-stretch w-auto">
              <Text
                className="font-semibold text-center text-orange_A700 w-auto"
                variant="body7"
              >
                Baca Selengkapnya{" "}
              </Text>
            </div>
            <Img
              src="images/img_arrowdown.svg"
              className="h-12 w-12"
              alt="arrowdown"
            />
          </div>
          <Footer className="bg-bluegray_700 flex font-lato items-center justify-center mt-[110px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default WEBPAGEPage;
