'use client';

import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

const Button: React.FC<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = ({ children }) => <button>{children}</button>;

export default Button;
