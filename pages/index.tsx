import Layout from "../components/layout";
import React from "react";

import { FlexSpaceBetweenColumn } from "../components/styled-components";

export default function IndexPage() {
  return (
    <Layout>
      <FlexSpaceBetweenColumn>
      <h1>Hello! This is the test score management website</h1>
      <h3>Menu is on your left</h3>
      </FlexSpaceBetweenColumn>
    </Layout>
  );
}
