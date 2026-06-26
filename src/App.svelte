<script>
  import { onMount } from 'svelte'
  import Header from './lib/Header.svelte'
  import Home from './lib/Home.svelte'
  import Tips from './Tips.svelte'
  import Calendar from './lib/Calendar.svelte'
  import EventDetail from './EventDetail.svelte'
  import Footer from './lib/Footer.svelte'
  import events from './data/events.json'

  export let page = 'home'
  export let eventSlug = null

  function syncRouteFromLocation() {
    const base = import.meta.env.BASE_URL || '/'
    let path

    const params = new URLSearchParams(window.location.search)

    if (params.has('route')) {
    path = params.get('route')

    // Clean the URL after we've recovered the route
    history.replaceState({}, '', import.meta.env.BASE_URL + path.replace(/^\//, ''))
    } else {
    path = window.location.pathname
    }

    if (path.startsWith(base)) {
      path = path.slice(base.length)
    }

    path = path.replace(/^\/+|\/+$/g, '')

    if (path === '' || path === 'index.html') {
      page = 'home'
      eventSlug = null
      return
    }

    if (path === 'calendar' || path === 'calendar.html') {
      page = 'calendar'
      eventSlug = null
      return
    }

    if (path === 'tips' || path === 'tips.html') {
      page = 'tips'
      eventSlug = null
      return
    }

    if (path.startsWith('event/')) {
      page = 'event'
      eventSlug = decodeURIComponent(path.slice('event/'.length))
      return
    }

    page = 'home'
    eventSlug = null
  }

  function goto(path) {
    const base = import.meta.env.BASE_URL || '/'
    const cleanPath = path.replace(/^\/+/, '')
    history.pushState({}, '', `${base}${cleanPath}`)
    syncRouteFromLocation()
  }

  onMount(() => {
    syncRouteFromLocation()

    const onPopState = () => syncRouteFromLocation()
    window.addEventListener('popstate', onPopState)

    return () => window.removeEventListener('popstate', onPopState)
  })

  $: event =
    page === 'event' && eventSlug
      ? events.find((item) => item.slug === eventSlug) ?? null
      : null
</script>

<Header {goto} />

<main>
  {#if page === 'tips'}
    <Tips />
  {:else if page === 'calendar'}
    <Calendar events={events} />
  {:else if page === 'event'}
    <EventDetail event={event} />
  {:else}
    <Home events={events} />
  {/if}
</main>

<Footer />