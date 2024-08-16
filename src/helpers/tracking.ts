import mixpanel from 'mixpanel-browser'
import { isProduction } from './env'

export const clickOutLink = (type: string) => {
  if (!mixpanel) return
  if (!isProduction()) return
  // eslint-disable-next-line import/no-named-as-default-member
  mixpanel.track(`Click Out Link`, { type })
}

export const clickInteraction = (type: string) => {
  if (!mixpanel) return
  if (!isProduction()) return
  // eslint-disable-next-line import/no-named-as-default-member
  mixpanel.track(`Click Interaction`, { type })
}
