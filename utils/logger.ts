type LogLevel = "info" | "warn" | "error"

export const logger = {
  log: (level: LogLevel, message: string, ...args: any[]) => {
    if (process.env.NODE_ENV !== "production") {
      console[level](`[${level.toUpperCase()}] ${message}`, ...args)
    }
    // In production, you might want to send logs to a service like Sentry or LogRocket
  },
  info: (message: string, ...args: any[]) => logger.log("info", message, ...args),
  warn: (message: string, ...args: any[]) => logger.log("warn", message, ...args),
  error: (message: string, ...args: any[]) => logger.log("error", message, ...args),
}

