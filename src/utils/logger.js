const SEVERITIES = {
  INFO: 'info',
  WARNING: 'warn',
  ERROR: 'error'
};

function __log(args, severity = SEVERITIES.INFO) {
  console[severity](`${severity} - `, args.join(' '));
}

class Logger {
  constructor() {
  }
  static info(...args) {
    __log(args, SEVERITIES.INFO);
  }
  static warn(...args) {
    __log(args, SEVERITIES.WARNING);
  }
  static error(...args) {
    __log(args, SEVERITIES.ERROR);
  }
}

export default Logger;
