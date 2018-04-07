import {
    ComponentType,
    HTMLAttributes,
    Ref
} from 'react'

export interface RMWCTagProps {
    tag?: string | ComponentType<any>;
    wrap?: boolean;
    elementRef?: Ref<any>;
    theme?: string | string[];
}

export interface SimpleBaseProps<T> extends RMWCTagProps, HTMLAttributes<T> { }

export interface RippleTagProps {
    ripple?: boolean;
}

export interface UseProps<T> extends HTMLAttributes<T> {
    use?: string
}
