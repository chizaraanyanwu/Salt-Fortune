/* =============================================
   SALT & FORTUNE — game.js
   Reads SCENES (scenes.js) + PHYSICS_PUZZLES / PhysicsUI (physics.js).
   Drives all markup defined in index.html / style.css.

   Public API (called from inline onclick in index.html):
     Game.start()          — begin from 'intro'
     Game.goto(sceneId)    — jump to any scene
   ============================================= */

const Game = (() => {

  /* ── State ─────────────────────────────── */
  const state = {
    sceneId:    null,
    chapter:    1,
    friendship: 0,
    flags:      new Set(),    // scenes that have been 'set'
    evidence:   [],           // { id, icon, name, desc }
    notes:      [],           // physics shortNotes (also written by PhysicsUI)
  };

  /* ── Typewriter  */
  let typeTimer  = null;
  let fullText   = '';
  let displayed  = '';
  const CHAR_MS  = 25;   // ms per character

  function typewrite(text, el) {
    cancelTypewrite();
    fullText  = text;
    displayed = '';
    el.textContent = '';
    el.classList.add('typing');

    let i = 0;
    typeTimer = setInterval(() => {
      // Chunk a few chars per tick so long scenes aren't painfully slow
      const chunk = Math.min(3, text.length - i);
      displayed += text.slice(i, i + chunk);
      i += chunk;
      el.textContent = displayed;

      // Auto-scroll dialogue box
      const box = document.getElementById('dialogue-box');
      if (box) box.scrollTop = box.scrollHeight;

      if (i >= text.length) {
        cancelTypewrite();
        el.classList.remove('typing');
      }
    }, CHAR_MS);
  }

  function cancelTypewrite() {
    if (typeTimer) { clearInterval(typeTimer); typeTimer = null; }
  }

  function skipTypewrite() {
    cancelTypewrite();
    const el = document.getElementById('dialogue-text');
    if (el) {
      el.textContent = fullText;
      el.classList.remove('typing');
    }
  }

  /* ── Screen helpers ─────────────────────── */
  // showScreen is also called from inline onclick in index.html
  window.showScreen = function(id) {
    document.querySelectorAll('.sf-screen').forEach(s => {
      s.classList.add('d-none');
      s.classList.remove('d-flex');
    });
    const target = document.getElementById(id);
    if (target) {
      target.classList.remove('d-none');
      target.classList.add('d-flex');
    }
  };

  function openModal(id) {
    const el = document.getElementById(id);
    if (!el) return;
    bootstrap.Modal.getOrCreateInstance(el).show();
  }
  // Also expose for inline onclick
  window.openModal = openModal;

  /* ── Evidence helpers ───────────────────── */
  function addEvidence(ev) {
    if (!ev || state.evidence.find(e => e.id === ev.id)) return;
    state.evidence.push(ev);
    updateEvidenceCount();
    renderEvidenceList();
    flashEvidenceBadge();
  }

  function updateEvidenceCount() {
    const el = document.getElementById('inv-count');
    if (el) el.textContent = state.evidence.length;
  }

  function renderEvidenceList() {
    const list = document.getElementById('inventory-list');
    if (!list) return;
    if (state.evidence.length === 0) {
      list.innerHTML = '<p class="text-muted fst-italic small">Nothing collected yet.</p>';
      return;
    }
    list.innerHTML = state.evidence.map(ev =>
      `<div class="evidence-item">
        <div>
          <span class="evidence-label">${ev.name}</span>
          <span class="evidence-desc">${ev.desc}</span>
        </div>
      </div>`
    ).join('');
  }

  function flashEvidenceBadge() {
    const btn = document.querySelector('[onclick*="modal-inventory"]');
    if (!btn) return;
    btn.style.borderColor = 'var(--gold)';
    btn.style.color = 'var(--gold)';
    setTimeout(() => {
      btn.style.borderColor = '';
      btn.style.color = '';
    }, 1200);
  }

  /* ── Choice availability ────────────────── */
  function choiceAvailable(choice) {
    if (choice.requires) {
      const reqs = Array.isArray(choice.requires) ? choice.requires : [choice.requires];
      if (!reqs.every(f => state.flags.has(f))) return false;
    }
    if (choice.requires_not) {
      const reqs = Array.isArray(choice.requires_not) ? choice.requires_not : [choice.requires_not];
      if (reqs.some(f => state.flags.has(f))) return false;
    }
    if (choice.requires_min_friendship !== undefined) {
      if (state.friendship < choice.requires_min_friendship) return false;
    }
    return true;
  }

  /* ── Chapter label ──────────────────────── */
  const CHAPTER_TITLES = {
    1: 'Chapter 1 — Arrival',
    2: 'Chapter 2 — The Investigation',
    3: 'Chapter 3 — The Confrontation',
    4: 'Chapter 4 — Back to the Office',
    5: 'Chapter 5 — Dealer\'s Choice',
  };

  /* ── Render a scene ─────────────────────── */
  function renderScene(sceneId) {
    const scene = SCENES[sceneId];
    if (!scene) {
      console.error(`Game: unknown scene "${sceneId}"`);
      return;
    }

    state.sceneId = sceneId;
    state.chapter = scene.chapter || state.chapter;

    // Apply flags from this scene
    if (scene.sets) {
      const flags = Array.isArray(scene.sets) ? scene.sets : [scene.sets];
      flags.forEach(f => state.flags.add(f));
    }

    // Apply friendship delta
    if (typeof scene.friendship === 'number') {
      state.friendship += scene.friendship;
    }

    // Add evidence
    if (scene.addsEvidence) addEvidence(scene.addsEvidence);

    // Scene background
    const bgEl = document.getElementById('scene-bg');
    if (bgEl) {
      bgEl.style.opacity = '0';
      bgEl.src = scene.bg || '';
      bgEl.onload = () => { bgEl.style.opacity = ''; };
      // If no image or fails to load, just show as-is
      bgEl.onerror = () => { bgEl.style.opacity = '0.3'; };
    }

    // Location tag
    const nameTag = document.getElementById('scene-name');
    if (nameTag) nameTag.textContent = scene.location || '';

    // Speaker
    const speakerEl = document.getElementById('speaker-label');
    if (speakerEl) speakerEl.textContent = scene.speaker || '';

    // Chapter indicator
    const chapEl = document.getElementById('chapter-indicator');
    if (chapEl) chapEl.textContent = CHAPTER_TITLES[state.chapter] || `Chapter ${state.chapter}`;

    // Dialogue — typewrite, click to skip
    const textEl = document.getElementById('dialogue-text');
    if (textEl) {
      typewrite(scene.text || '', textEl);
      // Click anywhere on the dialogue box to skip typewriter
      const box = document.getElementById('dialogue-box');
      if (box) {
        box.onclick = () => {
          if (typeTimer) skipTypewrite();
        };
      }
    }

    // Choices — render after a short delay so they don't flash up
    // before any typewriter starts; but always render immediately so
    // players who skip have something to click.
    renderChoices(scene);
  }

  function renderChoices(scene) {
    const container = document.getElementById('choices-container');
    if (!container) return;
    container.innerHTML = '';

    const available = (scene.choices || []).filter(choiceAvailable);

    // If no choices and this is an ending — show ending screen instead
    if (available.length === 0 && scene.ending) {
      setTimeout(() => showEnding(scene), 1200);
      return;
    }

    available.forEach(choice => {
      const btn = document.createElement('button');
      btn.className = 'choice-btn' + (choice.physics ? ' physics-trigger' : '');
      btn.textContent = choice.text;
      btn.onclick = () => handleChoice(choice);
      container.appendChild(btn);
    });
  }

  /* ── Choice handler ─────────────────────── */
  function handleChoice(choice) {
    // Apply any flag sets attached to the choice itself
    if (choice.sets) {
      const flags = Array.isArray(choice.sets) ? choice.sets : [choice.sets];
      flags.forEach(f => state.flags.add(f));
    }

    if (choice.physics) {
      // Show physics modal; on close, continue to next scene
      PhysicsUI.show(choice.physics, () => {
        if (choice.next) goto(choice.next);
      });
    } else if (choice.next) {
      goto(choice.next);
    } else if (choice.ending) {
      // choice with an explicit ending tag but no next
      const scene = SCENES[state.sceneId];
      if (scene) showEnding(scene);
    }
  }

  /* ── Ending screen ──────────────────────── */
  const ENDING_META = {
    closed_case: {
      eyebrow: 'ENDING — THE CLOSED FILE',
      title:   'Natural Causes',
      colour:  'var(--teal)',
    },
    served_time: {
      eyebrow: 'ENDING — THE LONG WAY ROUND',
      title:   'Three Years',
      colour:  'var(--crimson-light)',
    },
  };

  function showEnding(scene) {
    const meta = ENDING_META[scene.ending] || {
      eyebrow: 'ENDING',
      title:   'The End',
      colour:  'var(--gold)',
    };

    const container = document.getElementById('ending-container');
    if (!container) return;

    // Evidence recap
    const recapItems = state.evidence.map(ev =>
      `<div class="recap-item">
        <span class="recap-icon">${ev.icon}</span>
        <div>
          <span class="recap-label">${ev.name}</span>
          <span class="evidence-desc">${ev.desc}</span>
        </div>
      </div>`
    ).join('');

    container.innerHTML =
      `<div class="sf-fadein text-center">
        <div class="ending-eyebrow" style="color:${meta.colour};">${meta.eyebrow}</div>
        <h2 class="ending-title">${meta.title}</h2>
        <div class="ending-text">${(scene.text || '').replace(/\n\n/g,'<br><br>').replace(/\*([^*]+)\*/g,'<em>$1</em>')}</div>
        ${state.evidence.length > 0 ? `
        <div class="ending-recap-box">
          <h4>Evidence Collected</h4>
          ${recapItems}
        </div>` : ''}
        <div class="ending-recap-box" style="text-align:center;">
          <span style="font-family:var(--font-mono);font-size:0.78rem;color:var(--text-dim);letter-spacing:0.2em;">
            FRIENDSHIP SCORE
          </span><br>
          <span style="font-family:var(--font-display);font-size:2rem;color:${meta.colour};">
            ${state.friendship > 0 ? '+' : ''}${state.friendship}
          </span>
        </div>
        <button class="btn sf-btn-primary px-5 mt-2" onclick="Game.restart()">Play Again</button>
      </div>`;

    showScreen('screen-ending');
  }

  /* ── Public API ─────────────────────────── */
  function start() {
    resetState();
    showScreen('screen-game');
    renderScene('intro');
  }

  function goto(sceneId) {
    cancelTypewrite();
    renderScene(sceneId);
  }

  function restart() {
    resetState();
    showScreen('screen-title');
  }

  function resetState() {
    state.sceneId    = null;
    state.chapter    = 1;
    state.friendship = 0;
    state.flags.clear();
    state.evidence   = [];

    // Reset evidence list UI
    const invList = document.getElementById('inventory-list');
    if (invList) invList.innerHTML = '<p class="text-muted fst-italic small">Nothing collected yet.</p>';
    const invCount = document.getElementById('inv-count');
    if (invCount) invCount.textContent = '0';

    // Reset case notes (physics writes its own, so just clear)
    const notesList = document.getElementById('notes-list');
    if (notesList) notesList.innerHTML = '<p class="text-muted fst-italic small">No physics notes yet. Investigate scenes to uncover clues.</p>';
  }

  /* ── Boot  */
  document.addEventListener('DOMContentLoaded', () => {
    // Ensure title screen is the first thing visible
    showScreen('screen-title');
  });

  return { start, goto, restart };

})();