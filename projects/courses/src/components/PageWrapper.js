import React from "react";
import Breadcrumb from "./sections/Breadcrumb";
import Title from "./sections/Title";
import Callout from "./sections/Callout";

const PageWrapper = ({ hasCallout = "false", breadcrumbLinks, titleText, children }) => (
  <>
    <Breadcrumb links={breadcrumbLinks} />
    <Title text={titleText} />
    {hasCallout === "true" && <Callout />}
    {children}
  </>
);

export default PageWrapper;
