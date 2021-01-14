import React from 'react';
import { Result, Button } from 'antd';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

const NotFoundPage = () => (
  <NotFoundPage.Wrapper>
    <Helmet title="Page not found" />
    <Result
      status="404"
      title="Resource not found"
      subTitle="The resource you have requested does not exist, has moved, or is not available."
      extra={
        <Button type="primary" href="/">
          Back home
        </Button>
      }
    />
  </NotFoundPage.Wrapper>
);

NotFoundPage.Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15% 15px 0;
`;

export default NotFoundPage;
