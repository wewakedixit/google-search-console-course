const lessons = [
  {
    title: 'What Google Search Console is',
    goal: 'Understand what the tool does and why it matters.',
    body: `
      <p>Google Search Console is a free Google tool that helps you understand how your website performs in Google Search. It shows how Google finds your pages, whether your pages can appear in Search, and what people search before they click your website.</p>
      <div class="callout"><strong>Simple meaning:</strong> It is like a health report and performance report for your website on Google Search.</div>
      <h4>What it can help you answer</h4>
      <ul>
        <li>Are people finding my website on Google?</li>
        <li>Which search words bring people to my site?</li>
        <li>Which pages are getting clicks?</li>
        <li>Can Google read and index my important pages?</li>
        <li>Did Google find any serious issues?</li>
      </ul>
      <div class="practice"><strong>Practice:</strong> Write down three important pages on your website. Example: Home, Services, Contact.</div>
    `
  },
  {
    title: 'Add your website and verify ownership',
    goal: 'Set up Search Console safely.',
    body: `
      <p>Before Google shows private data, you must prove that you own or manage the website. Google calls this ownership verification.</p>
      <h4>Two common property types</h4>
      <ul>
        <li><strong>Domain property:</strong> Best full view. It includes http, https, www, non-www, and subdomains. It usually needs DNS verification.</li>
        <li><strong>URL-prefix property:</strong> Tracks only the exact version you enter, such as https://example.com/. It can be easier for some websites.</li>
      </ul>
      <div class="callout"><strong>Beginner tip:</strong> If you are unsure, ask your website developer or domain provider for help with DNS verification.</div>
      <div class="practice"><strong>Example:</strong> If your live site is https://www.myclinic.com, do not only add http://myclinic.com. The version must match what people use.</div>
    `
  },
  {
    title: 'Understand the Performance report',
    goal: 'Read clicks, impressions, CTR, and average position.',
    body: `
      <p>The Performance report shows how your website performs in Google Search. For a beginner, this is usually the most useful report.</p>
      <h4>The four main numbers</h4>
      <ul>
        <li><strong>Clicks:</strong> People clicked your result.</li>
        <li><strong>Impressions:</strong> Your result appeared in Google Search.</li>
        <li><strong>CTR:</strong> The percentage of impressions that became clicks.</li>
        <li><strong>Average position:</strong> The average ranking of your top result.</li>
      </ul>
      <div class="callout"><strong>Simple example:</strong> 1,000 impressions and 50 clicks means a 5% CTR. Out of every 100 times your result appeared, 5 people clicked.</div>
      <div class="practice"><strong>Practice:</strong> Open Performance, set the date to last 3 months, and note the top 5 pages by clicks.</div>
    `
  },
  {
    title: 'Find your best searches',
    goal: 'Use search queries to improve content.',
    body: `
      <p>Search Console calls the words people type into Google “queries.” These are very useful because they show what your audience wants.</p>
      <h4>How to use queries</h4>
      <ol>
        <li>Open Performance.</li>
        <li>Choose the Queries tab.</li>
        <li>Sort by impressions to see topics where you appear often.</li>
        <li>Look for high impressions but low CTR.</li>
      </ol>
      <div class="callout"><strong>Simple action:</strong> If many people see your result but few click, improve the title, meta description, or page introduction so the result feels more useful.</div>
      <div class="practice"><strong>Example:</strong> Query: “best school admission age.” Add a clear section on the page answering exactly that question.</div>
    `
  },
  {
    title: 'Check if pages are on Google',
    goal: 'Understand the Page indexing report.',
    body: `
      <p>The Page indexing report shows which URLs Google knows about and whether they are indexed. Indexed means Google has stored the page and may show it in Search.</p>
      <h4>What to look for</h4>
      <ul>
        <li><strong>Indexed pages:</strong> Pages Google can show.</li>
        <li><strong>Not indexed pages:</strong> Pages Google knows but is not showing.</li>
        <li><strong>Reasons:</strong> Google explains why a page may not be indexed.</li>
      </ul>
      <div class="callout"><strong>Beginner tip:</strong> Not every page must be indexed. Thank-you pages, admin pages, duplicate pages, and filter pages often do not need to appear in Google.</div>
      <div class="practice"><strong>Practice:</strong> Make a list of your 10 most important pages and check whether they are indexed.</div>
    `
  },
  {
    title: 'Use URL Inspection',
    goal: 'Check one page at a time.',
    body: `
      <p>The URL Inspection tool lets you check a single page. It can tell you whether Google indexed it, when Google last crawled it, and whether the live page can be indexed.</p>
      <h4>When to use it</h4>
      <ul>
        <li>You published a new important page.</li>
        <li>You updated a page and want Google to see it again.</li>
        <li>A page is missing from Google.</li>
        <li>You want to test the live URL.</li>
      </ul>
      <div class="callout"><strong>Important:</strong> Requesting indexing is not a magic ranking button. It asks Google to crawl the page, but Google decides what to index and rank.</div>
      <div class="practice"><strong>Example:</strong> After publishing a new service page, inspect the full URL, test live URL, then request indexing if everything is okay.</div>
    `
  },
  {
    title: 'Submit a sitemap',
    goal: 'Help Google discover important pages.',
    body: `
      <p>A sitemap is a file on your website that lists pages you want Google to know about. Search Console has a Sitemaps report where you can submit it and check errors.</p>
      <h4>What a sitemap does</h4>
      <ul>
        <li>Helps Google find pages faster.</li>
        <li>Shows Google which URLs you consider important.</li>
        <li>Lets you see whether Google could read the sitemap.</li>
      </ul>
      <div class="callout"><strong>Simple example:</strong> Many WordPress sites have a sitemap at /sitemap_index.xml or /sitemap.xml.</div>
      <div class="practice"><strong>Practice:</strong> Ask your website platform or developer for your sitemap URL, then submit only the part after your domain in the Sitemaps report.</div>
    `
  },
  {
    title: 'Fix drops and issues calmly',
    goal: 'Know what to check when traffic falls.',
    body: `
      <p>Traffic can drop for many reasons. Google’s guidance is to diagnose before reacting. First check whether the data is for the correct property and date range.</p>
      <h4>First checks</h4>
      <ul>
        <li>Did you choose the correct website version?</li>
        <li>Did the site move from http to https or change domain?</li>
        <li>Did you recently publish, remove, or redesign pages?</li>
        <li>Are there indexing, manual action, or security issues?</li>
        <li>Is the drop only one page, one query, or the whole website?</li>
      </ul>
      <div class="callout"><strong>Beginner tip:</strong> A one-day drop is not always a problem. Compare weeks or months to see a real pattern.</div>
      <div class="practice"><strong>Example:</strong> If only one service page dropped, inspect that page, compare queries, and check whether competitors or page changes explain it.</div>
    `
  },
  {
    title: 'Share access safely',
    goal: 'Understand owners, users, and permissions.',
    body: `
      <p>Search Console data can be sensitive, so access should be given carefully. A verified owner has the highest control. Users can be added with different permission levels.</p>
      <h4>Simple roles</h4>
      <ul>
        <li><strong>Verified owner:</strong> Proved ownership and can manage almost everything.</li>
        <li><strong>Delegated owner:</strong> Given owner access by another owner.</li>
        <li><strong>Full user:</strong> Can view all data and take some actions.</li>
        <li><strong>Restricted user:</strong> Can view limited data.</li>
      </ul>
      <div class="callout"><strong>Safe habit:</strong> Give agencies or freelancers the lowest access they need. Remove access when the work ends.</div>
      <div class="practice"><strong>Practice:</strong> Review who currently has access and remove old users you no longer work with.</div>
    `
  },
  {
    title: 'Build a monthly routine',
    goal: 'Turn Search Console into a simple habit.',
    body: `
      <p>Google says you do not need to check Search Console every day. For most non-technical users, a monthly routine is enough, plus checks after major website changes.</p>
      <h4>Your 30-minute monthly routine</h4>
      <ol>
        <li>Check Performance for clicks, impressions, CTR, and position.</li>
        <li>Find top pages and top queries.</li>
        <li>Pick one page with high impressions and low CTR.</li>
        <li>Check Page indexing for important errors.</li>
        <li>Review manual actions and security issues.</li>
        <li>Write three improvements for next month.</li>
      </ol>
      <div class="callout"><strong>Best mindset:</strong> Search Console does not do SEO for you. It shows clues. Your job is to make better pages for real searchers.</div>
      <div class="practice"><strong>Final task:</strong> Create a monthly note with: what improved, what dropped, what you will update, and what you learned.</div>
    `
  }
];

