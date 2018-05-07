import {
    Component
} from 'react'
import {
    SimpleBaseProps,
    UseProps
} from './Base'

export interface TopAppBarProps extends SimpleBaseProps<TopAppBar> {
    onNav?: (evt: Event) => any;
    fixed?: boolean;
    prominent?: boolean;
    short?: boolean;
    shortCollapsed?: boolean;
    dense?: boolean;
}

export interface TopAppBarRowProps extends SimpleBaseProps<TopAppBarRow> { }

export interface TopAppBarSectionProps extends SimpleBaseProps<TopAppBarSection> {
    alignStart?: boolean;
    alignEnd?: boolean;
}

export interface TopAppBarTitleProps extends SimpleBaseProps<TopAppBarTitle> { }

export interface TopAppBarNavigationIconProps extends SimpleBaseProps<TopAppBarNavigationIcon>, UseProps<TopAppBarNavigationIcon> { }

export interface TopAppBarActionItemProps extends SimpleBaseProps<TopAppBarActionItem> { }

export class TopAppBar extends Component<TopAppBarProps> { }

export class TopAppBarRow extends Component<TopAppBarRowProps> { }

export class TopAppBarSection extends Component<TopAppBarSectionProps> { }

export class TopAppBarTitle extends Component<TopAppBarTitleProps> { }

export class TopAppBarNavigationIcon extends Component<TopAppBarNavigationIconProps> { }

export class TopAppBarActionItem extends Component<TopAppBarActionItemProps> { }
