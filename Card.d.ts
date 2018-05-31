import {
    Component
} from 'react'
import {
    RMWCTagProps,
    RippleTagProps,
    SimpleBaseProps
} from './Base'

export interface CardProps extends SimpleBaseProps<Card> {
    outlined?: boolean;
}

export interface CardMediaProps extends SimpleBaseProps<CardMedia> {
    square?: boolean;
    sixteenByNine?: boolean;
}

export interface CardActionsProps extends SimpleBaseProps<CardActions> {
    fullBleed?: boolean;
}

export interface CardActionProps extends SimpleBaseProps<CardAction> {
    icon?: boolean;
    iconToggle: boolean;
}

export class Card extends Component<CardProps> { }
export class CardPrimaryAction extends Component<SimpleBaseProps<CardPrimaryAction>> { }
export class CardMedia extends Component<SimpleBaseProps<CardMedia>> { }
export class CardMediaContent extends Component<SimpleBaseProps<CardMediaContent>> { }
export class CardActions extends Component<CardActionsProps> { }
export class CardActionButtons extends Component<SimpleBaseProps<CardActionButtons>> { }
export class CardActionIcons extends Component<SimpleBaseProps<CardActionIcons>> { }
export class CardAction extends Component<CardActionProps> { }
