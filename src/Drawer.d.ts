import * as React from 'react'
import { RMWC } from './Base'

declare namespace Drawer {
    export interface PersistentDrawerProps extends RMWC.RMWCTagProps {
        /** Opens or closes the Drawer. */
        open: boolean,
        /** Callback that fires when the Drawer is closed. */
        onClose?: (evt: Event) => any,
        /** Callback that fires when the Drawer is opened. */
        onOpen?: (evt: Event) => any
    }

    export interface TemporaryDrawerProps extends RMWC.RMWCTagProps {
        /** Opens or closes the Drawer. */
        open: boolean,
        /** Callback that fires when the Drawer is closed. */
        onClose?: (evt: Event) => any,
        /** Callback that fires when the Drawer is opened. */
        onOpen?: (evt: Event) => any
    }
}

export declare class PermanentDrawer extends React.Component<RMWC.SimpleBaseProps<PermanentDrawer>> { }
export declare class PermanentDrawerContent extends React.Component<RMWC.SimpleBaseProps<PermanentDrawerContent>> { }

export declare class PersistentDrawerHeader extends React.Component<RMWC.SimpleBaseProps<PersistentDrawerHeader>> { }
export declare class PersistentDrawerContent extends React.Component<RMWC.SimpleBaseProps<PersistentDrawerContent>> { }
export declare class PersistentDrawer extends React.Component<Drawer.PersistentDrawerProps & React.HTMLProps<PersistentDrawer>> { }

export declare class TemporaryDrawerHeader extends React.Component<RMWC.SimpleBaseProps<TemporaryDrawerHeader>> { }
export declare class TemporaryDrawerContent extends React.Component<RMWC.SimpleBaseProps<TemporaryDrawerContent>> { }
export declare class TemporaryDrawer extends React.Component<Drawer.TemporaryDrawerProps & React.HTMLProps<TemporaryDrawer>> { }
