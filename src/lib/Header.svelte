<script>
  import events from '../data/events.json'

  let menuOpen = false

  const baseMenu = [
    { label: 'About', href: '/index.html' }
  ]

  const now = new Date()
  const upcoming = events
    .map(e => ({ ...e, start: new Date(e.startDate) }))
    .filter(e => !Number.isNaN(e.start.getTime()) && e.start >= now)
    .sort((a, b) => a.start - b.start)

  const nextEvent = upcoming.length ? upcoming[0] : null

  const endMenu = [
    { label: 'All Events', href: '/calendar.html' },
    { label: 'Tips & Tricks', href: '/tips.html' }
  ]

  $: menu = [
    ...baseMenu,
    ...(nextEvent ? [{ label: nextEvent.title, href: `/event/${nextEvent.slug}` }] : []),
    ...endMenu
  ]

  function toggleMenu() {
    menuOpen = !menuOpen
  }
</script>

<header>
  <div class="container header-inner">
    <a href="/index.html" class="brand logo-link">
      <img src="/yeees-logo.png" alt="YEEES logo" class="brand-logo" />
    </a>

    <button class="burger-button" aria-label="Toggle menu" aria-expanded={menuOpen} on:click={toggleMenu}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M3 6h18" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
        <path d="M3 12h18" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
        <path d="M3 18h18" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      </svg>
    </button>

    <nav class="nav-links" class:open={menuOpen}>
      {#each menu as item}
        <a href={item.href} on:click={() => (menuOpen = false)}>{item.label}</a>
      {/each}
    </nav>
  </div>
</header>
