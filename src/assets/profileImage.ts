// Navanitha Vijayakumar - Editorial Studio Portrait
// Incorporates the emerald grid studio wall, vintage camera shelf, grey armchair,
// abstract patterned dress, gold necklace, and warm studio rim lighting.

export const navanithaStudioPortrait = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1067" width="100%" height="100%">
  <defs>
    <!-- Background wall gradient -->
    <linearGradient id="greenWall" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#19382c"/>
      <stop offset="50%" stop-color="#142c22"/>
      <stop offset="100%" stop-color="#0e1f18"/>
    </linearGradient>

    <!-- Studio warm key light -->
    <radialGradient id="keyLight" cx="45%" cy="35%" r="60%">
      <stop offset="0%" stop-color="#fff5e6" stop-opacity="0.18"/>
      <stop offset="50%" stop-color="#ffcc88" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0.45"/>
    </radialGradient>

    <!-- Skin tone gradient with warm lighting -->
    <linearGradient id="skin" x1="30%" y1="0%" x2="70%" y2="100%">
      <stop offset="0%" stop-color="#be875e"/>
      <stop offset="50%" stop-color="#9e663e"/>
      <stop offset="100%" stop-color="#7a4b2a"/>
    </linearGradient>

    <!-- Armchair heather fabric -->
    <linearGradient id="chairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#696c64"/>
      <stop offset="60%" stop-color="#4d5049"/>
      <stop offset="100%" stop-color="#343731"/>
    </linearGradient>

    <!-- Wooden shelf gradient -->
    <linearGradient id="wood" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#8a5327"/>
      <stop offset="50%" stop-color="#aa6d37"/>
      <stop offset="100%" stop-color="#6e3e18"/>
    </linearGradient>
  </defs>

  <!-- 1. Deep Green Studio Paneled Wall -->
  <rect width="1600" height="1067" fill="url(#greenWall)"/>

  <!-- Wall Grid Panel Battens (matching photo's grid wall) -->
  <g stroke="#0f221a" stroke-width="12" opacity="0.9">
    <!-- Horizontal battens -->
    <line x1="0" y1="70" x2="1600" y2="70"/>
    <line x1="0" y1="440" x2="1600" y2="440"/>
    <line x1="0" y1="820" x2="1600" y2="820"/>
    
    <!-- Vertical battens -->
    <line x1="280" y1="0" x2="280" y2="1067"/>
    <line x1="680" y1="0" x2="680" y2="1067"/>
    <line x1="1080" y1="0" x2="1080" y2="1067"/>
    <line x1="1460" y1="0" x2="1460" y2="1067"/>
  </g>

  <!-- Subtle shadow casting on green wall panels -->
  <rect x="0" y="70" width="280" height="370" fill="#0c1b14" opacity="0.25"/>
  <rect x="280" y="70" width="400" height="370" fill="#0c1b14" opacity="0.15"/>
  <rect x="680" y="70" width="400" height="370" fill="#0c1b14" opacity="0.2"/>

  <!-- 2. Right Background: Wooden Shelf with Vintage Camera & Plant -->
  <g id="shelfAndProps">
    <!-- Stepped Wooden Shelf -->
    <rect x="1360" y="375" width="240" height="22" rx="3" fill="url(#wood)"/>
    <rect x="1270" y="525" width="330" height="26" rx="3" fill="url(#wood)"/>
    <rect x="1310" y="870" width="290" height="30" rx="3" fill="url(#wood)"/>
    <!-- Vertical support beams -->
    <rect x="1500" y="375" width="22" height="520" fill="#583112"/>
    <rect x="1350" y="525" width="22" height="370" fill="#583112"/>

    <!-- Vintage Film Camera on middle shelf -->
    <g transform="translate(1300, 435)">
      <!-- Camera body -->
      <rect x="0" y="20" width="165" height="100" rx="8" fill="#1b1c20" stroke="#777" stroke-width="2"/>
      <rect x="15" y="28" width="135" height="50" fill="#2d3038"/>
      <!-- Vintage leatherette body wrap -->
      <rect x="10" y="45" width="145" height="70" fill="#3a3733" rx="4"/>
      <!-- Viewfinder turret & dials -->
      <rect x="25" y="6" width="35" height="15" fill="#cfd2d6" rx="2"/>
      <rect x="110" y="8" width="28" height="13" fill="#cfd2d6" rx="2"/>
      <circle cx="125" cy="5" r="7" fill="#888"/>
      <!-- Lens barrel -->
      <circle cx="82" cy="72" r="38" fill="#111" stroke="#999" stroke-width="4"/>
      <circle cx="82" cy="72" r="28" fill="#1e2229" stroke="#555" stroke-width="2"/>
      <circle cx="82" cy="72" r="16" fill="#0a1a2b"/>
      <circle cx="76" cy="66" r="6" fill="#fff" opacity="0.6"/>
    </g>

    <!-- Small Potted Plant on lower shelf -->
    <g transform="translate(1380, 725)">
      <!-- White pot -->
      <polygon points="25,145 75,145 85,85 15,85" fill="#f4f4f4" stroke="#ddd" stroke-width="2"/>
      <!-- Green succulent leaves -->
      <path d="M 50 85 C 30 50 20 20 40 10 C 55 25 55 55 50 85 Z" fill="#2e7d32"/>
      <path d="M 50 85 C 60 45 80 15 95 30 C 85 50 70 65 50 85 Z" fill="#388e3c"/>
      <path d="M 50 85 C 75 70 105 60 110 80 C 95 90 75 88 50 85 Z" fill="#1b5e20"/>
      <path d="M 50 85 C 25 70 -5 60 0 80 C 15 90 35 88 50 85 Z" fill="#4caf50"/>
    </g>
  </g>

  <!-- 3. Curved Heather Grey Armchair -->
  <g id="armchair">
    <!-- Main backrest curve -->
    <path d="M 280 1067 C 220 780 340 650 560 640 C 920 630 1140 760 1320 1067 Z" fill="url(#chairGrad)"/>
    <!-- Armrest curve (left) -->
    <path d="M 200 1067 C 180 840 280 720 440 680 C 540 820 540 960 520 1067 Z" fill="#4d5049"/>
    <!-- Armrest curve (right) -->
    <path d="M 1340 1067 C 1360 840 1260 730 1100 700 C 1040 820 1020 960 1040 1067 Z" fill="#3a3c36"/>
  </g>

  <!-- 4. Navanitha Vijayakumar Portrait -->
  <g id="navanithaPortrait">
    
    <!-- Torso & Dress (Black dress with white geometric calligraphic lines) -->
    <g id="dress">
      <!-- Base black fabric -->
      <path d="M 520 630 Q 820 570 1120 660 L 1260 1067 L 380 1067 Z" fill="#141417"/>
      
      <!-- Sleeves -->
      <path d="M 520 630 C 440 680 430 780 460 830 C 540 820 580 740 600 680 Z" fill="#18191f"/>
      <path d="M 1120 660 C 1200 700 1220 780 1200 840 C 1120 830 1080 760 1050 700 Z" fill="#18191f"/>

      <!-- Abstract White Line Patterns on Dress -->
      <g stroke="#ececec" stroke-width="7" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity="0.95">
        <!-- Center torso motifs -->
        <path d="M 680 690 L 720 780 L 800 760 L 770 850"/>
        <path d="M 830 680 L 870 750 L 930 720 L 920 830"/>
        <path d="M 740 880 L 840 870 L 860 960 L 780 980 Z"/>
        <path d="M 640 820 L 690 830 L 710 930 L 630 910"/>
        <path d="M 890 850 L 970 840 L 990 940 L 920 960"/>
        <path d="M 600 730 L 660 740 L 640 800"/>
        
        <!-- Lower dress swirls & lines -->
        <path d="M 520 980 L 620 960 L 660 1067"/>
        <path d="M 720 1010 L 810 1000 L 850 1067"/>
        <path d="M 910 990 L 1020 980 L 1060 1067"/>
        <path d="M 1000 750 L 1070 760 L 1050 840"/>

        <!-- Neckline V border -->
        <path d="M 740 630 L 820 730 L 900 630" stroke="#f4f4f4" stroke-width="9"/>
      </g>
    </g>

    <!-- Neck & Décolletage with Gold Chain -->
    <path d="M 760 480 Q 820 540 880 480 L 890 620 Q 820 710 750 620 Z" fill="url(#skin)"/>
    
    <!-- Fine Gold Chain Necklace -->
    <path d="M 770 540 Q 820 625 870 540" fill="none" stroke="#e8b948" stroke-width="4.5" stroke-linecap="round"/>
    <circle cx="820" cy="625" r="4" fill="#ffd56b"/>

    <!-- Arms & Hands Clasping (as in reference photo) -->
    <g id="armsAndHands">
      <!-- Right forearm resting forward -->
      <path d="M 460 830 Q 560 920 760 940 L 790 880 Q 640 850 560 780 Z" fill="url(#skin)"/>
      <!-- Gold/Red cord bracelet on right wrist -->
      <ellipse cx="680" cy="890" rx="14" ry="24" fill="none" stroke="#e8b948" stroke-width="6"/>

      <!-- Left forearm & hand -->
      <path d="M 1200 840 Q 1100 890 920 860 L 880 810 Q 1020 780 1120 760 Z" fill="url(#skin)"/>
      
      <!-- Black Smartwatch on Left Wrist (Apple Watch style) -->
      <g transform="translate(1000, 785)">
        <rect x="0" y="0" width="34" height="48" rx="8" fill="#1b1c20" stroke="#333" stroke-width="2"/>
        <rect x="4" y="6" width="26" height="36" rx="4" fill="#0d0e12"/>
        <!-- Watch strap -->
        <path d="M 8 -18 L 26 -18 L 26 0 L 8 0 Z" fill="#1b1c20"/>
        <path d="M 8 48 L 26 48 L 26 66 L 8 66 Z" fill="#1b1c20"/>
      </g>

      <!-- Hands Clasped together in lap -->
      <ellipse cx="830" cy="850" rx="65" ry="40" fill="url(#skin)"/>
      <path d="M 780 840 Q 840 810 880 830" stroke="#704423" stroke-width="4" fill="none"/>
      <path d="M 790 865 Q 850 835 885 855" stroke="#704423" stroke-width="4" fill="none"/>
      <!-- Ring on left hand finger -->
      <ellipse cx="820" cy="840" rx="4" ry="6" fill="#f1c40f"/>
    </g>

    <!-- Long Wavy Dark Hair (Back volume) -->
    <path d="M 640 380 C 580 480 540 680 620 810 C 680 730 700 620 710 490 Z" fill="#111115"/>
    <path d="M 1000 380 C 1080 480 1140 660 1060 810 C 980 720 950 620 940 490 Z" fill="#111115"/>

    <!-- Head & Facial Structure -->
    <ellipse cx="820" cy="380" rx="125" ry="165" fill="url(#skin)"/>
    <!-- Chin definition -->
    <path d="M 730 460 Q 820 545 910 460 Z" fill="url(#skin)"/>

    <!-- Front Hair Silhouette & Waves -->
    <path d="M 695 350 C 680 230 750 190 820 190 C 890 190 965 230 945 350 C 915 240 880 220 820 220 C 760 220 725 250 695 350 Z" fill="#0d0e12"/>
    <!-- Flowing wavy side strands framing face -->
    <path d="M 695 350 C 670 480 640 620 680 720 C 710 650 725 540 720 440 Z" fill="#0d0e12"/>
    <path d="M 945 350 C 970 480 1010 620 970 720 C 940 650 920 540 925 440 Z" fill="#0d0e12"/>

    <!-- Delicate Black Bindi on Forehead -->
    <circle cx="820" cy="305" r="4.5" fill="#1a1918"/>

    <!-- Eyebrows (natural, arched) -->
    <path d="M 740 315 Q 775 300 805 315" stroke="#2b180d" stroke-width="6.5" fill="none" stroke-linecap="round"/>
    <path d="M 895 315 Q 865 300 835 315" stroke="#2b180d" stroke-width="6.5" fill="none" stroke-linecap="round"/>

    <!-- Eyes (Warm, smiling crinkle, bright reflection) -->
    <!-- Left eye (viewer's left) -->
    <g transform="translate(755, 335)">
      <path d="M 0 10 Q 20 -4 40 10" stroke="#1d1109" stroke-width="4.5" fill="none"/>
      <ellipse cx="20" cy="8" rx="14" ry="9" fill="#2b160b"/>
      <circle cx="23" cy="6" r="4" fill="#ffffff"/>
      <circle cx="17" cy="10" r="1.5" fill="#ffffff" opacity="0.6"/>
      <!-- Soft smile crinkle -->
      <path d="M -6 12 Q -12 6 -15 15" stroke="#754728" stroke-width="2.5" fill="none"/>
    </g>

    <!-- Right eye (viewer's right) -->
    <g transform="translate(845, 335)">
      <path d="M 0 10 Q 20 -4 40 10" stroke="#1d1109" stroke-width="4.5" fill="none"/>
      <ellipse cx="20" cy="8" rx="14" ry="9" fill="#2b160b"/>
      <circle cx="22" cy="6" r="4" fill="#ffffff"/>
      <circle cx="17" cy="10" r="1.5" fill="#ffffff" opacity="0.6"/>
      <!-- Soft smile crinkle -->
      <path d="M 46 12 Q 52 6 55 15" stroke="#754728" stroke-width="2.5" fill="none"/>
    </g>

    <!-- Nose (slender, defined bridge) -->
    <path d="M 820 325 L 814 395 L 826 405 L 834 395" stroke="#7a4625" stroke-width="3.5" fill="none" stroke-linecap="round"/>
    <ellipse cx="810" cy="402" rx="4" ry="2.5" fill="#4d2812"/>
    <ellipse cx="830" cy="402" rx="4" ry="2.5" fill="#4d2812"/>

    <!-- Radiant Wide Open Smile with Teeth (matching photo) -->
    <g transform="translate(820, 442)">
      <!-- Outer lip shape -->
      <path d="M -52 -10 Q 0 -5 52 -10 Q 40 38 0 40 Q -40 38 -52 -10 Z" fill="#994136"/>
      <!-- Inner mouth cavity -->
      <path d="M -44 0 Q 0 8 44 0 Q 34 32 0 34 Q -34 32 -44 0 Z" fill="#421410"/>
      <!-- Bright white teeth row -->
      <path d="M -40 2 Q 0 10 40 2 L 36 18 Q 0 24 -36 18 Z" fill="#ffffff"/>
      <!-- Tooth separations -->
      <line x1="-12" y1="5" x2="-12" y2="20" stroke="#d5c8be" stroke-width="1.5"/>
      <line x1="0" y1="6" x2="0" y2="21" stroke="#d5c8be" stroke-width="1.5"/>
      <line x1="12" y1="5" x2="12" y2="20" stroke="#d5c8be" stroke-width="1.5"/>
      <line x1="24" y1="3" x2="24" y2="16" stroke="#d5c8be" stroke-width="1.5"/>
      <line x1="-24" y1="3" x2="-24" y2="16" stroke="#d5c8be" stroke-width="1.5"/>
      <!-- Lower lip highlight -->
      <path d="M -30 35 Q 0 42 30 35" stroke="#ba5b4e" stroke-width="4" fill="none"/>
    </g>

    <!-- Warm cheek glow & smile laugh lines -->
    <path d="M 740 380 Q 755 425 765 450" stroke="#7a4625" stroke-width="3" fill="none" opacity="0.6"/>
    <path d="M 900 380 Q 885 425 875 450" stroke="#7a4625" stroke-width="3" fill="none" opacity="0.6"/>
  </g>

  <!-- 5. Overall Cinematic Studio Lighting Vignette Overlay -->
  <rect width="1600" height="1067" fill="url(#keyLight)" pointer-events="none"/>
</svg>
`)}`;

export const getProfileImageUrl = () => {
  try {
    const saved = localStorage.getItem('navanitha_custom_profile_image');
    if (saved) return saved;
  } catch (e) {
    // ignore
  }
  return navanithaStudioPortrait;
};
