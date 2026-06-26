import App from './App.svelte'
import './styles/global.css'

const pathname = window.location.pathname
let page = 'home'
let eventSlug = null

if (pathname.endsWith('/tips.html')) {
  page = 'tips'
} else if (pathname.endsWith('/calendar.html')) {
  page = 'calendar'
} else if (pathname.startsWith('/event/')) {
  page = 'event'
  eventSlug = pathname.replace(/^\/event\//, '').replace(/\/$/, '')
}

const app = new App({
  target: document.getElementById('app'),
  props: { page, eventSlug }
})

export default app
