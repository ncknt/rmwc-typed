import * as React from 'react'
import { RMWC } from './Base'

declare namespace FormField {
    export interface FormFieldProps extends RMWC.SimpleBaseProps<FormField> {
        /** Position the input after the label. */
        alignEnd?: boolean
    }

}

export declare class FormField extends React.Component<FormField.FormFieldProps> { }
