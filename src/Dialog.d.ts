import * as React from 'react'
import { RMWC } from './Base'

declare namespace Dialog {
    export interface DialogRootProps extends RMWC.RMWCTagProps {
        role?: any;
    }
    export interface DialogFooterButtonProps extends RMWC.RMWCTagProps {
        /* Make it an accept Button. */
        accept?: boolean,
        /* Make it a cancel button. */
        cancel?: boolean
    }
    export interface DialogProps extends RMWC.RMWCTagProps {
        /** Whether or not the Dialog is showing. */
        open: boolean,
        /** Callback for when the accept Button is pressed. */
        onAccept?: (evt: Event) => any,
        /** Callback for when the Dialog was closed without acceptance. */
        onCancel?: (evt: Event) => any,
        /** Callback for when the Dialog closes. */
        onClose?: (evt: Event) => any,
        // apiRef?: (apiInstance: Object) => any
    }

    export interface DefaultDialogTemplateProps extends RMWC.RMWCTagProps {
        /** A title for the default Dialog template. */
        title?: React.ReactNode,
        /** Additional Dialog header content for the default Dialog template. */
        header?: React.ReactNode,
        /** Body content for the default Dialog template, rendered before children. */
        body?: React.ReactNode,
        /** Additional footer content for the default Dialog template, rendered before any buttons. */
        footer?: React.ReactNode,
        /** Creates an accept button for the default Dialog template with a given label. You can pass `null` to remove the button.*/
        acceptLabel?: React.ReactNode,
        /** Creates an cancel button for the default Dialog with a given label. You can pass `null` to remove the button.*/
        cancelLabel?: React.ReactNode,
        /** Any children will be rendered in the body of the default Dialog template. */
        children?: React.ReactNode
    }
}

export declare class DialogRoot extends React.Component<Dialog.DialogRootProps & React.HTMLProps<DialogRoot>> { }
export declare class DialogBackdrop extends React.Component<RMWC.SimpleBaseProps<DialogBackdrop>> { }
export declare class DialogSurface extends React.Component<RMWC.SimpleBaseProps<DialogSurface>> { }
export declare class DialogHeader extends React.Component<RMWC.SimpleBaseProps<DialogHeader>> { }
export declare class DialogHeaderTitle extends React.Component<RMWC.SimpleBaseProps<DialogHeaderTitle>> { }
export declare class DialogBody extends React.Component<RMWC.SimpleBaseProps<DialogBody>> { }
export declare class DialogFooter extends React.Component<RMWC.SimpleBaseProps<DialogFooter>> { }
export declare class DialogFooterButton extends React.Component<Dialog.DialogFooterButtonProps & React.HTMLProps<DialogFooterButton>> { }
export declare class Dialog extends React.Component<Dialog.DialogProps & React.HTMLProps<Dialog>> { }
export declare class DefaultDialogTemplate extends React.Component<Dialog.DefaultDialogTemplateProps & React.HTMLProps<DefaultDialogTemplate>> { }

