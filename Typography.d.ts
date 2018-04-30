import {
    Component
} from 'react'
import {
    SimpleBaseProps
} from './Base'

export interface TypographyProps extends SimpleBaseProps<Typography> {
    /* prettier-ignore */
    /** The typography style.*/
    use: 'headline1' | 'headline2' | 'headline3' | 'headline4' | 'headline5' | 'headline6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button' | 'overline',
    /** Sets adjust margin modifier for Typography. */
    adjustMargin?: boolean
}

export class Typography extends Component<TypographyProps> { }
