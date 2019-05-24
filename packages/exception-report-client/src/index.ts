import * as Sentry from '@sentry/node'
import Client from '@blued-core/client'
import { ExceptionReportClientIntl } from '@blued-core/client-intl'

export default class ExceptionReportClient extends Client<typeof Sentry, string> implements ExceptionReportClientIntl {
  buildClient (key: string) {
    const conf = this.conf.get(key)
    Sentry.init({
      dsn: !this.isLocal && conf,
      debug: this.isLocal,
    })
    return {
      client: Sentry,
      clean () { },
    }
  }
}
