// Type definitions for material-ui v0.18.17
// Project: https://github.com/jamesmfriedman/rmwc
// Definitions by: Nicolas Cohen <https://github.com/ncknt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3
/// <reference types="react" />
/// <reference types="react-dom" />

// declare module "rmwc" {
//     export import Button = __RMWC.Button;
//     export import ButtonProps = __RMWC.ButtonProps;
// }

declare namespace rmwc {

    interface SimpleTagProps {
        tag?: string | React.ComponentType<any>;
        className?: string;
        wrap?: boolean;
        elementRef?: React.Ref<any>;
        theme?: string | string[];
    }

    export type BaseRMWCProps = SimpleTagProps & React.HTMLProps<any>

    export interface UseProps {
        /** The icon to use */
        use: React.ReactNode
    }

    interface RippleTagProps {
        ripple?: boolean;
    }
    // apiRef ?: 
    

    /**
     * Buttons
     */
    interface ButtonBaseProps extends SimpleTagProps, RippleTagProps {
        dense?: boolean;
        raised?: boolean;
        compact?: boolean;
        unelevated?: boolean;
        stroked?: boolean;
    }
    export type ButtonProps = ButtonBaseProps & React.HTMLProps<Button>
    export class Button extends React.Component<ButtonProps> {}

    /**
     * FAB
     */
    export interface FabProps extends SimpleTagProps, RippleTagProps {
        mini?: boolean;
    }

    export class Fab extends React.Component<FabProps> {}

    /**
     * IconToggle
     */
    export interface IconToggleProps extends SimpleTagProps {
        onChange(evt: Object): boolean | Event | undefined;
        on: Object;
        off: Object;
        value?: boolean;
    }

    export class IconToggle extends React.Component<IconToggleProps> {}

    /**
     * Cards
     */
    export class CardPrimary extends React.Component<SimpleTagProps> {}
    export interface CardTitleProps extends SimpleTagProps {
        large?: any;
    }
    export class CardTitle extends React.Component<CardTitleProps>{ }
    export class CardSubtitle extends React.Component<SimpleTagProps>{ }
    export class CardSupportingText extends React.Component<any>{ }
    export class CardActions extends React.Component<SimpleTagProps>{ }
    export class CardMedia extends React.Component<SimpleTagProps> {}
    export class CardHorizontalBlock extends React.Component<SimpleTagProps> {}
    export class CardAction extends React.Component<SimpleTagProps>{}

    export interface CardProps extends SimpleTagProps {
        themeDark: boolean;
    }
    export class Card extends React.Component<CardProps> {}

    /**
     * Toolbars
     */
    export interface ToolbarProps extends SimpleTagProps {
        fixed?: boolean;
        waterfall?: boolean;
        fixedLastrowOnly?: boolean;
        flexible?: boolean;
        flexibleDefaultBehavior?: boolean;
    }
    export class Toolbar extends React.Component<ToolbarProps> {}
    export class ToolbarRow extends React.Component<SimpleTagProps> { }
    export interface ToolbarSectionProps extends SimpleTagProps {
        alignStart?: boolean;
        alignEnd?: boolean;
        shrinkToFit?: boolean;
    }
    export class ToolbarSection extends React.Component<ToolbarSectionProps> { }
    export class ToolbarTitle extends React.Component<SimpleTagProps> { }
    export class ToolbarFixedAdjust extends React.Component<SimpleTagProps> { }
    export class ToolbarMenuIcon extends React.Component<UseProps> {}
    export class ToolbarIcon extends React.Component<UseProps> {}
    /**
     * Dialogs
     */

    export interface DialogRootProps extends SimpleTagProps {
        role ?: any;
    }

    export class DialogRoot extends React.Component<DialogRootProps> {}

    export class DialogBackdrop extends React.Component<SimpleTagProps> { }

    export class DialogSurface extends React.Component<SimpleTagProps> { }

    export class DialogHeader extends React.Component<SimpleTagProps> {}

    export class DialogHeaderTitle extends React.Component<SimpleTagProps> { }

    export class DialogBody extends React.Component<SimpleTagProps> { }

    export class DialogFooter extends React.Component<SimpleTagProps> { }

    export interface DialogFooterButtonProps extends SimpleTagProps {
        /* Make it an accept Button. */
        accept?: boolean,
        /* Make it a cancel button. */
        cancel?: boolean
    }

    export class DialogFooterButton extends React.Component<DialogFooterButtonProps> {}

    export interface DialogProps extends SimpleTagProps {
        /** Whether or not the Dialog is showing. */
        open: boolean,
        /** Callback for when the accept Button is pressed. */
        onAccept: (evt: Event) => any,
        /** Callback for when the Dialog was closed without acceptance. */
        onCancel: (evt: Event) => any,
        /** Callback for when the Dialog closes. */
        onClose: (evt: Event) => any,
        apiRef: (apiInstance: Object) => any
    }

