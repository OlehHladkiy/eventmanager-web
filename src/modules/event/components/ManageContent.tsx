import { Layout, Spin } from 'antd';
import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { EventManageItem } from '@modules/event/models';
import Details from '@modules/event/containers/Details';
import { getIsLoading } from '@modules/event/Reducer';

const ManageContent = () => {
  const { page }: { page: string } = useParams();

  const isLoading: boolean = useSelector(getIsLoading);

  const Content = useMemo(() => {
    switch (page) {
      case EventManageItem.Details: {
        return <Details />;
      }
      default: {
        return null;
      }
    }
  }, [page]);

  return (
    <ManageContent.Wrapper>
      <Spin size="large" spinning={isLoading}>
        {Content}
      </Spin>
    </ManageContent.Wrapper>
  );
};

ManageContent.Wrapper = styled(Layout.Content)`
  && {
    padding: 0 150px 30px 150px;
    height: 100%;
    overflow: auto;
    background-color: ${(props) => props.theme.colors.white};
  }
`;

export default ManageContent;
