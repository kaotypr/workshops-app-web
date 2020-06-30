import React, { useState } from 'react';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import { Backdrop } from '@material-ui/core';

import SidebarNav from 'components/navigation/sidebar';
import AppBar from 'components/navigation/appbar';

const AppLayout = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <LayoutWrapper>
      <AppBar sidebarStatus={showSidebar} setShowSidebar={setShowSidebar} />
      <SidebarNav show={showSidebar} />
      <Backdrop open={showSidebar} onClick={() => setShowSidebar(false)} style={{ zIndex: 2 }} />
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  position: fixed;
  min-height: 100vh;
  min-width: 100vw;
`;

const ContentWrapper = styled.div`
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 4rem;
  ${up('md')} {
    padding-top: 0;
    padding-left: 15rem;
    width: 100vw;
  }
`;

export default AppLayout;
