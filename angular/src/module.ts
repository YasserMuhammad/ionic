import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// inputs
import { BooleanValueAccessor } from './control-value-accessors/boolean-value-accessor';
import { NumericValueAccessor } from './control-value-accessors/numeric-value-accesssor';
import { RadioValueAccessor } from './control-value-accessors/radio-value-accessor';
import { SelectValueAccessor } from './control-value-accessors/select-value-accessor';
import { TextValueAccessor } from './control-value-accessors/text-value-accessor';

// navigation
import { GoBack } from './navigation/go-back';
import { IonBackButton } from './navigation/ion-back-button';
import { NavController } from './navigation/ion-nav-controller';
import { Nav } from './navigation/ion-nav';
import { Tab } from './navigation/ion-tab';
import { Tabs } from './navigation/ion-tabs';

// router
import { IonRouterOutlet } from './navigation/ion-router-outlet';

// providers
import { AngularDelegate } from './providers/angular-delegate';
import { ActionSheetController } from './providers/action-sheet-controller';
import { AlertController } from './providers/alert-controller';
import { Events, setupProvideEvents } from './providers/events';
import { LoadingController } from './providers/loading-controller';
import { MenuController } from './providers/menu-controller';
import { ModalController } from './providers/modal-controller';
import { PickerController } from './providers/picker-controller';
import { Platform } from './providers/platform';
import { PopoverController } from './providers/popover-controller';
import { ToastController } from './providers/toast-controller';

// directives
import { Icon } from './directives/icon';
import { VirtualScroll } from './directives/virtual-scroll';
import { VirtualItem } from './directives/virtual-item';
import { VirtualHeader } from './directives/virtual-header';
import { VirtualFooter } from './directives/virtual-footer';

// directive proxies
import {
  Anchor,
  App,
  Avatar,
  BackButton,
  Backdrop,
  Badge,
  Button,
  Buttons,
  Card,
  CardContent,
  CardHeader,
  CardSubtitle,
  CardTitle,
  Checkbox,
  Chip,
  ChipButton,
  Col,
  Content,
  CordovaPlatform,
  Datetime,
  Fab,
  FabButton,
  FabList,
  Footer,
  Gesture,
  GestureController,
  Grid,
  Header,
  HideWhen,
  InfiniteScroll,
  InfiniteScrollContent,
  Input,
  Item,
  ItemDivider,
  ItemGroup,
  ItemOption,
  ItemOptions,
  ItemSliding,
  Label,
  List,
  ListHeader,
  Menu,
  MenuButton,
  MenuToggle,
  NavPop,
  NavPush,
  NavSetRoot,
  Note,
  Radio,
  RadioGroup,
  Range,
  RangeKnob,
  Refresher,
  RefresherContent,
  Reorder,
  ReorderGroup,
  RippleEffect,
  Route,
  RouteRedirect,
  Router,
  RouterOutlet,
  Row,
  Scroll,
  Searchbar,
  Segment,
  SegmentButton,
  Select,
  SelectOption,
  SelectPopover,
  ShowWhen,
  SkeletonText,
  Slide,
  Slides,
  Spinner,
  SplitPane,
  StatusTap,
  TabButton,
  Tabbar,
  TapClick,
  Text,
  Textarea,
  Thumbnail,
  Toggle,
  Toolbar,
  ToolbarTitle,
} from './directives/proxies';


