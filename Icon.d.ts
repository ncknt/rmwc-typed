import {
    Component
} from 'react'
import {
    UseProps
} from './Base'

export interface IconProps extends UseProps<Icon> {
    /** Handle multiple methods of embedding an icon. */
    strategy?: 'auto'|'ligature'|'className'|'url'|'component',
    /** A className prefix to use when using css font icons that use prefixes, i.e. font-awesome-, ion-, glyphicons- */
    prefix?: string,
    /** A base className for the icon namespace, i.e. material-icons */
    basename?: string
}

export class Icon extends Component<IconProps> {}
