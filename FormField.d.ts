import {
    Component
} from 'react'
import {
    SimpleBaseProps
} from './Base'

export interface FormFieldProps extends SimpleBaseProps<FormField> {
    /** Position the input after the label. */
    alignEnd?: boolean
}

export class FormField extends Component<FormFieldProps> { }
