import * as React from 'react'
import { RMWC } from './Base'

declare namespace List {
    export interface ListItemProps extends RMWC.RMWCTagProps, RMWC.RippleTagProps {
        /** A modifier for a selected item in Permanent Drawer. */
        permanentDrawerSelected?: boolean,
        /** A modifier for a selected item in Persistent Drawer. */
        persistentDrawerSelected?: boolean,
        /** A modifier for a selected item in Temporary Drawer. */
        temporaryDrawerSelected?: boolean
    }

    export interface ListItemStartDetailProps extends RMWC.RMWCTagProps {
        wrap?: boolean
    }

    export interface ListProps extends RMWC.RMWCTagProps {
        /** Reduces the padding on List items. */
        dense?: boolean,
        /** Gives more space for dual lined list items. */
        twoLine?: boolean,
        /** Makes the list start detail circular for avatars. */
        avatarList?: boolean
    }
}

export declare class ListItem extends React.Component<List.ListItemProps & React.HTMLProps<ListItem>> { }
export declare class ListItemText extends React.Component<RMWC.SimpleBaseProps<ListItemText>> { }
export declare class ListItemTextSecondary extends React.Component<RMWC.SimpleBaseProps<ListItemTextSecondary>> { }
export declare class ListItemStartDetail extends React.Component<List.ListItemStartDetailProps & React.HTMLProps<ListItemStartDetail>> { }
export declare class ListItemEndDetail extends React.Component<RMWC.SimpleBaseProps<ListItemEndDetail>> { }
export declare class ListGroup extends React.Component<RMWC.SimpleBaseProps<ListGroup>> { }
export declare class ListGroupSubheader extends React.Component<RMWC.SimpleBaseProps<ListGroupSubheader>> { }
export declare class ListDivider extends React.Component<RMWC.SimpleBaseProps<ListDivider>> { }
export declare class List extends React.Component<List.ListProps & React.HTMLProps<List>> { }
