import {
    Component
} from 'react'
import {
    SimpleBaseProps
} from './Base'

export interface SelectProps extends SimpleBaseProps<Select> {
    /** An array of values or a map of {value: "label"}. Arrays will be converted to a map of {value: value}. */
    options: object | any[],
    /** A label for the form control. */
    label?: string,
    /** Placeholder text for the form control. */
    placeholder?: string,
    /** Disables the form control. */
    disabled?: boolean,
    /** Selected value */
    value?: string
}

export class Select extends Component<SelectProps> { }
