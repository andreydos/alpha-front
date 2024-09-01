import React from 'react';
import { Button as FlowbiteButton } from "flowbite-react";
import { ButtonColors, ButtonGradientColors, ButtonGradientDuoToneColors, ButtonOutlineColors, ButtonProps, ButtonSizes } from "flowbite-react";


interface IButtonProps extends
  Partial<ButtonProps>,
  Partial<ButtonColors>,
  Partial<ButtonGradientColors>,
  Partial<ButtonGradientDuoToneColors>,
  Partial<ButtonOutlineColors>,
  Partial<ButtonSizes> {
  /**
   * Optional click handler
   */
  onClick?: (e: any) => void;
  /**
   * Another way to set label (it will override any passed children)
   */
  label?: string;
  /**
   * Children (usually label ob button)
   */
  children?: any;
  /**
   * Fallback for additional properties
   */
  [key: string]: any;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
                         onClick,
                         label,
                         children,
                         ...props
                       }: IButtonProps) => {
  const handleClick = (e: any) => {
    onClick && onClick(e)
  }

  return (
    <FlowbiteButton onClick={handleClick} className={'focus:ring-2'} {...props}>{label || children}</FlowbiteButton>
  );
};

export default Button;
