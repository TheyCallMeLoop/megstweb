import React, { useEffect, useRef, useState } from "react";
import { Carousel, Col, Row } from "react-bootstrap";
import lsting2 from "../../assets/otherasseets/sir-simo-jK8Zsk9chqI-unsplash.jpg";

import founder from "../../assets/images/founder.svg";
import { useLocation, useSearchParams } from "react-router-dom";
import uidesk from "../../assets/images/brands/uideck.svg";
import graygrids from "../../assets/images/brands/graygrids.svg";
import lineicons from "../../assets/images/brands/lineicons.svg";
import tailAdmin from "../../assets/images/brands/tailadmin.svg";
import Imgeone from "../../compnents/Parallex/imgeone";
import Imgaetow from "../../compnents/Parallex/imgaetow";
import { applicant } from "../../services/api";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Home = () => {
  const imge_url = "https://locatestudent.com/magst/upload/";
  const location = useLocation();
  let [listingdata, setlistingdata] = useState([]);

  let [search, setSearch] = useSearchParams();
  const searchValue = search?.get("selected");

  const sectionRef = useRef(null);
  const sectionRef2 = useRef(null);
  const sectionRef3 = useRef(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const scrollTo = queryParams.get("selected");

    if (scrollTo) {
      let targetRef;
      switch (scrollTo) {
        case "listing":
          targetRef = sectionRef;
          break;
        case "founder":
          targetRef = sectionRef2;
          break;
        case "trust":
          targetRef = sectionRef3;
          break;
        default:
          // Handle default case or error condition
          break;
      }

      if (targetRef && targetRef.current) {
        targetRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.search]);

  useEffect(() => {
    const data = {
      type: "get_data",
      table_name: "listings",
    };
    applicant(data).then((res) => {
      setlistingdata(res?.data?.data);
    });
  }, []);

  return (
    <div className="main_div">
      <div className="hero_section">
        <div
          style={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            height: "60vh",
            width: "90%",
            marginLeft: "5%",
          }}
        >
          <h1 className="font_regular text_white">
            A Exclusive Approach to <br /> Real State Investment
          </h1>
        </div>
      </div>
      <div className="main_container">
        <h5
          className="font_regular text_white  mt-5 mb-5"
          style={{ lineHeight: "40px" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quas
          veniam alias ullam minima, mollitia nulla, quasi dicta ut
          exercitationem voluptatibus illum, placeat quod blanditiis eius nemo?
          Veritatis iste odio aliquid incidunt sequi fuga quod magni natus,
          accusamus, harum quo aperiam, praesentium fugit ea blanditiis?
          Repellat, voluptatibus. Recusandae harum incidunt fugit nulla expedita
          explicabo tempora beatae magnam, hic obcaecati? Impedit voluptates
          quibusdam obcaecati optio, non numquam officiis similique vitae
          cupiditate enim quo odio consequuntur nesciunt, quae explicabo sit at,
          repellendus rem magni ipsam deserunt error delectus unde? Beatae neque
          labore magnam odio, corporis culpa voluptatibus nisi. Non
          reprehenderit nam libero?
        </h5>
      </div>

      {/* <div className="listing mt-5" ref={sectionRef}></div> */}
      <Imgeone />

      <div className="main_container mt-4 mb-4">
        <h1 className=" text_white font_semibold fs_60">LISTINGS</h1>
      </div>

     <div className="main_container">
     <Swiper className="mt-2 mb-5"
        spaceBetween={50}
        slidesPerView={4}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {listingdata.map((listing, index) => (
          <SwiperSlide>
            <div className="listing_card">
              <img src={imge_url +listing?.image} className="showimg" alt="" />
              <div style={{padding: 15}}>
              <p className="text_dark font_bold">{ listing?.title}</p>
              <p  className="text_dark font_regular">
                {listing?.description}
              </p>
              </div>
            
            </div>
          </SwiperSlide>
        ))}
          </Swiper>
     </div>

     

      
      <Imgaetow />

      <div className="main_container">
        <h1 className=" text_white font_semibold fs_60 mt-5 mb-5">
          Antonio Matera
        </h1>
        <div className="founder_des">
          <Row>
            <Col
              xl="9"
              xxl="9"
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <p
                className="text_white font_regular "
                style={{ lineHeight: "35px", width: "90%" }}
              >
                {" "}
                Antonio Matera is the Principal Agency Manager at SVAG and the
                Founder & CEO of MAGST Real Estate. With a solid foundation in
                engineering from Politecnico di Bari, Antonio seamlessly blends
                technical insight with financial expertise, having further
                specialized in Finance and Financial Management Services at the
                esteemed Centro Studi Villa Negroni. His comprehensive knowledge
                encompasses the Swiss system, prevoyance, deal closing, and
                investment law in Switzerland. Antonio is skilled in Real Estate
                Valuations, Financial Planning, Real Estate Investments, Income
                Properties, and Property Management. Passionate about real
                estate and finance, Antonio is committed to empowering
                individuals and businesses to achieve their property and
                financial aspirations. His approach is characterized by
                strategic insight, innovation, and a genuine dedication to
                client success.
              </p>
            </Col>

            <Col
              xl="3"
              xxl="3"
              className="respo"
              style={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
              }}
            >
              <img src={founder} alt="" />
            </Col>
          </Row>
        </div>
      </div>

      <div className="trust_section" ref={sectionRef3}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "60vh",
            width: "90%",
            marginLeft: "5%",
          }}
        >
          <h1 className=" text_white font_semibold fs_60">Trusted us : </h1>
        </div>
      </div>

      <div className=" mt-5 mb-5 ">
        <Row className="main_container flex_center ">
          <Col
            xxl="3"
            lg="4"
            className="flex_center"
            style={{ paddingBottom: 10 }}
          >
            <img src={uidesk} />
          </Col>
          <Col
            xxl="3"
            lg="4"
            className="flex_center"
            style={{ paddingBottom: 10 }}
          >
            <img src={graygrids} />
          </Col>
          <Col
            xxl="3"
            lg="4"
            className="flex_center"
            style={{ paddingBottom: 10 }}
          >
            <img src={lineicons} />
          </Col>
          <Col
            xxl="3"
            lg="4"
            className="flex_center"
            style={{ paddingBottom: 10 }}
          >
            <img src={tailAdmin} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
