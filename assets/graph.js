const PINK_THEME = {
  fill: '#040407',
  stroke: '#ff2e92',
  text: '#ffffff',
  muted: '#ff96ca'
};

const FIELD_ORDER = ['ml', 'gamedev', 'web', 'desktop', 'design', 'security'];

const FIELD_LABELS = {
  ml: 'Artificial Neural Network',
  gamedev: 'Game Development',
  web: 'Web Development',
  desktop: 'Software Development',
  design: 'User Interface Design',
  security: 'Cyber Security'
};

const FIELD_DESCRIPTIONS = {
  ml: 'Diving into deep theory playground. This section tracks my independent research into artificial neural networks, alternative architectures like predictive coding, and emergent behaviors.',
  gamedev: 'Projects built purely for creative exploration and mechanical practice. This is where I experiment with game loops, physics, and building assets entirely from scratch.',
  web: 'Core applications developed as part of my academic curriculum and hackathons, focusing on full-stack functionality, database handling, and real-world utility.',
  desktop: 'Systems and desktop applications built to fulfill curriculum requirements, focusing on software engineering fundamentals, local storage, and practical CRUD operations.',
  design: 'Design systems and interface layouts aligned with my academic coursework, emphasizing visual layout structure and prototyping.',
  security: 'Extracurricular skill-honing. This logs my progress through hands-on labs and CTF challenges to build sharp defensive and analytical cybersecurity skills.'
};

