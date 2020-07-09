import React from "react";

import ProfilePage from "../ProfilePage";

import {
  Container,
  Header,
  BackIcon,
  ProfileInfo,
  BottomMenu,
  HomeButton,
  SearchButton,
  BellButton,
  EmailButton,
} from "./styles";

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>André Castelo</strong>
          <span>12 notificações</span>
        </ProfileInfo>
      </Header>

      {/* <ProfilePage /> */}

      <BottomMenu>
        <HomeButton />
        <SearchButton />
        <BellButton />
        <EmailButton />
      </BottomMenu>
    </Container>
  );
};

export default Main;
