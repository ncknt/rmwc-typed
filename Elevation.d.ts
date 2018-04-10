import {
    Component
} from 'react'
import {
    SimpleBaseProps
} from './Base'

export interface ElevationProps extends SimpleBaseProps<Elevation> {
    /** A number from 0 - 24 for different levels of elevation */
    z?: number | string,
    /** Allows for smooth transitions between elevations when the z value changes. */
    transition?: boolean
}

export class Elevation extends Component<ElevationProps> { }
