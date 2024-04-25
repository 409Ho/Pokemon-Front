import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface StyleProps {
  type: string;
  sizeDown?: boolean;
  useFilter?: boolean;
}

const typeColor: { [key: string]: string } = {
  강철: '#6AAED4',
  격투: '#FFA202',
  고스트: '#6E4670',
  노말: '#999999',
  독: '#735198',
  드래곤: '#5462D6',
  땅: '#AC7A3A',
  물: '#2A92FF',
  바위: '#BCB88A',
  벌레: '#A0A424',
  비행: '#96C9FF',
  불꽃: '#FF622C',
  악: '#504848',
  얼음: '#42D8FF',
  에스퍼: '#FF6480',
  전기: '#FFDC00',
  페어리: '#FFB2FF',
  풀: '#42C024',
} as const;

export const TypeCardWrapper = styled.div<{ styleInfo: StyleProps }>`
  width: ${({ styleInfo }) => (styleInfo.sizeDown ? '4.6875rem' : ' 5rem')};
  height: ${({ styleInfo }) => (styleInfo.sizeDown ? '1.5rem' : ' 1.875rem')};
  background-color: black;
  border-radius: 1.25rem;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  padding-left: 0.25rem;
  font-size: 0.9375rem;
  background-color: ${({ styleInfo }) => typeColor[styleInfo.type]};
  cursor: ${({ styleInfo }) => styleInfo.useFilter && 'hover'};
  svg {
    fill: #ffffff;
  }

  ${({ styleInfo }) =>
    styleInfo.useFilter &&
    css`
      :hover {
        background-color: #ffffff;
        border: 1px solid ${typeColor[styleInfo.type]};
        color: ${typeColor[styleInfo.type]};
        svg {
          fill: ${typeColor[styleInfo.type]};
        }
      }
    `}
`;
