'use client';

import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';

export const GlobalStyles = () => (
  <Global
    styles={css`
      ${emotionReset}

      html,body,* {
        margin: 0;
        padding: 0;
      }

      body,
      * {
        font-family:
          'Pretendard Variable',
          Pretendard,
          -apple-system,
          BlinkMacSystemFont,
          system-ui,
          Roboto,
          'Helvetica Neue',
          'Segoe UI',
          'Apple SD Gothic Neo',
          'Noto Sans KR',
          'Malgun Gothic',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          sans-serif;
        box-sizing: border-box;
      }
    `}
  />
);
