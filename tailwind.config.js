/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],

  safelist: [
    "animate-ribbon1",
    "animate-ribbon2",
    "animate-ribbon3",
    "animate-slide-in",
    "animate-rotate-apple",

    // ⭐ New Juan Pablo effects
    "animate-blob",
    "animate-shimmer",
    "animate-glow-pulse",
  ],

  theme: {
  	extend: {
  		animation: {
  			ribbon1: 'ribbon1 12s ease-in-out infinite',
  			ribbon2: 'ribbon2 15s ease-in-out infinite',
  			ribbon3: 'ribbon3 18s ease-in-out infinite',
  			'slide-in': 'slideIn 1s ease-out forwards',
  			'rotate-apple': 'rotateApple 16s linear infinite',
  			blob: 'blob 8s infinite',
  			shimmer: 'shimmer 2.5s linear infinite',
  			'glow-pulse': 'glowPulse 2s ease-in-out infinite'
  		},
  		keyframes: {
  			ribbon1: {
  				'0%': {
  					transform: 'translateX(-20%) translateY(0) rotate(0deg)'
  				},
  				'50%': {
  					transform: 'translateX(20%) translateY(-20px) rotate(3deg)'
  				},
  				'100%': {
  					transform: 'translateX(-20%) translateY(0) rotate(0deg)'
  				}
  			},
  			ribbon2: {
  				'0%': {
  					transform: 'translateX(-30%) translateY(0) rotate(0deg)'
  				},
  				'50%': {
  					transform: 'translateX(30%) translateY(20px) rotate(-2deg)'
  				},
  				'100%': {
  					transform: 'translateX(-30%) translateY(0) rotate(0deg)'
  				}
  			},
  			ribbon3: {
  				'0%': {
  					transform: 'translateX(-40%) translateY(0) rotate(0deg)'
  				},
  				'50%': {
  					transform: 'translateX(40%) translateY(-15px) rotate(1deg)'
  				},
  				'100%': {
  					transform: 'translateX(-40%) translateY(0) rotate(0deg)'
  				}
  			},
  			slideIn: {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(40px) scale(0.97)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0) scale(1)'
  				}
  			},
  			rotateApple: {
  				'0%': {
  					transform: 'rotate(0deg) scale(1)'
  				},
  				'50%': {
  					transform: 'rotate(180deg) scale(1.05)'
  				},
  				'100%': {
  					transform: 'rotate(360deg) scale(1)'
  				}
  			},
  			blob: {
  				'0%': {
  					transform: 'translate(0px, 0px) scale(1)'
  				},
  				'33%': {
  					transform: 'translate(30px, -50px) scale(1.1)'
  				},
  				'66%': {
  					transform: 'translate(-20px, 20px) scale(0.9)'
  				},
  				'100%': {
  					transform: 'translate(0px, 0px) scale(1)'
  				}
  			},
  			shimmer: {
  				'0%': {
  					backgroundPosition: '0% 50%'
  				},
  				'100%': {
  					backgroundPosition: '200% 50%'
  				}
  			},
  			glowPulse: {
  				'0%,100%': {
  					boxShadow: '0 0 10px rgba(59,130,246,0.4)'
  				},
  				'50%': {
  					boxShadow: '0 0 25px rgba(59,130,246,0.9)'
  				}
  			}
  		},
  		utilities: {
  			'.animation-delay-2000': {
  				'animation-delay': '2s'
  			},
  			'.animation-delay-4000': {
  				'animation-delay': '4s'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },

  plugins: [require("tailwindcss-animate")],
};
