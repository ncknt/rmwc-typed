import * as React from 'react'
import { RMWC } from './Base'

declare namespace TextField {
    export interface TextFieldHelpTextProps extends RMWC.RMWCTagProps {
        persistent?: boolean,
        validationMsg?: boolean
    }
    export interface TextFieldProps extends RMWC.RMWCTagProps {
        /** A ref for the native input. */
        inputRef?: React.Ref<any>,
        /** Disables the input. */
        disabled?: boolean,
        /** A label for the input. */
        label?: React.ReactNode,
        /** Add a leading icon. */
        withLeadingIcon?: React.ReactNode,
        /** Add a trailing icon. */
        withTrailingIcon?: React.ReactNode,
        /** By default, props spread to the input. These props are for the component's root container. */
        rootProps?: Object
    }
}

export declare class TextFieldIcon extends React.Component<RMWC.UseProps<TextFieldIcon>> { }
export declare class TextFieldHelpText extends React.Component<TextField.TextFieldHelpTextProps & React.HTMLProps<TextFieldHelpText>> { }
export declare class TextField extends React.Component<TextField.TextFieldProps & React.HTMLProps<TextField>> { }
