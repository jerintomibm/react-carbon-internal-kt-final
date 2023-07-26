import React from 'react';
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
} from '@carbon/react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';


const TutorialHeader = () => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <Header aria-label="Carbon Tutorial">
        {/* <SkipToContent /> */}
        <HeaderMenuButton
          aria-label="Open menu"
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
        />
        <HeaderName to="/" as={Link} prefix="IBM">
          Carbon Tutorial
        </HeaderName>
        <HeaderNavigation aria-label="Carbon Tutorial">
          <HeaderMenuItem href="/fetch">Fetch API</HeaderMenuItem>
        </HeaderNavigation>
        <SideNav
          aria-label="Side navigation"
          expanded={isSideNavExpanded}
          isPersistent={false}>
          <SideNavItems>
            <HeaderSideNavItems>
              <HeaderMenuItem as={Link}  to="/fetch">
                Fetch API
              </HeaderMenuItem>
            </HeaderSideNavItems>
          </SideNavItems>
        </SideNav>
      </Header>
    )}
  />
);

export default TutorialHeader;
