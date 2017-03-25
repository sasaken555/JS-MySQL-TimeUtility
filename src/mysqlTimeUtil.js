/**
 * JavaScriptのDate関数をMySQLでも使用できるようにするライブラリ
 * mysqlTimeUtil.js
 * @author sasaken555
 * @since 2017/3/25
 */

/**
 * MySQLの世界標準時(UTC)をDateTime型時間で取得する
 * getMysqlUtcTime(date)
 * @param date JavaScript-Date-instance
 * @return mysqlUtcTime MySQL-UTC-DateTime 
 */
export function getMysqlUtcTime(date) {
  // TODO: implement later
  let mysqlUtcTime;
  return mysqlUtcTime;
}

/**
 * MySQLの日本時間(UTC+09:00)をDateTime型時間で取得する
 * getMysqlTokyoTime(date)
 * @param date JavaScript-Date-instance
 * @return mysqlTokyoTime MySQL-Tokyo-DateTime 
 */
export function getMysqlTokyoTime(date) {
  // TODO: implement later
  let mysqlTokyoTime;
  return mysqlTokyoTime;
}

export default mysqlTimeUtil