import React from "react";

import { Container } from "./styles";

import MobileHeader from "../MobileHeader";
import LeftColumn from "../LeftColumn";
import MiddleColumn from "../MiddleColumn";
import RightColumn from "../RightColumn";

const Layout: React.FC = () => {
  return (
    <Container>
      <main>
        <MobileHeader />
        <LeftColumn />
        <MiddleColumn />
        <RightColumn />
      </main>
    </Container>
  );
};

export default Layout;
