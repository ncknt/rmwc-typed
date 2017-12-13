import * as React from 'react'
import { RMWC } from './Base'

declare namespace Fab {
    export interface FabProps extends RMWC.RMWCTagProps, RMWC.RippleTagProps, React.ButtonHTMLAttributes<Fab> {
        mini?: boolean;
    }
}

export declare class Fab extends React.Component<Fab.FabProps> { }

