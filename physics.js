/* =============================================
   SALT & FORTUNE — physics.js
   Physics puzzle data + PhysicsUI integration.
   Duplicate kinematics removed — 5 puzzles total.
   ============================================= */

const PHYSICS_PUZZLES = {

  // ── 1. KINEMATICS & PROJECTILE MOTION ─────
  projectile_johns_car: {
    topic: 'Kinematics & Projectile Motion',
    icon: '🚗',
    storyContext:
      `John Hargrove drove off Lover's Cliff twenty years ago. The crash report noted he was speeding, ` +
      `but never said by how much. The cliff is 30 metres tall. The wreck was found 40 metres from the base. ` +
      `That distance isn't a guess — it's physics leaving a record.`,
    narrative:
      `A car launched horizontally off a cliff travels downward under gravity at the same time it travels forward. ` +
      `The two movements are completely independent. Gravity determines how long the fall takes. ` +
      `Horizontal speed determines how far the car travels in that time. ` +
      `If we know both distances, we can work backwards to the minimum launch speed.\n\n` +
      `The crash report told us the landing point was 40 metres from the base of a 30-metre cliff. ` +
      `The road speed limit was 30 km/h. John was well above it.`,
    equations:
      `GIVEN\n` +
      `  Cliff height:          h = 30 m\n` +
      `  Horizontal distance:   x = 40 m\n` +
      `  Gravity:               g = 9.8 m/s²\n` +
      `\n` +
      `STEP 1 — How long did the car fall?\n` +
      `  h = ½gt²\n` +
      `  t = √(2h/g) = √(60/9.8) ≈ 2.47 s\n` +
      `\n` +
      `STEP 2 — Minimum horizontal speed\n` +
      `  x = v₀ × t\n` +
      `  v₀ = x/t = 40/2.47 ≈ 16.2 m/s → 58 km/h\n` +
      `\n` +
      `  Posted limit:  30 km/h`,
    conclusion:
      `John was travelling at nearly twice the speed limit on a narrow cliff road, at night, in the dark. ` +
      `That's not recklessness. That's a man who needed to be somewhere else as fast as possible. ` +
      `The argument with Harlowe happened that same night. He never came home.`,
    shortNote: 'John needed ≥58 km/h to land 40 m from a 30 m cliff. Nearly double the limit. He was fleeing.',
  },

  // ── 2. WORK & ENERGY ──────────────────────
  work_bookcase: {
    topic: 'Work & Energy — Friction',
    icon: '📚',
    storyContext:
      `The rotating bookcase in Harlowe's office has been moved many times — the wear arc on the floor proves it. ` +
      `Someone with longstanding access knew about the hidden safe. ` +
      `The question is: who in this family could physically do it?`,
    narrative:
      `Moving a heavy object along a floor means working against friction the entire way. ` +
      `Work equals the friction force multiplied by the distance moved. ` +
      `The friction force depends on the object's mass, gravity, and the surface materials. ` +
      `By measuring the scuff arc and estimating the bookcase's mass, ` +
      `we can calculate the minimum physical effort required — and compare that against each suspect.`,
    equations:
      `GIVEN\n` +
      `  Bookcase mass:          m = 180 kg  (solid mahogany, estimated)\n` +
      `  Distance moved:         d = 2.3 m   (measured from floor wear arc)\n` +
      `  Kinetic friction coeff: μₖ = 0.4   (hardwood on hardwood)\n` +
      `  Gravity:                g = 9.8 m/s²\n` +
      `\n` +
      `STEP 1 — Friction force\n` +
      `  F = μₖ × m × g = 0.4 × 180 × 9.8 ≈ 706 N\n` +
      `\n` +
      `STEP 2 — Work done\n` +
      `  W = F × d = 706 × 2.3 ≈ 1,623 J\n` +
      `\n` +
      `  Equivalent to lifting a 165 kg object 1 metre straight up.`,
    conclusion:
      `Harlowe Hargrove — 78, osteoporotic, resting heart rate of 94 bpm — did not move this bookcase alone. ` +
      `Someone else knew about the safe and had the strength to access it. ` +
      `Whitney managed this house for decades. Aaron grew up here. Either one could have moved it.`,
    shortNote: 'Moving the bookcase required ~1,623 J of work. Too much for Harlowe alone. Points to someone who grew up here.',
  },

  // ── 3. SIMPLE HARMONIC MOTION — PENDULUM ──
  pendulum_clock: {
    topic: 'Simple Harmonic Motion — Pendulum',
    icon: '🕐',
    storyContext:
      `The clock pulled from Harlowe's safe is a pendulum clock — the kind her mother had on the mantle when ` +
      `Octavia was growing up. She'd spent hours watching it as a kid, timing her homework against the tick. ` +
      `A pendulum clock doesn't drift. It doesn't guess. The swing is locked to physics: ` +
      `the length of the rod, and nothing else.`,
    narrative:
      `A simple pendulum's period — the time for one complete swing — depends only on its length and gravity. ` +
      `Not the mass, not how wide it swings (for small angles). Just length and g. ` +
      `This is why pendulum clocks were the world's most accurate timekeepers for three hundred years: ` +
      `the physics is airtight.\n\n` +
      `It also means you can run the equation backwards. Know the period, find the length. ` +
      `Know the length, verify the clock was built correctly. ` +
      `And when a correct clock stops — it stops exactly where it was. No drift, no error. ` +
      `The frozen hands are a precise record of a precise moment.`,
    equations:
      `PENDULUM PERIOD FORMULA:\n` +
      `  T = 2π × √(L / g)\n` +
      `\n` +
      `GIVEN\n` +
      `  Observed period:  T = 2.0 s\n` +
      `  Gravity:          g = 9.8 m/s²\n` +
      `\n` +
      `SOLVE FOR L (pendulum length):\n` +
      `  T / 2π = √(L / g)\n` +
      `  L = g × (T / 2π)²\n` +
      `    = 9.8 × (2.0 / 6.283)²\n` +
      `    ≈ 9.8 × 0.1013\n` +
      `    ≈ 0.99 m  — standard longcase clock length\n` +
      `\n` +
      `  Clock was functioning correctly before it stopped.`,
    conclusion:
      `The clock was keeping perfect time. Its period matches a correctly-built longcase pendulum exactly. ` +
      `When it stopped at 11:42 PM, it stopped precisely — the way a pendulum clock always does. ` +
      `Someone was in Harlowe's office at that moment. ` +
      `Whether they stopped the clock on purpose or it simply froze in the chaos, the physics doesn't change: ` +
      `11:42 PM is when it ended.`,
    shortNote: 'Pendulum period confirms the clock was accurate. It stopped at exactly 11:42 PM — physics doesn\'t lie.',
  },

  // ── 4. ELECTROCHEMICAL GRADIENTS ──────────
  kcl_heart: {
    topic: 'Electrochemical Gradients & Cardiac Function',
    icon: '🍬',
    storyContext:
      `Harlowe's serum potassium came back at 6.4 mmol/L. Normal is under 5.0. ` +
      `He had kidney disease — his body couldn't clear excess potassium. ` +
      `He had heart disease — his heart was already vulnerable. ` +
      `And for the past year, someone had been bringing him toffees every week.`,
    narrative:
      `The human heart beats because of electrochemical signals — ion concentration differences ` +
      `across cardiac cell membranes that create electrical potentials, which trigger muscle contractions. ` +
      `The Nernst equation describes the voltage generated by any ion at any concentration ratio.\n\n` +
      `Potassium (K⁺) is especially critical. Under normal conditions, there's much more K⁺ inside cardiac cells ` +
      `than outside — that gradient drives repolarisation, the reset between heartbeats. ` +
      `When excess potassium floods the bloodstream, the gradient flattens. ` +
      `Repolarisation slows. The heart develops arrhythmias. ` +
      `In a patient whose kidneys can't compensate and whose heart is already damaged, ` +
      `this is fatal — and appears, on any standard death certificate, ` +
      `exactly like the cardiac arrest everyone was already expecting.`,
    equations:
      `NERNST EQUATION (for K⁺):\n` +
      `  E_K = (RT / zF) × ln([K⁺]_out / [K⁺]_in)\n` +
      `\n` +
      `NORMAL STATE:\n` +
      `  [K⁺]_out ≈ 4 mmol/L,  [K⁺]_in ≈ 120 mmol/L\n` +
      `  E_K ≈ −90 mV  →  stable resting potential\n` +
      `\n` +
      `HARLOWE'S STATE (K⁺ at 6.4 mmol/L):\n` +
      `  [K⁺]_out ≈ 6.4 mmol/L\n` +
      `  E_K shifts toward −80 mV and above\n` +
      `  Effect: delayed repolarisation → arrhythmia\n` +
      `\n` +
      `METHOD:\n` +
      `  KCl is tasteless in small quantities.\n` +
      `  Delivered in toffees, weekly, over six months.\n` +
      `  Gradual accumulation — undetectable until specifically requested.`,
    conclusion:
      `Harlowe's failing kidneys could not clear the excess potassium. ` +
      `His heart, already damaged by hypertension, was fatally sensitive to the disrupted gradient. ` +
      `Death by cardiac arrest — exactly as expected in a man with his conditions. ` +
      `The GP attributed rising K⁺ levels to diet for six months. ` +
      `No one looked for another source until Fieldman asked.`,
    shortNote: 'KCl in toffees → elevated [K⁺]_out → Nernst potential shifts → cardiac repolarisation fails.',
  },

  // ── 5. MAGNETIC FIELDS ────────────────────
  magnetic_locket: {
    topic: 'Magnetic Fields & Ferromagnetism',
    icon: '🔗',
    storyContext:
      `Two identical silver lockets. One around Octavia's neck — her mother's. ` +
      `One around Aaron's, returned from Harlowe's effects with the note: "it was always yours." ` +
      `Silver is not magnetic. The clasps, however, are steel. ` +
      `Octavia notices, standing close to Aaron in the corridor, that the two lockets drift toward each other — ` +
      `barely perceptible, but there.`,
    narrative:
      `Ferromagnetic materials — iron, nickel, cobalt, steel — have microscopic regions called magnetic domains. ` +
      `In an unmagnetised object, these domains point in random directions and cancel out. ` +
      `In a magnetised object, the domains are aligned, producing a net field.\n\n` +
      `A nearby magnet can temporarily align the domains in an unmagnetised piece of steel — ` +
      `called magnetic induction. The induced field then attracts back toward the source. ` +
      `You don't need two permanent magnets to get attraction. You only need one magnet and one piece of steel. ` +
      `The force falls off sharply with distance — but up close, even small induced fields are felt.`,
    equations:
      `MAGNETIC FORCE (dipole approximation):\n` +
      `  F ∝ m₁ × m₂ / r²\n` +
      `\n` +
      `  where r = distance between objects\n` +
      `\n` +
      `FORCE FALLS OFF AS 1/r²:\n` +
      `  Double the distance → force drops to ¼\n` +
      `  At very close range, even small induced fields attract\n` +
      `\n` +
      `INDUCTION (qualitative):\n` +
      `  External B-field aligns domains in steel\n` +
      `  Lenz's law: induced field opposes change\n` +
      `  Net result: attraction between magnet and steel`,
    conclusion:
      `The lockets are a matching pair — made together, meant together. ` +
      `One went with Sonia when Harlowe sent her away. One stayed with Aaron. ` +
      `Harlowe kept Aaron's locket for years. He wrote a note: "it was always yours." ` +
      `Maybe he meant the locket. Maybe he meant something else entirely.`,
    shortNote: 'Two matching steel-clasp lockets attract via magnetic induction. Made as a pair. Separated for forty years.',
  },

};


