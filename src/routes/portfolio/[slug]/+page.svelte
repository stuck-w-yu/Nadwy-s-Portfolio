<script lang="ts">
  export let data: {
    item: import('$lib/data').PortfolioItem;
  };

  const { item } = data;
</script>

<svelte:head>
  <title>{item.title} — Portfolio</title>
</svelte:head>

<main id="main">
  <div id="portfolio-details" class="portfolio-details">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <h2 class="portfolio-title">{item.title}</h2>

          <div class="portfolio-details-slider swiper">
            <div class="swiper-wrapper align-items-center">
              {#each item.images as src}
                <div class="swiper-slide">
                  <img {src} alt={item.title} />
                </div>
              {/each}
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>

        <div class="col-lg-4 portfolio-info">
          <h3>Project information</h3>
          <ul>
            <li><strong>Category</strong>: {item.categoryLabel}</li>
          </ul>

          <p>{item.subtitle}</p>
        </div>
      </div>
    </div>
  </div>
</main>

