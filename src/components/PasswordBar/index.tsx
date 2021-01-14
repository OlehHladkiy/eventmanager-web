import React from 'react';
import PasswordStrengthBar from 'react-password-strength-bar';

type PasswordBarProps = {
  password: string;
};

const PasswordBar = ({ password }: PasswordBarProps) => (
  <div style={{ margin: '10px 0' }}>
    <PasswordStrengthBar
      barColors={['#ddd', '#ef4836', '#f6b44d', '#2b90ef', '#26c281']}
      shortScoreWord=""
      password={password || ''}
    />
  </div>
);

export default PasswordBar;
