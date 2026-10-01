const tabs = document.querySelectorAll('.tab, .text-filter');
const projects = document.querySelectorAll('#project-list .project');
const showMore = document.querySelector('.show-more');
const gallery = document.querySelector('.gallery-toggle');
const theme = document.querySelector('.icon-button');
const sound = document.querySelector('.sound-toggle');

function openProjectPreview(project) {
  const href = project.getAttribute('href') || '';
  const slug = href.startsWith('#') ? href.slice(1) : href;
  const title = project.querySelector('.project-name')?.textContent.trim() || 'Project';
  const tags = [...project.querySelectorAll('.tags b')].map(tag => tag.textContent.trim());
  const modal = document.createElement('div');
  modal.className = 'project-modal';
  modal.innerHTML = `<div class="modal-backdrop" data-close></div><section class="preview-card" role="dialog" aria-modal="true" aria-labelledby="preview-title">
    <button class="modal-close" type="button" aria-label="Close preview" data-close>×</button>
    <div class="preview-art" style="--project-art:url('assets/${slug}.jpg')"><div class="art-grid">${Array.from({length:16},(_,i)=>`<i class="art-block block-${i%6}"></i>`).join('')}</div><div class="art-copy"><span>${tags[0] || 'PROJECT'}</span><strong>${title}</strong><small>Designing clearer ways<br />to work with technology.</small></div><div class="art-panel"><span>✦</span><div class="panel-lines">${Array.from({length:9},(_,i)=>`<i style="width:${45 + (i*13)%48}%"></i>`).join('')}</div></div></div>
    <div class="preview-footer"><div><h2 id="preview-title">${title}</h2><p>2026</p></div><a class="case-study-button" href="project.html?project=${encodeURIComponent(slug)}">Case Study <span>↗</span></a></div>
  </section>`;
  document.body.appendChild(modal);
  requestAnimationFrame(() => modal.classList.add('is-open'));
  modal.querySelectorAll('[data-close]').forEach(item => item.addEventListener('click', () => closeProjectPreview(modal)));
  document.addEventListener('keydown', function escapePreview(event) { if (event.key === 'Escape') { closeProjectPreview(modal); document.removeEventListener('keydown', escapePreview); } });
}
function closeProjectPreview(modal) { modal.classList.remove('is-open'); setTimeout(() => modal.remove(), 220); }
document.querySelectorAll('.project').forEach(project => {
  project.addEventListener('click', event => {
    const href = project.getAttribute('href') || '';
    if (href === '#swaram') { event.preventDefault(); window.alert('Please contact me by email to access Swaram AI.'); return; }
    if (href.startsWith('#')) { event.preventDefault(); openProjectPreview(project); }
  });
});

function setFilter(filter) {
  document.querySelectorAll('.tab').forEach(tab => {
    const active = tab.dataset.filter === filter;
    tab.classList.toggle('active', active);
    tab.setAttribute('aria-selected', active);
  });
  projects.forEach(project => project.classList.toggle('hidden', filter !== 'all' && !project.dataset.tags.includes(filter)));
}
tabs.forEach(tab => tab.addEventListener('click', () => setFilter(tab.dataset.filter)));
if (showMore) showMore.addEventListener('click', () => {
  const expanded = showMore.getAttribute('aria-expanded') === 'true';
  document.querySelectorAll('#project-list .project').forEach(item => item.classList.toggle('hidden', !expanded && item !== projects[0] && item !== projects[1] && item !== projects[2] && item !== projects[3]));
  showMore.setAttribute('aria-expanded', String(!expanded));
  showMore.innerHTML = expanded ? 'View more <span>＋</span>' : 'View less <span>−</span>';
});
if (gallery) gallery.addEventListener('click', () => { document.body.classList.toggle('gallery-mode'); gallery.setAttribute('aria-pressed', document.body.classList.contains('gallery-mode')); });
if (theme) theme.addEventListener('click', () => { document.body.classList.toggle('light'); theme.setAttribute('aria-pressed', document.body.classList.contains('light')); });
