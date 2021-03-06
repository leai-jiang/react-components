import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import Popover from 'src/components/Popover';
import { getPlacements } from 'src/components/Popover/placements';
import ThemeGetter from 'src/components/ThemeProvider/ThemeGetter';

import { TooltipWrap, Arrow, ArrowInner, ContentWrap } from './style';

const { Animation, Trigger, Placement } = Popover;
const placements = getPlacements(7);
const Theme = ['light', 'dark'];

class Tooltip extends Component {
    static propTypes = {
        /** @ignore */
        popup: PropTypes.node.isRequired,
        /** @ignore */
        placement: PropTypes.oneOf(Placement),
        /** 主题风格 */
        theme: PropTypes.oneOfType([PropTypes.oneOf(Theme), PropTypes.object])
    };
    static defaultProps = {
        theme: 'light',
        placement: Placement[0]
    };
    renderPopup(theme) {
        const { popup, placement, theme: themeType } = this.props;
        return (
            <ThemeProvider theme={theme}>
                <TooltipWrap placement={placement} themeType={themeType}>
                    <Arrow>
                        <ArrowInner />
                    </Arrow>
                    <ContentWrap themeType={themeType}>{popup}</ContentWrap>
                </TooltipWrap>
            </ThemeProvider>
        );
    }
    render() {
        // eslint-disable-next-line no-unused-vars
        const { popup, theme: themeType, ...rest } = this.props;
        return (
            <ThemeGetter>
                {theme => (
                    <Popover
                        getPopupContainer={triggerNode => triggerNode.parentNode}
                        {...rest}
                        builtinPlacements={placements}
                        popup={this.renderPopup(theme)}
                    />
                )}
            </ThemeGetter>
        );
    }
}

Object.assign(Tooltip, {
    Animation,
    Trigger,
    Placement,
    Theme
});

export default Tooltip;
