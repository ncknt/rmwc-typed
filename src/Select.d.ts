import * as React from 'react'
import { RMWC } from './Base'

declare namespace Select {
    export interface SelectProps extends RMWC.SimpleBaseProps<Select> {
        /** An array of values or a map of {value: "label"}. Arrays will be converted to a map of {value: value}. */
        options: Object | any[],
        /** A label for the form control. */
        label?: string,
        /** Placeholder text for the form control. */
        placeholder?: string,
        /** Disables the form control. */
        disabled?: boolean,
        /** Selected value */
        value?: string
    }
}

export declare class Select extends React.Component<Select.SelectProps> { }
