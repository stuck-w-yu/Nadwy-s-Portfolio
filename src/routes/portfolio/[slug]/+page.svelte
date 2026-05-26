<script lang="ts">
  export let data: {
    item: import('$lib/data').PortfolioItem;
  };

  const { item } = data;
  const images = (item.images?.length ? item.images : [item.image]).filter(Boolean);
  let index = 0;
  let isSliding = false;
  let scrollBlur = 0;

  function clamp(n: number, min: number, max: number) {
    return Math.max(min, Math.min(max, n));
  }

  function setIndex(next: number) {
    const clamped = clamp(next, 0, images.length - 1);
    if (clamped === index) return;
    index = clamped;
    isSliding = true;
    window.setTimeout(() => (isSliding = false), 260);
  }

  function prev() {
    setIndex(index - 1);
  }

  function next() {
    setIndex(index + 1);
  }

  let lastY = 0;
  let lastT = 0;
  function onScroll() {
    const now = performance.now();
    const y = window.scrollY;
    const dt = Math.max(16, now - lastT);
    const v = Math.abs(y - lastY) / dt; // px per ms
    scrollBlur = clamp(v * 20, 0, 10);
    lastY = y;
    lastT = now;
  }
</script>

<svelte:head>
  <title>{item.title} — Portfolio</title>
</svelte:head>

<svelte:window on:scroll={onScroll} />

<main class="mx-auto max-w-6xl px-4 py-10" style={`--scroll-blur:${scrollBlur}px`}>
  <a
    href="/#portfolio"
    class="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/20"
  >
    <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M15.5 5.5 9 12l6.5 6.5-1.4 1.4L6.2 12l7.9-7.9 1.4 1.4Z" />
    </svg>
    Back to portfolio
  </a>

  <div class="mt-8 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
    <section class="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5">
      <div
        class="pointer-events-none absolute -inset-16 -z-10 opacity-70 blur-3xl"
        style="filter: blur(calc(48px + var(--scroll-blur)));"
      >
        <div class="futuristic-blob h-full w-full"></div>
      </div>

      <h1 class="text-2xl font-semibold tracking-tight text-white">{item.title}</h1>
      <p class="mt-2 text-sm text-slate-300">{item.subtitle}</p>

      <div
        class="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/40 shadow-[0_0_0_1px_rgba(255,255,255,.03)]"
      >
        <div class={`relative aspect-16/11 w-full ${isSliding ? 'is-sliding' : ''}`}>
          <div
            class="absolute inset-0 flex transition-transform duration-500 ease-out motion-reduce:transition-none"
            style={`transform: translate3d(${-index * 100}%, 0, 0);`}
          >
            {#each images as src (src)}
              <div class="h-full w-full shrink-0">
                <img src={src} alt={item.title} class="h-full w-full object-cover" loading="lazy" />
              </div>
            {/each}
          </div>

          <div class="pointer-events-none absolute inset-0 ring-1 ring-white/5"></div>

          {#if images.length > 1}
            <div class="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-3">
              <button
                type="button"
                class="pointer-events-auto inline-flex items-center justify-center rounded-xl border border-white/10 bg-slate-950/50 px-3 py-2 text-sm text-slate-100 backdrop-blur hover:bg-slate-950/70 focus:outline-none focus:ring-2 focus:ring-white/20 disabled:opacity-50"
                on:click={prev}
                disabled={index === 0}
                aria-label="Previous image"
              >
                Prev
              </button>

              <div class="pointer-events-auto flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/40 px-3 py-1.5 text-xs text-slate-200 backdrop-blur">
                <span class="tabular-nums">{index + 1}</span>
                <span class="text-slate-500">/</span>
                <span class="tabular-nums">{images.length}</span>
              </div>

              <button
                type="button"
                class="pointer-events-auto inline-flex items-center justify-center rounded-xl border border-white/10 bg-slate-950/50 px-3 py-2 text-sm text-slate-100 backdrop-blur hover:bg-slate-950/70 focus:outline-none focus:ring-2 focus:ring-white/20 disabled:opacity-50"
                on:click={next}
                disabled={index === images.length - 1}
                aria-label="Next image"
              >
                Next
              </button>
            </div>
          {/if}
        </div>
      </div>

      {#if images.length > 1}
        <div class="mt-4">
          <div class="flex items-center justify-between">
            <p class="text-xs font-medium text-slate-400">Thumbnails</p>
            <p class="text-xs text-slate-500">Tip: scroll horizontally</p>
          </div>
          <div
            class="mt-3 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 scrollbar-thin"
            style="scroll-behavior:smooth"
          >
            {#each images as src, i (src)}
              <button
                type="button"
                class={`snap-start overflow-hidden rounded-xl border ${
                  i === index ? 'border-white/30' : 'border-white/10 hover:border-white/20'
                } bg-white/5 transition will-change-transform hover:-translate-y-0.5 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 motion-reduce:transform-none`}
                on:click={() => setIndex(i)}
                aria-label={`View image ${i + 1} for ${item.title}`}
              >
                <img
                  src={src}
                  alt=""
                  class="aspect-4/3 w-40 object-cover transition duration-300 hover:scale-[1.03] motion-reduce:transform-none"
                  loading="lazy"
                />
              </button>
            {/each}
          </div>
        </div>
      {/if}
    </section>

    <aside class="rounded-2xl border border-white/10 bg-white/5 p-5">
      <h2 class="text-sm font-semibold text-white">Project information</h2>
      <dl class="mt-4 space-y-4 text-sm">
        <div>
          <dt class="text-slate-400">Category</dt>
          <dd class="text-white">{item.categoryLabel}</dd>
        </div>
      </dl>
    </aside>
  </div>
</main>

<style>
  .futuristic-blob {
    background:
      radial-gradient(circle at 25% 30%, rgba(99, 102, 241, 0.35), transparent 55%),
      radial-gradient(circle at 65% 40%, rgba(34, 211, 238, 0.22), transparent 55%),
      radial-gradient(circle at 45% 75%, rgba(236, 72, 153, 0.18), transparent 60%);
    animation: blobShift 9s ease-in-out infinite;
    transform: translate3d(0, 0, 0);
  }

  @keyframes blobShift {
    0% {
      transform: translate3d(0, 0, 0) scale(1);
      filter: hue-rotate(0deg);
    }
    50% {
      transform: translate3d(8px, -10px, 0) scale(1.05);
      filter: hue-rotate(10deg);
    }
    100% {
      transform: translate3d(0, 0, 0) scale(1);
      filter: hue-rotate(0deg);
    }
  }

  @keyframes imgIn {
    from {
      transform: scale(1.02);
      filter: saturate(1.05);
    }
    to {
      transform: scale(1);
      filter: saturate(1);
    }
  }

  .is-sliding > div {
    filter: blur(0px);
  }

  @media (prefers-reduced-motion: no-preference) {
    .is-sliding > div {
      filter: blur(10px);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .futuristic-blob {
      animation: none;
    }
  }
</style>
