<script>
  import { formatDateRange } from './dateHelpers.js'
  export let events = []

  const sortedEvents = [...events].sort((a, b) => new Date(b.startDate) - new Date(a.startDate))
</script>

<section class="content-section" id="calendar">
  <div class="container">
    <h1>Event Calendar</h1>
  </div>
</section>

{#each sortedEvents as event, idx}
  <section class="content-section {idx % 2 === 1 ? 'alt' : ''}">
    <div class="container">
      <article class="event-list-card">
        <div class="event-card-image" style={`background-image:url('${event.image}')`}></div>
        <div class="event-card-body">
          <h2>{event.title}</h2>
          <p class="event-meta">{formatDateRange(event.startDate, event.endDate)}</p>
          <p class="event-location"><a href={event.mapsUrl} target="_blank" rel="noreferrer">{event.location}</a></p>
          <p>{event.summary}</p>
          <a class="button secondary" href={`/event/${event.slug}`}>View event</a>
        </div>
      </article>
    </div>
  </section>
{/each}
