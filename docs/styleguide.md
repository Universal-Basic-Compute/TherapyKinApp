┃ TherapyKin Style Guide                                                                                               ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛


Brand Colors

Primary Colors

 • Teal (#00c5bc): Main brand color, used for primary buttons, links, and key UI elements
 • Light Green (#8ced7d): Used for accents, highlights, and secondary elements
 • Purple (#a571ff): Used for emphasis, calls to action, and interactive elements

Accent Colors

 • Yellow (#ffde45): Used for highlights, warnings, and to draw attention
 • Orange (#ff9d76): Used for warm accents and secondary highlights

Neutral Colors

 • Background (#f8fafc): Main background color for light mode
 • Background Alt (#f1f5f9): Secondary background for cards and sections in light mode
 • Foreground (#1e293b): Main text color in light mode

Dark Mode Colors

 • Dark Background (#0a1929): Main background color for dark mode
 • Dark Background Alt (#132f4c): Secondary background for cards and sections in dark mode
 • Dark Foreground (#f1f5f9): Main text color in dark mode

UI Elements

 • Border (rgba(0, 0, 0, 0.08) / rgba(255, 255, 255, 0.1)): Used for subtle separations
 • Card Background (#ffffff / #132f4c): Background for card components
 • Card Shadow (0 4px 20px -2px rgba(0, 0, 0, 0.1) / 0 4px 20px -2px rgba(0, 0, 0, 0.3)): Shadow for card components


Typography

Font Family

 • Primary Font: Geist Sans (with Arial, Helvetica, sans-serif as fallbacks)
 • Monospace Font: Geist Mono (for code blocks and technical content)

Font Sizes

 • Headings:
    • H1: 2.25rem (36px)
    • H2: 1.75rem (28px)
    • H3: 1.5rem (24px)
    • H4: 1.25rem (20px)
 • Body Text: 1rem (16px)
 • Small Text: 0.875rem (14px)
 • Extra Small Text: 0.75rem (12px)

Font Weights

 • Regular: 400
 • Medium: 500
 • Semibold: 600
 • Bold: 700


Components

Buttons

Primary Button

 • Background: var(--primary) (#00c5bc)
 • Text Color: white
 • Border Radius: 9999px (fully rounded)
 • Padding: 0.75rem 1.5rem
 • Font Weight: 500
 • Hover: Background changes to var(--primary-dark) (#a571ff), slight upward transform

Secondary Button

 • Background: transparent
 • Text Color: var(--foreground)
 • Border: 1px solid var(--border)
 • Border Radius: 9999px
 • Padding: 0.75rem 1.5rem
 • Font Weight: 500
 • Hover: Background changes to rgba(0, 0, 0, 0.05) in light mode, rgba(255, 255, 255, 0.1) in dark mode

Cards

 • Background: var(--card-bg)
 • Border Radius: 1rem
 • Box Shadow: var(--card-shadow)
 • Border: 1px solid var(--border)

Card Variations

 • Card Highlight: Standard card with 4px yellow top border
 • Card Primary: Standard card with 4px teal top border
 • Card Accent: Standard card with 4px purple top border

Card Hover Effects

 • Lift: Card rises slightly on hover with enhanced shadow
 • Glow: Card gets a colored glow effect on hover
 • Border: Card border changes to primary color on hover
 • Scale: Card scales up slightly on hover
 • Rotate: Card rotates slightly and rises on hover

Message Bubbles

User Message Bubble

 • Background: Linear gradient from #00c5bc to #4fffee
 • Text Color: white
 • Box Shadow: 0 2px 10px rgba(0, 197, 188, 0.2)
 • Border: 1px solid rgba(255, 255, 255, 0.1)
 • Hover: Slight upward transform with enhanced shadow

Assistant Message Bubble

 • Background: Linear gradient from var(--background-alt) to var(--card-bg)
 • Border: 1px solid rgba(0, 0, 0, 0.05)
 • Box Shadow: 0 2px 8px rgba(0, 0, 0, 0.05)
 • Hover: Slight upward transform with 1-degree rotation and enhanced shadow


Image Styles

Illustrations

 • Style: Clean, modern pencil-style illustrations
 • Color Palette: White, teal (#00c5bc), light green (#8ced7d), purple (#a571ff), violet (#c278f5), yellow (#ffde45),
   orange (#ff9d76)
 • Characteristics:
    • Gentle, flowing pencil lines
    • Subtle shading
    • Minimalist composition
    • Smooth, curved forms
    • Contemporary but organic feel
    • Avoids harsh edges
    • Evokes support and emotional safety

Blog/Resource Images

 • Aspect Ratio: 3:2 (landscape)
 • Style: Editorial-style pencil illustrations
 • Color Palette: Same as illustrations
 • Characteristics:
    • Professional, clean appearance
    • Calming and supportive feel
    • Soothing visual elements
    • Therapeutic atmosphere
    • Conceptual rather than literal representations

Profile/Avatar Images

 • Aspect Ratio: 1:1 (square)
 • Style: Abstract pencil illustrations
 • Color Palette: Same as illustrations
 • Characteristics:
    • Captures essence and personality
    • Maintains privacy through abstraction
    • Gentle, flowing lines
    • Minimalist composition
    • Contemporary therapeutic style

Session Images

 • Aspect Ratio: 3:1 (wide landscape)
 • Style: Soothing pencil illustrations
 • Color Palette: Same as illustrations
 • Characteristics:
    • Calming visual elements
    • Clean, modern therapeutic style
    • Conceptual representations of session themes
    • Subtle, gentle composition


Animations and Effects

Transitions

 • All color, background, and border transitions: 0.3s ease
 • Transform transitions: 0.2s ease

Animations

 • Fade In: Subtle fade in with slight upward movement
 • Float: Gentle floating animation for decorative elements
 • Message Appear: Smooth appearance animation for chat messages
 • Typing Effect: Character-by-character appearance for typing simulation
 • Loading Dots: Pulsing animation for loading indicators

Hover Effects

 • Lift: Element rises slightly
 • Glow: Element gets a colored glow
 • Scale: Element scales up slightly
 • Rotate: Element rotates slightly
 • Shine: Diagonal shine effect moves across the element


Backgrounds and Patterns

Gradients

 • Primary Gradient: Linear gradient from teal (#00c5bc) to purple (#a571ff)
 • Accent Gradient: Linear gradient from yellow (#ffde45) to orange (#ff9d76)
 • Warm Gradient: Linear gradient from orange (#ff9d76) to purple (#a571ff)
 • Background Gradient: Linear gradient from teal (#00c5bc) to yellow (#ffde45)

Patterns

 • Dots Pattern: Radial gradient dots using primary color
 • Lines Pattern: Diagonal lines using background colors
 • Texture Overlay: Subtle SVG texture for added depth


Accessibility Guidelines

 • Maintain minimum contrast ratio of 4.5:1 for normal text
 • Use semantic HTML elements
 • Include focus states for all interactive elements
 • Ensure all functionality is keyboard accessible
 • Provide alternative text for all images
 • Use relative units (rem) for font sizes to respect user preferences


Implementation Notes

 • Use CSS variables for consistent theming
 • Implement dark mode using prefers-color-scheme media query
 • Use Tailwind CSS utility classes when possible
 • Add smooth transitions for all interactive elements
 • Ensure responsive design for all screen sizes