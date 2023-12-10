/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss';

const baseFontSize = 10;

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  // darkMode: ['class', '[data-mode="dark"]'],
  darkMode: 'media',
  theme: {
    screens: {
      tablet: { max: '1024px' },
      mobile: { max: '767px' },
    },
    extend: {
      colors: {
        test: `var(--text-link)`,
        test2: '#0969da',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
        'fade-in': 'fade-in 300ms ease-out',
        'fade-out': 'fade-out 300ms ease-out',
        bouncing: 'bounce 300ms ease-in-out',
        'fast-fade-in': 'fade-in 100ms',
        'translate-fade-in': 'translate-fade-in 100ms',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'translate-fade-in': {
          '0%': { opacity: '0', transform: 'translateY(-5%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        bounce: {
          '70%': { transform: 'translateY(0%)' },
          '80%': { transform: 'translateY(-15%)' },
          '90%': { transform: 'translateY(0%)' },
          '95%': { transform: 'translateY(-7%)' },
          '97%': { transform: 'translateY(0%)' },
          '99%': { transform: 'translateY(-3%)' },
          '100%': { transform: 'translateY(0%)' },
        },
      },
      borderRadius: ({ theme }) => theme('spacing'),

      fontSize: {
        xs: [
          `${(16 * 0.75) / baseFontSize}rem` /* 12px */,
          {
            lineHeight: `${(16 * 1) / baseFontSize}rem` /* 16px */,
          },
        ],
        sm: [
          `${(16 * 0.875) / baseFontSize}rem` /* 14px */,
          {
            lineHeight: `${(16 * 1.25) / baseFontSize}rem` /* 20px */,
          },
        ],
        base: [
          `${(16 * 1) / baseFontSize}rem` /* 16px */,
          {
            lineHeight: `${(16 * 1.5) / baseFontSize}rem` /* 24px */,
          },
        ],
        lg: [
          `${(16 * 1.125) / baseFontSize}rem` /* 18px */,
          {
            lineHeight: `${(16 * 1.75) / baseFontSize}rem` /* 28px */,
          },
        ],
        xl: [
          `${(16 * 1.25) / baseFontSize}rem` /* 20px */,
          {
            lineHeight: `${(16 * 1.75) / baseFontSize}rem` /* 28px */,
          },
        ],
        '2xl': [
          `${(16 * 1.5) / baseFontSize}rem` /* 24px */,
          {
            lineHeight: `${(16 * 2) / baseFontSize}rem` /* 32px */,
          },
        ],
        '3xl': [
          `${(16 * 1.875) / baseFontSize}rem` /* 30px */,
          {
            lineHeight: `${(16 * 2.25) / baseFontSize}rem` /* 36px */,
          },
        ],
        '4xl': [
          `${(16 * 2.25) / baseFontSize}rem` /* 36px */,
          {
            lineHeight: `${(16 * 2.5) / baseFontSize}rem` /* 40px */,
          },
        ],
        '5xl': [
          `${(16 * 3) / baseFontSize}rem` /* 48px */,
          {
            lineHeight: `${(16 * 1) / baseFontSize}rem`,
          },
        ],
        '6xl': [
          `${(16 * 3.75) / baseFontSize}rem` /* 60px */,
          {
            lineHeight: `${(16 * 1) / baseFontSize}rem`,
          },
        ],
        '7xl': [
          `${(16 * 4.5) / baseFontSize}rem` /* 72px */,
          {
            lineHeight: `${(16 * 1) / baseFontSize}rem`,
          },
        ],
        '8xl': [
          `${(16 * 6) / baseFontSize}rem` /* 96px */,
          {
            lineHeight: `${(16 * 1) / baseFontSize}rem`,
          },
        ],
        '9xl': [
          `${(16 * 8) / baseFontSize}rem` /* 128px */,
          {
            lineHeight: `${(16 * 1) / baseFontSize}rem`,
          },
        ],
      },
    },
  },
} satisfies Config;
