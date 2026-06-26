<script>
  import Header from './lib/Header.svelte'
  import Home from './lib/Home.svelte'
  import Tips from './Tips.svelte'
  import Calendar from './lib/Calendar.svelte'
  import EventDetail from './EventDetail.svelte'
  import Footer from './lib/Footer.svelte'
  import events from './data/events.json'

  export let page = 'home'
  export let eventSlug = null

  const event = page === 'event' && eventSlug
    ? events.find((item) => item.slug === eventSlug)
    : null
</script>

<Header />
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