@NgModule({
  declarations: [
    Anchor,
    App,
    Avatar,
    BackButton,
    Backdrop,
    Badge,
    Button,
    Buttons,
    Card,
    CardContent,
    CardHeader,
    CardSubtitle,
    CardTitle,
    Checkbox,
    Chip,
    ChipButton,
    Col,
    Content,
    CordovaPlatform,
    Datetime,
    Fab,
    FabButton,
    FabList,
    Footer,
    Gesture,
    GestureController,
    Grid,
    Header,
    HideWhen,
    Icon,
    InfiniteScroll,
    InfiniteScrollContent,
    Input,
    Item,
    ItemDivider,
    ItemGroup,
    ItemOption,
    ItemOptions,
    ItemSliding,
    Label,
    List,
    ListHeader,
    Menu,
    MenuButton,
    MenuToggle,
    NavPop,
    NavPush,
    NavSetRoot,
    Note,
    Radio,
    RadioGroup,
    Range,
    RangeKnob,
    Refresher,
    RefresherContent,
    Reorder,
    ReorderGroup,
    RippleEffect,
    Route,
    RouteRedirect,
    Router,
    RouterOutlet,
    Row,
    Scroll,
    Searchbar,
    Segment,
    SegmentButton,
    Select,
    SelectOption,
    SelectPopover,
    ShowWhen,
    SkeletonText,
    Slide,
    Slides,
    Spinner,
    SplitPane,
    StatusTap,
    TabButton,
    Tabbar,
    TapClick,
    Text,
    Textarea,
    Thumbnail,
    Toggle,
    Toolbar,
    ToolbarTitle,

    // navigation
    Nav,
    Tab,
    Tabs,
    GoBack,
    IonBackButton,

    // router
    IonRouterOutlet,

    // inputs
    BooleanValueAccessor,
    NumericValueAccessor,
    RadioValueAccessor,
    SelectValueAccessor,
    TextValueAccessor,

    // directives
    VirtualScroll,
    VirtualItem,
    VirtualHeader,
    VirtualFooter,
  ],
  exports: [
    Anchor,
    App,
    Avatar,
    BackButton,
    Backdrop,
    Badge,
    Button,
    Buttons,
    Card,
    CardContent,
    CardHeader,
    CardSubtitle,
    CardTitle,
    Checkbox,
    Chip,
    ChipButton,
    Col,
    Content,
    CordovaPlatform,
    Datetime,
    Fab,
    FabButton,
    FabList,
    Footer,
    Gesture,
    GestureController,
    Grid,
    Header,
    HideWhen,
    Icon,
    InfiniteScroll,
    InfiniteScrollContent,
    Input,
    Item,
    ItemDivider,
    ItemGroup,
    ItemOption,
    ItemOptions,
    ItemSliding,
    Label,
    List,
    ListHeader,
    Menu,
    MenuButton,
    MenuToggle,
    NavPop,
    NavPush,
    NavSetRoot,
    Note,
    Radio,
    RadioGroup,
    Range,
    RangeKnob,
    Refresher,
    RefresherContent,
    Reorder,
    ReorderGroup,
    RippleEffect,
    Route,
    RouteRedirect,
    Router,
    RouterOutlet,
    Row,
    Scroll,
    Searchbar,
    Segment,
    SegmentButton,
    Select,
    SelectOption,
    SelectPopover,
    ShowWhen,
    SkeletonText,
    Slide,
    Slides,
    Spinner,
    SplitPane,
    StatusTap,
    TabButton,
    Tabbar,
    TapClick,
    Text,
    Textarea,
    Thumbnail,
    Toggle,
    Toolbar,
    ToolbarTitle,

    BooleanValueAccessor,
    Nav,
    IonRouterOutlet,
    GoBack,
    IonBackButton,
    Tab,
    Tabs,
    NumericValueAccessor,
    RadioValueAccessor,
    SelectValueAccessor,
    TextValueAccessor,

    VirtualScroll,
    VirtualItem,
    VirtualHeader,
    VirtualFooter
  ],
  providers: [
    AngularDelegate,
    ModalController,
    PopoverController,
  ],
  imports: [
    CommonModule,
  ]
})
export class IonicModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: IonicModule,
      providers: [
        NavController,
        AlertController,
        ActionSheetController,
        Events,
        LoadingController,
        PickerController,
        MenuController,
        Platform,
        ToastController,

        { provide: APP_INITIALIZER, useFactory: setupProvideEvents, multi: true },
      ]
    };
  }
}
