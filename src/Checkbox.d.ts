import * as React from 'react'
import { RMWC } from './Base'

declare namespace Checkbox {
    export interface CheckboxProps extends RMWC.RMWCTagProps {
        /** A DOM ID for the toggle. */
        id?: string,
        /** Disables the control. */
        disabled?: boolean,
        /** Toggle the control on and off. */
        checked?: boolean | string,
        /** Make the control indeterminate */
        indeterminate?: boolean,
        /** A label for the control. */
        label?: string
    }
}
export declare class Checkbox extends React.Component<Checkbox.CheckboxProps & React.HTMLProps<Checkbox>> { }
