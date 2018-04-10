import {
    Component
} from 'react'
import {
    SimpleBaseProps
} from './Base'

export interface RadioProps extends SimpleBaseProps<Radio> {
    /** A DOM ID for the toggle. */
    id?: string,
    /** Disables the control. */
    disabled?: boolean,
    /** Toggle the control on and off. */
    checked?: boolean | string,
    /** A label for the control. */
    label?: string
}

export class Radio extends Component<RadioProps> { }
