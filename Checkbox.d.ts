import {
    Component
} from 'react'
import {
    RMWCTagProps,
    RippleTagProps,
    SimpleBaseProps
} from './Base'

export interface CheckboxProps extends SimpleBaseProps<Checkbox> {
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

export class Checkbox extends Component<CheckboxProps> { }
