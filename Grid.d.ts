import {
    Component
} from 'react'
import {
    SimpleBaseProps
} from './Base'

export interface GridCellProps extends SimpleBaseProps<GridCell> {
    /** A generic span value for all screen sizes. */
    span?: string | number,
    /** A span value for phone screen sizes. */
    phone?: string | number,
    /** A span value for tablet screen sizes. */
    tablet?: string | number,
    /** A span value for desktop screen sizes. */
    desktop?: string | number
}

export class GridCell extends Component<GridCellProps> { }
export class Grid extends Component<SimpleBaseProps<Grid>> { }
