<script>
  import { formatDateRange } from './dateHelpers.js'

  export let events = []
</script>

<section class="content-section" id="calendar-overview">
  <div class="container">
    <h1>Event Calendar</h1>
    <p>Explore the upcoming YEEES seminars and working paper meetings.</p>
    <div class="event-grid">
      {#each events as event}
        <article class="event-card">
          <h2>{event.title}</h2>
          <p class="event-meta">{formatDateRange(event.startDate, event.endDate)} · {event.location}</p>
          <p>{event.summary}</p>
          <a class="button secondary" href={`/event/${event.slug}`}>View event</a>
        </article>
      {/each}
    </div>
  </div>
</section>