const PROJECTS = [
  { id: 0, name: 'ANN Architecture Research', field: 'ml', size: 48, desc: 'Ongoing theory and concepts research study on artificial neural networks — structure, predictive coding, spiking neural activity, and emergent behavior.', tags: ['Python'] },
  { id: 1, name: 'Candy Land Game', field: 'gamedev', size: 54, desc: 'Complete platformer game in Pygame with all assets made from scratch demonstrating game development, logic and design skills.', tags: ['Python', 'Pygame'], videoUrl: 'https://res.cloudinary.com/dcp4wsqk6/video/upload/v1781534662/candy_upxc4a.mp4' },
  { id: 2, name: 'Bouncing Ball Game', field: 'gamedev', size: 38, desc: 'A basic platformer game in Godot with Doodle Jump mechanics demonstrating basic game logic.', tags: ['Godot', 'GDScript'], videoUrl: 'https://res.cloudinary.com/dcp4wsqk6/video/upload/v1781534228/ball_zqhalw.mp4' },
  { id: 3, name: 'Cat Game', field: 'gamedev', size: 40, desc: 'Cat catching food game in Godot inspired by Pou mini games with all assets/files made from scratch demonstrating basic game logic and app launching.', tags: ['Godot', 'GDScript'], videoUrl: 'https://res.cloudinary.com/dcp4wsqk6/video/upload/v1781534313/cat_dye6pg.mp4' },
  { id: 4, name: 'Rock Paper Scissors', field: 'gamedev', size: 28, desc: 'Rock Paper Scissors game with a bot enemy in Python for building practice.', tags: ['Python'], videoUrl: 'https://res.cloudinary.com/dcp4wsqk6/video/upload/v1781534243/rps_r0mujj.mp4' },
  { id: 5, name: 'Basic Pong', field: 'gamedev', size: 35, desc: 'Basic Pong game in Python demonstrating 2 online player mechanics running on a local server for building practice.', tags: ['Python'], videoUrl: 'https://res.cloudinary.com/dcp4wsqk6/video/upload/v1781534727/pong_xwuot7.mp4' },
  { id: 6, name: 'SagipQ Web App', field: 'web', size: 55, desc: 'Worked as a Backend dev role on Hackathon competition on a demo community webapp that matches info and images to search for missing people with the use of open source AI — \'InsightFace\'.', tags: ['FastAPI', 'SQLite', 'JS', 'Python', 'HTML', 'CSS', 'InsightFace'], videoUrl: 'https://res.cloudinary.com/dcp4wsqk6/video/upload/v1781534601/sagipq_ewtfep.mp4' },
  { id: 7, name: 'Classroom Reservation Management System', field: 'web', size: 48, desc: 'A demo classroom reservation management system for the school campus in PHP that solves the problem of lacked of classrooms.', tags: ['PHP', 'CSS', 'Figma', 'JS', 'MySQL'], videoUrl: 'https://res.cloudinary.com/dcp4wsqk6/video/upload/v1781534395/crm_ypfzfx.mp4' },
  { id: 8, name: 'ArtHub Web Platform', field: 'web', size: 44, desc: 'An idea and design demo showcasing social media + commissioning + shopping platform for artists in PHP to help artist and commissioners have an internet space of their own.', tags: ['PHP', 'HTML', 'CSS', 'JS', 'MySQL', 'Figma'], videoUrl: 'https://res.cloudinary.com/dcp4wsqk6/video/upload/v1781534764/art_znfhpd.mp4' },
  { id: 9, name: 'Hotel Reservation System', field: 'web', size: 46, desc: 'Served as Tech lead on a hotel property management demo site showcasing leadership and technical skills.', tags: ['PHP', 'HTML', 'CSS', 'JS', 'MySQL'], videoUrl: '' },
  { id: 10, name: 'AniCorner Web Store', field: 'web', size: 40, desc: 'Online shopping demo for anime merch. HTML, JS, CSS and Flask for the API on localhost.', tags: ['Python Flask', 'JS', 'CSS', 'HTML'], videoUrl: 'https://res.cloudinary.com/dcp4wsqk6/video/upload/v1781534622/anic_joeyhx.mp4' },
  { id: 11, name: 'Pixel Arter', field: 'web', size: 36, desc: 'Ecommerce platform demo for game assets/files inspired by Canva. Static, design-focused, built as a Single Page Application.', tags: ['HTML', 'JS', 'CSS'], videoUrl: 'https://res.cloudinary.com/dcp4wsqk6/video/upload/v1781535101/pa_clmehp.mp4' },
  { id: 12, name: 'Study Notebook', field: 'web', size: 32, desc: 'Web notebook with writing, scheduling, and links to Google and games for study breaks. Demonstrates HTML basics.', tags: ['HTML', 'CSS'], videoUrl: 'https://res.cloudinary.com/dcp4wsqk6/video/upload/v1781534739/ntbk_mc0zen.mp4' },
  { id: 13, name: 'Canteen Management', field: 'desktop', size: 32, desc: 'Basic canteen management system with inventory management and ordering system in Tkinter Python using basic CRUD operations.', tags: ['Python', 'Tkinter'], videoUrl: 'https://res.cloudinary.com/dcp4wsqk6/video/upload/v1781534416/canteen_p2cgjm.mp4' },
  { id: 14, name: 'Business App Form', field: 'desktop', size: 32, desc: 'Basic business application form with text input fields in Tkinter with basic CRUD operations.', tags: ['Python', 'Tkinter'], videoUrl: 'https://res.cloudinary.com/dcp4wsqk6/video/upload/v1781534833/form_flat78.mp4' },
  { id: 15, name: 'C# CRUD Form', field: 'desktop', size: 25, desc: 'Simple CRUD form in C# with Visual Studio.', tags: ['C#', 'Visual Studio'], videoUrl: 'https://res.cloudinary.com/dcp4wsqk6/video/upload/v1781534815/crud_vhadff.mp4' },
  { id: 16, name: 'Figma Demo Design', field: 'design', size: 38, desc: 'Demo phone product page designed in Figma for school purposes. Focused on layout and visual polish.', tags: ['Figma'], videoUrl: 'https://res.cloudinary.com/dcp4wsqk6/video/upload/v1781534786/phone_rvvyrt.mp4' },
  { id: 19, name: 'picoCTF Puzzle', field: 'security', size: 40, desc: 'Solved 19 puzzle challenges covering various cybersecurity topics such as Web Exploitation, Cryptography, Reverse Engineering, Forensics and General Skills.', tags: ['picoCTF', 'linux', 'cyberchef'] },
];

const canvas = document.getElementById('graph-canvas');
const ctx = canvas.getContext('2d');
const dpr = window.devicePixelRatio || 1;

let W = 0, H = 0;
let fieldNodes = [];
let projectNodes = [];
let edges = [];
let hoveredId = null;

function resize() {
  const container = canvas.parentElement;

  const isMobile = (window.innerWidth < 768);


  W = container.clientWidth;
  H = isMobile ? 1300 : container.clientHeight;

  canvas.width = W * dpr;
  canvas.height = H * dpr;
  ctx.imageSmoothingEnabled = true;
}

function seededRandom(seed) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

