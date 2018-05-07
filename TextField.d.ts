import {
    Component,
    InputHTMLAttributes,
    ReactNode,
    Ref
} from 'react'
import {
    RMWCTagProps,
    SimpleBaseProps,
    UseProps
} from './Base'

export interface TextFieldHelpTextProps extends SimpleBaseProps<TextFieldHelpText> {
    persistent?: boolean,
    validationMsg?: boolean
}
export interface TextFieldProps extends RMWCTagProps, InputHTMLAttributes<TextField> {
    /** A ref for the native input. */
    inputRef?: Ref<any>,
    /** Disables the input. */
    disabled?: boolean,
    /** A label for the input. */
    label?: ReactNode,
    /** Add a leading icon. */
    withLeadingIcon?: ReactNode,
    /** Add a trailing icon. */
    withTrailingIcon?: ReactNode,
    /** By default, props spread to the input. These props are for the component's root container. */
    rootProps?: object,
    /** Makes a multiline TextField. */
    textarea?: boolean,
    /** Makes the TextField fullwidth. */
    fullwidth?: boolean,
    /** Makes the TextField have a visual box. */
    box?: boolean
}

export class TextFieldIcon extends Component<UseProps<TextFieldIcon>> { }
export class TextFieldHelpText extends Component<TextFieldHelpTextProps> { }
export class TextField extends Component<TextFieldProps> { }
