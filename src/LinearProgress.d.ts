import * as React from 'react'
import { RMWC } from './Base'

declare namespace LinearProgress {
    export interface LinearProgressProps extends RMWC.RMWCTagProps {
        /** Progress float percentage between 0 and 1. */
        progress?: number | string,
        /** A Progress buffer float percentage between 0 and 1. */
        buffer?: number | string,
        /** Whether or not the Progress bar is determinate. */
        determinate?: boolean,
        /** Progress goes from right to left. */
        reversed?: boolean
    }
}

export declare class LinearProgress extends React.Component<LinearProgress.LinearProgressProps & React.HTMLProps<LinearProgress>> { }
