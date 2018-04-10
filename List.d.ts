import {
    Component
} from 'react'
import {
    RippleTagProps,
    SimpleBaseProps
} from './Base'

export interface ListItemProps extends SimpleBaseProps<ListItem>, RippleTagProps {
    /** A modifier for a selected item in Permanent Drawer. */
    permanentDrawerSelected?: boolean,
    /** A modifier for a selected item in Persistent Drawer. */
    persistentDrawerSelected?: boolean,
    /** A modifier for a selected item in Temporary Drawer. */
    temporaryDrawerSelected?: boolean
}

export interface ListItemStartDetailProps extends SimpleBaseProps<ListItemStartDetail> { }

export interface ListProps extends SimpleBaseProps<List> {
    /** Reduces the padding on List items. */
    dense?: boolean,
    /** Gives more space for dual lined list items. */
    twoLine?: boolean,
    /** Makes the list start detail circular for avatars. */
    avatarList?: boolean
}

export class ListItem extends Component<ListItemProps> { }
export class ListItemText extends Component<SimpleBaseProps<ListItemText>> { }
export class ListItemTextSecondary extends Component<SimpleBaseProps<ListItemTextSecondary>> { }
export class ListItemStartDetail extends Component<ListItemStartDetailProps> { }
export class ListItemEndDetail extends Component<SimpleBaseProps<ListItemEndDetail>> { }
export class ListGroup extends Component<SimpleBaseProps<ListGroup>> { }
export class ListGroupSubheader extends Component<SimpleBaseProps<ListGroupSubheader>> { }
export class ListDivider extends Component<SimpleBaseProps<ListDivider>> { }
export class List extends Component<ListProps> { }
