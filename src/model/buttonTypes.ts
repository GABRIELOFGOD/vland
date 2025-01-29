export interface IButton {
  text: string;
  onClick?: () => void;
  disable?: boolean;
  color?: string;
  bgColor?: string;
}