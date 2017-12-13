import * as React from 'react'
import { RMWC } from './Base'

declare namespace Toolbar {

    export interface ToolbarProps extends RMWC.SimpleBaseProps<Toolbar> {
        fixed?: boolean;
        waterfall?: boolean;
        fixedLastrowOnly?: boolean;
        flexible?: boolean;
        flexibleDefaultBehavior?: boolean;
    }

    export interface ToolbarSectionProps extends RMWC.SimpleBaseProps<ToolbarSection> {
        alignStart?: boolean;
        alignEnd?: boolean;
        shrinkToFit?: boolean;
    }
}

export declare class Toolbar extends React.Component<Toolbar.ToolbarProps> { }
export declare class ToolbarRow extends React.Component<RMWC.SimpleBaseProps<ToolbarRow>> { }
export declare class ToolbarSection extends React.Component<Toolbar.ToolbarSectionProps> { }
export declare class ToolbarTitle extends React.Component<RMWC.SimpleBaseProps<ToolbarTitle>> { }
export declare class ToolbarFixedAdjust extends React.Component<RMWC.SimpleBaseProps<ToolbarFixedAdjust>> { }
export declare class ToolbarMenuIcon extends React.Component<RMWC.UseProps<ToolbarMenuIcon>> { }
export declare class ToolbarIcon extends React.Component<RMWC.UseProps<ToolbarIcon>> { }
