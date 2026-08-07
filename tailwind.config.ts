
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				mono: ['JetBrains Mono', 'monospace'],
				display: ['Space Grotesk', 'sans-serif'],
				sans: ['Space Grotesk', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				neon: {
					DEFAULT: 'hsl(142, 100%, 50%)',
					dim: 'rgba(0, 255, 65, 0.2)',
					glow: 'rgba(0, 255, 65, 0.5)',
				},
				cyber: {
					DEFAULT: 'hsl(185, 100%, 50%)',
					dim: 'rgba(0, 255, 255, 0.2)',
				},
				void: {
					DEFAULT: 'hsl(0, 0%, 3%)',
					100: 'hsl(0, 0%, 6%)',
					200: 'hsl(0, 0%, 10%)',
					300: 'hsl(0, 0%, 14%)',
				},
				amber: {
					DEFAULT: 'hsl(45, 100%, 55%)',
					dim: 'rgba(255, 170, 0, 0.2)',
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: '0',
				md: '0',
				sm: '0'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'glitch': {
					'0%': { transform: 'translate(2px, 1px) skewX(0deg)' },
					'20%': { transform: 'translate(-2px, -1px) skewX(2deg)' },
					'40%': { transform: 'translate(1px, 2px) skewX(-1deg)' },
					'60%': { transform: 'translate(-1px, -2px) skewX(0deg)' },
					'80%': { transform: 'translate(2px, -1px) skewX(1deg)' },
					'100%': { transform: 'translate(0, 0) skewX(0deg)' },
				},
				'marquee': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-50%)' },
				},
				'pulse-neon': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.6' },
				},
				'flicker': {
					'0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': { opacity: '1' },
					'20%, 24%, 55%': { opacity: '0.8' },
				},
				'float-in': {
					from: { opacity: '0', transform: 'translateY(30px)' },
					to: { opacity: '1', transform: 'translateY(0)' },
				},
				'cursor-blink': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'glitch': 'glitch 0.4s steps(2) infinite',
				'marquee': 'marquee 30s linear infinite',
				'pulse-neon': 'pulse-neon 2s ease-in-out infinite',
				'flicker': 'flicker 3s linear infinite',
				'float-in': 'float-in 0.7s ease-out forwards',
				'cursor-blink': 'cursor-blink 1s steps(1) infinite',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
