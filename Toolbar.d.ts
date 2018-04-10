import {
    Component
} from 'react'
import {
    SimpleBaseProps,
    UseProps
} from './Base'

    export interface ToolbarProps extends SimpleBaseProps<Toolbar> {
        fixed?: boolean;
        waterfall?: boolean;
        fixedLastrowOnly?: boolean;
        flexible?: boolean;
        flexibleDefaultBehavior?: boolean;
    }

    export interface ToolbarSectionProps extends SimpleBaseProps<ToolbarSection> {
        alignStart?: boolean;
        alignEnd?: boolean;
        shrinkToFit?: boolean;
    }

export class Toolbar extends Component<ToolbarProps> { }
export class ToolbarRow extends Component<SimpleBaseProps<ToolbarRow>> { }
export class ToolbarSection extends Component<ToolbarSectionProps> { }
export class ToolbarTitle extends Component<SimpleBaseProps<ToolbarTitle>> { }
export class ToolbarFixedAdjust extends Component<SimpleBaseProps<ToolbarFixedAdjust>> { }
export class ToolbarMenuIcon extends Component<UseProps<ToolbarMenuIcon>> { }
export class ToolbarIcon extends Component<UseProps<ToolbarIcon>> { }
