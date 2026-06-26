<script>
  import { formatDate, formatDateRange } from './lib/dateHelpers.js'

  export let event = null

  $: registrationDeadline = event?.registrationDeadline ? new Date(event.registrationDeadline) : null
  $: registrationOpen = registrationDeadline ? registrationDeadline >= new Date() : false

  import { buildDescriptionBlocks } from './lib/eventHelpers.js'

  $: descriptionBlocks = event ? buildDescriptionBlocks(event.description) : []
</script>

{#if event}
  <section class="event-detail-hero" style="background-image:url('{event.image}')">
    <div class="event-detail-hero-overlay">
      <div class="container hero-copy">
        <h1>{event.title}</h1>
        <p class="event-meta">{formatDateRange(event.startDate, event.endDate)}</p>
        <p class="event-summary">{event.summary}</p>
        {#if event.registrationUrl}
          {#if registrationOpen}
            <a class="button primary event-register-button" href={event.registrationUrl} target="_blank" rel="noreferrer">Register</a>
          {:else}
            <button class="button primary event-register-button disabled" disabled>Registration closed</button>
          {/if}
        {/if}
      </div>
    </div>
  </section>

  <section class="content-section">
    <div class="container">
      <h2>About the event</h2>
      {#each descriptionBlocks as block}
        {#if block.type === 'paragraph'}
          <p>{block.text}</p>
        {:else if block.type === 'list'}
          <ul class="description-bullet-list">
            {#each block.items as item}
              <li>{item}</li>
            {/each}
          </ul>
        {/if}
      {/each}
    </div>
  </section>

  <section class="content-section alt">
    <div class="container">
      <h2>Important dates</h2>
      <ul class="topic-list">
        {#each event.importantDates as dateItem}
          <li>{dateItem}</li>
        {/each}
      </ul>
    </div>
  </section>

  <section class="content-section">
    <div class="container">
      <h2>Program</h2>
      {#if event.programUrl}
        <a class="button primary" href={event.programUrl} target="_blank" rel="noreferrer">Download Program</a>
      {:else}
        <p>{event.program[0]}</p>
      {/if}
    </div>
  </section>

  <section class="content-section alt">
    <div class="container">
      <h2>Event information</h2>
      <div class="event-info-card">
        <div class="event-info-grid">
          <div class="info-item">
            <span class="info-label">Start</span>
            <p>{formatDate(event.startDate)}</p>
          </div>
          <div class="info-item">
            <span class="info-label">End</span>
            <p>{formatDate(event.endDate)}</p>
          </div>
          <div class="info-item">
            <span class="info-label">Venue</span>
            <p>{event.venue}</p>
          </div>
          <div class="info-item">
            <span class="info-label">Location</span>
            <p><a href={event.mapsUrl} target="_blank" rel="noreferrer">{event.location}</a></p>
          </div>
          <div class="info-item">
            <span class="info-label">Cost</span>
            <p>{event.cost}</p>
          </div>
          {#if event.registrationDeadline}
            <div class="info-item">
              <span class="info-label">Registration deadline</span>
              <p>{formatDate(event.registrationDeadline)}</p>
            </div>
          {/if}
        </div>

        <div class="event-organizers">
          <p class="info-label">Organizers</p>
          <ul class="organizer-list">
            {#each event.organizers as organizer}
              <li><a href={`mailto:${organizer.email}`}>{organizer.name}</a></li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
  </section>
{:else}
  <section class="content-section" id="event-not-found">
    <div class="container">
      <h1>Event not found</h1>
      <p>The event you are looking for does not exist yet.</p>
      <a class="button primary" href="/index.html">Return home</a>
    </div>
  </section>
{/if}