    export class Dialog extends React.Component<DialogProps> {}

    export interface DefaultDialogTemplateProps extends SimpleTagProps {
        /** A title for the default Dialog template. */
        title?: React.ReactNode,
        /** Additional Dialog header content for the default Dialog template. */
        header?: React.ReactNode,
        /** Body content for the default Dialog template, rendered before children. */
        body?: React.ReactNode,
        /** Additional footer content for the default Dialog template, rendered before any buttons. */
        footer?: React.ReactNode,
        /** Creates an accept button for the default Dialog template with a given label. You can pass `null` to remove the button.*/
        acceptLabel?: React.ReactNode,
        /** Creates an cancel button for the default Dialog with a given label. You can pass `null` to remove the button.*/
        cancelLabel?: React.ReactNode,
        /** Any children will be rendered in the body of the default Dialog template. */
        children?: React.ReactNode
    }

    export class DefaultDialogTemplate extends React.Component<DefaultDialogTemplateProps> {}

    /**
     * Permanent drawer
     */
    export class PermanentDrawer extends React.Component<SimpleTagProps> {}

    // export class PermanentDrawerToolbarSpacer extends React.Component<SimpleTagProps> { }

    export class PermanentDrawerContent extends React.Component<SimpleTagProps> { }

    /**
     * Persistent drawer
     */
    // export class PersistentDrawerHeaderRoot extends React.Component<SimpleTagProps> { }

    // export class PersistentDrawerHeaderContent extends React.Component<SimpleTagProps>{}

    export class PersistentDrawerHeader extends React.Component<{}> {}

    export class PersistentDrawerContent extends React.Component<SimpleTagProps> { }

    // export class PersistentDrawerRoot extends React.Component<SimpleTagProps> { }

    // export class PersistentDrawerDrawer extends React.Component<SimpleTagProps> { }

    export interface PersistentDrawerProps extends SimpleTagProps {
        /** Opens or closes the Drawer. */
        open: boolean,
        /** Callback that fires when the Drawer is closed. */
        onClose?: (evt: Event) => any,
        /** Callback that fires when the Drawer is opened. */
        onOpen?: (evt: Event) => any
    }

    export class PersistentDrawer extends React.Component<PersistentDrawerProps> {}

    /**
     * Temporary drawer
     */
    // export class TemporaryDrawerHeaderRoot extends React.Component<SimpleTagProps> { }

    // export class TemporaryDrawerHeaderContent extends React.Component<SimpleTagProps>{}

    export class TemporaryDrawerHeader extends React.Component<SimpleTagProps> { }

    export class TemporaryDrawerContent extends React.Component<SimpleTagProps> { }

    // export class TemporaryDrawerRoot extends React.Component<SimpleTagProps> { }

    // export class TemporaryDrawerDrawer extends React.Component<SimpleTagProps> { }

    export interface TemporaryDrawerProps extends SimpleTagProps {
        /** Opens or closes the Drawer. */
        open: boolean,
        /** Callback that fires when the Drawer is closed. */
        onClose?: (evt: Event) => any,
        /** Callback that fires when the Drawer is opened. */
        onOpen?: (evt: Event) => any
    }

    export class TemporaryDrawer extends React.Component<TemporaryDrawerProps> { }

    /**
     * Elevation
     */
    export interface ElevationProps extends SimpleTagProps {
        /** A number from 0 - 24 for different levels of elevation */
        z?: number | string,
        /** Allows for smooth transitions between elevations when the z value changes. */
        transition?: boolean
    }
    export class Elevation extends React.Component<ElevationProps> { }

    /**
     * Grid list
     */
    export interface GridListRootProps {
        /** Use a 1px gutter. */
        tileGutter1: boolean,
        /** Move the caption to the top of the card. */
        headerCaption: boolean,
        /** Make the caption two lines. */
        twolineCaption: boolean,
        /** Leaves space for a start aligned icon. */
        withIconAlignStart: boolean,
        /** One of the following values: 1x1, 16x9, 2x3, 3x2, 4x3, 3x4. */
        tileAspect: '1x1' | '16x9' | '2x3' | '3x2' | '4x3' | '3x4'
    }

    // export class GridListRoot extends React.Component<GridListRootProps> {}

    export class GridListTiles extends React.Component<SimpleTagProps> { }

    export class GridTile extends React.Component<SimpleTagProps>{}

    // export class GridTilePrimaryRoot extends React.Component<SimpleTagProps> { }

    export class GridTilePrimaryContent extends React.Component<SimpleTagProps>{}

    export class GridTilePrimary extends React.Component<SimpleTagProps> { }

    export class GridTileSecondary extends React.Component<SimpleTagProps> { }

    export class GridTileTitle extends React.Component<SimpleTagProps> { }

