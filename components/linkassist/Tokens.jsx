// Design tokens for the v2 redesign.
// Single-voice LinkedIn-blue theme (see linkassist.css / globals.css).

export const V2 = {
  // Core
  blue:        "#0066B2",
  blueHover:   "#004D8A",
  bluePress:   "#003A70",
  blueGrad:    "linear-gradient(135deg, #0066B2 0%, #004D8A 100%)",
  // Primary accent — LinkedIn blue (--linkedin-blue), replaces the old coral.
  coral:       "#0A66C2",
  coralHover:  "#1C83D3",
  coralPress:  "#003060",
  coralTint:   "#E5F1FB",
  coralBg:     "#F5FAFF",
  // Cool blue-tinted neutrals for section banding, matching --gradient-hero.
  cream:       "#F8FBFF",
  creamDeep:   "#EDF6FF",
  ink:         "#0F141A",   // hero h1 ink (deeper than gray-900 for impact)
  // Gradients used on the redesigned CTAs (mirrors --gradient-brand / --gradient-card)
  warmGrad:    "linear-gradient(135deg, #0066B2 0%, #1C83D3 55%, #64C3FF 100%)",
  warmGradSoft:"linear-gradient(135deg, rgba(0,102,178,0.05) 0%, rgba(100,195,255,0.15) 100%)",
};