function buildLayout() {
  edges = [];
  fieldNodes = [];
  projectNodes = [];

  const countFields = FIELD_ORDER.length;

  const isMobile = (W < 768);

  FIELD_ORDER.forEach((key, i) => {
    const isMobile = (window.innerWidth < 768);

    let nodeY;
    if (isMobile) {
      const topPadding = 80;
      const usableHeight = H - 240;
      nodeY = topPadding + (usableHeight * (i / (countFields - 1)));
    } else {

      const segmentY = H / (countFields + 1);
      nodeY = segmentY * (i + 1);
    }

    const isLeftTrack = (i % 2 === 0);
    const horizontalShift = isMobile ? (W * 0.14) : (W * 0.22);
    const nodeX = isLeftTrack ? (W / 2 - horizontalShift) : (W / 2 + horizontalShift);

    const fn = {
      id: 'field-' + key,
      key,
      isField: true,
      label: FIELD_LABELS[key],
      x: nodeX,
      y: nodeY,
      size: isMobile ? 42 : 64,
      isLeft: isLeftTrack
    };
    fieldNodes.push(fn);
  });

  for (let i = 0; i < fieldNodes.length - 1; i++) {
    edges.push({
      type: 'spine',
      x1: fieldNodes[i].x,
      y1: fieldNodes[i].y,
      x2: fieldNodes[i + 1].x,
      y2: fieldNodes[i + 1].y
    });
  }

  FIELD_ORDER.forEach((key, fi) => {
    const fn = fieldNodes[fi];
    const myProjects = PROJECTS.filter(p => p.field === key);
    const count = myProjects.length;
    if (!count) return;

    const baseAngle = fn.isLeft ? Math.PI : 0;


    const spreadAngleRange = isMobile ? (Math.PI * 1.05) : (Math.PI * 1.20);

    myProjects.forEach((p, pi) => {
      const fraction = count === 1 ? 0.5 : pi / (count - 1);
      const angle = (baseAngle - spreadAngleRange / 2) + (fraction * spreadAngleRange);

      const baseDist = isMobile ? 48 : 90;
      const dist = baseDist + (p.size || 20) + (seededRandom(p.id + 42) * (isMobile ? 20 : 55));

      const node = {
        ...p,
        isField: false,
        x: fn.x + Math.cos(angle) * dist,
        y: fn.y + Math.sin(angle) * dist,
        size: p.size ? Math.max(isMobile ? 18 : 26, p.size * (isMobile ? 0.65 : 0.95)) : 32
      };

      projectNodes.push(node);
      edges.push({ type: 'branch', x1: fn.x, y1: fn.y, x2: node.x, y2: node.y });
    });
  });
}

function wrapText(text, maxW, lineH, cx, cy) {
  const words = text.split(' ');
  let lines = [], line = '';
  words.forEach(w => {
    const test = line ? line + ' ' + w : w;
    if (ctx.measureText(test).width > maxW && line) { lines.push(line); line = w; }
    else line = test;
  });
  if (line) lines.push(line);
  const sy = cy - (lines.length - 1) * lineH / 2;
  lines.forEach((l, i) => ctx.fillText(l, cx, sy + i * lineH));
}

