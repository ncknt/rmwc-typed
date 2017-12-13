import * as React from 'react'
import { RMWC } from './Base'


declare namespace Card {
    export interface CardProps extends RMWC.SimpleBaseProps<Card> {
        themeDark?: boolean;
    }

    export interface CardTitleProps extends RMWC.SimpleBaseProps<CardTitle> {
        large?: any;
    }
}

export declare class Card extends React.Component<Card.CardProps> { }
export declare class CardTitle extends React.Component<Card.CardTitleProps>{ }
export declare class CardPrimary extends React.Component<RMWC.SimpleBaseProps<CardPrimary>> { }
export declare class CardSubtitle extends React.Component<RMWC.SimpleBaseProps<CardSubtitle>>{ }
export declare class CardSupportingText extends React.Component<RMWC.SimpleBaseProps<CardSupportingText>>{ }
export declare class CardActions extends React.Component<RMWC.SimpleBaseProps<CardSupportingText>>{ }
export declare class CardMedia extends React.Component<RMWC.SimpleBaseProps<CardMedia>> { }
export declare class CardHorizontalBlock extends React.Component<RMWC.SimpleBaseProps<CardHorizontalBlock>> { }
export declare class CardAction extends React.Component<RMWC.SimpleBaseProps<CardAction>>{ }

