<script lang="ts">
  import IconLink from '$lib/components/IconLink.svelte';
  import { portfolio, profile } from '$lib/data';

  type Filter = 'all' | 'app' | 'card' | 'web';
  const filters: { key: Filter; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'app', label: 'Infra Structure' },
    { key: 'card', label: 'Card' },
    { key: 'web', label: 'Web' }
  ];

  let activeFilter: Filter = 'all';
  let mobileNavOpen = false;

  const nav = [
    { href: '#about', label: 'About' },
    { href: '#resume', label: 'Resume' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contact', label: 'Contact' }
  ] as const;

  const skills = [
    { label: 'Networking', value: 100 },
    { label: 'Server Engineer', value: 90 },
    { label: 'Virtualization', value: 98 },
    { label: 'PHP', value: 80 },
    { label: 'HTML', value: 90 },
    { label: 'CSS', value: 75 }
  ] as const;

  const certifications = [
    { code: 'VSE+', name: 'Veritas — NetBackup SaaS Protection' },
    { code: 'ACMP', name: 'Aruba Certified Mobility Professional V8b' },
    { code: 'ACESO', name: 'Operator Certified Radio Tactics' },
    { code: 'CCNA', name: 'ID NETWOKERS' }
  ] as const;

  function filteredPortfolio() {
    if (activeFilter === 'all') return portfolio;
    return portfolio.filter((p) => p.filter === activeFilter);
  }

  function iconSvg(icon: (typeof profile.socials)[number]['icon']) {
    switch (icon) {
      case 'linkedin':
        return {
          viewBox: '0 0 24 24',
          d: 'M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.48 1s2.5 1.12 2.5 2.5ZM.5 23.5h4V7.98h-4V23.5ZM8 7.98h3.83v2.12h.05c.53-1 1.82-2.06 3.74-2.06 4 0 4.73 2.63 4.73 6.04v7.42h-4v-6.58c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.53 1.72-2.53 3.49v6.69h-4V7.98Z'
        };
      case 'instagram':
        return {
          viewBox: '0 0 24 24',
          d: 'M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7Zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10Zm-5 3.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5Zm0 2A2.5 2.5 0 1 1 9.5 12 2.5 2.5 0 0 1 12 9.5ZM17.75 6a.75.75 0 1 0 .75.75.75.75 0 0 0-.75-.75Z'
        };
      case 'whatsapp':
        return {
          viewBox: '0 0 24 24',
          d: 'M20.52 3.48A11.9 11.9 0 0 0 12.05 0C5.45 0 .1 5.35.1 11.95c0 2.1.55 4.15 1.6 5.96L0 24l6.24-1.64a11.92 11.92 0 0 0 5.81 1.48h.01c6.6 0 11.95-5.35 11.95-11.95 0-3.19-1.24-6.19-3.49-8.41ZM12.06 21.8h-.01a9.9 9.9 0 0 1-5.05-1.39l-.36-.21-3.7.97.99-3.6-.23-.37a9.93 9.93 0 0 1-1.52-5.24C2.18 6.47 6.57 2.1 12.05 2.1c2.63 0 5.1 1.03 6.96 2.89a9.8 9.8 0 0 1 2.89 6.96c0 5.49-4.46 9.85-9.84 9.85Zm5.71-7.8c-.31-.15-1.84-.9-2.12-1-.28-.1-.49-.15-.7.16-.2.3-.8 1-.98 1.2-.18.2-.36.23-.67.08-.31-.15-1.31-.48-2.49-1.54-.92-.82-1.54-1.84-1.72-2.15-.18-.31-.02-.48.13-.63.14-.14.31-.36.46-.54.15-.18.2-.31.31-.52.1-.2.05-.39-.03-.54-.08-.15-.7-1.68-.96-2.3-.25-.6-.5-.52-.7-.53h-.6c-.2 0-.52.08-.8.39-.28.31-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.11c.15.2 2.12 3.23 5.14 4.52.72.31 1.29.49 1.73.62.73.23 1.39.2 1.92.12.58-.09 1.84-.75 2.1-1.47.26-.72.26-1.33.18-1.47-.08-.13-.28-.2-.6-.36Z'
        };
      case 'email':
        return {
          viewBox: '0 0 24 24',
          d: 'M2 6.5A3.5 3.5 0 0 1 5.5 3h13A3.5 3.5 0 0 1 22 6.5v11a3.5 3.5 0 0 1-3.5 3.5h-13A3.5 3.5 0 0 1 2 17.5v-11Zm3.5-1.5A1.5 1.5 0 0 0 4 6.5v.18l8 5.09 8-5.09V6.5A1.5 1.5 0 0 0 18.5 5h-13ZM20 9.05l-7.46 4.74a1 1 0 0 1-1.08 0L4 9.05v8.45A1.5 1.5 0 0 0 5.5 19h13a1.5 1.5 0 0 0 1.5-1.5V9.05Z'
        };
    }
  }

  function onNavClick() {
    mobileNavOpen = false;
  }

  function submitContact(e: SubmitEvent) {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const subject = String(data.get('subject') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();

    const body = [`Name: ${name}`, `Email: ${email}`, '', message].join('\n');
    const to = 'nadwy@nawasena.net';
    const href = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  }
</script>

<svelte:head>
  <title>{profile.name}</title>
  <meta name="description" content={`${profile.name} — ${profile.tagline}`} />
</svelte:head>

<div class="min-h-screen bg-slate-950 text-slate-100">
  <a
    href="#main"
    class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-slate-900 focus:px-4 focus:py-2 focus:text-sm focus:ring-2 focus:ring-slate-300/30"
    >Skip to content</a
  >

  <header class="sticky top-0 z-40 border-b border-white/10 bg-slate-950/75 backdrop-blur">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
      <a href="/" class="text-sm font-semibold tracking-wide text-white">{profile.name}</a>

      <button
        type="button"
        class="inline-flex items-center justify-center rounded-lg p-2 text-slate-200 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/20 md:hidden"
        aria-label="Toggle navigation"
        aria-expanded={mobileNavOpen}
        on:click={() => (mobileNavOpen = !mobileNavOpen)}
      >
        <svg viewBox="0 0 24 24" class="h-5 w-5 fill-current" aria-hidden="true">
          <path d="M3 6h18v2H3V6Zm0 5h18v2H3v-2Zm0 5h18v2H3v-2Z" />
        </svg>
      </button>

      <nav class="hidden items-center gap-6 md:flex" aria-label="Primary navigation">
        {#each nav as n}
          <a
            href={n.href}
            class="text-sm text-slate-200 hover:text-white"
            on:click={onNavClick}
          >
            {n.label}
          </a>
        {/each}
      </nav>
    </div>

    {#if mobileNavOpen}
      <nav class="border-t border-white/10 md:hidden" aria-label="Mobile navigation">
        <div class="mx-auto max-w-6xl px-4 py-3">
          <div class="flex flex-col gap-3">
            {#each nav as n}
              <a
                href={n.href}
                class="rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-white/5 hover:text-white"
                on:click={onNavClick}
              >
                {n.label}
              </a>
            {/each}
          </div>
        </div>
      </nav>
    {/if}
  </header>

  <main id="main" class="mx-auto max-w-6xl px-4">
    <section class="grid min-h-[80svh] items-center gap-10 py-14 md:grid-cols-2 md:py-20">
      <div>
        <p class="text-sm font-medium text-slate-300">{profile.location}</p>
        <h1 class="mt-3 text-4xl font-semibold tracking-tight text-white md:text-5xl">{profile.name}</h1>
        <p class="mt-4 text-lg text-slate-200">
          {profile.role} • <span class="text-white/90">{profile.tagline}</span>
        </p>
        <p class="mt-5 max-w-prose text-sm leading-6 text-slate-300">{profile.aboutBody}</p>

        <div class="mt-7 flex flex-wrap gap-3">
          {#each profile.socials as s}
            {@const icon = iconSvg(s.icon)}
            <IconLink href={s.href} label={s.label}>
              <svg viewBox={icon.viewBox} class="h-5 w-5 fill-current" aria-hidden="true">
                <path d={icon.d} />
              </svg>
            </IconLink>
          {/each}
        </div>

        <div class="mt-8 flex flex-wrap gap-3">
          <a
            href="#portfolio"
            class="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-white/30"
            >View Portfolio</a
          >
          <a
            href="#contact"
            class="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
            >Contact</a
          >
        </div>
      </div>

      <div class="relative">
        <div
          class="absolute -inset-6 -z-10 rounded-4xl bg-linear-to-br from-indigo-500/15 via-fuchsia-500/10 to-cyan-400/15 blur-2xl"
        ></div>
        <div class="overflow-hidden rounded-4xl border border-white/10 bg-white/5">
          <img
            src="/assets/img/nadwy%20profile.jpg"
            alt={profile.name}
            class="aspect-4/5 w-full object-cover"
            loading="eager"
          />
        </div>
      </div>
    </section>

    <section id="about" class="scroll-mt-24 py-14">
      <div class="flex items-end justify-between gap-6">
        <div>
          <h2 class="text-2xl font-semibold text-white">About</h2>
          <p class="mt-2 text-sm text-slate-300">Learn more about me</p>
        </div>
      </div>

      <div class="mt-8 grid gap-10 md:grid-cols-2">
        <div class="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 class="text-lg font-semibold text-white">{profile.role}</h3>
          <p class="mt-3 text-sm leading-6 text-slate-300">{profile.aboutIntro}</p>
          <p class="mt-4 text-sm leading-6 text-slate-300">{profile.aboutBody}</p>
        </div>

        <div class="grid gap-6 md:grid-cols-2">
          <div class="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h4 class="text-sm font-semibold text-white">Details</h4>
            <dl class="mt-4 space-y-3 text-sm">
              {#each profile.detailsLeft as d}
                <div>
                  <dt class="text-slate-400">{d.label}</dt>
                  <dd class="text-white">{d.value}</dd>
                </div>
              {/each}
            </dl>
          </div>
          <div class="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h4 class="text-sm font-semibold text-white">More</h4>
            <dl class="mt-4 space-y-3 text-sm">
              {#each profile.detailsRight as d}
                <div>
                  <dt class="text-slate-400">{d.label}</dt>
                  <dd class="text-white">{d.value}</dd>
                </div>
              {/each}
            </dl>
          </div>
        </div>
      </div>
    </section>

    <section class="py-14">
      <div class="flex items-end justify-between gap-6">
        <div>
          <h2 class="text-2xl font-semibold text-white">Skills</h2>
          <p class="mt-2 text-sm text-slate-300">What I’m confident with</p>
        </div>
      </div>

      <div class="mt-8 grid gap-6 md:grid-cols-2">
        {#each skills as s}
          <div class="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div class="flex items-center justify-between text-sm">
              <p class="font-semibold text-white">{s.label}</p>
              <p class="text-slate-300">{s.value}%</p>
            </div>
            <div class="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10">
              <div class="h-2 rounded-full bg-linear-to-r from-indigo-400 to-cyan-300" style={`width:${s.value}%`}></div>
            </div>
          </div>
        {/each}
      </div>
    </section>

    <section id="resume" class="scroll-mt-24 py-14">
      <div>
        <h2 class="text-2xl font-semibold text-white">Resume</h2>
        <p class="mt-2 text-sm text-slate-300">Certifications and highlights</p>
      </div>

      <div class="mt-8 grid gap-6 md:grid-cols-2">
        <div class="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 class="text-sm font-semibold text-white">Certifications</h3>
          <ul class="mt-4 space-y-3 text-sm text-slate-300">
            {#each certifications as c}
              <li class="flex gap-3">
                <span class="mt-0.5 inline-flex h-6 items-center rounded-lg border border-white/10 bg-white/5 px-2 text-xs font-semibold text-white/90">
                  {c.code}
                </span>
                <span class="leading-6">{c.name}</span>
              </li>
            {/each}
          </ul>
        </div>

        <div class="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 class="text-sm font-semibold text-white">Summary</h3>
          <p class="mt-4 text-sm leading-6 text-slate-300">
            {profile.aboutIntro}
          </p>
        </div>
      </div>
    </section>

    <section id="portfolio" class="scroll-mt-24 py-14">
      <div class="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 class="text-2xl font-semibold text-white">Portfolio</h2>
          <p class="mt-2 text-sm text-slate-300">Selected works</p>
        </div>

        <div class="flex flex-wrap gap-2">
          {#each filters as f}
            <button
              type="button"
              class={`rounded-xl px-3 py-2 text-sm ${
                activeFilter === f.key
                  ? 'bg-white text-slate-900'
                  : 'border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10'
              }`}
              on:click={() => (activeFilter = f.key)}
            >
              {f.label}
            </button>
          {/each}
        </div>
      </div>

      <div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {#each filteredPortfolio() as item (item.slug)}
          <a
            href={`/portfolio/${item.slug}`}
            class="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            <div class="aspect-16/11 w-full overflow-hidden bg-white/5">
              <img
                src={item.image}
                alt={item.title}
                class="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div class="p-5">
              <p class="text-xs font-medium text-slate-400">{item.categoryLabel}</p>
              <h3 class="mt-1 text-base font-semibold text-white">{item.title}</h3>
              <p class="mt-2 text-sm text-slate-300">{item.subtitle}</p>
            </div>
          </a>
        {/each}
      </div>
    </section>

    <section id="contact" class="scroll-mt-24 py-14">
      <div>
        <h2 class="text-2xl font-semibold text-white">Contact</h2>
        <p class="mt-2 text-sm text-slate-300">Let’s talk</p>
      </div>

      <div class="mt-8 grid gap-6 md:grid-cols-2">
        <div class="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 class="text-sm font-semibold text-white">Address</h3>
          <p class="mt-3 text-sm leading-6 text-slate-300">
            Komplek BPK IV No. C-12, Kebon Jeruk.<br />
            West Jakarta, 11530. Indonesia
          </p>
        </div>

        <div class="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 class="text-sm font-semibold text-white">Social</h3>
          <div class="mt-4 flex flex-wrap gap-3">
            {#each profile.socials as s}
              {@const icon = iconSvg(s.icon)}
              <IconLink href={s.href} label={s.label}>
                <svg viewBox={icon.viewBox} class="h-5 w-5 fill-current" aria-hidden="true">
                  <path d={icon.d} />
                </svg>
              </IconLink>
            {/each}
          </div>
        </div>

        <div class="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 class="text-sm font-semibold text-white">Email</h3>
          <p class="mt-3 text-sm text-slate-300">
            <a class="text-white hover:underline" href="mailto:nadwy.anshary@gmail.com">nadwy.anshary@gmail.com</a><br />
            <a class="text-white hover:underline" href="mailto:nadwy@nawasena.net">nadwy@nawasena.net</a>
          </p>
        </div>

        <div class="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 class="text-sm font-semibold text-white">Phone</h3>
          <p class="mt-3 text-sm text-slate-300">
            <a class="text-white hover:underline" href="tel:+6282111627976">+62 8211 1627 976</a>
          </p>
        </div>
      </div>

      <form class="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6" on:submit={submitContact}>
        <div class="grid gap-4 md:grid-cols-2">
          <label class="block">
            <span class="text-xs font-medium text-slate-300">Name</span>
            <input
              name="name"
              required
              class="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/60 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-white/20"
              placeholder="Your name"
            />
          </label>
          <label class="block">
            <span class="text-xs font-medium text-slate-300">Email</span>
            <input
              name="email"
              type="email"
              required
              class="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/60 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-white/20"
              placeholder="you@example.com"
            />
          </label>
        </div>

        <label class="mt-4 block">
          <span class="text-xs font-medium text-slate-300">Subject</span>
          <input
            name="subject"
            required
            class="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/60 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-white/20"
            placeholder="What’s this about?"
          />
        </label>

        <label class="mt-4 block">
          <span class="text-xs font-medium text-slate-300">Message</span>
          <textarea
            name="message"
            rows="5"
            required
            class="mt-2 w-full resize-none rounded-xl border border-white/10 bg-slate-950/60 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-white/20"
            placeholder="Write your message…"
          ></textarea>
        </label>

        <div class="mt-5 flex items-center justify-between gap-3">
          <p class="text-xs text-slate-400">No backend yet: submitting opens your email app.</p>
          <button
            type="submit"
            class="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            Send
          </button>
        </div>
      </form>

      <footer class="py-14 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {profile.name}.
      </footer>
    </section>
  </main>
</div>
