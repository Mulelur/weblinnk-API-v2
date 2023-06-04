import { Request, Response, NextFunction } from 'express'

/**
 * Extract IP address
 *
 * @param host
 */
const getIpAddress = (host: string) => {
  try {
    return host.split(':')[0]
  } catch (error) {
    return 'unknown'
  }
}

const isIPAddress = (host: string) => {
  const requestHost = getIpAddress(host)

  if (requestHost === '127.0.0.1') {
    return false
  }

  return /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
    requestHost,
  )
}

/**
 * Validates where the request came from, if it's invalid, will be redirect to http://weblinnk.com
 *
 * This checks against IPv6 addresses
 *
 * @param request
 * @param response
 * @param next
 * @returns
 */
const requestSourceMonitor = async (request: Request, response: Response, next: NextFunction) => {
  const { host } = request.headers

  const userAgent = request.headers['user-agent']

  // If is IP address
  if (userAgent !== 'ELB-HealthChecker/2.0' && host && isIPAddress(String(host).toString())) {
    return response.redirect(301, 'http://weblinnk.com')
  }

  return next()
}

export default requestSourceMonitor
