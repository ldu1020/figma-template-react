type WithCssClassName<T> = T & {
    spacing?: SpacingClassNames;
    layout?: LayoutClassNames;
};

type SpacingClassNames = (PaddingClassName | MarginClassName)[];
type LayoutClassNames = LayoutClassName[];

type Size = 'xxxsmall' | 'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge' | 'huge';

type Padding = 'p' | 'pl' | 'pr' | 'pb' | 'pt';
type Margin = 'm' | 'ml' | 'mr' | 'mb' | 'mt';

type PaddingClassName = `.${Padding}-${Size}`;
type MarginClassName = `.${Margin}-${Size}`;

type LayoutClassName =
    | '.hidden'
    | '.inline'
    | '.block'
    | '.inline-block'
    | '.flex'
    | '.inline-flex'
    | '.column'
    | '.column-reverse'
    | '.row'
    | '.row-reverse'
    | '.flex-wrap'
    | '.flex-wrap-reverse'
    | '.flex-no-wrap'
    | '.flex-shrink'
    | '.flex-no-shrink'
    | '.flex-grow'
    | '.flex-no-grow'
    | '.justify-content-start'
    | '.justify-content-end'
    | '.justify-content-center'
    | '.justify-content-between'
    | '.justify-content-around'
    | '.align-items-start'
    | '.align-items-end'
    | '.align-items-center'
    | '.align-items-stretch'
    | '.align-content-start'
    | '.align-content-end'
    | '.align-content-center'
    | '.align-content-stretch'
    | '.align-self-start'
    | '.align-self-end'
    | '.align-self-center'
    | '.align-self-stretch';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
type ButtonDestructive = `${ButtonVariant}-destructive`;
type ButtonVariants = ButtonVariant | ButtonDestructive;

type IconColor =
    | 'blue'
    | 'purple'
    | 'purple4'
    | 'hot-pink'
    | 'green'
    | 'red'
    | 'yellow'
    | 'black'
    | 'black8'
    | 'black3'
    | 'white'
    | 'white8'
    | 'white4';

type IconName =
    | 'spin'
    | 'adjust'
    | 'alert'
    | 'angle'
    | 'arrow-left-right'
    | 'up-down'
    | 'auto-layout-horizontal'
    | 'auto-layout-vertical'
    | 'back'
    | 'blend-empty'
    | 'blend'
    | 'break'
    | 'caret-down'
    | 'caret-left'
    | 'caret-right'
    | 'caret-up'
    | 'check'
    | 'close'
    | 'component'
    | 'corner-radius'
    | 'corners'
    | 'distribute-horizontal-spacing'
    | 'distribute-vertical-spacing'
    | 'draft'
    | 'effects'
    | 'ellipses'
    | 'eyedropper'
    | 'forward'
    | 'frame'
    | 'group'
    | 'hidden'
    | 'horizontal-padding'
    | 'hyperlink'
    | 'image'
    | 'instance'
    | 'key'
    | 'layout-align-bottom'
    | 'align-horizontal-centers'
    | 'align-left'
    | 'align-right'
    | 'align-top'
    | 'align-vertical-centers'
    | 'layout-grid-columns'
    | 'layout-grid-rows'
    | 'layout-grid-uniform'
    | 'library'
    | 'link-broken'
    | 'link-connected'
    | 'list-detailed'
    | 'list-tile'
    | 'list'
    | 'lock-off'
    | 'lock-on'
    | 'minus'
    | 'play'
    | 'plus'
    | 'random'
    | 'recent'
    | 'resize-to-fit'
    | 'resolve-filled'
    | 'resolve'
    | 'reverse'
    | 'search-large'
    | 'search'
    | 'settings'
    | 'share'
    | 'smiley'
    | 'sort-alpha-asc'
    | 'sort-alpha-dsc'
    | 'sort-top-bottom'
    | 'spacing'
    | 'spinner'
    | 'star-off'
    | 'star-on'
    | 'stroke-weight'
    | 'styles'
    | 'swap'
    | 'theme'
    | 'tidy-up-grid'
    | 'tidy-up-list-horizontal'
    | 'tidy-up-list-vertical'
    | 'timer'
    | 'trash'
    | 'vertical-padding'
    | 'visible'
    | 'warning-large'
    | 'warning';
