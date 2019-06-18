import PropTypes from "prop-types";
import { get } from "lodash";
import { SUSS_LOGO, registrarSampleSign } from "./images";

const borderStyle = {
  border: 5,
  borderColor: "#8C9093",
  borderStyle: "solid"
};

const logoImgStyle = {
  width: "30%",
  height: "40%"
};

const officialTransStyle = {
  fontFamily: "Montserrat",
  fontSize: "17pt",
  fontWeight: "bold",
  textAlign: "center",
  color: "#003B5C"
};

const bodyCopyStyle = {
  fontFamily: "Montserrat",
  fontSize: "9pt"
};

const centerTransData = {
  textAlign: "center"
};

const boldLabels = {
  fontWeight: "bold"
};

const Template = ({ certificate }) => {
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

  return (
    <div className="container" style={borderStyle}>
      <div className="row justify-content-center">
        <img src={SUSS_LOGO} style={logoImgStyle} />
      </div>
      <div className="row justify-content-center">
        <p style={officialTransStyle}>OFFICIAL TRANSCRIPT</p>
      </div>

      <div className="row">
        <div className="col">
          <p style={bodyCopyStyle}>
            NG WEI XUAN (Huang WEIXUAN) <br />
            BLK 324 TAMPINES STREET 32 <br />
            #01-353 <br />
            SINGAPORE 460206 <br />
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col">
          Name <br />
          <br />
          Personal Identifier
        </div>
        <div className="col">
          : NG WEI XUAN (HUANG WEIXUAN) <br />
          <br />: E1571349
        </div>
        <div className="col">
          NRIC/FIN/PP No. <br />
          Date of Issue <br />
          Page Count <br />
        </div>
        <div className="col">
          : S9416304H <br />
          : 25 March 2019 <br />
          : Page 1 of 2 <br />
        </div>
      </div>

      <br />

      <div className="row">
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
                    <b>130.0</b>
                  </td>
                </tr>

                <tr>
                  <td style={boldLabels} colSpan="6">
                    Culmulative Grade Point Average:{" "}
                  </td>
                  <td style={centerTransData}>
                    <b>3.79</b>
                  </td>
                </tr>

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
        <div className="col-4">Bachelor of Building and Project Management</div>
        <div className="col-4">Pass With Merit</div>
        <div className="col-4">21 March 2019</div>
      </div>

      <div className="row">
        <div className="col-4">
          <img src={registrarSampleSign} />
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
