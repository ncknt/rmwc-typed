import {
    Component
} from 'react'
import {
    RMWCTagProps,
    RippleTagProps,
    SimpleBaseProps
} from './Base'

export interface CardProps extends SimpleBaseProps<Card> {
    /** Use the cards dark theme. */
    themeDark?: boolean;
}

export interface CardMediaItemProps extends SimpleBaseProps<CardMediaItem> {
    /** Sets the media item height to 120px. */
    oneDotFiveX?: boolean;
    /** Sets the media item height to 160px. */
    twoX?: boolean;
    /** Sets the media item height to 240px. */
    threeX?: boolean;
}

export interface CardTitleProps extends SimpleBaseProps<CardTitle> {
    /** Make the title large. */
    large?: boolean;
}

export interface CardActionsProps extends SimpleBaseProps<CardActions> {
    /** Allows for vertical alignment of actions. */
    vertical?: boolean;
}

export interface CardActionProps extends SimpleBaseProps<CardAction> {
    compact?: boolean;
}


export class Card extends Component<CardProps> { }
export class CardTitle extends Component<CardTitleProps> { }
export class CardPrimary extends Component<SimpleBaseProps<CardPrimary>> { }
export class CardSubtitle extends Component<SimpleBaseProps<CardSubtitle>> { }
export class CardSupportingText extends Component<SimpleBaseProps<CardSupportingText>> { }
export class CardActions extends Component<CardActionsProps> { }
export class CardMedia extends Component<SimpleBaseProps<CardMedia>> { }
export class CardMediaItem extends Component<SimpleBaseProps<CardMediaItem>> { }
export class CardHorizontalBlock extends Component<SimpleBaseProps<CardHorizontalBlock>> { }
export class CardAction extends Component<CardActionProps> { }
