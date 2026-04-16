import type { themeType } from '../types'

const THEME_MAP: themeType = {
  default: {
    fontColor: '#5E5E5E',
    bgColor: '#FFFFFF',
    splitLineColor: '#DCDCDC',
    barColor: ['#1890FF', '#2FC25B', '#FACC14', '#13C2C2', '#F04864', '#8543E0'],
    dataZoomColor: ['rgba(221, 54, 54, 1)', 'rgba(11, 109, 238, .5)'],
    barBgColor: 'rgba(231, 232, 235, 0.6)',
    toolTip: {
      color: '#FFFFFF',
      bgColor: '#FFFFFF',
      shadowColor: '0 1px 10px rgba(0, 0, 0, 5%), 0 4px 5px rgba(0, 0, 0, 8%), 0 2px 4px -1px rgba(0, 0, 0, 12%);',
    },
  },
  dark: {
    fontColor: '#FFFFFF',
    bgColor: '#000000',
    splitLineColor: '#5E5E5E',
    barColor: ['#1890FF', '#2FC25B', '#FACC14', '#13C2C2', '#F04864', '#8543E0'],
    dataZoomColor: ['rgba(221, 54, 54, 1)', 'rgba(11, 109, 238, .5)'],
    barBgColor: 'rgba(255, 255, 255, 0.2)',
    toolTip: {
      color: '#5E5E5E',
      bgColor: '#5E5E5E',
      shadowColor: '0 1px 10px rgba(0, 0, 0, 5%), 0 4px 5px rgba(0, 0, 0, 8%), 0 2px 4px -1px rgba(0, 0, 0, 12%);',
    },
  },
}

interface seriesLabelType {
  multiBar: {
    show: boolean
    rotate: number
    align: string
    verticalAlign: string
    position: string
    distance: number
    formatter: string
  }
}

/** 预置的系列 label 配置，目前主要用于多系列柱状图。 */
const SERIES_LABEL_MAP: seriesLabelType = {
  multiBar: {
    show: true,
    rotate: 90,
    align: 'left',
    verticalAlign: 'middle',
    position: 'insideBottom',
    distance: 10,
    formatter: '{c} - {a}',
  },
}

const DEF_THEME: string = ''
const FONT_COLOR_MAP: any = {}
const SPLIT_LINE_COLOR: any = {}
const BG_COLOR_MAP: any = {}
const BAR_COLOR_MAP: any = {}
const DATA_ZOOM_COLOR: any = {}
const BG_BAR_COLOR_MAP: any = {}
const TOOLTIP_COLOR_MAP: any = {}

function setThemeColor() {
  Object.keys(THEME_MAP).forEach((key, i) => {
    i === 0 && (FONT_COLOR_MAP[key] = THEME_MAP[key].fontColor)
    SPLIT_LINE_COLOR[key] = THEME_MAP[key].splitLineColor
    BG_COLOR_MAP[key] = THEME_MAP[key].bgColor
    BAR_COLOR_MAP[key] = THEME_MAP[key].barColor
    DATA_ZOOM_COLOR[key] = THEME_MAP[key].dataZoomColor
    BG_BAR_COLOR_MAP[key] = THEME_MAP[key].barBgColor
    TOOLTIP_COLOR_MAP[key] = THEME_MAP[key].toolTip
  })
}

interface labelPositionType {
  both?: {
    'top': string
    '-top': string
    'left': string
    '-left': string
  }
  insideBoth?: {
    'insideTop': string
    '-insideTop': string
    'insideLeft': string
    '-insideLeft': string
  }
}

const LABEL_POSITION_MAP: labelPositionType = {
  both: {
    'top': 'top',
    '-top': 'bottom',
    'left': 'right',
    '-left': 'left',
  },
  insideBoth: {
    'insideTop': 'insideTop',
    '-insideTop': 'insideBottom',
    'insideLeft': 'insideRight',
    '-insideLeft': 'insideLeft',
  },
}

setThemeColor()

export {
  BAR_COLOR_MAP,
  BG_BAR_COLOR_MAP,
  BG_COLOR_MAP,
  DATA_ZOOM_COLOR,
  DEF_THEME,
  FONT_COLOR_MAP,
  LABEL_POSITION_MAP,
  SERIES_LABEL_MAP,
  SPLIT_LINE_COLOR,
  TOOLTIP_COLOR_MAP,
}
