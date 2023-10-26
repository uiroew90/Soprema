import React, { Fragment } from "react";
import Breadcrumb from "./sections/Breadcrumb";
import Title from "./sections/Title";
import Callout from "./sections/Callout";

export default ({ hasCallout = "false", breadcrumbLinks, titleText, children }) => (
  <Fragment>
    <Breadcrumb links={breadcrumbLinks} />
    <Title text={titleText} />
    {hasCallout === "true" && <Callout />}
    {children}
  </Fragment>
);
