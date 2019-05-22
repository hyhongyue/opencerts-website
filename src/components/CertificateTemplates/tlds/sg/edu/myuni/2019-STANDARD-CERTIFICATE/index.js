import PropTypes from "prop-types";
import { MultiCertificateRenderer } from "template-utils/MultiCertificateRenderer";
import Certificate from "./certificate";

const templates = [
  {
    id: "certificate",
    label: "Certificate",
    template: Certificate
  }
];

const addresses = ["0xe60f905d1fb2fE8b44Df21654d52aF626116B217"];

const myUni2019StandardTemplate = ({ certificate }) => (
  <MultiCertificateRenderer
    certificate={certificate}
    templates={templates}
    whitelist={addresses}
  />
);

myUni2019StandardTemplate.propTypes = {
  certificate: PropTypes.object.isRequired
};

export default myUni2019StandardTemplate;
