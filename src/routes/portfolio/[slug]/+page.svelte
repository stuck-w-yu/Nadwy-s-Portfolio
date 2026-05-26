<script lang="ts">
  import { fade } from 'svelte/transition';
  export let data: {
    item: import('$lib/data').PortfolioItem;
  };

  const { item } = data;
  let activeSrc = item.images?.[0] ?? item.image;
</script>

<svelte:head>
  <title>{item.title} — Portfolio</title>
</svelte:head>

<main class="mx-auto max-w-6xl px-4 py-10">
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
      <div class="pointer-events-none absolute -inset-16 -z-10 opacity-70 blur-3xl">
        <div class="futuristic-blob h-full w-full"></div>
      </div>

      <h1 class="text-2xl font-semibold tracking-tight text-white">{item.title}</h1>
      <p class="mt-2 text-sm text-slate-300">{item.subtitle}</p>

      <div
        class="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/40 shadow-[0_0_0_1px_rgba(255,255,255,.03)]"
      >
        {#key activeSrc}
          <img
            src={activeSrc}
            alt={item.title}
            class="aspect-16/11 w-full object-cover will-change-transform motion-safe:animate-[imgIn_.45s_ease-out]"
            transition:fade={{ duration: 220 }}
          />
        {/key}
      </div>

      {#if item.images?.length > 1}
        <div class="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4">
          {#each item.images as src (src)}
            <button
              type="button"
              class={`overflow-hidden rounded-xl border ${
                src === activeSrc ? 'border-white/30' : 'border-white/10 hover:border-white/20'
              } bg-white/5 transition will-change-transform hover:-translate-y-0.5 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 motion-reduce:transform-none`}
              on:click={() => (activeSrc = src)}
              aria-label={`View image for ${item.title}`}
            >
              <img
                src={src}
                alt=""
                class="aspect-4/3 w-full object-cover transition duration-300 hover:scale-[1.03] motion-reduce:transform-none"
                loading="lazy"
              />
            </button>
          {/each}
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

  @media (prefers-reduced-motion: reduce) {
    .futuristic-blob {
      animation: none;
    }
  }
</style>
