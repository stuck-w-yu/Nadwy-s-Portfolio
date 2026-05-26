export type SocialLink = {
  label: string;
  href: string;
  icon: 'linkedin' | 'instagram' | 'whatsapp' | 'email';
};

export type Profile = {
  name: string;
  tagline: string;
  location: string;
  role: string;
  aboutIntro: string;
  aboutBody: string;
  detailsLeft: { label: string; value: string }[];
  detailsRight: { label: string; value: string }[];
  socials: SocialLink[];
};

export type PortfolioItem = {
  slug: string;
  title: string;
  filter: 'app' | 'web' | 'card';
  categoryLabel: string;
  subtitle: string;
  image: string;
  images: string[];
};

export const profile: Profile = {
  name: 'Nadwy Anshary',
  tagline: 'Technology Enthusiast',
  location: 'Jakarta',
  role: 'Chief Technology Officer',
  aboutIntro:
    'Leading research and development efforts to drive innovation. This may involve exploring new technologies, assessing their applicability to the business, and overseeing the development of prototypes or proof-of-concept projects',
  aboutBody:
    'A dedicated and highly skilled Network Engineer with a strong background in IT infrastructure. Committed to ensuring the stability, security, and efficiency of network systems. Seeking opportunities to contribute technical expertise in a challenging and dynamic environment',
  detailsLeft: [
    { label: 'Birthday', value: '7 December 1988' },
    { label: 'Website', value: 'www.nawasena.net' },
    { label: 'Phone', value: '+6282111627976' },
    { label: 'City', value: 'Jakarta, Indonesia' }
  ],
  detailsRight: [
    { label: 'Age', value: '35' },
    { label: 'Degree', value: 'Bachelor' },
    { label: 'Mail', value: 'nadwy@nawasena.net' }
  ],
  socials: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/nadwyanshary/',
      icon: 'linkedin'
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/bochiers/',
      icon: 'instagram'
    },
    {
      label: 'WhatsApp',
      href: 'https://wa.me/+6282111627976',
      icon: 'whatsapp'
    },
    {
      label: 'Email',
      href: 'mailto:nadwy@nawasena.net',
      icon: 'email'
    }
  ]
};

export const portfolio: PortfolioItem[] = [
  {
    slug: 'test-and-comm-network-devices',
    title: 'Test and Comm Network Devices',
    filter: 'app',
    categoryLabel: 'Infra Structure',
    subtitle: 'Cyber Defence Kemhan',
    image: '/assets/img/Porto/Cyber%20Defense%20Kemhan/Test%20Com%20Network.jpg',
    images: ['/assets/img/Porto/Cyber%20Defense%20Kemhan/Test%20Com%20Network.jpg']
  },
  {
    slug: 'kick-of-meeting-secure-communication-platform',
    title: 'Kick of Meeting Secure Communication Platform',
    filter: 'web',
    categoryLabel: 'Web',
    subtitle: 'Web',
    image: '/assets/img/Porto/SIT%20AL/technical%20meeting%20AL.jpg',
    images: ['/assets/img/Porto/SIT%20AL/technical%20meeting%20AL.jpg']
  },
  {
    slug: 'pusrehab-bintaro',
    title: 'Pusrehab Bintaro',
    filter: 'app',
    categoryLabel: 'Infra Structure',
    subtitle: 'Uji Kelaikan Kemhan',
    image: '/assets/img/Porto/Cyber%20Defense%20Kemhan/Pusrehab%20Bintaro.jpg',
    images: ['/assets/img/Porto/Cyber%20Defense%20Kemhan/Pusrehab%20Bintaro.jpg']
  },
  {
    slug: 'presentation-iccs-ranpur',
    title: 'Presentation ICCS RANPUR',
    filter: 'card',
    categoryLabel: 'Card',
    subtitle: 'Card',
    image: '/assets/img/Porto/ICCS%20Ranpur/Iccs%20Presentation.jpg',
    images: ['/assets/img/Porto/ICCS%20Ranpur/Iccs%20Presentation.jpg']
  },
  {
    slug: 'web-2',
    title: 'Web 2',
    filter: 'web',
    categoryLabel: 'Web',
    subtitle: 'Web',
    image: '/assets/img/Porto/SIT%20AL/Neputunus%20Vid%20Tron.jpg',
    images: ['/assets/img/Porto/SIT%20AL/Neputunus%20Vid%20Tron.jpg']
  },
  {
    slug: 'pelatihan',
    title: 'Pelatihan',
    filter: 'app',
    categoryLabel: 'Infra Structure',
    subtitle: 'SCP - Secure Communication Platform',
    image: '/assets/img/Porto/SIT%20AL/SIT%20AL.jpg',
    images: ['/assets/img/Porto/SIT%20AL/SIT%20AL.jpg']
  },
  {
    slug: 'product-knowledge',
    title: 'Product Knowledge',
    filter: 'card',
    categoryLabel: 'Card',
    subtitle: 'Military Radio Communication',
    image: '/assets/img/Porto/ICCS%20Ranpur/Product%20Knowledge.jpg',
    images: ['/assets/img/Porto/ICCS%20Ranpur/Product%20Knowledge.jpg']
  },
  {
    slug: 'card-3',
    title: 'Card 3',
    filter: 'card',
    categoryLabel: 'Card',
    subtitle: 'Card',
    image: '/assets/img/Porto/STAN%20BINTARO/Presentation%20Network%20STAN%20BINTARO.jpg',
    images: ['/assets/img/Porto/STAN%20BINTARO/Presentation%20Network%20STAN%20BINTARO.jpg']
  },
  {
    slug: 'implementasi-video-tron-kasops-kasal',
    title: 'Implementasi',
    filter: 'web',
    categoryLabel: 'Web',
    subtitle: 'Implementasi-Video Tron Kasops Kasal',
    image: '/assets/img/Porto/SIT%20AL/Video%20Trion%20Kasal.jpg',
    images: ['/assets/img/Porto/SIT%20AL/Video%20Trion%20Kasal.jpg']
  }
];
