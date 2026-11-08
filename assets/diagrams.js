// Stage-by-stage architecture stepper. data-start on the root picks the first stage shown.
// Elements with class "stg" carry data-s (first stage) and data-e (first stage where hidden).
// Boxes with data-term open the glossary entry in a new tab.
function initStepper(rootId, stages) {
  const root = document.getElementById(rootId);
  const pills = root.querySelector('.pills');
  const title = root.querySelector('.stage-text .t');
  const desc = root.querySelector('.stage-text .d');
  const all = stages.length + 1;
  let cur = 1;

  stages.forEach((s, i) => {
    const b = document.createElement('button');
    b.className = 'pill';
    b.type = 'button';
    b.innerHTML = '<span class="dot" style="background:' + s.c + '"></span>' + s.n;
    b.addEventListener('click', () => go(i + 1));
    pills.appendChild(b);
  });

  function go(k) {
    cur = Math.min(Math.max(k, 1), all);
    const showAll = cur === all;
    const stage = showAll ? stages.length : cur;
    root.querySelectorAll('.pill').forEach((b, i) => b.classList.toggle('on', showAll || i + 1 === stage));
    root.querySelectorAll('.stg').forEach(el => {
      const s = +el.dataset.s, e = +el.dataset.e;
      el.style.display = (s <= stage && stage < e) ? '' : 'none';
      el.style.opacity = (showAll || s === stage) ? 1 : 0.4;
    });
    title.textContent = showAll ? 'Tüm aşamalar' : stages[stage - 1].n;
    desc.innerHTML = showAll ? root.dataset.all : stages[stage - 1].d;
  }

  root.querySelector('[data-act="prev"]').addEventListener('click', () => go(cur - 1));
  root.querySelector('[data-act="next"]').addEventListener('click', () => go(cur + 1));
  root.querySelector('[data-act="all"]').addEventListener('click', () => go(all));

  root.querySelectorAll('[data-term]').forEach(g => {
    g.classList.add('box');
    g.setAttribute('tabindex', '0');
    g.setAttribute('role', 'link');
    const open = () => { window.open('sozluk.html#' + g.dataset.term, '_blank', 'noopener'); };
    g.addEventListener('click', open);
    g.addEventListener('keydown', ev => { if (ev.key === 'Enter') open(); });
  });

  // Any element with data-href (e.g. a table row) is clickable.
  root.querySelectorAll('[data-href]').forEach(el => {
    el.classList.add('linkable');
    el.setAttribute('tabindex', '0');
    el.setAttribute('role', 'link');
    const href = el.dataset.href;
    // same-page anchors scroll in place; other pages open in a new tab
    const open = () => { if (href.startsWith('#')) { location.hash = href; } else { window.open(href, '_blank', 'noopener'); } };
    el.addEventListener('click', ev => { if (!ev.target.closest('a')) open(); });
    el.addEventListener('keydown', ev => { if (ev.key === 'Enter') open(); });
  });

  // Endpoint and error cells open an example row right below them.
  root.querySelectorAll('.ex-toggle').forEach(td => {
    td.setAttribute('tabindex', '0');
    td.setAttribute('role', 'button');
    const toggle = () => {
      const ex = td.parentElement.nextElementSibling;
      if (!ex || !ex.classList.contains('ex-row')) return;
      ex.hidden = !ex.hidden;
      td.classList.toggle('open', !ex.hidden);
    };
    td.addEventListener('click', toggle);
    td.addEventListener('keydown', ev => { if (ev.key === 'Enter') toggle(); });
  });

  go(+root.dataset.start || 1);
}
