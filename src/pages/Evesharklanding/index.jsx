import React from "react";
import { Helmet } from "react-helmet";
import {
  Img,
  Text,
  Heading,
  Button,
  RatingBar,
  Slider,
} from "../../components";

export default function EvesharklandingPage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <>
      <Helmet>
        <title>Landing Page</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full bg-white-A700">
        <header className="flex flex-row justify-between items-center w-full p-[26px] bg-white-A700">
          <div className="flex flex-row justify-between w-auto mt-[3px] ml-1.5 gap-[43px]">
            <Heading size="s" as="h4" className="mt-0.5 !text-black-900">
              logo
            </Heading>
            <Heading
              size="s"
              as="h4"
              className="!text-deep_purple-400 !font-semibold"
            >
              Create Event
            </Heading>
          </div>
          <div className="flex flex-row justify-between items-center w-[35%] mr-0.5">
            <ul className="flex flex-row justify-start gap-[18px]">
              <li>
                <a href="#">
                  <Heading size="s" as="h4">
                    Home{" "}
                  </Heading>
                </a>
              </li>
              <li>
                <a href="#">
                  <Heading size="s" as="h4">
                    Features{" "}
                  </Heading>
                </a>
              </li>
              <li>
                <a href="#">
                  <Heading size="s" as="h4">
                    About
                  </Heading>
                </a>
              </li>
            </ul>
            <Text size="xs" as="p" className="!text-deep_purple-400">
              Login/Sign Up
            </Text>
          </div>
        </header>
        <div className="flex flex-col items-center justify-start w-full mt-[18px]">
          <div className="flex flex-col items-center justify-start w-full gap-[17px] mb-10">
            <div className="h-[315px] w-[45%] relative">
              <div className="h-[257px] w-[41%] left-[26%] top-0 m-auto bg-deep_purple-100_59 absolute rounded-[130px]" />
              <div className="flex flex-col items-center justify-center w-full h-full">
                <Text
                  size="2xl"
                  as="p"
                  className="!text-blue_gray-900_02 !font-candal text-center"
                >
                  Transforming
                </Text>
                <Text
                  size="2xl"
                  as="p"
                  className="!text-blue_gray-900_02 !font-candal text-center"
                >
                  Event Management{" "}
                </Text>
                <div className="flex flex-col items-start justify-start mt-[21px] gap-[17px]">
                  <Heading
                    size="xl"
                    as="h1"
                    className="!text-gray-800 !font-semibold"
                  >
                    The Eve Shark Way
                  </Heading>
                  <Button color="deep_purple_400" className="min-w-[339px]">
                    Explore Our Services
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="h-[1422px] w-full relative">
                {/* Section 1: Images and Slider */}
                <div className="flex flex-row justify-center items-start w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                  <div className="h-[1000px] w-[30%] relative">
                    <Img
                      src="images/img_ellipse_201.png"
                      alt="image"
                      className="justify-center h-[100px] w-full object-cover absolute"
                    />
                    <div className="flex flex-col items-end justify-start w-full top-[3%] right-0 left-0 m-auto absolute"></div>
                  </div>
                  <div className="w-[80%]" style={{ maxHeight: "600px" }}>
                    <Slider
                      autoPlay
                      autoPlayInterval={2000}
                      responsive={{
                        0: { items: 1 },
                        550: { items: 1 },
                        1050: { items: 2 },
                      }}
                      disableDotsControls
                      activeIndex={sliderState}
                      onSlideChanged={(e) => {
                        setSliderState(e?.item);
                      }}
                      ref={sliderRef}
                      className="mt-10 ml-[-464px] z-[1] mb-10"
                      items={[
                        <React.Fragment key={Math.random()}>
                          <Img
                            src="images/img_image_66.png"
                            alt="imagesixtysix"
                            className="mx-2.5 object-cover"
                            style={{
                              width: "500px",
                              height: "400px",
                              marginRight: "-10px",
                            }}
                          />
                        </React.Fragment>,
                        <React.Fragment key={Math.random()}>
                          <Img
                            src="images/img_image_67.png"
                            alt="imagesixtyseven"
                            className="mx-2.5 object-cover"
                            style={{
                              width: "500px",
                              height: "400px",
                              marginLeft: "-10px",
                            }}
                          />
                        </React.Fragment>,
                        // Add more Img components for additional slides
                      ]}
                    />
                  </div>
                </div>

                {/* Section 2: About Eveshark */}
                <div className="flex flex-col items-start justify-start w-full h-full m-auto absolute mt-10">
                  <div className="flex flex-row justify-start gap-[17px]">
                    <div className="h-[4px] w-[43%] bg-blue_gray-400_af" />
                    <div className="h-[4px] w-[43%] bg-blue_gray-400_af" />
                  </div>

                  <div className="flex items-center mt-5">
                    {" "}
                    {/* Flex container for the heading and image */}
                    <Heading
                      size="3xl"
                      as="h2"
                      className="w-[94%] mt-[223px] ml-[37px] !font-kanit"
                    >
                      <span className="text-gray-900_01">About</span>
                      <span className="text-deep_purple-400">Eveshark</span>
                    </Heading>
                  </div>

                  <div className="h-[4px] w-[8%] mt-[29px] bg-deep_purple-400" />

                  <div className="flex items-center">
                    {" "}
                    {/* Flex container for the image */}
                    <Img
                      src="images/img_image_59.png"
                      alt="imagefiftynine"
                      className="w-[30%] mt-[72px] mr-[54px] object-cover rounded-[10px]"
                    />
                  </div>

                  <div className="h-[4px] w-full mt-[17px] bg-gradient max-w-[380px]" />

                  <div className="flex flex-col items-start justify-start gap-[37px] mt-5">
                    <Text size="md" as="p" className="!text-blue_gray-900">
                      <span className="text-blue_gray-900">
                        Embrace the future of event management with Eve Shark.
                        Our platform revolutionizes how you organize and sell
                        tickets for any event, from corporate seminars to music
                        festivals. Simplify your ticketing process with our
                        advanced, user-friendly solutions designed for maximum
                        efficiency and profitability.{" "}
                      </span>
                      <span className="text-deep_purple-400">
                        With Eve Shark, transform your event vision into reality
                        and sell your tickets effortlessly.
                      </span>
                    </Text>
                    <Button className="min-w-[229px] mt-5">Know More</Button>
                  </div>
                </div>
              </div>

              <div className="flex flex-row justify-start items-start w-full mt-5 gap-[35px] max-w-[1341px]">
                <div className="h-[270px] w-[48%] mb-2.5 relative">
                  <Heading
                    size="4xl"
                    as="h3"
                    className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto !text-blue_gray-100_3f !font-kanit absolute"
                  >
                    Mission
                  </Heading>
                  <Text
                    size="3xl"
                    as="p"
                    className="bottom-[15%] left-[23%] m-auto !text-blue_gray-800 !font-kanit absolute"
                  >
                    Mission
                  </Text>
                </div>
                <div className="h-[176px] w-[50%] mt-[104px] relative">
                  <Text
                    as="p"
                    className="w-[94%] right-0 top-[10%] m-auto !text-blue_gray-900_01 !font-medium !leading-[143.5%] absolute"
                  >
                    Our mission is to redefine event organization in India. We
                    meticulously craft each event into a memorable spectacle,
                    ensuring every detail is handled with precision and care.
                  </Text>
                  <div className="flex flex-row justify-between items-center w-[62%] h-full left-0 bottom-0 top-0 m-auto absolute">
                    <div className="h-[176px] w-[4px] bg-gradient" />
                    <div className="flex flex-row justify-between items-center w-auto gap-[33px]">
                      <Heading
                        size="lg"
                        as="h4"
                        className="!text-deep_purple-400 !font-kanit !font-bold underline"
                      >
                        Discover our journey
                      </Heading>
                      <Img
                        src="images/img_bxs_up_arrow.svg"
                        alt="bxsuparrow_one"
                        className="h-[24px] w-[24px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-full mt-[76px] pb-[49px] opacity-0.9 bg-white-A700_ab">
                <div className="flex flex-col items-start justify-start w-full max-w-[1390px]">
                  <div className="flex flex-row justify-between items-center w-full">
                    <div className="flex flex-col items-start justify-start w-[41%] gap-[17px]">
                      <Heading
                        size="2xl"
                        as="h5"
                        className="!text-deep_purple-400 !font-kanit"
                      >
                        Key Features
                      </Heading>
                      <Text
                        as="p"
                        className="!text-gray-700 !font-medium !leading-[35px]"
                      >
                        Embark on an enhanced event management journey with Eve
                        Shark. Our suite of features and services caters to
                        every aspect of your event, ensuring seamless, engaging
                        experiences for organizers and attendees.
                      </Text>
                    </div>
                    <Img
                      src="images/img_ellipse_202.png"
                      alt="image_one"
                      className="w-[56%] object-cover rounded-[50%]"
                    />
                  </div>
                  <div className="flex flex-row justify-between items-start w-[80%] mt-[123px] ml-7">
                    <div className="flex flex-row justify-center w-[40%] mt-[15px]">
                      <div className="flex flex-row justify-start items-start w-full gap-7">
                        <div className="flex flex-row justify-center w-[17%] mt-[5px] p-[15px] bg-cyan-300_99 rounded-[20px]">
                          <Img
                            src="images/img_image_61.png"
                            alt="imagesixtyone"
                            className="w-[74%] object-cover"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start w-[78%] gap-4">
                          <Heading
                            size="md"
                            as="h6"
                            className="!text-blue_gray-900_03 !font-kanit"
                          >
                            Diverse Portfolios
                          </Heading>
                          <Heading as="h5">
                            From corporate seminars to vibrant music festivals,
                            explore a broad spectrum of events through our
                            platform. Eve Shark equips you with the tools to
                            successfully manage diverse event types.
                          </Heading>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-start items-start w-[52%] mb-[11px] gap-[25px]">
                      <div className="flex flex-row justify-center w-[13%] mt-1.5 p-[15px] bg-cyan-300_99 rounded-[20px]">
                        <Img
                          src="images/img_image_61_34x30.png"
                          alt="imagesixtyone"
                          className="w-[74%] object-cover"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start w-[84%] gap-3">
                        <Heading
                          size="md"
                          as="h3"
                          className="w-[76%] ml-[3px] !text-blue_gray-900_03 !font-kanit"
                        >
                          Effortless ticket Selling and corporate ticketing
                        </Heading>
                        <Heading as="h5">
                          Elevate your ticket selling experience. Eve Shark
                          simplifies the ticketing process, making it seamless
                          for both organizers and attendees. Our platform
                          enhances efficiency and maximizes sales,
                          revolutionizing corporate ticketing.
                        </Heading>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between items-center w-[82%] mt-[53px] ml-7">
                    <div className="flex flex-col items-start justify-start w-[46%] gap-[46px]">
                      <div className="flex flex-row justify-start w-[91%]">
                        <div className="flex flex-row justify-start items-start w-full gap-7">
                          <div className="flex flex-row justify-center w-[16%] mt-0.5 p-[15px] bg-cyan-300_99 rounded-[20px]">
                            <Img
                              src="images/img_image_61_1.png"
                              alt="imagesixtyone"
                              className="w-[74%] object-cover"
                            />
                          </div>
                          <div className="flex flex-col items-center justify-start w-[79%] gap-[13px]">
                            <Heading
                              size="md"
                              as="h3"
                              className="!text-blue_gray-900_03 !font-kanit"
                            >
                              Enhanced Event previews
                            </Heading>
                            <Heading as="h5">
                              Provide your audience with enticing previews of
                              your events. Our platform allows you to showcase
                              unique experiences, building anticipation and
                              excitement for what&#39;s to come.
                            </Heading>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row justify-start w-full">
                        <div className="flex flex-col items-end justify-start w-full">
                          <div className="flex flex-row justify-start items-start w-full gap-7">
                            <div className="flex flex-row justify-center w-[14%] p-[15px] bg-cyan-300_99 rounded-[20px]">
                              <Img
                                src="images/img_image_61_2.png"
                                alt="imagesixtyone"
                                className="w-[74%] object-cover"
                              />
                            </div>
                            <Heading
                              size="md"
                              as="h3"
                              className="!text-blue_gray-900_03 !font-kanit"
                            >
                              Global Corporate Engagement
                            </Heading>
                          </div>
                          <Heading
                            as="h5"
                            className="w-[77%] mt-[-4px] mr-[21px]"
                          >
                            Expand your reach globally. Connect with
                            professionals across the world, enhancing the impact
                            and networking potential of your events.
                          </Heading>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[47%] gap-[101px]">
                      <div className="h-[366px] w-full relative">
                        <div className="h-[296px] w-[81%] bottom-0 right-0 m-auto bg-gray-900 absolute rounded-[10px]" />
                        <Img
                          src="images/img_image_57.png"
                          alt="imagefiftyseven"
                          className="h-[337px] w-[95%] left-0 top-0 m-auto object-cover absolute rounded-[10px]"
                        />
                      </div>
                      <Button className="min-w-[229px]">
                        Explore Features
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between items-center w-[83%] mt-[59px]">
                    <div className="flex flex-row justify-center w-[44%]">
                      <div className="flex flex-col items-start justify-start w-full gap-[13px]">
                        <div className="flex flex-row justify-start items-start w-[83%] gap-7">
                          <div className="flex flex-row justify-center w-[18%] mt-1.5 p-[15px] bg-cyan-300_99 rounded-[20px]">
                            <Img
                              src="images/img_image_61_3.png"
                              alt="imagesixtyone"
                              className="w-[74%] object-cover"
                            />
                          </div>
                          <Heading
                            size="md"
                            as="h3"
                            className="w-[77%] !text-blue_gray-900_03 !font-kanit"
                          >
                            Cutting edge Corporate technology
                          </Heading>
                        </div>
                        <Heading as="h5" className="w-[81%] ml-[99px]">
                          Stay ahead with AI-driven insights and the latest
                          technology. Eve Shark provides the tools to keep your
                          event organization at the forefront of industry
                          trends.
                        </Heading>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[52%] gap-3.5">
                      <div className="flex flex-row justify-start items-center w-[82%] gap-7">
                        <div className="flex flex-row justify-center w-[15%] p-[15px] bg-cyan-300_99 rounded-[20px]">
                          <Img
                            src="images/img_image_61_4.png"
                            alt="imagesixtyone"
                            className="w-[74%] object-cover"
                          />
                        </div>
                        <Heading
                          size="md"
                          as="h3"
                          className="w-[80%] !text-blue_gray-900_03 !font-kanit"
                        >
                          Tailored Corporate experiences
                        </Heading>
                      </div>
                      <Heading as="h5" className="w-[84%] ml-[99px]">
                        Craft unique events with Eve Shark’s customizable
                        solutions. Our commitment to sustainability and
                        inclusivity ensures a distinctive and responsible
                        approach to event management.
                      </Heading>
                    </div>
                  </div>
                  <div className="h-[4px] w-[81%] mt-[85px] ml-[119px] bg-gradient" />
                </div>
              </div>
              <Heading size="2xl" as="h1" className="mt-px !font-kanit">
                <span className="text-gray-900_01">Testimonials </span>
                <span className="text-deep_purple-400">& Reviews</span>
              </Heading>
              <div className="flex flex-row w-full mt-[27px] gap-[62px] max-w-[1133px]">
                <div className="flex flex-col items-start justify-start w-[31%] p-[21px] border-indigo-100_a3 border border-solid bg-white-A700 shadow-xs rounded-[10px]">
                  <div className="flex flex-col items-start justify-start w-[82%] ml-[3px] gap-[18px]">
                    <Img
                      src="images/img_ri_double_quotes_l.svg"
                      alt="lorem_ipsum_one"
                      className="h-[72px]"
                    />
                    <div className="flex flex-col items-start justify-start w-[97%] ml-2">
                      <Heading
                        size="lg"
                        as="h2"
                        className="ml-0.5 !text-black-900 !font-inter"
                      >
                        Lorem Ipsum{" "}
                      </Heading>
                      <Text
                        size="xs"
                        as="p"
                        className="mt-[11px] ml-0.5 !text-blue_gray-400 !font-inter !font-normal"
                      >
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.
                      </Text>
                      <div className="flex flex-row justify-start items-start w-[70%] mt-[25px] gap-2.5">
                        <Img
                          src="images/img_ellipse_184.png"
                          alt="circleimage"
                          className="h-[54px] w-[37%] rounded-[50%]"
                        />
                        <div className="flex flex-col items-start justify-start w-[58%] gap-[9px]">
                          <Text
                            size="xs"
                            as="p"
                            className="!text-black-900 !font-inter"
                          >
                            Park Joon
                          </Text>
                          <RatingBar
                            value={1}
                            isEditable={true}
                            size={16}
                            starCount={4}
                            className="flex justify-between w-[94px]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[31%] p-[21px] border-indigo-100_a3 border border-solid bg-white-A700 shadow-xs rounded-[10px]">
                  <div className="flex flex-col items-start justify-start w-[82%] ml-[3px] gap-[18px]">
                    <Img
                      src="images/img_ri_double_quotes_l.svg"
                      alt="ridouble_one"
                      className="h-[72px]"
                    />
                    <div className="flex flex-col items-start justify-start w-[97%] ml-2">
                      <Heading
                        size="lg"
                        as="h2"
                        className="ml-0.5 !text-black-900 !font-inter"
                      >
                        Lorem Ipsum{" "}
                      </Heading>
                      <Text
                        size="xs"
                        as="p"
                        className="mt-[11px] ml-0.5 !text-blue_gray-400 !font-inter !font-normal"
                      >
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.
                      </Text>
                      <div className="flex flex-row justify-start items-start w-[70%] mt-[25px] gap-2.5">
                        <Img
                          src="images/img_ellipse_184.png"
                          alt="circleimage"
                          className="h-[54px] w-[37%] rounded-[50%]"
                        />
                        <div className="flex flex-col items-start justify-start w-[58%] gap-[9px]">
                          <Text
                            size="xs"
                            as="p"
                            className="!text-black-900 !font-inter"
                          >
                            Park Joon
                          </Text>
                          <RatingBar
                            value={1}
                            isEditable={true}
                            size={16}
                            starCount={4}
                            className="flex justify-between w-[94px]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[31%] p-[21px] border-indigo-100_a3 border border-solid bg-white-A700 shadow-xs rounded-[10px]">
                  <div className="flex flex-col items-start justify-start w-[82%] ml-[3px] gap-[18px]">
                    <Img
                      src="images/img_ri_double_quotes_l.svg"
                      alt="ridouble_one"
                      className="h-[72px]"
                    />
                    <div className="flex flex-col items-start justify-start w-[97%] ml-2">
                      <Heading
                        size="lg"
                        as="h2"
                        className="ml-0.5 !text-black-900 !font-inter"
                      >
                        Lorem Ipsum{" "}
                      </Heading>
                      <Text
                        size="xs"
                        as="p"
                        className="mt-[11px] ml-0.5 !text-blue_gray-400 !font-inter !font-normal"
                      >
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.
                      </Text>
                      <div className="flex flex-row justify-start items-start w-[70%] mt-[25px] gap-2.5">
                        <Img
                          src="images/img_ellipse_184.png"
                          alt="circleimage"
                          className="h-[54px] w-[37%] rounded-[50%]"
                        />
                        <div className="flex flex-col items-start justify-start w-[58%] gap-[9px]">
                          <Text
                            size="xs"
                            as="p"
                            className="!text-black-900 !font-inter"
                          >
                            Park Joon
                          </Text>
                          <RatingBar
                            value={1}
                            isEditable={true}
                            size={16}
                            starCount={4}
                            className="flex justify-between w-[94px]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[577px] w-full mt-[82px] relative">
                <Img
                  src="images/img_image_58.png"
                  alt="imagefiftyeight"
                  className="justify-center h-[577px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                />
                <div className="flex flex-col items-start justify-start w-[40%] h-full gap-10 right-[2%] bottom-0 top-0 m-auto absolute">
                  <Heading
                    size="xl"
                    as="h1"
                    className="w-[74%] !text-gray-200 !font-kanit"
                  >
                    Begin Your Success Story with Eve Shark
                  </Heading>
                  <Text size="xs" as="p" className="leading-[30px]">
                    At Eve Shark, we don’t just manage events; we create
                    extraordinary experiences. Join us in redefining the event
                    management landscape and elevating your events beyond
                    expectations.
                  </Text>
                  <Button className="min-w-[229px]">Get Started</Button>
                </div>
                <div className="flex w-[96px] h-[20px] bottom-[5%] right-[43%] m-auto absolute" />
              </div>
            </div>
          </div>
        </div>
        <footer className="flex justify-center items-center w-full p-[35px] bg-blue_gray-900_03">
          <div className="flex flex-row justify-center w-full mt-[29px] mx-auto max-w-[1369px]">
            <div className="flex flex-row justify-between items-center w-full">
              <div className="flex flex-col items-start justify-start w-[30%] mt-2 gap-[31px]">
                <Text size="xl" as="p">
                  Logo
                </Text>
                <Heading
                  size="xl"
                  as="h1"
                  className="!text-white-A700 !font-kanit"
                >
                  Connecting People, Creating Memories
                </Heading>
              </div>
              <div className="flex flex-row justify-between items-start w-[47%]">
                <div className="flex flex-col items-start justify-start w-[38%] mb-[26px]">
                  <a href="#">
                    <Text as="p" className="!font-medium">
                      Use EveShark
                    </Text>
                  </a>
                  <div className="h-px w-[72%] mt-4 ml-1 bg-gradient1" />
                  <a href="#" className="mt-[22px]">
                    <Text as="p">Create Event</Text>
                  </a>
                  <a href="#" className="mt-[39px]">
                    <Text as="p">Sell Tickets</Text>
                  </a>
                  <a href="#" className="mt-[39px]">
                    <Text as="p">Event Marketing</Text>
                  </a>
                  <a href="#" className="mt-[39px]">
                    <Text as="p">Eveshark Dynamic Pricing</Text>
                  </a>
                  <a href="#" className="mt-[39px]">
                    <Text as="p">Eveshark Analytics</Text>
                  </a>
                  <a href="#" className="mt-[39px]">
                    <Text as="p">FAQs</Text>
                  </a>
                </div>
                <div className="flex flex-row justify-center w-[53%] mt-[47px]">
                  <div className="flex flex-row justify-center items-center w-full">
                    <div className="flex flex-row justify-center items-start w-[53%]">
                      <div className="flex flex-col items-start justify-start w-[47%] gap-[51px]">
                        <a href="#">
                          <Text as="p" className="!font-medium">
                            Site
                          </Text>
                        </a>
                        <ul className="flex flex-col items-start justify-start w-full gap-[55px]">
                          <li>
                            <a href="#">
                              <Text as="p">About</Text>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Text as="p">Features</Text>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Text as="p">Terms</Text>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Text as="p">Support</Text>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="h-px w-[98%] mt-10 ml-[-77px] bg-gradient1" />
                    </div>
                    <div className="flex flex-row justify-center w-[55%] ml-[-23px]">
                      <div className="flex flex-col items-start justify-start w-full gap-[22px]">
                        <div className="flex flex-col items-start justify-start ml-[7px] gap-[15px]">
                          <Text as="p">Connect with us</Text>
                          <div className="h-px w-full bg-gradient1" />
                        </div>
                        <div className="flex flex-row justify-between items-start w-[88%]">
                          <Img
                            src="images/img_ri_instagram_line.svg"
                            alt="riinstagram_one"
                            className="h-[37px]"
                          />
                          <Img
                            src="images/img_simple_icons_x.svg"
                            alt="simpleiconsx"
                            className="h-[25px] mt-[5px]"
                          />
                          <Img
                            src="images/img_ic_round_facebook.svg"
                            alt="icround_one"
                            className="h-[35px] w-[35px]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
