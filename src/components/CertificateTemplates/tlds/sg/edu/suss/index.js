import dynamic from "next/dynamic";

const sussFullTime2019 = dynamic(
	import("./2019-SUSS-FT-Template" /* webpackChunkName: "suss-Templates" */)
);

export default {
  "2019-SUSS-FT-Template": sussFullTime2019
};