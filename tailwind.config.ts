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
			// ... keep existing code (container theme)
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1600px'
			}
		},
		extend: {
			fontFamily: {
				// ... keep existing code (fontFamily theme)
				'inter': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
				'sans': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
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
				sidebar: {
					// ... keep existing code (sidebar colors)
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Apple color system
				apple: {
					// ... keep existing code (apple colors)
					blue: 'hsl(var(--apple-blue))',
					'blue-light': 'hsl(var(--apple-blue-light))',
					green: 'hsl(var(--apple-green))',
					'green-light': 'hsl(var(--apple-green-light))',
					orange: 'hsl(var(--apple-orange))',
					'orange-light': 'hsl(var(--apple-orange-light))',
					red: 'hsl(var(--apple-red))',
					'red-light': 'hsl(var(--apple-red-light))',
					purple: 'hsl(var(--apple-purple))',
					'purple-light': 'hsl(var(--apple-purple-light))',
				},
				surface: {
					// ... keep existing code (surface colors)
					primary: 'hsl(var(--surface-primary))',
					secondary: 'hsl(var(--surface-secondary))',
					tertiary: 'hsl(var(--surface-tertiary))',
				},
        // Chart specific colors (can be aligned with your theme's CSS variables)
        'chart-primary': 'hsl(var(--chart-primary))', // e.g. var(--primary)
        'chart-secondary': 'hsl(var(--chart-secondary))', // e.g. var(--secondary)
        'chart-accent': 'hsl(var(--chart-accent))', // e.g. var(--accent)
        'chart-muted': 'hsl(var(--chart-muted))', // e.g. var(--muted)
        'chart-income': 'hsl(var(--chart-income))', // e.g. HSL for Green
        'chart-expense': 'hsl(var(--chart-expense))', // e.g. HSL for Red
        'chart-savings': 'hsl(var(--chart-savings))', // e.g. HSL for Blue
        'chart-cat-wohnen': 'hsl(var(--chart-cat-wohnen))',
        'chart-cat-lebensmittel': 'hsl(var(--chart-cat-lebensmittel))',
        'chart-cat-transport': 'hsl(var(--chart-cat-transport))',
        'chart-cat-versicherungen': 'hsl(var(--chart-cat-versicherungen))',
        'chart-cat-freizeit': 'hsl(var(--chart-cat-freizeit))',
        'chart-cat-sonstiges': 'hsl(var(--chart-cat-sonstiges))',
			},
			borderRadius: {
				// ... keep existing code (borderRadius theme)
				'lg': '12px',
				'md': '8px',
				'sm': '6px',
				'xl': '16px',
				'2xl': '20px',
				'3xl': '24px'
			},
			boxShadow: {
				// ... keep existing code (boxShadow theme)
				'apple': '0 4px 16px rgba(0, 0, 0, 0.08)',
				'apple-lg': '0 8px 32px rgba(0, 0, 0, 0.12)',
				'apple-xl': '0 16px 64px rgba(0, 0, 0, 0.16)',
				'apple-button': '0 2px 8px rgba(0, 0, 0, 0.06)',
				'apple-card': '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
			},
			backdropBlur: {
				// ... keep existing code (backdropBlur theme)
				'apple': '20px',
			},
			keyframes: {
				// ... keep existing code (keyframes theme)
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'apple-scale-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.95)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'apple-fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'apple-slide-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'apple-bounce': {
					'0%, 100%': {
						transform: 'translateY(-25%)',
						animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
					},
					'50%': {
						transform: 'translateY(0)',
						animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
					}
				},
				'apple-pulse': {
					'0%, 100%': {
						opacity: '1'
					},
					'50%': {
						opacity: '0.5'
					}
				}
			},
			animation: {
				// ... keep existing code (animation theme)
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'apple-scale-in': 'apple-scale-in 0.2s ease-out',
				'apple-fade-in': 'apple-fade-in 0.3s ease-out',
				'apple-slide-up': 'apple-slide-up 0.4s ease-out',
				'apple-bounce': 'apple-bounce 1s infinite',
				'apple-pulse': 'apple-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
			},
			spacing: {
				// ... keep existing code (spacing theme)
				'18': '4.5rem',
				'88': '22rem',
			},
			fontSize: {
				// ... keep existing code (fontSize theme)
				'xxs': '0.625rem',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
