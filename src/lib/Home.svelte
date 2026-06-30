<script>
  import { withBase } from '/src/lib/baseUrl.js';
  import events from '../data/events.json'
  import { formatDateRange } from './dateHelpers.js'

  const today = new Date()
  const upcomingEvents = events
    .filter(event => new Date(event.endDate) >= today)
    .sort((a, b) => new Date(a.startDate) - new Date(b.startDate))

  const networkLogos = [
    { name: 'Uni Basel', url: 'http://www.unibas.ch', file: 'logo-uni_basel.jpg' },
    { name: 'DIW Berlin', url: 'http://www.diw.de', file: 'logo-diw.png' },
    { name: 'TU Berlin', url: 'http://www.wip.tu-berlin.de', file: 'logo-tu_berlin.jpg' },
    { name: 'University of Cambridge', url: 'http://www.cam.ac.uk', file: 'logo-uni_cambridge.png' },
    { name: 'Copenhagen School of Energy Infrastructure', url: 'http://www.csei.eu', file: 'logo-cbs_csei.png' },
    { name: 'TU Delft', url: 'http://www.tudelft.nl', file: 'logo-tu_delft.png' },
    { name: 'University College Dublin', url: 'http://www.ucd.ie', file: 'logo-ucd.gif' },
    { name: 'TU Dresden', url: 'http://www.tu-dresden.de', file: 'logo-tu_dresden.png' },
    { name: 'University of Edinburgh', url: 'http://www.ed.ac.uk', file: 'logo-uni_edinburgh.png' },
    { name: 'European University Institute', url: 'http://www.eui.eu', file: 'logo-eui.png' },
    { name: 'Ghent University', url: 'https://www.ugent.be/', file: 'logo-uni_ghent.png' },
    { name: 'KU Leuven', url: 'http://www.kuleuven.be', file: 'logo-ku_leuven.png' },
    { name: 'Lodz University of Technology', url: 'http://www.p.lodz.pl', file: 'logo-tu_lodz.jpg' },
    { name: 'Comillas', url: 'http://www.comillas.edu', file: 'logo-comillas.png' },
    { name: 'FAU', url: 'http://www.fau.de', file: 'logo-fau.png' },
    { name: 'CentraleSupélec', url: 'http://www.centralesupelec.fr', file: 'logo-centralesupelec.png' },
    { name: 'Université Paris-Sud', url: 'http://www.u-psud.fr', file: 'logo-uni_paris_sud.png' },
    { name: 'KTH Stockholm', url: 'http://www.kth.se', file: 'logo-kth.png' },
    { name: 'TU Wien', url: 'http://www.tuwien.ac.at', file: 'logo-tu_wien.png' }
  ]
</script>

