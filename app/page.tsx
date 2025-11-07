export default function Page() {
  return (
    <main>
      <h1>Classic Game Boy SVG</h1>
      <p>
        A crisp, resolution independent illustration of the original handheld console,
        crafted purely in SVG so you can scale, recolor, or animate it for any retro
        gaming project.
      </p>
      <figure>
        <svg viewBox="0 0 320 540" role="img" aria-labelledby="title desc">
          <title id="title">Classic Nintendo Game Boy</title>
          <desc id="desc">
            Stylized front view of the original gray Game Boy with green screen, D-pad,
            A and B buttons, and speaker grille.
          </desc>
          <defs>
            <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f4f4f7" />
              <stop offset="45%" stopColor="#e7e8ee" />
              <stop offset="100%" stopColor="#d5d7e0" />
            </linearGradient>
            <linearGradient id="screenBezel" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2f2a45" />
              <stop offset="100%" stopColor="#1f1a35" />
            </linearGradient>
            <linearGradient id="screenGlass" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#b2d340" />
              <stop offset="100%" stopColor="#6f8c31" />
            </linearGradient>
            <linearGradient id="highlight" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="24" stdDeviation="24" floodColor="#0f172a" floodOpacity="0.2" />
            </filter>
          </defs>

          <g filter="url(#shadow)">
            <rect x="30" y="20" width="260" height="500" rx="32" ry="32" fill="url(#bodyGradient)" />
            <rect x="42" y="32" width="236" height="476" rx="24" ry="24" fill="#d0d2db" opacity="0.35" />

            <path
              d="M54 90h212v164H54z"
              fill="url(#screenBezel)"
              stroke="#110f1f"
              strokeWidth="4"
              strokeLinejoin="round"
            />
            <rect x="74" y="110" width="172" height="124" rx="10" ry="10" fill="url(#screenGlass)" />
            <rect x="74" y="110" width="172" height="124" rx="10" ry="10" fill="url(#highlight)" />

            <circle cx="90" cy="276" r="12" fill="#d8437f" />
            <circle cx="104" cy="276" r="12" fill="#d8437f" />

            <path
              d="M118 332h-40a4 4 0 0 0-4 4v40a4 4 0 0 0 4 4h40a4 4 0 0 0 4-4v-40a4 4 0 0 0-4-4z"
              fill="#1f2137"
            />
            <rect x="128" y="342" width="8" height="20" rx="3" fill="#343954" />

            <g transform="translate(70 340)" fill="#0c0f19">
              <rect x="-6" y="18" width="44" height="8" rx="2" />
              <rect x="12" y="0" width="8" height="44" rx="2" />
            </g>

            <g transform="translate(188 356)"
              fill="#a41956"
              stroke="#6f0f37"
              strokeWidth="4">
              <circle cx="0" cy="0" r="24" />
              <circle cx="60" cy="14" r="18" />
            </g>

            <g fill="#3a3d55">
              <rect x="82" y="420" width="156" height="12" rx="6" />
              <rect x="82" y="444" width="156" height="12" rx="6" />
            </g>

            <g transform="translate(120 476)" fill="#979aad">
              <circle cx="0" cy="0" r="8" />
              <circle cx="40" cy="0" r="8" />
              <circle cx="80" cy="0" r="8" />
            </g>

            <path
              d="M75 70h170"
              stroke="#c1287a"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray="16 12"
            />

            <circle cx="236" cy="270" r="8" fill="#a41956" stroke="#f9a8d4" strokeWidth="2" />
          </g>
        </svg>
        <figcaption>Scale the SVG without losing detail for posters, icons, or UI mockups.</figcaption>
      </figure>
    </main>
  );
}
