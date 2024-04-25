import styled from '@emotion/styled';

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

export const TypeCardWrapper = styled.div<{ type: string }>`
  width: 5rem;
  height: 28px;
  background-color: black;
  border-radius: 1.25rem;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  padding-left: 0.4375rem;
  font-size: 0.9375rem;
  background-color: ${({ type }) => typeColor[type]};
  cursor: pointer;
  svg {
    fill: #ffffff;
  }

  :hover {
    background-color: #ffffff;
    border: 1px solid ${({ type }) => typeColor[type]};
    color: ${({ type }) => typeColor[type]};
    svg {
      fill: ${({ type }) => typeColor[type]};
    }
  }
`;
