// overall mutations for the slide store module
export const SET = 'SET'
export const SET_STATUS = 'SET_STATUS'

// commenting out delete and save, as I do not think these will be used (as mutations)
// as they should be sync and atomic, but leaeving for now just in case
// this comment and the below should either be removed or reinstated before pull request
// export const DELETE = 'DELETE'
// export const SAVE = 'SAVE'

// title mutations
export const SET_TITLE = 'SET_TITLE'
export const SET_TITLE_CONTENT = 'SET_TITLE_CONTENT'
export const SET_TITLE_FONT_COLOR = 'SET_TITLE_FONT_COLOR'
export const SET_TITLE_FONT_SIZE = 'SET_TITLE_FONT_SIZE'
export const SET_TITLE_FONT_STYLE = 'SET_TITLE_FONT_STYLE'
export const SET_TITLE_FONT_WEIGHT = 'SET_TITLE_FONT_WEIGHT'

// description mutations
export const SET_DESCRIPTION = 'SET_DESCRIPTION'
export const SET_DESCRIPTION_CONTENT = 'SET_DESCRIPTION_CONTENT'
export const SET_DESCRIPTION_FONT_COLOR = 'SET_DESCRIPTION_FONT_COLOR'
export const SET_DESCRIPTION_FONT_SIZE = 'SET_DESCRIPTION_FONT_SIZE'
export const SET_DESCRIPTION_FONT_STYLE = 'SET_DESCRIPTION_FONT_STYLE'
export const SET_DESCRIPTION_FONT_WEIGHT = 'SET_DESCRIPTION_FONT_WEIGHT'

// image mutations
export const SET_IMAGE = 'SET_IMAGE'

// Commenting out delete imgage mutation, should be done in action I think,
// and removing it should be done by 'setting' image to nothing instead
// remove this comment and below mutate unless reinstated before pull request
// export const DELETE_IMAGE = 'DELETE_IMAGE'

// date mutations
export const SET_DATE = 'SET_DATE'
export const SET_DATE_CONTENT = 'SET_DATE_CONTENT'
export const SET_DATE_FONT_COLOR = 'SET_DATE_FONT_COLOR'
export const SET_DATE_FONT_SIZE = 'SET_DATE_FONT_SIZE'
export const SET_DATE_FONT_STYLE = 'SET_DATE_FONT_STYLE'
export const SET_DATE_FONT_WEIGHT = 'SET_DATE_FONT_WEIGHT'

// time mutations
export const SET_TIME = 'SET_TIME'
export const SET_TIME_CONTENT = 'SET_TIME_CONTENT'
export const SET_TIME_FONT_COLOR = 'SET_TIME_FONT_COLOR'
export const SET_TIME_FONT_SIZE = 'SET_TIME_FONT_SIZE'
export const SET_TIME_FONT_STYLE = 'SET_TIME_FONT_STYLE'
export const SET_TIME_FONT_WEIGHT = 'SET_TIME_FONT_WEIGHT'

// Meta mutations, for template, timeout of slides, if repeatable or not, when to start and end by date
export const SET_META = 'SET_META'
export const SET_META_TEMPLATE = 'SET_META_TEMPLATE'
export const SET_META_TIMEOUT = 'SET_META_TIMEOUT'
export const SET_META_REPEATABLE = 'SET_META_REPEATABLE'
export const SET_META_STARTDATE = 'SET_META_STARTDATE'
export const SET_META_ENDDATE = 'SET_META_ENDDATE'

// for set template
export const SET_TEMPLATE = 'SET_TEMPLATE'

// for set timeout
export const SET_TIMEOUT = 'SET_ SET_TIMEOUT'
