import dayjs from 'dayjs'
import enNZ from 'dayjs/locale/en-nz'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(advancedFormat)
dayjs.extend(isSameOrAfter)
dayjs.extend(isSameOrBefore)
dayjs.tz.setDefault('Pacific/Auckland')
dayjs.locale(enNZ)

export default dayjs
