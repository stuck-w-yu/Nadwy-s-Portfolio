<script lang="ts">
  export let href: string;
  export let label: string;
</script>

<a
  class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
  {href}
  target="_blank"
  rel="noreferrer"
  aria-label={label}
  title={label}
>
  <slot />
</a>

