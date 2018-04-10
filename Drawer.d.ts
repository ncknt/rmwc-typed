import {
    Component
} from 'react'
import {
    SimpleBaseProps
} from './Base'

export interface PersistentDrawerProps extends SimpleBaseProps<PersistentDrawer> {
    /** Opens or closes the  */
    open: boolean,
    /** Callback that fires when the Drawer is closed. */
    onClose?: (evt: Event) => any,
    /** Callback that fires when the Drawer is opened. */
    onOpen?: (evt: Event) => any
}

export interface TemporaryDrawerProps extends SimpleBaseProps<TemporaryDrawer> {
    /** Opens or closes the  */
    open: boolean,
    /** Callback that fires when the Drawer is closed. */
    onClose?: (evt: Event) => any,
    /** Callback that fires when the Drawer is opened. */
    onOpen?: (evt: Event) => any
}

export class PermanentDrawer extends Component<SimpleBaseProps<PermanentDrawer>> { }
export class PermanentDrawerContent extends Component<SimpleBaseProps<PermanentDrawerContent>> { }

export class PersistentDrawerHeader extends Component<SimpleBaseProps<PersistentDrawerHeader>> { }
export class PersistentDrawerContent extends Component<SimpleBaseProps<PersistentDrawerContent>> { }
export class PersistentDrawer extends Component<PersistentDrawerProps> { }

export class TemporaryDrawerHeader extends Component<SimpleBaseProps<TemporaryDrawerHeader>> { }
export class TemporaryDrawerContent extends Component<SimpleBaseProps<TemporaryDrawerContent>> { }
export class TemporaryDrawer extends Component<TemporaryDrawerProps> { }
