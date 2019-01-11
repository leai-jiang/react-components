import styled, { css } from 'styled-components';
import RcCalendar from 'rc-calendar';
import RcMonthCalendar from 'rc-calendar/lib/MonthCalendar';

import config from 'src/config';
import addDefaultThemeProps from 'src/components/ThemeProvider/addDefaultThemeProps';

const { prefixCls: _prefixCls } = config;
export const prefixCls = _prefixCls + '-calendar';

/* stylelint-disable no-duplicate-selectors */
export const calendarMixin = ({ theme: { colorMap, colorList, Calendar: calendarTheme = {} } }) => css`
    &.${prefixCls}, .${prefixCls} {
        outline: none;
        position: relative;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
    }

    .${prefixCls}-month-panel, .${prefixCls}-year-panel, .${prefixCls}-decade-panel {
        background: ${colorMap.default.background};
    }

    .${prefixCls}-header,
        .${prefixCls}-month-panel-header,
        .${prefixCls}-year-panel-header,
        .${prefixCls}-decade-panel-header {
        width: 100%;
        height: 38px;
        line-height: 38px;
        background-color: ${colorList.primary2};
        user-select: none;
    }
    .${prefixCls}-month-header-wrap {
        height: 180px;
    }
    .${prefixCls}-month-panel-body {
        height: 140px;
    }
    .${prefixCls}-prev-year-btn,
        .${prefixCls}-prev-month-btn,
        .${prefixCls}-next-year-btn,
        .${prefixCls}-next-month-btn,
        .${prefixCls}-month-panel-prev-year-btn,
        .${prefixCls}-month-panel-next-year-btn,
        .${prefixCls}-year-panel-prev-decade-btn,
        .${prefixCls}-year-panel-next-decade-btn,
        .${prefixCls}-decade-panel-prev-century-btn,
        .${prefixCls}-decade-panel-next-century-btn {
        cursor: pointer;
        padding: 0 8px;
        display: inline-block;
        color: ${colorList.white};
        box-sizing: border-box;
        position: absolute;
        font-family: Arial, 'Hiragino Sans GB', 'Microsoft Yahei', 'Microsoft Sans Serif', sans-serif;
        font-size: 16px;
    }
    .${prefixCls}-prev-year-btn,
        .${prefixCls}-month-panel-prev-year-btn,
        .${prefixCls}-year-panel-prev-decade-btn,
        .${prefixCls}-decade-panel-prev-century-btn {
        left: 0;
    }
    .${prefixCls}-prev-month-btn {
        left: 30px;
    }
    .${prefixCls}-next-year-btn,
        .${prefixCls}-month-panel-next-year-btn,
        .${prefixCls}-year-panel-next-decade-btn,
        .${prefixCls}-decade-panel-next-century-btn {
        right: 0;
    }
    .${prefixCls}-next-month-btn {
        right: 30px;
    }
    .${prefixCls}-prev-year-btn::before,
        .${prefixCls}-month-panel-prev-year-btn::before,
        .${prefixCls}-year-panel-prev-decade-btn::before,
        .${prefixCls}-decade-panel-prev-century-btn::before {
        content: '\\AB';
    }
    .${prefixCls}-prev-month-btn::before {
        content: '\\2039';
    }
    .${prefixCls}-next-year-btn::before,
        .${prefixCls}-month-panel-next-year-btn::before,
        .${prefixCls}-year-panel-next-decade-btn::before,
        .${prefixCls}-decade-panel-next-century-btn::before {
        content: '\\BB';
    }
    .${prefixCls}-next-month-btn::before {
        content: '\\203A';
    }
    .${prefixCls}-year-select, .${prefixCls}-month-select, .${prefixCls}-day-select {
        margin-right: 8px;
    }
    .${prefixCls}-my-select,
        .${prefixCls}-ym-select,
        .${prefixCls}-month-panel-year-select,
        .${prefixCls}-year-panel-decade-select,
        .${prefixCls}-decade-panel-century {
        position: absolute;
        top: 0;
        left: 50%;
        margin-left: -75px;
        width: 150px;
        text-align: center;
        display: block;
        color: ${colorList.white};
    }

    .${prefixCls}-body {
        width: 100%;
        padding: 0 5px 5px;
        background-color: ${colorMap.default.background};
        box-sizing: border-box;
    }
    .${prefixCls}-table,
        .${prefixCls}-month-panel-table,
        .${prefixCls}-year-panel-table,
        .${prefixCls}-decade-panel-table {
        width: 100%;
    }

    .${prefixCls}-table > thead,
    .${prefixCls}-month-panel-table > thead {
        border-bottom: 1px solid ${colorMap.default.border};
    }
    .${prefixCls}-column-header,
        .${prefixCls}-cell,
        .${prefixCls}-month-panel-cell,
        .${prefixCls}-year-panel-cell,
        .${prefixCls}-decade-panel-cell {
        cursor: pointer;
        height: 25px;
        line-height: 25px;
        padding: 5px;
        text-align: center;
    }
    .${prefixCls}-cell
        .${prefixCls}-date,
        .${prefixCls}-month-panel-cell
        .${prefixCls}-month-panel-month,
        .${prefixCls}-year-panel-cell
        .${prefixCls}-year-panel-year,
        .${prefixCls}-decade-panel-cell
        .${prefixCls}-decade-panel-decade {
        display: block;
    }
    .${prefixCls}-last-month-cell,
        .${prefixCls}-month-panel-last-year-cell,
        .${prefixCls}-year-panel-last-decade-cell,
        .${prefixCls}-decade-panel-last-century-cell,
        .${prefixCls}-next-month-btn-day,
        .${prefixCls}-month-panel-next-year-cell,
        .${prefixCls}-year-panel-next-decade-cell,
        .${prefixCls}-decade-panel-next-century-cell {
        color: ${colorMap.disabled.text};
    }

    .${prefixCls}-disabled-cell, .${prefixCls}-month-panel-cell-disabled {
        color: ${colorMap.disabled.text};
    }

    .${prefixCls}-month-panel, .${prefixCls}-year-panel, .${prefixCls}-decade-panel {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    }

    .${prefixCls}-today, .${prefixCls}-month-panel-current-cell {
        position: relative;
        color: ${colorMap.active.text};
    }

    .${prefixCls}-today::after, .${prefixCls}-month-panel-current-cell::after {
        content: '•';
        position: absolute;
        bottom: 0px;
        left: 0;
        right: 0;
        height: 10px;
        line-height: 10px;
        margin: auto;
    }
    .${prefixCls}-selected-day.${prefixCls}-today::after,
        .${prefixCls}-selected-date.${prefixCls}-today::after,
        .${prefixCls}-month-panel-selected-cell.${prefixCls}-month-panel-current-cell::after {
        display: none;
    }
    .${prefixCls}-selected-day .${prefixCls}-date {
        background: ${colorMap.active.background};
    }
    .${prefixCls}-selected-date
        .${prefixCls}-date,
        .${prefixCls}-month-panel-selected-cell
        .${prefixCls}-month-panel-month,
        .${prefixCls}-year-panel-selected-cell
        .${prefixCls}-year-panel-year,
        .${prefixCls}-decade-panel-selected-cell
        .${prefixCls}-decade-panel-decade {
        color: ${colorList.white};
        background: ${colorList.primary2};
    }
    .${prefixCls}-month-panel-year-select-arrow, .${prefixCls}-year-panel-decade-select-arrow {
        display: none;
    }
    ${calendarTheme['&']};
`;

export const CalendarWrap = styled(RcCalendar)`
    ${calendarMixin};
`;

export const MonthCalendarWrap = styled(RcMonthCalendar)`
    ${calendarMixin};
    .${prefixCls}-month-panel-body {
        padding-top: 5px;
    }
`;

addDefaultThemeProps(CalendarWrap, MonthCalendarWrap);