    export class GridTileTitleSupportText extends React.Component<SimpleTagProps> { }

    export class GridList extends React.Component<GridListRootProps> {}

    /**
     * Checkbox
     */
    // export class CheckboxRoot extends React.Component<SimpleTagProps> { }

    // export class CheckboxNativeControl extends React.Component<SimpleTagProps> { }

    // export class CheckboxBackground extends React.Component<SimpleTagProps> { }

    // export class CheckboxCheckmark extends React.Component<SimpleTagProps> { }

    // export class CheckboxCheckmarkPath extends React.Component<SimpleTagProps> { }

    // export class CheckboxMixedmark extends React.Component<SimpleTagProps> { }

    // export class CheckboxLabel extends React.Component<SimpleTagProps> { }

    export interface CheckboxProps extends SimpleTagProps {
        /** A DOM ID for the toggle. */
        id?: string,
        /** Disables the control. */
        disabled?: boolean,
        /** Toggle the control on and off. */
        checked?: boolean | string,
        /** Make the control indeterminate */
        indeterminate?: boolean,
        /** A label for the control. */
        label?: string
    }
    export class Checkbox extends React.Component<CheckboxProps> {}

    /**
     * Form fields
     */
    export interface FormFieldProps extends SimpleTagProps {
        /** Position the input after the label. */
        alignEnd?: boolean
    }

    export class FormField extends React.Component<FormFieldProps> {}

    /**
     * Radio buttons
     */
    export interface RadioProps extends SimpleTagProps {
        /** A DOM ID for the toggle. */
        id?: string,
        /** Disables the control. */
        disabled?: boolean,
        /** Toggle the control on and off. */
        checked?: boolean | string,
        /** A label for the control. */
        label?: string
    }

    export class Radio extends React.Component<RadioProps> {}

    /**
     * Select
     */
    export interface SelectProps extends SimpleTagProps {
        /** An array of values or a map of {value: "label"}. Arrays will be converted to a map of {value: value}. */
        options: Object | any[],
        /** A label for the form control. */
        label?: string,
        /** Placeholder text for the form control. */
        placeholder?: string,
        /** Disables the form control. */
        disabled?: boolean
    }

    export class Select extends React.Component<SelectProps> {}

    /**
     * Slider
     */
    export interface SliderProps extends SimpleTagProps {
        /** A callback that takes an event with event.target.value set to the Slider's value. */
        onChange?: (evt: Event) => any,
        /** The value of the Slider. */
        value?: number | string,
        /** The minimum value of the Slider. */
        min?: number | string,
        /** The maximum value of the Slider. */
        max?: number | string,
        /** A step to quantize values by. */
        step?: number | string,
        /** Displays the exact value of the Slider on the knob. */
        discrete?: boolean,
        /** Displays the individual step markers on the Slider track. */
        displayMarkers?: boolean,
        /** Disables the control. */
        disabled?: boolean
    }
    export class Slider extends React.Component<SliderProps> {}

    /**
     * Switches
     */
    export interface SwitchProps extends SimpleTagProps {
        /** A DOM ID for the toggle. */
        id?: string,
        /** Disables the control. */
        disabled?: boolean,
        /** Toggle the control on and off. */
        checked?: boolean | string,
        /** A label for the control. */
        label?: string
    }
    export class Switch extends React.Component<SwitchProps> {}

    /**
     * Text field
     */
    export class TextFieldIcon extends React.Component<UseProps> {}
    export interface TextFieldHelpTextProps extends SimpleTagProps {
        persistent?: boolean,
        validationMsg?: boolean
    }
    export class TextFieldHelpText extends React.Component<TextFieldHelpTextProps> {}
    export interface TextFieldProps extends SimpleTagProps {
        /** A ref for the native input. */
        inputRef?: React.Ref < any >,
        /** Disables the input. */
        disabled?: boolean,
        /** A label for the input. */
        label?: React.ReactNode,
        /** Add a leading icon. */
        withLeadingIcon?: React.ReactNode,
        /** Add a trailing icon. */
        withTrailingIcon?: React.ReactNode,
        /** By default, props spread to the input. These props are for the component's root container. */
        rootProps?: Object
    }
    export class TextField extends React.Component<TextFieldProps> {}

    /**
     * Grid (layout)
     */
    export interface GridCellProps extends SimpleTagProps {
        /** A generic span value for all screen sizes. */
        span?: string | number,
        /** A span value for phone screen sizes. */
        phone?: string | number,
        /** A span value for tablet screen sizes. */
        tablet?: string | number,
        /** A span value for desktop screen sizes. */
        desktop?: string | number
    }
    export class GridCell extends React.Component<GridCellProps> {}
    export class Grid extends React.Component<SimpleTagProps> { }

