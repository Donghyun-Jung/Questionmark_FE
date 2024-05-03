import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import Flex from '@/components/common/Flex';
import Spinner from '@/components/common/Spinner';
import * as Styled from './style';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'default';
  fullWidth?: boolean;
  isLoading?: boolean;
  loadingWidth?: number;
  loadingHeight?: number;
  className?: string;
}

const Button = (props: PropsWithChildren<ButtonProps>) => {
  const {
    variant = 'default',
    fullWidth = false,
    isLoading = false,
    loadingWidth = 1,
    loadingHeight = 1,
    children,
    className,
    ...rest
  } = props;

  return (
    <Styled.Button variant={variant} fullWidth={fullWidth} className={className} {...rest}>
      <Flex align="center" justify="center">
        {isLoading && <Spinner width={loadingWidth} height={loadingHeight} />}
        {children}
      </Flex>
    </Styled.Button>
  );
};

export default Button;