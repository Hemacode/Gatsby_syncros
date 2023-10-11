import React from 'react';
import { Router, RouteComponentProps } from '@reach/router';
import LoginSF from '../LoginSF';
import LayoutComponent from '../main/layout';
import DashBoard from '../main/dashboard';
import DeviceSetup from '../devicesetup';

const RouterNavigation: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <LoginSF path="/" />
      <LayoutComponent>
        <Router basepath="/main">
          <DashBoard path="dashboard" />
          <DeviceSetup path="devicesetup" />
        </Router>
      </LayoutComponent>
    </>
  )
}

export default RouterNavigation