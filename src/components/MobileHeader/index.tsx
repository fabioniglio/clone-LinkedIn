import React from "react";

import { Container, ProfileCircle, SearchInput, MessageIcon } from "./styles";

const MobileHeader: React.FC = () => {
  return (
    <Container>
      <ProfileCircle src="https://avatars2.githubusercontent.com/u/12427718?s=460&u=fa3e191fa8a16a65f39752f990933fe04c6ccb0f&v=4" />
      <SearchInput placeholder="Search" />
      <MessageIcon />
    </Container>
  );
};

export default MobileHeader;
