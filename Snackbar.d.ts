import {
    Component,
    ReactNode
} from 'react'
import {
    SimpleBaseProps
} from './Base'

export interface SnackbarProps extends SimpleBaseProps<Snackbar> {
    /** Show the Snackbar. */
    show?: boolean,
    /** A callback thats fired when the Snackbar closes. */
    onClose?(): any,
    /** A string or other renderable JSX to be used as the message body. */
    message?: ReactNode,
    /** Milliseconds to show the Snackbar for. */
    timeout?: number,
    /** Callback that fires when action is pressed. The actionText property must be set to use this. */
    actionHandler?(): any,
    /** Label for the action button. */
    actionText?: ReactNode,
    /** Lets the Snackbar text overflow onto multiple lines. */
    multiline?: boolean,
    /** Places the action underneath the message text. */
    actionOnBottom?: boolean,
    /** Whether or not the Snackbar dismisses on the action press. */
    dismissesOnAction?: boolean
}

export class Snackbar extends Component<SnackbarProps> { }
