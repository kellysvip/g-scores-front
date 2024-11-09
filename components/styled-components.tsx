import styled from '@emotion/styled';
import Link from 'next/link';

export const FlexCenterAlignCenterRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ContentWrapper = styled(FlexCenterAlignCenterRow)`
  padding: 2rem;
`;

export const FlexWrapper = styled.div`
  display: flex;
`;

export const NoDecorationLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const CustomDetailsWrapper = styled.div`
  width: 80%;
  padding: 2rem;
  margin: 2rem;
  border: 1px solid;
  border-radius: 1rem;
`;

