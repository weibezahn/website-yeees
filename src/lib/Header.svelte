<script>
  import { withBase } from './baseUrl.js'
  import events from '../data/events.json'

  export let goto

  let menuOpen = false

  const now = new Date()

  $: upcoming = events
    .map((e) => ({ ...e, start: new Date(e.startDate) }))
    .filter((e) => !Number.isNaN(e.start.getTime()) && e.start >= now)
    .sort((a, b) => a.start - b.start)

  $: nextEvent = upcoming.length ? upcoming[0] : null

  $: menu = [
    { label: 'About', path: 'index.html', clientSide: false },
    ...(nextEvent
      ? [{
          label: nextEvent.title,
          path: `event/${nextEvent.slug}`,
          clientSide: true
        }]
      : []),
    { label: 'All Events', path: 'calendar.html', clientSide: false },
    { label: 'Tips & Tricks', path: 'tips.html', clientSide: false }
  ]

  function toggleMenu() {
    menuOpen = !menuOpen
  }

  function openClientRoute(path) {
    menuOpen = false
    goto(path)
  }
</script>

<header>
  <div class="container header-inner">
    <a
      href={withBase('index.html')}
      class="brand logo-link"
      on:click={() => (menuOpen = false)}
    >
      <img src={withBase('yeees-logo.png')} alt="YEEES logo" class="brand-logo" />
    </a>

    <button
      class="burger-button"
      aria-label="Toggle menu"
      aria-expanded={menuOpen}
      on:click={toggleMenu}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M3 6h18" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
        <path d="M3 12h18" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
        <path d="M3 18h18" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      </svg>
    </button>

    <nav class="nav-links" class:open={menuOpen}>
      {#each menu as item}
        {#if item.clientSide}
          <a
            href={withBase(item.path)}
            on:click|preventDefault={() => openClientRoute(item.path)}
          >
            {item.label}
          </a>
        {:else}
          <a
            href={withBase(item.path)}
            on:click={() => (menuOpen = false)}
          >
            {item.label}
          </a>
        {/if}
      {/each}
    </nav>
  </div>
</header>