import PropTypes from "prop-types";
import { get } from "lodash";
import { format } from "date-fns";
import { SUSS_LOGO } from "../common/images";

const engLocale = require("date-fns/locale/en");

const logoStyle = {
  width: "39.02mm",
  height: "19.756mm"
};

const topBuffer = {
  marginTop: "15px"
};

const officialTransStyle = {
  marginTop: "15px",
  fontFamily: "Montserrat",
  fontWeight: "bold",
  color: "#003B5C",
  fontSize: "17pt"
};

const centerTransData = {
  textAlign: "center"
};

const boldLabels = {
  fontWeight: "bold"
};

const headerWidth = {
  width: "130px"
};

const containerStyle = {
  width: "794px",
  height: "auto"
};

const dateStyle = {
  width: "105px"
};

const Template = ({ certificate }) => {
  // Declare what will be needed in the Transcript
  const transcriptData = get(certificate, "transcript", []);

  // Rendering an array of transcript data
  const transcriptSection = transcriptData.map((t, i) => (
    <tr key={i}>
      <td>{t.year}</td>
      <td style={centerTransData}>{t.semester}</td>
      <td>{t.courseCode}</td>
      <td>{t.name}</td>
      <td style={centerTransData}>{t.creditUnits}</td>
      <td style={centerTransData}>{t.result}</td>
      <td style={centerTransData}>{t.gradePoint}</td>
    </tr>
  ));

  // Rendering the # section
  function displayHexSection() {
    for (const [index, value] of transcriptData.entries()) {
      <Element key={index} />;
      if (value.result === "#") {
        return (
          <tr>
            <td colSpan="7"># Exempted from course</td>
          </tr>
        );
      }
    }
  }

  // Rendering the * section
  function displayStarSection() {
    for (const [index, value] of transcriptData.entries()) {
      <Element key={index} />;
      if (value.creditUnits === "*") {
        return (
          <tr>
            <td colSpan="7">
              * Additional course taken, not included in grautation
              requirements.
            </td>
          </tr>
        );
      }
    }
  }

  return (
    <div className="container" style={containerStyle}>
      <div className="row">
        <div className="col d-flex justify-content-center">
          <img src={SUSS_LOGO} style={logoStyle} />
        </div>
      </div>

      <div className="row">
        <div className="col d-flex justify-content-center">
          <h1 style={officialTransStyle}>OFFICIAL TRANSCRIPT</h1>
        </div>
      </div>

      <div className="row" style={topBuffer}>
        <div className="col">
          {certificate.recipient.name.toUpperCase()} <br />
          {certificate.recipient.address.toUpperCase()} <br />
          {certificate.recipient.unitNo} <br />
          SINGAPORE {certificate.recipient.postalCode} <br />
        </div>
      </div>

      <div className="row" style={topBuffer}>
        <div className="col">
          <table className="w-120">
            <tbody>
              <tr>
                <th style={headerWidth}>Name</th>
                <td>: {certificate.recipient.name.toUpperCase()}</td>
                <th style={headerWidth}>NRIC/FIN/PP No.</th>
                <td>: {certificate.recipient.nric}</td>
              </tr>
              <tr>
                <td colSpan="2" />
                <th style={headerWidth}>Date of Issue</th>
                <td style={dateStyle}>
                  :{" "}
                  {format(certificate.issuedOn, "DD MMMM YYYY", {
                    locale: engLocale
                  })}
                </td>
              </tr>
              <tr>
                <th style={headerWidth}>Personal Identifier</th>
                <td>: {certificate.recipient.personalIdentifier}</td>
                <th style={headerWidth}>Page Count</th>
                <td>: Page 1 of 2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="row" style={topBuffer}>
        <div className="col">
          <p>
            This transcript confirms that the student named above has
            succesfully completed the listed courses leading to the
            qualification shown below. For an explanation of the terms and
            symbols used, please see the other side of this trascript.
          </p>
        </div>
      </div>

      {transcriptData !== [] && (
        <div className="row">
          <div className="col">
            <table className="w-100">
              <tbody>
                <tr>
                  <th>Year</th>
                  <th style={centerTransData}>Semester</th>
                  <th>Course</th>
                  <th>Title</th>
                  <th style={centerTransData}>Credit Units</th>
                  <th style={centerTransData}>Result</th>
                  <th style={centerTransData}>Grade Point</th>
                </tr>
                {transcriptSection}

                <tr>
                  <td style={boldLabels} colSpan="4">
                    Total number of credit units counted towards this award:{" "}
                  </td>
                  <td style={centerTransData}>
                    <b>{certificate.additionalData.totalCreditUnits}</b>
                  </td>
                </tr>

                <tr>
                  <td style={boldLabels} colSpan="6">
                    Culmulative Grade Point Average:{" "}
                  </td>
                  <td style={centerTransData}>
                    <b>{certificate.additionalData.cgpa}</b>
                  </td>
                </tr>

                {displayHexSection()}
                {displayStarSection()}

                <tr>
                  <td colSpan="7">
                    <b>Degree Conferred By:</b> Singapore University of Social
                    Science{" "}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      <div className="row">
        <div className="col-4" style={boldLabels}>
          Title
        </div>
        <div className="col-4" style={boldLabels}>
          Classification
        </div>
        <div className="col-4" style={boldLabels}>
          Date of Conferment
        </div>
      </div>

      <div className="row">
        <div className="col-4">{certificate.additionalData.degreeName2}</div>
        <div className="col-4">
          {certificate.additionalData.degreeClssification}
        </div>
        <div className="col-4">
          {certificate.additionalData.dateOfConferment}
        </div>
      </div>

      <div className="row">
        <div className="col-4">
          <img src={certificate.additionalData.registraSignature} />
          <hr />
          <div> Registrar </div>
        </div>
      </div>

      <div className="row">
        <div className="col text-center">
          --------------- End of Transcript ---------------
        </div>
      </div>
    </div>
  );
};

Template.propTypes = {
  certificate: PropTypes.object.isRequired
};

export default Template;
