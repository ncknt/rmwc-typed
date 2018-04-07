import {
    Component
} from 'react'
import {
    SimpleBaseProps
} from './Base'

export interface MenuProps extends SimpleBaseProps<Menu> {
    /** Whether or not the Menu is open. */
    open?: boolean,
    /** Callback that fires when the Menu closes. */
    onClose?: (evt: Event) => any,
    /** Callback that fires when a Menu item is selected. */
    onSelected?: (evt: Event) => any
}

export class MenuItem extends Component<SimpleBaseProps<MenuItem>> { }
export class Menu extends Component<MenuProps> { }
