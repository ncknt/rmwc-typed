import * as React from 'react'
import { RMWC } from './Base'

declare namespace Snackbar {
    export interface SnackbarProps extends RMWC.SimpleBaseProps<Snackbar> {
        /** Show the Snackbar. */
        show?: boolean,
        /** A callback thats fired when the Snackbar closes. */
        onClose?(): any,
        /** A string or other renderable JSX to be used as the message body. */
        message?: React.ReactNode,
        /** Milliseconds to show the Snackbar for. */
        timeout?: number,
        /** Callback that fires when action is pressed. The actionText property must be set to use this. */
        actionHandler?(): any,
        /** Label for the action button. */
        actionText?: React.ReactNode,
        /** Lets the Snackbar text overflow onto multiple lines. */
        multiline?: boolean,
        /** Places the action underneath the message text. */
        actionOnBottom?: boolean,
        /** Whether or not the Snackbar dismisses on the action press. */
        dismissesOnAction?: boolean
    }
}

export declare class Snackbar extends React.Component<Snackbar.SnackbarProps> { }
