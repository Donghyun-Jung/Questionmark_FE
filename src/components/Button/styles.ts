import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { ButtonProps } from '@/components/common/Button';
import type { EmotionTheme } from '@/styles/emotion';

type StyledButtonProps = Required<Pick<ButtonProps, 'variant' | 'fullWidth'>>;

export const buttonStyles = {
  primary: (theme: EmotionTheme) => css`
    border: none;
    background-color: ${theme.colors.rose};
    color: white;
  `,
  outline: (theme: EmotionTheme) => css`
    border: 1px solid ${theme.colors.gray_400};
    background-color: ${theme.colors.white};
 
    &:disabled {
      color: ${theme.colors.white};
      border: none;
    }    
  `,
  ghost: (theme: EmotionTheme) => css`
    border: none;
    background-color: ${theme.colors.white};

    &:disabled {
      color: ${theme.colors.white};
    }    
  `,
  default: (theme: EmotionTheme) => css`
    border: none;
    background-color: ${theme.colors.black};
    color: white;
  `,
};

export const Button = styled.button<StyledButtonProps>`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  ${({ variant, theme }) => buttonStyles[variant](theme)}
  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.colors.gray_700};
  }
`;