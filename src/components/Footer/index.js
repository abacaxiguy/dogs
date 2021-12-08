import React from 'react';
import { FooterWrapper } from './styled';
import { ReactComponent as Dogs } from '../../assets/dogs-footer.svg';

export default function Footer() {
  return (
    <FooterWrapper>
      <Dogs />
      <p>Dogs. Almost no rights reserved.</p>
    </FooterWrapper>
  );
}
