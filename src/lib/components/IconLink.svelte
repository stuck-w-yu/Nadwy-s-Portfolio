<script lang="ts">
  export let href: string;
  export let label: string;
</script>

<a
  class="group relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition will-change-transform hover:-translate-y-0.5 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30 motion-reduce:transform-none"
  {href}
  target="_blank"
  rel="noreferrer"
  aria-label={label}
  title={label}
>
  <span
    class="pointer-events-none absolute inset-0 -z-10 rounded-full opacity-0 blur-md transition group-hover:opacity-100 motion-reduce:transition-none"
    style="background: radial-gradient(circle at 30% 30%, rgba(99,102,241,.45), transparent 55%), radial-gradient(circle at 70% 70%, rgba(34,211,238,.35), transparent 55%);"
  />
  <slot />
</a>
