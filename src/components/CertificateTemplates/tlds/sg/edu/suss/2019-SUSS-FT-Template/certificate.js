import PropTypes from "prop-types";
import {
  SUSS_LOGO,
  presidentSampleSign,
  registrarSampleSign,
  SEAL
} from "./images";

const borderStyle = {
  border: 5,
  borderColor: "#8C9093",
  borderStyle: "solid"
};

const logoImgStyle = {
  width: "40%",
  height: "50%"
};

const staticDataTextStyle = {
  fontFamily: "Cardo",
  fontStyle: "italic",
  fontSize: "15pt",
  textAlign: "center",
  color: "#003B5C"
};

const dynamicDataTextStyle = {
  fontFamily: "Arial",
  fontWeight: "bold",
  fontSize: "20pt",
  textAlign: "center",
  color: "#003B5C"
};

const degreeClassTextStyle = {
  fontFamily: "Arial",
  fontWeight: "bold",
  fontSize: "15pt",
  textAlign: "center",
  color: "#003B5C"
};

const confDateTextStyle = {
  fontFamily: "Arial",
  fontWeight: "bold",
  fontSize: "10pt",
  textAlign: "center",
  color: "#003B5C"
};

const lastRowStyle = {
  paddingBottom: "50px"
};

const signTextStyle = {
  fontFamily: "Cardo",
  fontSize: "15pt",
  textAlign: "center",
  color: "#003B5C"
};

const CertNoTextStyle = {
  fontFamily: "Arial",
  fontWeight: "bold",
  color: "#003B5C"
};

const resizeSeal = {
  height: "250px"
};

const Template = ({ certificate }) => (
  <div className="container" style={borderStyle}>
    <div className="row d-flex justify-content-center">
      <img src={SUSS_LOGO} style={logoImgStyle} />
    </div>
    <div className="row d-flex justify-content-center">
      <span style={staticDataTextStyle}>This is to certify that</span>
    </div>
    <div className="row">&nbsp;</div>
    <div className="row d-flex justify-content-center">
      <span style={dynamicDataTextStyle}>{certificate.recipient.name}</span>
    </div>
    <div className="row">&nbsp;</div>
    <div className="row d-flex justify-content-center">
      <span style={staticDataTextStyle}>
        having completed the requirements of the <br /> programme of study in
      </span>
    </div>
    <div className="row">&nbsp;</div>
    <div className="row d-flex justify-content-center">
      <span style={dynamicDataTextStyle}>
        {" "}
        {certificate.additionalData.degreeName}
      </span>
    </div>
    <div className="row">&nbsp;</div>
    <div className="row d-flex justify-content-center">
      <span style={staticDataTextStyle}>was admitted to the Degree of</span>
    </div>
    <div className="row">&nbsp;</div>
    <div className="row d-flex justify-content-center">
      <span style={dynamicDataTextStyle}>
        {certificate.additionalData.degreeName2}
      </span>
    </div>
    <div className="row d-flex justify-content-center">
      <span style={degreeClassTextStyle}>
        {certificate.additionalData.degreeClssification}
      </span>
    </div>
    <div className="row d-flex justify-content-center">
      <span style={confDateTextStyle}>22 MARCH 2018</span>
    </div>

    <div className="row align-items-end" style={lastRowStyle}>
      <span className="col-md-3 text-center">
        <img src={presidentSampleSign} /> <br />
        <span style={signTextStyle}> President </span>
      </span>

      <span className="col-md-3 text-center">
        <img src={registrarSampleSign} /> <br />
        <span style={signTextStyle}> Registrar </span>
      </span>

      <span className="col-md-6 text-center">
        <img src={SEAL} style={resizeSeal} /> <br />
        <span style={CertNoTextStyle}>Certificate Number: &nbsp;</span>
        <span style={CertNoTextStyle}>{certificate.id}</span>
      </span>
    </div>
  </div>
);

Template.propTypes = {
  certificate: PropTypes.object.isRequired
};
export default Template;
