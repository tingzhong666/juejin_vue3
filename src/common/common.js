/**
 * 毫秒时间段转为 小时 分钟
 * @param {object} options
 * @param {number} options.ms
 * @returns {object} res
 * @returns {number} res.hours
 * @returns {number} res.mintes
 */
export const msToHourMinute = function ({ ms = 0 }) {
  const hours = Math.floor(ms / 3600000)
  const minutes = Math.floor((ms % 3600000) / 60000)
  return {
    hours,
    minutes
  }
}