function draw() {
  ctx.clearRect(0, 0, W * dpr, H * dpr);
  ctx.save();
  ctx.scale(dpr, dpr);

  edges.forEach(e => {
    ctx.beginPath();
    ctx.moveTo(e.x1, e.y1);
    ctx.lineTo(e.x2, e.y2);
    if (e.type === 'ring') {
      ctx.strokeStyle = 'rgba(255, 46, 146, 0.15)';
      ctx.lineWidth = 2;
    } else {
      ctx.strokeStyle = 'rgba(255, 46, 146, 0.28)';
      ctx.lineWidth = 1;
    }
    ctx.stroke();
  });

  projectNodes.forEach(n => {
    const isHovered = hoveredId === n.id;
    const r = n.size * (isHovered ? 1.08 : 1);

    ctx.save();
    ctx.beginPath();
    ctx.arc(n.x, n.y, r, 0, Math.PI * 2);

    ctx.fillStyle = isHovered ? 'rgba(255, 46, 146, 0.15)' : PINK_THEME.fill;
    ctx.fill();

    ctx.strokeStyle = PINK_THEME.stroke;
    ctx.lineWidth = isHovered ? 2 : 1;
    ctx.stroke();

    ctx.fillStyle = isHovered ? '#ffffff' : PINK_THEME.muted;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const fs = Math.max(10, Math.min(11.5, n.size * 0.32));
    ctx.font = `500 ${fs}px "Plus Jakarta Sans", sans-serif`;
    wrapText(n.name, r * 1.6, fs * 1.3, n.x, n.y);
    ctx.restore();
  });

  fieldNodes.forEach(n => {
    const GloryHover = hoveredId === n.id;
    const r = n.size * (GloryHover ? 1.05 : 1);

    ctx.save();
    ctx.beginPath();
    ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
    ctx.fillStyle = GloryHover ? 'rgba(255, 46, 146, 0.18)' : '#040407';
    ctx.fill();

    ctx.strokeStyle = PINK_THEME.stroke;
    ctx.lineWidth = 2.5;
    ctx.stroke();

    ctx.fillStyle = PINK_THEME.text;
    ctx.font = `700 12px "Plus Jakarta Sans", sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    wrapText(n.label, r * 1.5, 14, n.x, n.y);
    ctx.restore();
  });

  ctx.restore();
}

function hitTest(mx, my) {
  for (let p of projectNodes) {
    if (Math.hypot(mx - p.x, my - p.y) < p.size) return p;
  }
  for (let f of fieldNodes) {
    if (Math.hypot(mx - f.x, my - f.y) < f.size) return f;
  }
  return null;
}

function openModalDetails(node) {
  const modal = document.getElementById('project-modal');
  const body = document.querySelector('.modal-body-content');

  if (!modal || !body) return;

  body.innerHTML = '';

  if (node.isField) {
    const relevant = PROJECTS.filter(p => p.field === node.key);

    // Fetch custom copy or use a generic fallback if the key doesn't exist
    const customIntro = FIELD_DESCRIPTIONS[node.key] || 'Explore the expanded mapping linkages belonging to this track directly on your network tree workspace:';

    body.innerHTML = `
    <p class="modal-preheading">Field Description</p>
    <h2 class="modal-heading">${node.label}</h2>
    <div class="modal-description">
      <p style="margin-bottom:1.25rem;">${customIntro}</p>
      <ul style="padding-left:1.25rem; color:var(--text-muted); list-style-type: square;">
        ${relevant.map(p => `
          <li style="margin-bottom:0.75rem;">
            <strong style="color:#ffffff; font-weight:600;">${p.name}:</strong> 
            <span style="display:block; margin-top:0.15rem; font-size:0.9rem;">${p.desc}</span>
          </li>
        `).join('')}
      </ul>
    </div>
    <div class="modal-tags-group"></div>
  `;

  } else {
    const mediaHTML = (node.videoUrl && node.videoUrl.trim() !== '')
      ? `<div class="modal-media-placeholder">
       <video 
         src="${node.videoUrl}" 
         autoplay 
         loop 
         muted 
         playsinline
         style="width: 100%; height: auto; display: block; border: none;">
       </video>
     </div>`
      : '';

    body.innerHTML = `
      <p class="modal-preheading">${FIELD_LABELS[node.field] || node.field}</p>
      <h2 class="modal-heading">${node.name}</h2>
      
      ${mediaHTML}
      
      <div class="modal-description">${node.desc}</div>
      <div class="modal-tags-group">
        ${(node.tags || []).map(t => `<span class="dtag">${t}</span>`).join('')}
      </div>
    `;
  }

  modal.classList.add('open');
}

function closeModal() {
  const modal = document.getElementById('project-modal');
  if (modal) modal.classList.remove('open');
}

canvas.addEventListener('mousemove', e => {
  const rect = canvas.getBoundingClientRect();
  const mx = e.clientX - rect.left;
  const my = e.clientY - rect.top;

  const hit = hitTest(mx, my);
  hoveredId = hit ? hit.id : null;
  canvas.style.cursor = hit ? 'pointer' : 'default';
  draw();
});

canvas.addEventListener('click', e => {
  const rect = canvas.getBoundingClientRect();
  const mx = e.clientX - rect.left;
  const my = e.clientY - rect.top;

  const hit = hitTest(mx, my);
  if (hit) openModalDetails(hit);
});

window.addEventListener('resize', () => {
  resize();
  buildLayout();
  draw();
});

document.getElementById('modal-close').addEventListener('click', closeModal);
document.getElementById('project-modal').addEventListener('click', e => {
  if (e.target.id === 'project-modal') closeModal();
});

resize();
buildLayout();
draw();