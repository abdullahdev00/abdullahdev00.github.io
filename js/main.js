// Articles Data and Interactive Logic
const articles = [
  {
    id: 1,
    title: "The Future of Generative AI: From LLMs to Autonomous Agents",
    category: "AI & Tech",
    badgeColor: "#3b82f6",
    author: "Abdullah Dev",
    date: "Nov 9, 2026",
    readTime: "5 min read",
    icon: "🤖",
    bgGradient: "linear-gradient(135deg, #1e3a8a, #3b82f6)",
    excerpt: "Explore how autonomous multi-agent systems are reshaping software engineering, automated workflows, and digital intelligence.",
    content: `
      <p>Artificial Intelligence has evolved rapidly from simple prompt-response language models into complex, proactive <strong>autonomous agents</strong> capable of executing multi-step reasoning, writing and debugging code, and collaborating with each other in real time.</p>
      
      <!-- In-Article Monetag Ad Slot 1 -->
      <div class="monetag-slot" id="monetag-article-slot-1">
        <div class="monetag-label">📢 Sponsored / Monetag Native Banner</div>
        <div class="monetag-placeholder-content">
          <p><strong>[Monetag In-Article Banner Zone #1]</strong></p>
          <span class="monetag-tag-code">&lt;script src="//alwingulla.com/..." async&gt;&lt;/script&gt;</span>
        </div>
      </div>

      <h3>1. The Shift to Agentic Workflows</h3>
      <p>Traditional AI assistants wait for a user prompt and deliver a static text response. Agentic workflows, by contrast, possess tool access: they run bash scripts, inspect filesystems, ping APIs, and correct their own errors through continuous execution loops.</p>
      <p>Developers are no longer writing every single function manually. Instead, they specify requirements and guide orchestrator agents that write tests, implement code, and push commits directly into production pipelines.</p>

      <h3>2. Real-World Applications in 2026</h3>
      <p>From automated security auditing to 24/7 autonomous devops monitoring, multi-agent frameworks are dramatically accelerating product release cycles. Small teams of 2 to 3 engineers can now operate at the scale of 50-person engineering organizations.</p>

      <!-- In-Article Monetag Ad Slot 2 -->
      <div class="monetag-slot" id="monetag-article-slot-2">
        <div class="monetag-label">📢 Sponsored / Monetag High-CPM Banner</div>
        <div class="monetag-placeholder-content">
          <p><strong>[Monetag In-Article Banner Zone #2]</strong></p>
          <span class="monetag-tag-code">&lt;!-- Monetag Native Interstitial / In-Page Push --&gt;</span>
        </div>
      </div>

      <h3>Conclusion</h3>
      <p>As intelligence becomes ambient and embedded across infrastructure, understanding agent orchestration will be the most prized skill for modern software engineers.</p>
    `
  },
  {
    id: 2,
    title: "10 High-Speed Cloud Networking Tricks for Remote Servers",
    category: "Cloud & DevOps",
    badgeColor: "#10b981",
    author: "Cloud Architect",
    date: "Nov 8, 2026",
    readTime: "4 min read",
    icon: "⚡",
    bgGradient: "linear-gradient(135deg, #065f46, #10b981)",
    excerpt: "Unlock gigabit throughput across private tunnels, peer-to-peer mesh networks, and optimize packet routing with WireGuard.",
    content: `
      <p>When running cloud virtual machines or remote development environments, network latency and throughput constraints can severely bottleneck your developer velocity.</p>
      
      <div class="monetag-slot">
        <div class="monetag-label">📢 Sponsored / Monetag Ad Zone</div>
        <div class="monetag-placeholder-content">
          <p><strong>[Monetag In-Article Banner Zone]</strong></p>
        </div>
      </div>

      <h3>Why WireGuard Dominates Cloud Meshing</h3>
      <p>Unlike legacy OpenVPN protocols that incur substantial CPU overhead, WireGuard operates directly in kernel space with state-of-the-art cryptography (ChaCha20-Poly1305), delivering peer-to-peer line speed over 1 Gbps with minimal jitter.</p>
      <p>Tools like Tailscale and ZeroTier leverage WireGuard alongside automated NAT traversal (STUN/DERP) to link distributed servers as if they were plugged into the same local Gigabit Ethernet switch.</p>
    `
  },
  {
    id: 3,
    title: "Securing Modern Web Apps: Defending Against Injection and Botnets",
    category: "Cyber Security",
    badgeColor: "#ef4444",
    author: "Security Team",
    date: "Nov 7, 2026",
    readTime: "6 min read",
    icon: "🛡️",
    bgGradient: "linear-gradient(135deg, #991b1b, #ef4444)",
    excerpt: "A deep dive into zero-trust architectures, rate limiting, and real-time behavioral fingerprinting to protect public APIs.",
    content: `
      <p>Public-facing web applications face unrelenting automated scanning from botnets searching for open endpoints, exposed secrets, and vulnerable workflows.</p>
      
      <div class="monetag-slot">
        <div class="monetag-label">📢 Sponsored / Monetag Ad Zone</div>
        <div class="monetag-placeholder-content">
          <p><strong>[Monetag Mid-Article Banner Zone]</strong></p>
        </div>
      </div>

      <h3>Implementing Defense-in-Depth</h3>
      <p>Protecting modern APIs requires more than a simple firewall. Enforcing Strict Content Security Policies (CSP), subresource integrity, and signed JWT authentication guarantees that only verified clients can invoke sensitive backend actions.</p>
    `
  },
  {
    id: 4,
    title: "Mastering Browser Automation with Playwright and Headless Chrome",
    category: "Development",
    badgeColor: "#8b5cf6",
    author: "Test Engineer",
    date: "Nov 6, 2026",
    readTime: "5 min read",
    icon: "🌐",
    bgGradient: "linear-gradient(135deg, #5b21b6, #8b5cf6)",
    excerpt: "Learn how to orchestrate multi-context browser instances, simulate real user sessions, and automate web verification tests.",
    content: `
      <p>Headless browser automation has advanced dramatically. Playwright provides native support for isolated BrowserContexts, custom proxy routing, and network request interception.</p>
      
      <div class="monetag-slot">
        <div class="monetag-label">📢 Sponsored / Monetag Ad Zone</div>
        <div class="monetag-placeholder-content">
          <p><strong>[Monetag In-Article Banner Zone]</strong></p>
        </div>
      </div>

      <h3>Browser Context Isolation</h3>
      <p>Rather than launching separate heavy browser processes, browser contexts let you spin up lightweight sessions with distinct cookie jars, cache, and IP endpoints with near-zero overhead.</p>
    `
  },
  {
    id: 5,
    title: "Website Monetization in 2026: Balancing Ads and User Experience",
    category: "Monetization",
    badgeColor: "#f59e0b",
    author: "Growth Lead",
    date: "Nov 5, 2026",
    readTime: "4 min read",
    icon: "💰",
    bgGradient: "linear-gradient(135deg, #92400e, #f59e0b)",
    excerpt: "How to integrate native ads, in-page push notifications, and high-CPM banners without destroying page load speeds or SEO.",
    content: `
      <p>Monetizing a high-traffic content website requires a delicate balance between maximum CPM yields and clean user experience.</p>
      
      <div class="monetag-slot">
        <div class="monetag-label">📢 Sponsored / Monetag Ad Zone</div>
        <div class="monetag-placeholder-content">
          <p><strong>[Monetag Under-Headline Banner Zone]</strong></p>
        </div>
      </div>

      <h3>Best Ad Formats for Article Websites</h3>
      <p>Modern ad networks like Monetag offer diverse ad formats: In-Page Push (Native Banners), Vignette Banners, and MultiTag AI integration that dynamically serves the highest-converting format for each visitor.</p>
      <p>Using asynchronous script loading (<code>async</code>) ensures that ad scripts never block DOM rendering, maintaining 90+ Google Core Web Vitals scores.</p>
    `
  },
  {
    id: 6,
    title: "Building Micro-Frontends with Vanilla JavaScript & Modern CSS",
    category: "Development",
    badgeColor: "#06b6d4",
    author: "Frontend Lead",
    date: "Nov 4, 2026",
    readTime: "3 min read",
    icon: "🎨",
    bgGradient: "linear-gradient(135deg, #155e75, #06b6d4)",
    excerpt: "Why lightweight vanilla JS components often outperform bloated multi-megabyte JavaScript bundles for content platforms.",
    content: `
      <p>In an era of heavily nested framework abstractions, returning to clean, semantic HTML5 and vanilla JavaScript delivers unmatched speed, instant first-contentful-paint, and flawless accessibility.</p>
    `
  }
];

