import {
    Component,
    ReactNode
} from 'react'
import {
    SimpleBaseProps
} from './Base'

export interface DrawerProps extends SimpleBaseProps<Drawer> {
    open?: boolean;
    onClose?: (evt: Event) => any;
    onOpen?: (evt: Event) => any;
    permanent?: boolean;
    persistent?: boolean;
    temporary?: boolean;
}

export interface DrawerToolbarSpacerProps extends SimpleBaseProps<DrawerToolbarSpacer> { }

export interface DrawerHeaderProps extends SimpleBaseProps<DrawerHeader> {
    children?: ReactNode
}

export interface DrawerContentProps extends SimpleBaseProps<DrawerContent> { }

export class Drawer extends Component<DrawerProps> { }

export class DrawerToolbarSpacer extends Component<DrawerToolbarSpacerProps> { }

export class DrawerHeader extends Component<DrawerHeaderProps> { }

export class DrawerContent extends Component<DrawerContentProps> { }
