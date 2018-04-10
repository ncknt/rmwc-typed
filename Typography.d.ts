import {
    Component
} from 'react'
import {
    SimpleBaseProps
} from './Base'

export interface TypographyProps extends SimpleBaseProps<Typography> {
    /* prettier-ignore */
    /** The typography style.*/
    use: 'display4' | 'display3' | 'display2' | 'display1' | 'headline' | 'title' | 'subheading2' | 'subheading1' | 'body2' | 'body1' | 'caption' | 'button',
    /** Sets adjust margin modifier for Typography. */
    adjustMargin?: boolean
}

export class Typography extends Component<TypographyProps> { }
