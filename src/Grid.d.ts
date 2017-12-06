import * as React from 'react'
import { RMWC } from './Base'

declare namespace Grid {
    export interface GridCellProps extends RMWC.RMWCTagProps {
        /** A generic span value for all screen sizes. */
        span?: string | number,
        /** A span value for phone screen sizes. */
        phone?: string | number,
        /** A span value for tablet screen sizes. */
        tablet?: string | number,
        /** A span value for desktop screen sizes. */
        desktop?: string | number
    }
}

export declare class GridCell extends React.Component<Grid.GridCellProps & React.HTMLProps<GridCell>> { }
export declare class Grid extends React.Component<RMWC.SimpleBaseProps<Grid>> { }
