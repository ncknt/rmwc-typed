import {
    Component,
    ReactNode
} from 'react'
import {
    SimpleBaseProps
} from './Base'

export type AnchorCorner = "bottomEnd" | "bottomLeft" | "bottomRight" | "bottomStart"
    | "topEnd" | "topLeft" | "topRight" | "topStart";

interface CommonMenuProps {
    /** Whether or not the Menu is open. */
    open?: boolean;
    /** Callback that fires when the Menu closes. */
    onClose?: (evt: Event) => any;
    /** Callback that fires when a Menu item is selected. */
    onSelected?: (evt: Event) => any;
    anchorCorner?: AnchorCorner;
}

export interface MenuProps extends CommonMenuProps, SimpleBaseProps<Menu> {

}

export interface SimpleMenuProps extends CommonMenuProps, SimpleBaseProps<SimpleMenu> {
    handle: ReactNode;
    rootProps?: object;
}

export class MenuItem extends Component<SimpleBaseProps<MenuItem>> { }
export class Menu extends Component<MenuProps> { }

export class MenuAnchor extends Component<{}> { }

export class SimpleMenu extends Component<SimpleMenuProps> { }
