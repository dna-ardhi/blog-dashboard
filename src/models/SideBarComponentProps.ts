import BaseComponentProps from './BaseComponentProps';
import { ToogleClickEvent } from './CustomHTMLEvent';

export default interface SideBarComponentProps extends BaseComponentProps {
  open: boolean;
  onClose?: (event: ToogleClickEvent) => void;
}