    /**
     * Linear progress
     */
    export interface LinearProgressProps extends SimpleTagProps {
        /** Progress float percentage between 0 and 1. */
        progress?: number | string,
        /** A Progress buffer float percentage between 0 and 1. */
        buffer?: number | string,
        /** Whether or not the Progress bar is determinate. */
        determinate?: boolean,
        /** Progress goes from right to left. */
        reversed?: boolean
    }
    export class LinearProgress extends React.Component<LinearProgressProps> {}

    /**
     * List
     */
    export interface ListItemProps extends SimpleTagProps, RippleTagProps {
        /** A modifier for a selected item in Permanent Drawer. */
        permanentDrawerSelected?: boolean,
        /** A modifier for a selected item in Persistent Drawer. */
        persistentDrawerSelected?: boolean,
        /** A modifier for a selected item in Temporary Drawer. */
        temporaryDrawerSelected?: boolean
    }
    export class ListItem extends React.Component<ListItemProps> {}

    export class ListItemText extends React.Component<SimpleTagProps> {}

    export class ListItemTextSecondary extends React.Component<SimpleTagProps>{}

    export interface ListItemStartDetailProps extends SimpleTagProps {
        wrap?: boolean
    }
    export class ListItemStartDetail extends React.Component<ListItemStartDetailProps> { }

    export class ListItemEndDetail extends React.Component<SimpleTagProps>{}

    export class ListGroup extends React.Component<SimpleTagProps> { }

    export class ListGroupSubheader extends React.Component<SimpleTagProps>{}

    export class ListDivider extends React.Component<SimpleTagProps> { }

    export interface ListProps extends SimpleTagProps {
        /** Reduces the padding on List items. */
        dense?: boolean,
        /** Gives more space for dual lined list items. */
        twoLine?: boolean,
        /** Makes the list start detail circular for avatars. */
        avatarList?: boolean
    }

    export class List extends React.Component<ListProps> {}

    /**
     * Menus
     */
    export class MenuItem extends React.Component<SimpleTagProps> { }
    export interface MenuProps extends SimpleTagProps {
        /** Whether or not the Menu is open. */
        open?: boolean,
        /** Callback that fires when the Menu closes. */
        onClose?: (evt: Event) => any,
        /** Callback that fires when a Menu item is selected. */
        onSelected?: (evt: Event) => any
    }
    export class Menu extends React.Component<MenuProps> {}

    /**
     * Ripple
     */
    export interface RippleProps {
        /** Uses the primary palette. */
        primary?: boolean,
        /** Uses the accent palette. */
        accent?: boolean,
        /** Lets a ripple grow outside of its bounds, just like on Checkboxes. */
        unbounded?: boolean
    }
    export class Ripple extends React.Component<RippleProps> {}


    /**
     * Snackbar
     */
    export interface SnackbarProps extends SimpleTagProps {
        /** Show the Snackbar. */
        show?: boolean,
        /** A callback thats fired when the Snackbar closes. */
        onClose?: () => any,
        /** A string or other renderable JSX to be used as the message body. */
        message?: React.ReactNode,
        /** Milliseconds to show the Snackbar for. */
        timeout?: number,
        /** Callback that fires when action is pressed. The actionText property must be set to use this. */
        actionHandler?: () => any,
        /** Label for the action button. */
        actionText?: React.ReactNode,
        /** Lets the Snackbar text overflow onto multiple lines. */
        multiline?: boolean,
        /** Places the action underneath the message text. */
        actionOnBottom?: boolean,
        /** Whether or not the Snackbar dismisses on the action press. */
        dismissesOnAction?: boolean
    }
    export class Snackbar extends React.Component<SnackbarProps> {}

    /**
     * Tabs
     */
    export class Tab extends React.Component<SimpleTagProps> { }
    export interface TabBarProps extends SimpleTagProps {
        /** Callback when the active tab changes. Receives event as an argument with event.target.value set to the activeTabIndex. */
        onChange?: (evt: Event) => any,
        /** The index of the active tab. */
        activeTabIndex: number
    }
    export class TabBar extends React.Component<TabBarProps> {}

    /**
     * Theme
     */
    export interface ThemeProps extends SimpleTagProps {
        /** A theme option as a string, a space separated string for multiple values, or an array of valid theme options. */
        use: string | string[]
    }
    export class Theme extends React.Component<ThemeProps> {}

    /**
     * Typography
     */
    export interface TypographyProps extends SimpleTagProps {
        /* prettier-ignore */
        /** The typography style.*/
        use: 'display4' | 'display3' | 'display2' | 'display1' | 'headline' | 'title' | 'subheading2' | 'subheading1' | 'body2' | 'body1' | 'caption' | 'button',
        /** Sets adjust margin modifier for Typography. */
        adjustMargin?: boolean
    }
    export class Typography extends React.Component<TypographyProps> {}
}