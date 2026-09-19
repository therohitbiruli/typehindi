const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Define mapping of slug to base image and title
const posts = [
  { slug: 'upessc-prt-assistant-teacher-2026', title: 'UPESSC PRT Assistant Teacher 2026', type: 'teacher' },
  { slug: 'mpesb-mp-police-constable-2026', title: 'MP Police Constable 2026', type: 'police' },
  { slug: 'bpsc-school-teacher-tre-4-0-2026', title: 'BPSC School Teacher TRE 4.0 2026', type: 'teacher' },
  { slug: 'mpesb-primary-and-secondary-teachers-mspstet-2026', title: 'MPESB Teachers MSPSTET 2026', type: 'teacher' },
  { slug: 'uco-bank-so-2026', title: 'UCO Bank SO 2026', type: 'bank' },
  { slug: 'india-post-gds-july-2026', title: 'India Post GDS July 2026', type: 'bank' }, // fallback to bank
  { slug: 'ssc-chsl-10-plus-2-recruitment-2026', title: 'SSC CHSL 10+2 Recruitment 2026', type: 'bank' }, // fallback to bank
  { slug: 'ibps-rrb-15th-2026', title: 'IBPS RRB 15th Recruitment 2026', type: 'bank' },
  { slug: 'bihar-stet-online-form-2026', title: 'Bihar STET Online Form 2026', type: 'teacher' },
  { slug: 'up-special-tet-2026', title: 'UP Special TET 2026', type: 'teacher' }
];

const imgDir = path.join(__dirname, '../public/images');
const scratchDir = __dirname;

// find base images
const files = fs.readdirSync(scratchDir);
const policeBase = path.join(scratchDir, files.find(f => f.startsWith('mp_police_base_')));
const teacherBase = path.join(scratchDir, files.find(f => f.startsWith('teacher_base_')));
const bankBase = path.join(scratchDir, files.find(f => f.startsWith('bank_base_')));

async function generateThumbnails() {
  for (const post of posts) {
    let baseImg;
    if (post.type === 'police') baseImg = policeBase;
    else if (post.type === 'teacher') baseImg = teacherBase;
    else baseImg = bankBase;

    // Word wrap title
    const words = post.title.split(' ');
    let line1 = '', line2 = '', line3 = '';
    
    // Naive wrap for max 3 lines
    for(let i=0; i<words.length; i++) {
        if(line1.length < 15) line1 += words[i] + ' ';
        else if(line2.length < 15) line2 += words[i] + ' ';
        else line3 += words[i] + ' ';
    }

    const svgText = `
    <svg width="1200" height="630">
      <rect x="0" y="0" width="1200" height="630" fill="transparent"/>
      <text x="50" y="250" font-family="Arial" font-weight="900" font-size="64" fill="#ffffff">
        <tspan x="50" dy="0">${line1.trim()}</tspan>
        ${line2 ? `<tspan x="50" dy="80">${line2.trim()}</tspan>` : ''}
        ${line3 ? `<tspan x="50" dy="80">${line3.trim()}</tspan>` : ''}
      </text>
      <rect x="50" y="100" width="100" height="10" fill="#ffcc00" />
      <text x="50" y="150" font-family="Arial" font-weight="bold" font-size="24" fill="#ffcc00">GOVERNMENT JOB NOTIFICATION</text>
    </svg>`;

    const outFile = path.join(imgDir, `${post.slug}.jpg`);

    try {
      await sharp(baseImg)
        .resize(1200, 630, {
          fit: 'cover',
          position: 'top' // Crop from bottom so head/face stays visible
        })
        .composite([{
          input: Buffer.from(svgText),
          top: 0,
          left: 0
        }])
        .toFile(outFile);
        
      console.log(`Generated realistic image for ${post.slug}`);
    } catch (e) {
      console.error(`Failed to generate ${post.slug}`, e);
    }
  }
}

generateThumbnails();
