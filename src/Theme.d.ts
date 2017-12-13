import * as React from 'react'
import { RMWC } from './Base'

declare namespace Theme {
    export interface ThemeProps extends RMWC.SimpleBaseProps<Theme> {
        /** A theme option as a string, a space separated string for multiple values, or an array of valid theme options. */
        use: string | string[]
    }
}

export declare class Theme extends React.Component<Theme.ThemeProps> { }
