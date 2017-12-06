import * as React from 'react'

export declare namespace RMWC {
    export interface RMWCTagProps {
        tag?: string | React.ComponentType<any>;
        className?: string;
        wrap?: boolean;
        elementRef?: React.Ref<any>;
        theme?: string | string[];
    }

    export type SimpleBaseProps<T> = RMWCTagProps & React.HTMLProps<T>;

    export interface RippleTagProps {
        ripple?: boolean;
    }

    export type UseProps<T> = React.HTMLProps<T> & {
        use?: string
    }
}