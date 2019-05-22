import { addDirToTemplatePath } from "template-utils/addDirToTemplatePath";

import myuni from "./myuni";
import np from "./np";
import singaporetech from "./singaporetech";

export default addDirToTemplatePath("edu", {
  ...myuni,
  ...np,
  ...singaporetech
});