<section class="hero banner homepage-hero">
  <div class="container hero-grid">
    <div class="hero-copy">
      <span class="eyebrow">Welcome to YEEES</span>
      <h1>Young Energy Economists and Engineers Seminar</h1>
      <p>
        YEEES meets twice a year since 2006 for a seminar giving early stage researchers the opportunity to present their work in progress and receive feedback from their peers.
      </p>
      <div class="hero-actions">
        <a href="mailto:yeees+subscribe@googlegroups.com" class="button primary">Sign up for the mailing list</a>
      </div>
    </div>
    <div class="hero-aside">
      <div class="hero-box">
        <div class="hero-box-title">Upcoming Events</div>
        {#each upcomingEvents as event}
          <article class="event-summary">
            <div class="event-date">{formatDateRange(event.startDate, event.endDate)}</div>
            <a href={withBase(`/event/${event.slug}`)}>{event.title}</a>
            <p class="event-location">{event.venue}</p>
          </article>
        {/each}
      </div>
    </div>
  </div>
</section>

<section class="content-section home-section" id="about">
  <div class="container">
    <h2>The YEEES Seminar</h2>
    <p>
      YEEES stands for “Young Energy Economists and Engineers Seminar”, which is a network of researchers founded by Yannick Perez and Leonardo Meeus that meets twice a year since 2006 for a one- or two-day working paper seminar. The seminars give PhD students the opportunity to present their work in progress and receive feedback from their peers in a friendly and constructive atmosphere.
    </p>
    <p>
      Up to a full hour is devoted to every paper, which breaks down into a maximum 20 minute presentation of the paper, two 10 minute discussions of the paper by two reviewers who read the paper beforehand and present a short review of the paper (what is the issue, what is the methodology, what are the results, what are the strengths of the paper, and how can it be improved), and 10 to 20 minutes for general discussion.
    </p>
    <p>
      The godfathers of the network who make sure that their PhD students participate in almost every seminar, and that also take turns in hosting the seminar include Ronnie Belmans, William D’haeseleer, Jean-Michel Glachant, Reinhard Haas, Ben Hobbs, Ignacio Perez-Arriaga, Christian von Hirschhausen, Luis Olmos, Julian Barquin and Hannes Weigt. The seminar series started in Leuven in 2006 and was then consecutively hosted in Dresden, Vienna, and Paris (2007), Madrid (2008), Florence and Leuven (2009), Cambridge and Dublin (2010), Dresden and Madrid (2011), Berlin and Florence (2012), Vienna and Stockholm (2013), Dresden and Leuven (2014), Paris and Madrid (2015), Basel and Edinburgh (2016), Nuremberg and Lodz (2017), Delft and Florence (2018), Leuven and Berlin (2019), Paris (2021), Ghent and Copenhagen (2022), Vienna and Nuremberg (2023), Leuven and Durham (2024), Paris and Cologne (2025).
    </p>
    <p>
      <strong><a href="mailto:yeees+subscribe@googlegroups.com">Sign up for the YEEES mailing list to receive updates on upcoming seminars!</a></strong>
    </p>
  </div>
</section>

<section class="content-section home-section alt" id="fields">
  <div class="container">
    <h2>Research fields and paper topics welcome at YEEES</h2>
    <p>
      Given the attendance of both energy economists and engineers at YEEES, papers that lie at the intersection of both fields are highly welcome. The field of energy economics often times comes into contact with technical elements of the energy system that are most typically the core business of engineers, for example, electricity generation systems and grids, building physics and engineering, or complex sector-coupling (across transport, heat and electricity sectors). Similarly, engineers performing research contributing to a particular puzzle piece in the energy transition often times come into contact with some of the associated economic aspects as well.
    </p>
    <p><strong>Appreciated submissions to YEEES are:</strong></p>
    <ul class="topic-list">
      <li>papers that deal with both economic and technical aspects of energy (transition)</li>
      <li>papers with an interdisciplinary approach to energy (transition)</li>
      <li>papers tackling energy (transition) for example related to transport, industry, building energy performance, behavioral economics, energy regulatory aspects, etc.</li>
    </ul>
    <p><strong>Not a good fit for YEEES are:</strong></p>
    <ul class="topic-list">
      <li>papers that either lie purely in the engineering realm, including fundamental and purely technical engineering research (e.g., you are developing or improving the efficiency of a new type of fuel cell, wind mill, solar panel, or combustion engine) or chemistry (e.g., you are developing a new kind of battery and want to present lab results on its performance), thermo- or fluid-dynamics, etc.</li>
      <li>papers that lie purely in the economics realm and have little to do with (the) energy (transition), for example pure micro-, macro- or financial economics</li>
      <li>papers that lie purely in the realm of environmental economics and do not deal with any concrete (techno-economic) aspects of the energy system, e.g. the degrowth literature, environmental footprint calculations, economics of forestry, rivers, biodiversity, etc.</li>
      <li>papers that are purely about climate science (even though this might relate indirectly to the energy transition)</li>
    </ul>
    <p>
      In case of doubt, please do not hesitate to send your abstract to the custom email address of the YEEES conference you are considering to attend, to check with the organizers if your paper is deemed a good fit.
    </p>
  </div>
</section>

<section class="content-section home-section" id="network">
  <div class="container">
    <h2>The YEEES Network</h2>
    <div class="logo-grid">
      {#each networkLogos as item}
        <a href={item.url} class="logo-pill" target="_blank" rel="noreferrer">
          <img src={withBase(`/logos/${item.file}`)} alt={item.name} class="logo-image" />
        </a>
      {/each}
    </div>
  </div>
</section>

<section class="content-section home-section alt" id="contact">
  <div class="container contact-grid">
    <div>
      <h2>Contact</h2>
      <p><a href="mailto:jew.eco@cbs.dk">Jens Weibezahn</a></p>
    </div>
  </div>
</section>
