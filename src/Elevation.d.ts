import * as React from 'react'
import { RMWC } from './Base'

declare namespace Elevation {
    export interface ElevationProps extends RMWC.SimpleBaseProps<Elevation> {
        /** A number from 0 - 24 for different levels of elevation */
        z?: number | string,
        /** Allows for smooth transitions between elevations when the z value changes. */
        transition?: boolean
    }
}

export declare class Elevation extends React.Component<Elevation.ElevationProps> { }