// Trending Topics Sidebar Data
const trendingItems = [
  "Understanding MultiTag AI monetization in 2026",
  "How to scale headless browser testing across 100 nodes",
  "Setting up secure WireGuard mesh tunnels in under 2 minutes",
  "Optimizing Google Core Web Vitals for ad-heavy blogs",
  "Top 5 AI coding assistants compared"
];

// DOM Elements
const articlesGrid = document.getElementById("articles-grid");
const categoryFilter = document.getElementById("category-filter");
const searchInput = document.getElementById("search-input");
const modalOverlay = document.getElementById("article-modal");
const modalBody = document.getElementById("modal-body-content");
const modalClose = document.getElementById("modal-close-btn");
const themeToggleBtn = document.getElementById("theme-toggle");
const adConfigBtn = document.getElementById("ad-config-btn");
const adModal = document.getElementById("ad-modal");
const adModalClose = document.getElementById("ad-modal-close");
const trendingContainer = document.getElementById("trending-list");

// Initialize Render
document.addEventListener("DOMContentLoaded", () => {
  renderArticles(articles);
  renderTrending();
  setupEventListeners();
  initTheme();
});

// Render Article Cards
function renderArticles(list) {
  if (!articlesGrid) return;
  
  if (list.length === 0) {
    articlesGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-muted);">
        <h3>No articles found</h3>
        <p>Try searching with another keyword or category filter.</p>
      </div>
    `;
    return;
  }

  articlesGrid.innerHTML = list.map(item => `
    <article class="article-card" onclick="openArticle(${item.id})">
      <div class="card-thumb" style="background: ${item.bgGradient};">
        <span>${item.icon}</span>
      </div>
      <div class="card-body">
        <span class="article-badge" style="border-color: ${item.badgeColor}; color: ${item.badgeColor}; background: ${item.badgeColor}15;">
          ${item.category}
        </span>
        <h3 class="card-title">${item.title}</h3>
        <p class="card-desc">${item.excerpt}</p>
        <div class="article-meta">
          <div class="meta-author">
            <span class="author-avatar">${item.author[0]}</span>
            <span>${item.author}</span>
          </div>
          <span>•</span>
          <span>${item.readTime}</span>
        </div>
      </div>
    </article>
  `).join("");
}

// Render Trending Sidebar
function renderTrending() {
  if (!trendingContainer) return;
  trendingContainer.innerHTML = trendingItems.map((item, index) => `
    <div class="trending-item" onclick="openArticle(1)">
      <div class="trending-num">0${index + 1}</div>
      <div class="trending-text">${item}</div>
    </div>
  `).join("");
}

// Open Article in Modal Reader
window.openArticle = function(id) {
  const item = articles.find(a => a.id === id);
  if (!item || !modalOverlay || !modalBody) return;

  modalBody.innerHTML = `
    <span class="article-badge" style="border-color: ${item.badgeColor}; color: ${item.badgeColor}; background: ${item.badgeColor}15;">
      ${item.category}
    </span>
    <h1>${item.title}</h1>
    <div class="article-meta" style="margin-bottom: 2rem; padding-bottom: 1rem; border-bottom: 1px solid var(--border-color);">
      <div class="meta-author">
        <span class="author-avatar">${item.author[0]}</span>
        <span>${item.author}</span>
      </div>
      <span>•</span>
      <span>${item.date}</span>
      <span>•</span>
      <span>${item.readTime}</span>
    </div>
    <div class="article-rich-text">
      ${item.content}
    </div>
  `;

  modalOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
};

// Event Listeners
function setupEventListeners() {
  // Category Filter
  if (categoryFilter) {
    categoryFilter.addEventListener("click", (e) => {
      const btn = e.target.closest(".cat-btn");
      if (!btn) return;

      document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const cat = btn.getAttribute("data-category");
      if (cat === "All") {
        renderArticles(articles);
      } else {
        const filtered = articles.filter(a => a.category === cat);
        renderArticles(filtered);
      }
    });
  }

  // Search Input
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase().trim();
      const filtered = articles.filter(a => 
        a.title.toLowerCase().includes(query) || 
        a.excerpt.toLowerCase().includes(query) ||
        a.category.toLowerCase().includes(query)
      );
      renderArticles(filtered);
    });
  }

  // Modal Close
  if (modalClose) {
    modalClose.addEventListener("click", () => {
      modalOverlay.classList.remove("open");
      document.body.style.overflow = "auto";
    });
  }

  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove("open");
        document.body.style.overflow = "auto";
      }
    });
  }

  // Theme Toggle
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", toggleTheme);
  }

  // Ad Config Modal
  if (adConfigBtn && adModal) {
    adConfigBtn.addEventListener("click", () => {
      adModal.classList.add("open");
    });
  }

  if (adModalClose && adModal) {
    adModalClose.addEventListener("click", () => {
      adModal.classList.remove("open");
    });
  }
}

// Theme Switcher
function initTheme() {
  const saved = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", saved);
  updateThemeIcon(saved);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme");
  const target = current === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", target);
  localStorage.setItem("theme", target);
  updateThemeIcon(target);
}

function updateThemeIcon(theme) {
  if (!themeToggleBtn) return;
  themeToggleBtn.innerHTML = theme === "light" ? "🌙" : "☀️";
}

// Sticky Ad Close
window.closeStickyAd = function() {
  const stickyAd = document.getElementById("monetag-sticky-bar");
  if (stickyAd) {
    stickyAd.style.display = "none";
  }
};
