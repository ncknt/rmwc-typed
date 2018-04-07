import {
    Component
} from 'react'
import {
    SimpleBaseProps
} from './Base'

export interface GridListProps extends SimpleBaseProps<GridList> {
    /** Use a 1px gutter. */
    tileGutter1: boolean,
    /** Move the caption to the top of the card. */
    headerCaption: boolean,
    /** Make the caption two lines. */
    twolineCaption: boolean,
    /** Leaves space for a start aligned icon. */
    withIconAlignStart: boolean,
    /** One of the following values: 1x1, 16x9, 2x3, 3x2, 4x3, 3x4. */
    tileAspect: '1x1' | '16x9' | '2x3' | '3x2' | '4x3' | '3x4'
}

export class GridListTiles extends Component<SimpleBaseProps<GridListTiles>> { }

export class GridTile extends Component<SimpleBaseProps<GridTile>>{ }

// export class GridTilePrimaryRoot extends Component<SimpleTagProps> { }

export class GridTilePrimaryContent extends Component<SimpleBaseProps<GridTilePrimaryContent>> { }

export class GridTilePrimary extends Component<SimpleBaseProps<GridTilePrimary>> { }

export class GridTileSecondary extends Component<SimpleBaseProps<GridTileSecondary>> { }

export class GridTileTitle extends Component<SimpleBaseProps<GridTileTitle>> { }

export class GridTileTitleSupportText extends Component<SimpleBaseProps<GridTileTitleSupportText>> { }

export class GridList extends Component<GridListProps> { }
