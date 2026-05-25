<script lang="ts">
  import { portfolio, profile } from '$lib/data';

  const filterLabel = {
    app: 'Infra Structure',
    card: 'Card',
    web: 'Web'
  } as const;
</script>

<svelte:head>
  <title>{profile.name}</title>
  <meta name="description" content={`${profile.name} — ${profile.tagline}`} />
</svelte:head>

<!-- ======= Header ======= -->
<header id="header">
  <div class="container">
    <h1><a href="/">{profile.name}</a></h1>
    <h2>I'm a passionate <span>{profile.tagline}</span> from {profile.location}</h2>

    <nav id="navbar" class="navbar">
      <ul>
        <li><a class="nav-link active" href="#header">Home</a></li>
        <li><a class="nav-link" href="#about">About</a></li>
        <li><a class="nav-link" href="#resume">Resume</a></li>
        <li><a class="nav-link" href="#portfolio">Portfolio</a></li>
        <li><a class="nav-link" href="#contact">Contact</a></li>
      </ul>
      <i class="bi bi-list mobile-nav-toggle"></i>
    </nav>

    <div class="social-links">
      {#each profile.socials as s}
        <a href={s.href} class={s.label.toLowerCase()} aria-label={s.label}><i class={s.iconClass}></i></a>
      {/each}
    </div>
  </div>
</header>
<!-- End Header -->

<!-- ======= About Section ======= -->
<section id="about" class="about">
  <!-- ======= About Me ======= -->
  <div class="about-me container">
    <div class="section-title">
      <h2>About</h2>
      <p>Learn more about me</p>
    </div>

    <div class="row">
      <div class="col-lg-4" data-aos="fade-right">
        <img src="/assets/img/nadwy%20profile.jpg" class="img-fluid" alt={profile.name} />
      </div>
      <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
        <h3>{profile.role}</h3>
        <p class="fst-italic">{profile.aboutIntro}</p>
        <div class="row">
          <div class="col-lg-6">
            <ul>
              {#each profile.detailsLeft as d}
                <li><i class="bi bi-chevron-right"></i> <strong>{d.label}:</strong> <span>{d.value}</span></li>
              {/each}
            </ul>
          </div>
          <div class="col-lg-6">
            <ul>
              {#each profile.detailsRight as d}
                <li><i class="bi bi-chevron-right"></i> <strong>{d.label}:</strong> <span>{d.value}</span></li>
              {/each}
            </ul>
          </div>
        </div>
        <p>{profile.aboutBody}</p>
      </div>
    </div>
  </div>
  <!-- End About Me -->

  <!-- ======= Counts ======= -->
  <div class="counts container">
    <div class="row">
      <div class="col-lg-3 col-md-6">
        <div class="count-box">
          <i class="bi bi-emoji-smile"></i>
          <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" class="purecounter"
          ></span>
          <p>Happy Clients</p>
        </div>
      </div>

      <div class="col-lg-3 col-md-6 mt-5 mt-md-0">
        <div class="count-box">
          <i class="bi bi-journal-richtext"></i>
          <span data-purecounter-start="0" data-purecounter-end="34" data-purecounter-duration="1" class="purecounter"
          ></span>
          <p>Projects</p>
        </div>
      </div>

      <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
        <div class="count-box">
          <i class="bi bi-headset"></i>
          <span
            data-purecounter-start="0"
            data-purecounter-end="1463"
            data-purecounter-duration="1"
            class="purecounter"
          ></span>
          <p>Hours Of Support</p>
        </div>
      </div>

      <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
        <div class="count-box">
          <i class="bi bi-award"></i>
          <span data-purecounter-start="0" data-purecounter-end="12" data-purecounter-duration="1" class="purecounter"
          ></span>
          <p>Certifications</p>
        </div>
      </div>
    </div>
  </div>
  <!-- End Counts -->

  <!-- ======= Skills  ======= -->
  <div class="skills container">
    <div class="section-title">
      <h2>Skills</h2>
    </div>

    <div class="row skills-content">
      <div class="col-lg-6">
        <div class="progress">
          <span class="skill">Networking <i class="val">100%</i></span>
          <div class="progress-bar-wrap">
            <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"
            ></div>
          </div>
        </div>

        <div class="progress">
          <span class="skill">Server Engineer <i class="val">90%</i></span>
          <div class="progress-bar-wrap">
            <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"
            ></div>
          </div>
        </div>

        <div class="progress">
          <span class="skill">Virtualization <i class="val">98%</i></span>
          <div class="progress-bar-wrap">
            <div class="progress-bar" role="progressbar" aria-valuenow="98" aria-valuemin="0" aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="progress">
          <span class="skill">PHP <i class="val">80%</i></span>
          <div class="progress-bar-wrap">
            <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"
            ></div>
          </div>
        </div>

        <div class="progress">
          <span class="skill">HTML <i class="val">90%</i></span>
          <div class="progress-bar-wrap">
            <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"
            ></div>
          </div>
        </div>

        <div class="progress">
          <span class="skill">CSS <i class="val">75%</i></span>
          <div class="progress-bar-wrap">
            <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Skills -->
</section>
<!-- End About Section -->

<!-- ======= Resume Section ======= -->
<section id="resume" class="resume">
  <div class="container">
    <div class="section-title">
      <h2>Resume</h2>
      <p>Check My Resume</p>
    </div>

    <div class="row">
      <div class="col-lg-6">
        <h3 class="resume-title">Certifications</h3>
        <div class="resume-item pb-0">
          <h4>Course</h4>
          <p>
            <em
              >Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing
              user-centered digital/print marketing material from initial concept to final, polished deliverable.</em
            >
          </p>
          <ul>
            <li><h5>VSE+ VERITAS</h5> - NetBackup SaaS Protection</li>
            <li><h5>ACMP</h5> - Aruba Certified Mobility Professional V8b</li>
            <li><h5>ACESO</h5> - Operator Certified Radio Tactics</li>
            <li><h5>CCNA</h5> - ID NETWOKERS</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- End Resume Section -->

<!-- ======= Portfolio Section ======= -->
<section id="portfolio" class="portfolio">
  <div class="container">
    <div class="section-title">
      <h2>Portfolio</h2>
      <p>My Works</p>
    </div>

    <div class="row">
      <div class="col-lg-12 d-flex justify-content-center">
        <ul id="portfolio-flters">
          <li data-filter="*" class="filter-active">All</li>
          <li data-filter=".filter-app">{filterLabel.app}</li>
          <li data-filter=".filter-card">{filterLabel.card}</li>
          <li data-filter=".filter-web">{filterLabel.web}</li>
        </ul>
      </div>
    </div>

    <div class="row portfolio-container">
      {#each portfolio as item}
        <div class={`col-lg-4 col-md-6 portfolio-item filter-${item.filter}`}>
          <div class="portfolio-wrap">
            <img src={item.image} class="img-fluid" alt={item.title} />
            <div class="portfolio-info">
              <h4>{item.title}</h4>
              <p>{item.subtitle}</p>
              <div class="portfolio-links">
                <a href={item.image} data-gallery="portfolioGallery" class="portfolio-lightbox" title={item.title}
                  ><i class="bx bx-plus"></i></a
                >
                <a
                  href={`/portfolio/${item.slug}`}
                  data-gallery="portfolioDetailsGallery"
                  data-glightbox="type: external"
                  class="portfolio-details-lightbox"
                  title="Portfolio Details"
                  ><i class="bx bx-link"></i></a
                >
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
<!-- End Portfolio Section -->

<!-- ======= Contact Section ======= -->
<section id="contact" class="contact">
  <div class="container">
    <div class="section-title">
      <h2>Contact</h2>
      <p>Contact Me</p>
    </div>

    <div class="row mt-2">
      <div class="col-md-6 d-flex align-items-stretch">
        <div class="info-box">
          <i class="bx bx-map"></i>
          <h3>My Address</h3>
          <p>
            Komplek BPK IV No. C-12, Kebon Jeruk.<br />
            West Jakarta, 11530. Indonesia
          </p>
        </div>
      </div>

      <div class="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
        <div class="info-box">
          <i class="bx bx-share-alt"></i>
          <h3>Social Profiles</h3>
          <div class="social-links">
            <a href="mailto:nadwy.anshary@gmail.com" class="email"><i class="bi bi-envelope-at"></i></a>
            <a href="https://wa.me/+6282111627976" class="whatsapp"><i class="bi bi-whatsapp"></i></a>
            <a href="https://instagram.com/bochiers" class="instagram"><i class="bi bi-instagram"></i></a>
            <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>

      <div class="col-md-6 mt-4 d-flex align-items-stretch">
        <div class="info-box">
          <i class="bx bx-envelope"></i>
          <h3>Email Me</h3>
          <a href="mailto:nadwy.anshary@gmail.com"><p>nadwy.anshary@gmail.com <br />nadwy@nawasena.net</p></a>
        </div>
      </div>
      <div class="col-md-6 mt-4 d-flex align-items-stretch">
        <div class="info-box">
          <i class="bx bx-phone-call"></i>
          <h3>Contact Me</h3>
          <p>+62 8211 1627 976</p>
        </div>
      </div>
    </div>

    <form action="/forms/contact.php" method="post" role="form" class="php-email-form mt-4">
      <div class="row">
        <div class="col-md-6 form-group">
          <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required />
        </div>
        <div class="col-md-6 form-group mt-3 mt-md-0">
          <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required />
        </div>
      </div>
      <div class="form-group mt-3">
        <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required />
      </div>
      <div class="form-group mt-3">
        <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
      </div>
      <div class="my-3">
        <div class="loading">Loading</div>
        <div class="error-message"></div>
        <div class="sent-message">Your message has been sent. Thank you!</div>
      </div>
      <div class="text-center"><button type="submit">Send Message</button></div>
    </form>
  </div>
</section>
<!-- End Contact Section -->

<div class="credits">
  Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
</div>
