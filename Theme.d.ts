import {
    Component,
} from 'react'
import {
    SimpleBaseProps
} from './Base'

export interface ThemeProps extends SimpleBaseProps<Theme> {
    /** A theme option as a string, a space separated string for multiple values, or an array of valid theme options. */
    use: string | string[]
}

export class Theme extends Component<ThemeProps> { }
