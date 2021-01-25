import * as R from 'ramda';
import React from 'react';
import styled from 'styled-components';

import { MenuContents } from '../models/settings-model';

const getSettingsById = (id: string) =>
  R.find(R.propEq('key', id), MenuContents);

interface SettingsContentProps {
  settingsId: string;
}

const SettingsContent = ({ settingsId }: SettingsContentProps) => {
  const { component: SettingsComponent, title } = getSettingsById(settingsId);

  return (
    <SettingsContent.Wrapper>
      <h2>{title}</h2>
      <SettingsComponent />
    </SettingsContent.Wrapper>
  );
};

SettingsContent.Wrapper = styled.div`
  padding: 0 25px;
`;

export default SettingsContent;
