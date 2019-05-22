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

const addresses = [
  "0x536EdEd27ae895F503E64Af877ee742B7bBC1ea2",
  "0x897E224a6a8b72535D67940B3B8CE53f9B596800",
  "0x24a7DE31D231221ab6B1B325Ca5F1AA7bfbaaabA",
  "0x0BF6AF61BF4575DF0233428b8695153BcEccbe24",
  "0xe60f905d1fb2fE8b44Df21654d52aF626116B217"
];

const SITCert = ({ certificate }) => (
  <MultiCertificateRenderer
    certificate={certificate}
    templates={templates}
    whitelist={addresses}
  />
);

SITCert.propTypes = {
  certificate: PropTypes.object.isRequired
};

export default SITCert;
