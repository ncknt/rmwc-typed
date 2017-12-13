import * as React from 'react'
import { RMWC } from './Base'

declare namespace GridList {
    export interface GridListProps extends RMWC.SimpleBaseProps<GridList> {
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

}

export declare class GridListTiles extends React.Component<RMWC.SimpleBaseProps<GridListTiles>> { }

export declare class GridTile extends React.Component<RMWC.SimpleBaseProps<GridTile>>{ }

// export declare class GridTilePrimaryRoot extends React.Component<SimpleTagProps> { }

export declare class GridTilePrimaryContent extends React.Component<RMWC.SimpleBaseProps<GridTilePrimaryContent>> { }

export declare class GridTilePrimary extends React.Component<RMWC.SimpleBaseProps<GridTilePrimary>> { }

export declare class GridTileSecondary extends React.Component<RMWC.SimpleBaseProps<GridTileSecondary>> { }

export declare class GridTileTitle extends React.Component<RMWC.SimpleBaseProps<GridTileTitle>> { }

export declare class GridTileTitleSupportText extends React.Component<RMWC.SimpleBaseProps<GridTileTitleSupportText>> { }

export declare class GridList extends React.Component<GridList.GridListProps> { }
