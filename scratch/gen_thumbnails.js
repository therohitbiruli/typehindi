const sharp = require('sharp');
const fs = require('fs');

const jobs = [
  { slug: 'upessc-prt-assistant-teacher-2026', title: ['UPESSC PRT', 'Assistant Teacher', '2026'], color: '#1e3a8a' },
  { slug: 'mpesb-mp-police-constable-2026', title: ['MPESB MP Police', 'Constable 2026'], color: '#0f766e' },
  { slug: 'bpsc-school-teacher-tre-4-0-2026', title: ['BPSC School Teacher', 'TRE 4.0 Recruitment'], color: '#b45309' },
  { slug: 'mpesb-primary-and-secondary-teachers-mspstet-2026', title: ['MPESB Primary &amp;', 'Secondary Teachers', '2026'], color: '#4c1d95' },
  { slug: 'uco-bank-so-2026', title: ['UCO Bank SO', 'Recruitment 2026'], color: '#1d4ed8' },
  { slug: 'india-post-gds-july-2026', title: ['India Post GDS', 'Recruitment 2026'], color: '#be123c' },
  { slug: 'ssc-chsl-10-plus-2-recruitment-2026', title: ['SSC CHSL 10+2', 'Recruitment 2026'], color: '#4338ca' },
  { slug: 'ibps-rrb-15th-2026', title: ['IBPS RRB 15th', 'Recruitment 2026'], color: '#0f766e' },
  { slug: 'bihar-stet-2026', title: ['Bihar STET', 'Notification 2026'], color: '#a21caf' },
  { slug: 'up-special-tet-2026', title: ['UP Special TET', 'Notification 2026'], color: '#0369a1' },
];

async function generateImages() {
  for (const job of jobs) {
    let textElements = '';
    let y = 250;
    for (const line of job.title) {
      textElements += `<text x="100" y="${y}" font-family="Arial, sans-serif" font-weight="900" font-size="70" fill="white">${line}</text>\n`;
      y += 90;
    }

    const svg = `
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <rect width="1200" height="630" fill="${job.color}"/>
      
      <!-- Subtle Background Pattern -->
      <circle cx="1100" cy="-100" r="400" fill="white" opacity="0.05"/>
      <circle cx="100" cy="700" r="300" fill="black" opacity="0.1"/>

      <!-- Text Section -->
      ${textElements}
      
      <!-- Professional Job Profile Graphic on the Right -->
      <g transform="translate(850, 200)">
        <!-- Head -->
        <circle cx="120" cy="60" r="50" fill="#ffffff" opacity="0.95"/>
        <!-- Body -->
        <path d="M20 280 Q 120 120 220 280 Z" fill="#ffffff" opacity="0.95"/>
        <!-- Tie / Collar -->
        <path d="M120 180 L 105 210 L 120 280 L 135 210 Z" fill="${job.color}" opacity="0.8"/>
      </g>

      <!-- Bottom Bar -->
      <rect x="0" y="580" width="1200" height="50" fill="black" opacity="0.3"/>
      <text x="100" y="615" font-family="Arial, sans-serif" font-weight="bold" font-size="24" fill="#ffffff" opacity="0.9">OFFICIAL NOTIFICATION | VACANCIES | ELIGIBILITY | APPLY ONLINE</text>
    </svg>`;
    
    await sharp(Buffer.from(svg))
      .jpeg({ quality: 95 })
      .toFile(`public/images/${job.slug}.jpg`);
    console.log(`Generated ${job.slug}.jpg`);
  }
}

generateImages().catch(console.error);
