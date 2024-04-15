import React, { useRef, useState } from "react";
import BgVideo from "../../assets/video/videomgst.mp4";
import BaseButton from "../../compnents/basebutton";
import logo from "../../assets/images/Logo.svg";
import { Button, Modal } from "react-bootstrap";
import * as Yup from "yup";
import { useFormik } from "formik";
// import { useHistory } from 'react-router-dom';
import { Link, useNavigate } from "react-router-dom";

import upload from "../../assets/images/cloud-computing.png";
import { ArrowLeft } from "react-feather";
export default function Onboarding() {
  const navigation = useNavigate();

  const [imageUrl, setImageUrl] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [companymodal, setCompanymodal] = useState(false);
  const [questionmodal, setQuestionmodal] = useState(false);

  const fileInputRef = useRef(null);

  // const history = useHistory();

  const formik = useFormik({
    validateOnMount: true, // <================= Add this
    initialValues: {
      name: "",
      middlename: "",
      nationality: "",
      company: "",
    },
    onSubmit: (values) => {
      console.log(values);
      setShowModal2(false);
      setCompanymodal(true);
      // setShowModal3(true)
      // history.push('/dashboard')
    },
  });

  const formik2 = useFormik({
    initialValues: {
      email: "",
      phone: "",
      linkdin: "",
      twitter: "",
      facebook: "",
      located: "",
    },
    onSubmit: (values) => {
      setCompanymodal(false);
      setQuestionmodal(true);
    },
  });

  const formik3 = useFormik({
    initialValues: {
      why: "",
    },
    onSubmit: (values) => {
      navigation("/dashboard");
    },
  });
  const handleVideoEnd = () => {
    setShowModal(true);
  };
  const Sginupmodal = () => {
    setShowModal(false);
    setShowModal2(true);
  };

  // const removeImage = () => {
  //   setSelectedImg([]);
  //   setImages([]);
  // };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <>
      <video autoPlay muted className="bg-vid" onEnded={handleVideoEnd}>
        <source src={BgVideo} type="video/mp4" />
      </video>
      <div className="container_onboard">
        <div className="flex_space">
          <Button
            className="base_btn font_regular text_white"
            onClick={() => Sginupmodal()}
          >
            Apply Now
          </Button>
          <img style={{ width: 100 }} src={logo} alt="" />
        </div>
      </div>

      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={showModal}
        onHide={() => setShowModal(false)}
      >
        <Modal.Body className="onboard_modal">
          <p className="font_regular text_white fs_20 text-center">
            To continue exploring, we invite you to apply for our access list.
          </p>
          <Button
            className="m_0 text_white font_regular modal_btn "
            onClick={() => Sginupmodal()}
          >
            Click here
          </Button>
        </Modal.Body>
      </Modal>

      <Modal
        className="abc"
        show={showModal2}
        onHide={() => setShowModal2(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="bg_primary radius_10">
          <div className="onboard_modal_sginup ">
            <h1 className="text-center text_white font_medium fs_30">
              Personal Details
            </h1>
            <p className="text-center text_white font_regular">
              Fill up the below details
            </p>
            <form onSubmit={formik.handleSubmit}>
              <p className="font_bold text_white mb-2">Name</p>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name "
                onChange={formik.handleChange}
                value={formik.values.name}
                className="input_felid"
              />
              <p className="font_bold text_white mb-2 mt-2">Middle Name</p>
              <input
                className="input_felid"
                id="middlename"
                name="middlename"
                placeholder="Enter your middle name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.middlename}
              />

              <p className="font_bold text_white mb-2 mt-2">Nationality </p>
              <input
                id="nationality"
                name="nationality"
                placeholder="Enter your nationality"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.nationality}
                className="input_felid"
              />

              <p className="font_bold text_white mb-2 mt-2">Company</p>
              <input
                id="company"
                name="company"
                type="text"
                placeholder="Enter your company name"
                onChange={formik.handleChange}
                value={formik.values.company}
                className="input_felid"
              />

              <p className="font_bold text_white mb-2 mt-2">Passport</p>

              <div className="upload">
                <input
                  type="file"
                  style={{ display: "none" }}
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  className="upload_feild"
                  accept="image/*"
                />
                <img
                  onClick={handleImageClick}
                  src={upload}
                  width={30}
                  height={30}
                  style={{ cursor: "pointer" }}
                  alt=""
                />
              </div>
              <Button
                disabled={!formik.isValid || !formik.dirty}
                className="m_0 text_white font_bold modal_dark w-100  mt-4"
                type="submit"
              >
                Next
              </Button>
            </form>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        className="abc"
        show={companymodal}
        onHide={() => setCompanymodal(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="bg_primary radius_10">
          <div className="onboard_modal_sginup ">
            <ArrowLeft
              className="text_white  mt-2 mb-2 "
              style={{ cursor: "pointer" }}
            />

            <form onSubmit={formik2.handleSubmit}>
              <p className="font_bold text_white mb-2">Email</p>
              <input
                id="email"
                name="email"
                type="text"
                placeholder="Enter your email"
                onChange={formik2.handleChange}
                value={formik2.values.email}
                className="input_felid"
              />

              <p className="font_bold text_white mb-2 mt-2">Phone number</p>
              <input
                className="input_felid"
                id="phone"
                name="phone"
                type="text"
                placeholder="Enter your phone"
                onChange={formik2.handleChange}
                value={formik2.values.phone}
              />

              <p className="font_bold text_white mb-2 mt-2">Linkdin url </p>
              <input
                id="linkdin"
                name="linkdin"
                type="text"
                placeholder="Enter your linkdin url"
                onChange={formik2.handleChange}
                value={formik2.values.linkdin}
                className="input_felid"
              />

              <p className="font_bold text_white mb-2 mt-2">Twitter url </p>
              <input
                id="twitter"
                name="twitter"
                type="text"
                placeholder="Enter your twitter url"
                onChange={formik2.handleChange}
                value={formik2.values.twitter}
                className="input_felid"
              />

              <p className="font_bold text_white mb-2 mt-2">Facebook url </p>
              <input
                id="facebook"
                name="facebook"
                type="text"
                placeholder="Enter your facebook url"
                onChange={formik2.handleChange}
                value={formik2.values.facebook}
                className="input_felid"
              />

              <p className="font_bold text_white mb-2 mt-2">
                Where is the company located
              </p>
              <input
                id="located"
                name="located"
                type="text"
                placeholder="Enter you location"
                onChange={formik2.handleChange}
                value={formik2.values.located}
                className="input_felid"
              />

              <Button
                disabled={!formik2.isValid}
                className="m_0 text_white font_bold modal_dark w-100  mt-4 "
                type="submit"
              >
                Next
              </Button>
            </form>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={questionmodal}
        onHide={() => setQuestionmodal(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="bg_primary radius_10">
          <div className="onboard_modal_sginup ">
            <form onSubmit={formik3.handleSubmit}>
              <p className="font_bold text_white mb-2 mt-2">
                Why do you want to start a project in Switzerland?
              </p>
              <textarea
                id="why"
                name="why"
                type="text"
                placeholder="Tell Somthing"
                onChange={formik3.handleChange}
                value={formik3.values.why}
                className="input_felid"
                style={{ height: 97 }}
              />

              <Button
                disabled={!formik3.isValid}
                className="m_0 text_white font_regular modal_dark w-100  mt-4"
                type="submit"
              >
                Submit
              </Button>
            </form>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={showModal3}
        onHide={() => setShowModal3(false)}
      >
        <Modal.Body className="onboard_modal" style={{ padding: 40 }}>
          <p className="font_regular text_white fs_20 text-center">
            Thanks for applying, we will be in touch!{" "}
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}