const quiz = {
  question: 'A page has 10,000 impressions and 50 clicks. What is the simplest meaning?',
  options: [
    { text: 'Many people saw the result, but only a small number clicked it.', correct: true },
    { text: 'Google has blocked the website completely.', correct: false },
    { text: 'The website must be number 1 for every search.', correct: false }
  ]
};

let activeLesson = 0;

const lessonContent = document.querySelector('#lesson-content');
const tabs = [...document.querySelectorAll('.lesson-tab')];
const counter = document.querySelector('#lesson-counter');
const progressBar = document.querySelector('#progress-bar');
const prevButton = document.querySelector('#prev-lesson');
const nextButton = document.querySelector('#next-lesson');

function renderLesson(index) {
  activeLesson = Math.max(0, Math.min(index, lessons.length - 1));
  const lesson = lessons[activeLesson];
  lessonContent.innerHTML = `
    <h3>${lesson.title}</h3>
    <p><strong>Goal:</strong> ${lesson.goal}</p>
    ${lesson.body}
  `;
  counter.textContent = `Lesson ${activeLesson + 1} of ${lessons.length}`;
  progressBar.style.width = `${((activeLesson + 1) / lessons.length) * 100}%`;
  tabs.forEach((tab, tabIndex) => {
    tab.classList.toggle('active', tabIndex === activeLesson);
  });
  prevButton.disabled = activeLesson === 0;
  nextButton.textContent = activeLesson === lessons.length - 1 ? 'Back to lesson 1' : 'Next lesson';
}

tabs.forEach((tab) => {
  tab.addEventListener('click', () => renderLesson(Number(tab.dataset.lesson)));
});

prevButton.addEventListener('click', () => renderLesson(activeLesson - 1));
nextButton.addEventListener('click', () => {
  if (activeLesson === lessons.length - 1) {
    renderLesson(0);
    return;
  }
  renderLesson(activeLesson + 1);
});

const quizQuestion = document.querySelector('#quiz-question');
const quizOptions = document.querySelector('#quiz-options');
const quizFeedback = document.querySelector('#quiz-feedback');

quizQuestion.textContent = quiz.question;
quiz.options.forEach((option) => {
  const button = document.createElement('button');
  button.type = 'button';
  button.textContent = option.text;
  button.addEventListener('click', () => {
    [...quizOptions.children].forEach((child) => {
      child.disabled = true;
      const answer = quiz.options.find((item) => item.text === child.textContent);
      child.classList.toggle('correct', answer.correct);
    });
    button.classList.toggle('incorrect', !option.correct);
    quizFeedback.textContent = option.correct
      ? 'Correct. This is a CTR opportunity: improve the result so more people want to click.'
      : 'Not quite. The main clue is high visibility but low clicks.';
  });
  quizOptions.append(button);
});

renderLesson(0);
