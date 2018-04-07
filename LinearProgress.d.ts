import {
    Component
} from 'react'
import {
    SimpleBaseProps
} from './Base'

export interface LinearProgressProps extends SimpleBaseProps<LinearProgress> {
    /** Progress float percentage between 0 and 1. */
    progress?: number | string,
    /** A Progress buffer float percentage between 0 and 1. */
    buffer?: number | string,
    /** Whether or not the Progress bar is determinate. */
    determinate?: boolean,
    /** Progress goes from right to left. */
    reversed?: boolean
}

export class LinearProgress extends Component<LinearProgressProps> { }
