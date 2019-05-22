import dynamic from "next/dynamic";
import { addDirToTemplatePath } from "template-utils/addDirToTemplatePath";

const STANDARDCert2019 = dynamic(
  import("./2019-STANDARD-CERTIFICATE" /* webpackChunkName: "myuni-Templates" */)
);

const templates = {
  "2019-STANDARD-CERTIFICATE": STANDARDCert2019
};

export default addDirToTemplatePath("myuni", templates);
