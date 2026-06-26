<script>
  const tipsSections = [
    {
      title: 'Advice for paper presenters',
      paragraphs: [
        'You will have 20 minutes to speak. Please arrive 10 minutes before the start of the session to become familiar with the equipment and to be sure your presentation is loaded. Also bring your presentation on a data stick (or laptop) to the meeting.',
        'Some tips on making your talk more effective and enjoyable: Practice the talk before hand, attempt to be conversational, don’t read your slides, think about what three things you want the audience to remember from your talk and emphasize those.',
        'To avoid giving a “truly terrible talk”, please look at the ideas and suggestions on the following two useful and sometimes funny websites:'
      ],
      links: [
        { href: 'http://courses.washington.edu/ocean443/2010/Senior_Thesis_Guidebook_2010.pdf', label: 'courses.washington.edu' },
        { href: 'http://scienceblogs.com/sciencewoman/2008/08/20/open-thread-how-not-to-give-a/', label: 'scienceblogs.com' }
      ]
    },
    {
      title: 'Advice for discussants',
      paragraphs: [
        'The purpose of the formal discussion is to provide constructive and supportive feedback on the contribution, methods, results, and presentation of the paper. This feedback is meant to be useful to the presenter who is at a stage in their research where the work or paper can be modified before ultimate publication. The main purpose of the conference is to help each other improve your research.',
        'Past experience at YEEES indicates that the most successful discussions have a set of brief PowerPoint slides that cover the following points:'
      ],
      list: [
        'one slide summarizing and commenting on the issue treated in the paper,',
        'one slide summarizing and commenting on methodology,',
        'one summarizing and commenting on results,',
        'one summarizing the paper’s strengths,',
        'one summarizing ways to improve the paper.'
      ],
      extra: [
        'We have provided a simple PowerPoint template, which you may use but you can also deviate from it.',
        'Each slide should take about 2 minutes, and should not be too cluttered with text. Detailed comments on the text and presentation should be provided to the author bilaterally during breaks, or via email or other means – this will be of less interest to the audience.',
        'You will be given a ‘3-minute’ warning by the chair of your session, and you will be asked to sit down after your 10 minutes are up. So practice your discussion so that it fits comfortably within that time.',
        'If you don’t want to “deliver a disappointingly dreadful discussion”, you should keep several points in mind. For instance, don’t just read the points in your slide; practice ahead of time to have a natural delivery looking at the audience; use a little humor. For more specific suggestions, I strongly urge you to consult the first two websites, and then have a laugh at the third:'
      ],
      linksAfter: [
        { href: 'http://aib.msu.edu/events/2004/forthediscussant.pdf', label: 'aib.msu.edu' },
        { href: 'http://people.inf.ethz.ch/troscoe/pubs/review-writing.pdf', label: 'people.inf.ethz.ch' },
        { href: 'http://i.zdnet.com/blogs/then-a-miracle-happens.gif', label: 'i.zdnet.com' }
      ],
      closing: [
        'However, please also bring your presentation on a memory stick to the meeting.',
        'Show up to the meeting room 10 minutes before the start of the session in order to test the equipment and to make sure your presentation is ready.',
        'Please label your file “NN-review_r-name.pdf”, where ‘NN’ is the paper number and ‘r’ should be the letter ‘j’ if you are the junior reviewer or ‘s’ if you are the senior reviewer. ‘name’ is your last name, e.g., "01-review_s-doe.pdf"'
      ]
    }
  ]
</script>

<main>
  <section class="content-section" id="tips-page">
    <div class="container">
      <h1>Tips & Tricks</h1>
      {#each tipsSections as section}
        <h2>{section.title}</h2>
        {#each section.paragraphs as paragraph}
          <p>{paragraph}</p>
        {/each}
        {#if section.links}
          <ul class="topic-list">
            {#each section.links as link}
              <li><a href={link.href} target="_blank" rel="noreferrer">{link.label}</a></li>
            {/each}
          </ul>
        {/if}
        {#if section.list}
          <ul class="topic-list">
            {#each section.list as item}
              <li>{item}</li>
            {/each}
          </ul>
        {/if}
        {#if section.extra}
          {#each section.extra as paragraph}
            <p>{paragraph}</p>
          {/each}
        {/if}
        {#if section.linksAfter}
          <ul class="topic-list">
            {#each section.linksAfter as link}
              <li><a href={link.href} target="_blank" rel="noreferrer">{link.label}</a></li>
            {/each}
          </ul>
        {/if}
        {#if section.closing}
          {#each section.closing as paragraph}
            <p>{paragraph}</p>
          {/each}
        {/if}
      {/each}
    </div>
  </section>
</main>
