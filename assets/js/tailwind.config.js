tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        brand: {
                            purple: '#a855f7',
                            cyan: '#06b6d4',
                            emerald: '#10b981',
                            pink: '#ec4899',
                            darkBg: '#0b0c10',
                            cardBg: 'rgba(23, 27, 38, 0.7)',
                        }
                    },
                    fontFamily: {
                        sans: ['Prompt', 'Inter', 'sans-serif'],
                    },
                    animation: {
                        'pulse-glow': 'pulseGlow 3s infinite alternate',
                        'float': 'float 6s ease-in-out infinite',
                    },
                    keyframes: {
                        pulseGlow: {
                            '0%': { boxShadow: '0 0 15px rgba(168, 85, 247, 0.4)' },
                            '100%': { boxShadow: '0 0 35px rgba(6, 182, 212, 0.8)' },
                        },
                        float: {
                            '0%, 100%': { transform: 'translateY(0px)' },
                            '50%': { transform: 'translateY(-12px)' },
                        }
                    }
                }
            }
        }
