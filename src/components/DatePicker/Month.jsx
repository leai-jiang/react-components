import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import MonthCalendar from 'src/components/Calendar/Month';
import placements from 'src/components/Popover/placements';
import uncontrolledDecorator from 'src/decorators/uncontrolled';
import { animationPrefixCls } from 'src/style/globalAnimation';

import { isDateDisabled, getValidDate } from './utils';
import { monthPickerPrefixCls, PickerWrap, PickerContainer, DateWrap, DateSpan, PickerIcon } from './style';
import { Size } from './DatePicker';

@uncontrolledDecorator({})
class Month extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
        this.state.cache = this.state.value;
    }
    static propTypes = {
        /** 当前值，受控 */
        value: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
        /** 默认值，非受控 */
        defaultValue: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
        /** 修改回调，返回moment对象 */
        onChange: PropTypes.func,
        /** 自定义规则，参考Calendar */
        rules: PropTypes.object,
        /** 展示格式 */
        display: PropTypes.shape({
            date: PropTypes.shape({
                format: PropTypes.string
            })
        }),
        /** 控件尺寸 */
        size: PropTypes.oneOf(Size),
        /** 是否禁用 */
        disabled: PropTypes.bool,
        /** 弹出层的z-index */
        zIndex: PropTypes.number,
        /** 弹出层容器，参考popover.getPopupContainer */
        getCalendarContainer: PropTypes.func
    };
    static defaultProps = {
        onChange: () => {},
        size: 'md',
        zIndex: 100,
        getCalendarContainer: triggerNode => triggerNode.parentNode
    };
    componentWillReceiveProps = nextProps => {
        if ('value' in nextProps) {
            this.setState({
                value: nextProps.value
            });
        }
    };
    handleChange = value => {
        const { onChange, rules } = this.props;

        if (isDateDisabled(value, this.state.value, rules)) {
            return;
        }
        value = getValidDate(value, rules);

        if (!('value' in this.props)) {
            this.setState({
                value
            });
        }
        this.setState({
            cache: value
        });
        onChange(value);
    };
    handleCache = value => {
        this.setState({
            cache: value
        });
    };
    togglePopup = visible => {
        this.setState({
            visible: visible
        });
        if (!visible) {
            this.setState({
                cache: this.state.value
            });
        }
    };
    render() {
        const {
            rules,
            value: _v,
            // eslint-disable-next-line no-unused-vars
            defaultValue,
            size,
            display = {},
            onChange,
            zIndex,
            getCalendarContainer,
            ...rest
        } = this.props;
        const { date = {} } = display;
        const value = moment(_v);

        return (
            <PickerContainer isMonth {...rest}>
                <PickerWrap
                    prefixCls={monthPickerPrefixCls}
                    transitionName={`${animationPrefixCls}-fade`}
                    calendar={<MonthCalendar rules={rules} />}
                    getCalendarContainer={getCalendarContainer}
                    value={value}
                    align={placements.bottomLeft}
                    onChange={onChange}
                    zIndex={zIndex}
                    isMonth
                >
                    {({ value }) => {
                        return (
                            <DateWrap size={size}>
                                <DateSpan>{value.format(date.format || 'YYYY-MM')}</DateSpan>
                                <PickerIcon type="calendar" color="blue" />
                            </DateWrap>
                        );
                    }}
                </PickerWrap>
            </PickerContainer>
        );
    }
}

export default Month;