/* =============================================
   PhysicsUI
   Wires PHYSICS_PUZZLES into:
     #modal-physics  (Bootstrap modal in index.html)
     #physics-guide-grid  (guide screen)
     #notes-list  (case notes modal)
   ============================================= */

const PhysicsUI = (() => {

  let bsModal = null;
  let activeKey = null;
  let activeCallback = null;

  function esc(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function toParas(text) {
    return text
      .split('\n\n')
      .map(b => `<p class="mb-2">${esc(b).replace(/\n/g, '<br>')}</p>`)
      .join('');
  }

  function show(key, onClose) {
    const p = PHYSICS_PUZZLES[key];
    if (!p) { if (typeof onClose === 'function') onClose(); return; }

    activeKey = key;
    activeCallback = onClose;

    document.getElementById('physics-title').textContent   = p.topic;
    document.getElementById('physics-content').innerHTML   =
      toParas(p.storyContext) +
      '<hr class="sf-border" style="opacity:0.3;margin:0.75rem 0;">' +
      toParas(p.narrative);
    document.getElementById('physics-equation').textContent = p.equations;
    document.getElementById('physics-conclusion').innerHTML = toParas(p.conclusion);

    if (!bsModal) {
      bsModal = new bootstrap.Modal(
        document.getElementById('modal-physics'),
        { backdrop: 'static', keyboard: false }
      );
    }
    bsModal.show();
  }

  function addNote(key) {
    const p = PHYSICS_PUZZLES[key];
    if (!p) return;
    const list = document.getElementById('notes-list');
    if (!list) return;
    const placeholder = list.querySelector('p.text-muted');
    if (placeholder) placeholder.remove();
    if (list.querySelector(`[data-note-key="${key}"]`)) return;
    const item = document.createElement('div');
    item.className = 'note-item';
    item.dataset.noteKey = key;
    item.innerHTML =
      `<span class="note-topic">${esc(p.topic).toUpperCase()}</span>` +
      esc(p.shortNote);
    list.appendChild(item);
  }

  function renderGuide() {
    const grid = document.getElementById('physics-guide-grid');
    if (!grid) return;
    grid.innerHTML = '';
    Object.values(PHYSICS_PUZZLES).forEach(p => {
      const col = document.createElement('div');
      col.className = 'col-12 col-md-6';
      col.innerHTML =
        `<div class="guide-card h-100">` +
          `<h4>${esc(p.topic)}</h4>` +
          `<p>${esc(p.storyContext)}</p>` +
          `<div class="guide-card-eq">${esc(p.shortNote)}</div>` +
        `</div>`;
      grid.appendChild(col);
    });
  }

  function initCloseButton() {
    const btn = document.getElementById('physics-close-btn');
    if (!btn) return;
    btn.addEventListener('click', () => {
      if (activeKey) addNote(activeKey);
      if (bsModal) bsModal.hide();
      const cb = activeCallback;
      activeKey = null;
      activeCallback = null;
      if (typeof cb === 'function') cb();
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initCloseButton();
    renderGuide();
  });

  return { show, addNote, renderGuide };

})();