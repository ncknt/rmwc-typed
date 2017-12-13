import * as React from 'react'
import { RMWC } from './Base'

declare namespace Card {
    export interface CardProps extends RMWC.SimpleBaseProps<Card> {
        /** Use the cards dark theme. */
        themeDark?: boolean;
    }

    export interface CardMediaItemProps extends RMWC.SimpleBaseProps<CardMediaItem> {
        /** Sets the media item height to 120px. */
        oneDotFiveX?: boolean;
        /** Sets the media item height to 160px. */
        twoX?: boolean;
        /** Sets the media item height to 240px. */
        threeX?: boolean;
    }

    export interface CardTitleProps extends RMWC.SimpleBaseProps<CardTitle> {
        /** Make the title large. */
        large?: boolean;
    }

    export interface CardActionsProps extends RMWC.SimpleBaseProps<CardActions> {
        /** Allows for vertical alignment of actions. */
        vertical?: boolean;
    }

    export interface CardActionProps extends RMWC.SimpleBaseProps<CardAction> {
        compact?: boolean;
    }
}

export declare class Card extends React.Component<Card.CardProps> { }
export declare class CardTitle extends React.Component<Card.CardTitleProps> { }
export declare class CardPrimary extends React.Component<RMWC.SimpleBaseProps<CardPrimary>> { }
export declare class CardSubtitle extends React.Component<RMWC.SimpleBaseProps<CardSubtitle>> { }
export declare class CardSupportingText extends React.Component<RMWC.SimpleBaseProps<CardSupportingText>> { }
export declare class CardActions extends React.Component<Card.CardActionsProps> { }
export declare class CardMedia extends React.Component<RMWC.SimpleBaseProps<CardMedia>> { }
export declare class CardMediaItem extends React.Component<RMWC.SimpleBaseProps<CardMediaItem>> { }
export declare class CardHorizontalBlock extends React.Component<RMWC.SimpleBaseProps<CardHorizontalBlock>> { }
export declare class CardAction extends React.Component<CardActionProps> { }
