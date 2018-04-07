import {
    Component,
    DOMAttributes,
    ReactNode
} from 'react'
import {
    RMWCTagProps,
    RippleTagProps,
    SimpleBaseProps
} from './Base'

export interface DialogRootProps extends SimpleBaseProps<DialogRoot> {
    role?: any;
}
export interface DialogFooterButtonProps extends SimpleBaseProps<DialogFooter> {
    /* Make it an accept Button. */
    accept?: boolean,
    /* Make it a cancel button. */
    cancel?: boolean
}
export interface DialogProps extends SimpleBaseProps<Dialog> {
    /** Whether or not the Dialog is showing. */
    open: boolean,
    /** Callback for when the accept Button is pressed. */
    onAccept?: (evt: Event) => any,
    /** Callback for when the Dialog was closed without acceptance. */
    onCancel?: (evt: Event) => any,
    /** Callback for when the Dialog closes. */
    onClose?: (evt: Event) => any,
    // apiRef?: (apiInstance: Object) => any
    /** Body content for the default Dialog template. */
    body?: ReactNode
}

export interface DefaultDialogTemplateProps extends DOMAttributes<DefaultDialogTemplate>, RMWCTagProps {
    /** A title for the default Dialog template. */
    title?: ReactNode,
    /** Additional Dialog header content for the default Dialog template. */
    header?: ReactNode,
    /** Body content for the default Dialog template, rendered before children. */
    body?: ReactNode,
    /** Additional footer content for the default Dialog template, rendered before any buttons. */
    footer?: ReactNode,
    /** Creates an accept button for the default Dialog template with a given label. You can pass `null` to remove the button.*/
    acceptLabel?: ReactNode,
    /** Creates an cancel button for the default Dialog with a given label. You can pass `null` to remove the button.*/
    cancelLabel?: ReactNode,
    /** Any children will be rendered in the body of the default Dialog template. */
    children?: ReactNode
}

export class DialogRoot extends Component<DialogRootProps> { }
export class DialogBackdrop extends Component<SimpleBaseProps<DialogBackdrop>> { }
export class DialogSurface extends Component<SimpleBaseProps<DialogSurface>> { }
export class DialogHeader extends Component<SimpleBaseProps<DialogHeader>> { }
export class DialogHeaderTitle extends Component<SimpleBaseProps<DialogHeaderTitle>> { }
export class DialogBody extends Component<SimpleBaseProps<DialogBody>> { }
export class DialogFooter extends Component<SimpleBaseProps<DialogFooter>> { }
export class DialogFooterButton extends Component<DialogFooterButtonProps> { }
export class Dialog extends Component<DialogProps> { }
export class DefaultDialogTemplate extends Component<DefaultDialogTemplateProps> { }

