import PropTypes from "prop-types";
import { MultiCertificateRenderer } from "template-utils/MultiCertificateRenderer";
import Transcript from "./transcript";
import TranscriptInfo from "./trans-info";
import approvedAddresses from "../common/ApprovedAddresses";

const templates = [
  {
    id: "transcript",
    label: "Transcript",
    template: Transcript
  },

  {
    id: "transcript-info",
    label: "Transcript Information",
    template: TranscriptInfo
  }
];

const Template2019FebExample = ({ certificate }) => (
  <MultiCertificateRenderer
    certificate={certificate}
    templates={templates}
    whitelist={approvedAddresses} />
);

Template2019FebExample.propTypes = {
  certificate: PropTypes.object.isRequired
};

export default Template2019FebExample;
