import React from "react";

interface TechLogoProps {
  name: string;
  size?: number;
}

export default function TechLogo({ name, size = 36 }: TechLogoProps) {
  const normalized = name.toLowerCase().trim();

  // Consistent 36x36 vector icons with authentic silhouettes and dark editorial accents
  switch (normalized) {
    case "html":
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <path d="M5 3L7.5 28L16 30.5L24.5 28L27 3H5Z" fill="#E44D26" />
          <path d="M16 28.5L22.8 26.5L25 5H16V28.5Z" fill="#F16529" />
          <path d="M16 11.5H10.5L10.8 15H16V11.5ZM16 18.5H11.1L11.5 22.5L16 23.8V18.5Z" fill="#EBEBEB" />
          <path d="M16 11.5V15H21.2L20.8 18.5L16 19.8V23.8L20.5 22.5L21.8 11.5H16Z" fill="#FFFFFF" />
        </svg>
      );

    case "css":
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <path d="M5 3L7.5 28L16 30.5L24.5 28L27 3H5Z" fill="#1572B6" />
          <path d="M16 28.5L22.8 26.5L25 5H16V28.5Z" fill="#33A9DC" />
          <path d="M16 11.5H10.5L10.8 15H16V11.5ZM16 18.5H11.1L11.5 22.5L16 23.8V18.5Z" fill="#EBEBEB" />
          <path d="M16 11.5V15H21.2L20.8 18.5L16 19.8V23.8L20.5 22.5L21.8 11.5H16Z" fill="#FFFFFF" />
        </svg>
      );

    case "javascript":
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <rect width="32" height="32" rx="4" fill="#F7DF1E" />
          <path d="M13.5 24C12.5 24 11.5 23.5 11 22.5L13 21.2C13.3 21.7 13.8 22 14.3 22C15 22 15.5 21.6 15.5 20.5V13H17.8V20.5C17.8 22.8 16.3 24 13.5 24ZM22.5 24C20.2 24 18.8 22.6 18.8 20.3L21 19.2C21.4 20.6 22.3 21.8 23.8 21.8C25 21.8 25.8 21.2 25.8 20.2C25.8 19.1 25.1 18.7 23.6 18L22.8 17.6C20.8 16.7 19.5 15.6 19.5 13.5C19.5 11.4 21.2 9.8 23.6 9.8C25.4 9.8 26.8 10.7 27.5 12.2L25.5 13.2C25.1 12.4 24.5 11.8 23.5 11.8C22.5 11.8 21.8 12.4 21.8 13.3C21.8 14.2 22.4 14.6 23.8 15.2L24.6 15.6C27 16.6 28.2 17.8 28.2 20C28.2 22.4 26.3 24 22.5 24Z" fill="#000000" />
        </svg>
      );

    case "typescript":
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <rect width="32" height="32" rx="4" fill="#3178C6" />
          <path d="M11.5 12H19.5V14.5H16.8V24H14.2V14.5H11.5V12ZM22.5 24.2C20.2 24.2 18.8 22.8 18.8 20.5L21.2 19.5C21.6 20.8 22.5 21.9 23.9 21.9C25.1 21.9 25.8 21.3 25.8 20.4C25.8 19.3 25.1 18.9 23.7 18.3L22.9 17.9C21 17.1 19.8 16 19.8 14C19.8 12 21.4 10.5 23.7 10.5C25.5 10.5 26.8 11.4 27.5 12.8L25.4 13.9C25 13.1 24.5 12.6 23.6 12.6C22.7 12.6 22.1 13.1 22.1 13.9C22.1 14.8 22.7 15.2 24 15.7L24.8 16.1C27.1 17.1 28.3 18.2 28.3 20.3C28.3 22.6 26.4 24.2 22.5 24.2Z" fill="#FFFFFF" />
        </svg>
      );

    case "php":
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <ellipse cx="16" cy="16" rx="15" ry="10" fill="#777BB4" />
          <text x="16" y="19" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="bold" fill="#FFFFFF" textAnchor="middle">PHP</text>
        </svg>
      );

    case "python":
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <path d="M15.8 3C10.5 3 10.8 5.3 10.8 5.3L10.8 7.7H16V8.5H8.7C8.7 8.5 5 8.1 5 13.4C5 18.7 8.3 18.5 8.3 18.5H9.8V16.3C9.8 13.7 12 13.7 12 13.7H17.2C17.2 13.7 19.5 13.6 19.5 11.3V5.5C19.5 5.5 19.8 3 15.8 3ZM13.8 4.7C14.3 4.7 14.8 5.1 14.8 5.6C14.8 6.1 14.3 6.6 13.8 6.6C13.2 6.6 12.8 6.1 12.8 5.6C12.8 5.1 13.2 4.7 13.8 4.7Z" fill="#3776AB" />
          <path d="M16.2 29C21.5 29 21.2 26.7 21.2 26.7L21.2 24.3H16V23.5H23.3C23.3 23.5 27 23.9 27 18.6C27 13.3 23.7 13.5 23.7 13.5H22.2V15.7C22.2 18.3 20 18.3 20 18.3H14.8C14.8 18.3 12.5 18.4 12.5 20.7V26.5C12.5 26.5 12.2 29 16.2 29ZM18.2 27.3C17.7 27.3 17.2 26.9 17.2 26.4C17.2 25.9 17.7 25.4 18.2 25.4C18.8 25.4 19.2 25.9 19.2 26.4C19.2 26.9 18.8 27.3 18.2 27.3Z" fill="#FFD43B" />
        </svg>
      );

    case "c++":
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <rect width="32" height="32" rx="4" fill="#00599C" />
          <text x="16" y="20" fontFamily="monospace" fontSize="11" fontWeight="bold" fill="#FFFFFF" textAnchor="middle">C++</text>
        </svg>
      );

    case "c":
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <rect width="32" height="32" rx="4" fill="#A8B9CC" />
          <text x="16" y="21" fontFamily="monospace" fontSize="14" fontWeight="bold" fill="#1C2C40" textAnchor="middle">C</text>
        </svg>
      );

    case "java":
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <rect width="32" height="32" rx="4" fill="#5382A1" />
          <path d="M11 22C11 22 12.5 23 16 23C19.5 23 21 22 21 22C21 22 19.8 24.5 16 24.5C12.2 24.5 11 22 11 22Z" fill="#EA2D2E" />
          <path d="M12.5 18C12.5 18 13.8 19 16 19C18.2 19 19.5 18 19.5 18C19.5 18 18.5 20.2 16 20.2C13.5 20.2 12.5 18 12.5 18Z" fill="#EA2D2E" />
          <path d="M18 12C17.5 10.5 15.5 10 16.5 8C15 9 14 11 15 13C16 15 17 14 18 12Z" fill="#EA2D2E" />
        </svg>
      );

    case "react":
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <circle cx="16" cy="16" r="2.5" fill="#61DAFB" />
          <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61DAFB" strokeWidth="1.2" fill="none" />
          <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60 16 16)" />
          <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(120 16 16)" />
        </svg>
      );

    case "next.js":
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <circle cx="16" cy="16" r="15" fill="#000000" stroke="#333333" strokeWidth="1.5" />
          <path d="M12 9V23M12 9L23 23M20 9V17" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case "tailwind css":
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <path d="M16 9.5C13.5 9.5 12 10.8 11.5 13.2C12.5 11.8 13.8 11.2 15.2 11.5C16.8 11.8 18 13 19.2 14.5C21.2 16.8 23.5 19.5 28 19.5C30.5 19.5 32 18.2 32.5 15.8C31.5 17.2 30.2 17.8 28.8 17.5C27.2 17.2 26 16 24.8 14.5C22.8 12.2 20.5 9.5 16 9.5ZM4 18.5C1.5 18.5 0 19.8 -0.5 22.2C0.5 20.8 1.8 20.2 3.2 20.5C4.8 20.8 6 22 7.2 23.5C9.2 25.8 11.5 28.5 16 28.5C18.5 28.5 20 27.2 20.5 24.8C19.5 26.2 18.2 26.8 16.8 26.5C15.2 26.2 14 25 12.8 23.5C10.8 21.2 8.5 18.5 4 18.5Z" fill="#06B6D4" transform="scale(0.8) translate(4, 3)" />
        </svg>
      );

    case "bootstrap":
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <rect width="32" height="32" rx="7" fill="#7952B3" />
          <path d="M12 9H17.5C19.5 9 21 10.2 21 12C21 13.2 20.2 14.2 19 14.5C20.5 14.8 21.5 16 21.5 17.5C21.5 19.5 19.8 21 17.5 21H12V9ZM15 11.2V13.8H17.2C18 13.8 18.7 13.3 18.7 12.5C18.7 11.7 18 11.2 17.2 11.2H15ZM15 16V18.8H17.5C18.4 18.8 19.2 18.2 19.2 17.4C19.2 16.6 18.4 16 17.5 16H15Z" fill="#FFFFFF" />
        </svg>
      );

    case "vue.js":
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <path d="M16 27L3 4.5H8.5L16 17.5L23.5 4.5H29L16 27Z" fill="#42B883" />
          <path d="M16 20L8.5 7H13L16 12.5L19 7H23.5L16 20Z" fill="#35495E" />
        </svg>
      );

    case "vite":
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <path d="M28 6L16.5 27.5L4 6L14 8L16 4L18 8L28 6Z" fill="#646CFF" />
          <path d="M18.5 7L13.5 16H17.5L14 24L21 13H17L18.5 7Z" fill="#FFD62E" />
        </svg>
      );

    case "node.js":
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <path d="M16 3L27.5 9.6V22.4L16 29L4.5 22.4V9.6L16 3Z" fill="#339933" />
          <text x="16" y="19" fontFamily="system-ui, sans-serif" fontSize="9" fontWeight="bold" fill="#FFFFFF" textAnchor="middle">node</text>
        </svg>
      );

    case "express.js":
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <rect width="32" height="32" rx="4" fill="#1C1C1C" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          <text x="16" y="20" fontFamily="monospace" fontSize="11" fontWeight="bold" fill="#F59E0B" textAnchor="middle">ex</text>
        </svg>
      );

    case "laravel":
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <rect width="32" height="32" rx="4" fill="#FF2D20" />
          <path d="M9 11L16 7L23 11V21L16 25L9 21V11Z" stroke="#FFFFFF" strokeWidth="1.8" fill="none" />
          <path d="M16 7V25M9 11L16 15L23 11" stroke="#FFFFFF" strokeWidth="1.5" />
        </svg>
      );

    case "codeigniter":
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <rect width="32" height="32" rx="4" fill="#EE4326" />
          <path d="M16 6C16 6 12 11 12 16C12 18.5 13.5 21 16 21C18.5 21 20 18.5 20 16C20 11 16 6 16 6Z" fill="#FFFFFF" />
          <circle cx="16" cy="18" r="2.5" fill="#EE4326" />
        </svg>
      );

    case "django":
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <rect width="32" height="32" rx="4" fill="#092E20" />
          <text x="16" y="20" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="bold" fill="#44B78B" textAnchor="middle">dj</text>
        </svg>
      );

    case "mysql":
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <rect width="32" height="32" rx="4" fill="#00758F" />
          <text x="16" y="20" fontFamily="system-ui, sans-serif" fontSize="9" fontWeight="bold" fill="#F29111" textAnchor="middle">SQL</text>
        </svg>
      );

    case "postgresql":
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <rect width="32" height="32" rx="4" fill="#4169E1" />
          <text x="16" y="20" fontFamily="system-ui, sans-serif" fontSize="9" fontWeight="bold" fill="#FFFFFF" textAnchor="middle">PG</text>
        </svg>
      );

    case "mongodb":
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <rect width="32" height="32" rx="4" fill="#13AA52" />
          <path d="M16 6C16 6 11 11 11 17C11 20 13.5 24 16 26C18.5 24 21 20 21 17C21 11 16 6 16 6Z" fill="#FFFFFF" />
          <path d="M16 6V26" stroke="#13AA52" strokeWidth="1" />
        </svg>
      );

    case "firebase":
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <path d="M7 23.5L10 6L14 13L7 23.5Z" fill="#FFA000" />
          <path d="M14 13L17 3L25 23.5L14 13Z" fill="#F57C00" />
          <path d="M7 23.5L16 28.5L25 23.5L7 23.5Z" fill="#FFCA28" />
        </svg>
      );

    case "sqlite":
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <rect width="32" height="32" rx="4" fill="#003B57" />
          <text x="16" y="20" fontFamily="system-ui, sans-serif" fontSize="8" fontWeight="bold" fill="#00A2E8" textAnchor="middle">SQLite</text>
        </svg>
      );

    case "visual studio code":
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <path d="M23.5 4L15.5 11.5L9.5 7L6 9L11.5 16L6 23L9.5 25L15.5 20.5L23.5 28L26 26.5V5.5L23.5 4ZM23.5 23.5L17.5 16L23.5 8.5V23.5Z" fill="#007ACC" />
        </svg>
      );

    case "git":
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <rect width="32" height="32" rx="4" fill="#F05032" />
          <path d="M16 7L24 15L16 23L8 15L16 7Z" fill="#FFFFFF" />
          <circle cx="16" cy="11.5" r="2" fill="#F05032" />
          <circle cx="12.5" cy="17" r="2" fill="#F05032" />
          <circle cx="16" cy="19.5" r="2" fill="#F05032" />
        </svg>
      );

    case "github":
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <rect width="32" height="32" rx="4" fill="#24292E" />
          <path d="M16 6C10.5 6 6 10.5 6 16C6 20.4 8.9 24.1 12.8 25.4C13.3 25.5 13.5 25.2 13.5 24.9V23.2C10.7 23.8 10.1 21.9 10.1 21.9C9.7 20.7 8.9 20.4 8.9 20.4C8 19.8 9 19.8 9 19.8C10.1 19.9 10.6 20.9 10.6 20.9C11.5 22.5 13 22 13.6 21.7C13.7 21 14 20.5 14.3 20.2C12.1 19.9 9.7 19.1 9.7 15.3C9.7 14.2 10.1 13.3 10.7 12.6C10.6 12.3 10.3 11.3 10.8 9.9C10.8 9.9 11.7 9.6 13.6 10.9C14.4 10.7 15.2 10.6 16 10.6C16.8 10.6 17.6 10.7 18.4 10.9C20.3 9.6 21.2 9.9 21.2 9.9C21.7 11.3 21.4 12.3 21.3 12.6C21.9 13.3 22.3 14.2 22.3 15.3C22.3 19.1 19.9 19.9 17.6 20.2C18 20.5 18.4 21.2 18.4 22.2V24.9C18.4 25.2 18.6 25.5 19.1 25.4C23.1 24.1 26 20.4 26 16C26 10.5 21.5 6 16 6Z" fill="#FFFFFF" />
        </svg>
      );

    case "figma":
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <path d="M12 6H16V12H12C10.3 12 9 10.7 9 9C9 7.3 10.3 6 12 6Z" fill="#F24E1E" />
          <path d="M16 6H20C21.7 6 23 7.3 23 9C23 10.7 21.7 12 20 12H16V6Z" fill="#FF7262" />
          <path d="M16 12H20C21.7 12 23 13.3 23 15C23 16.7 21.7 18 20 18C18.3 18 17 16.7 17 15V12H16Z" fill="#1ABCFE" />
          <path d="M9 15C9 13.3 10.3 12 12 12H16V18H12C10.3 18 9 16.7 9 15Z" fill="#A259FF" />
          <path d="M9 21C9 19.3 10.3 18 12 18H16V21C16 22.7 14.7 24 13 24C10.8 24 9 22.7 9 21Z" fill="#0ACF83" />
        </svg>
      );

    case "xampp":
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <rect width="32" height="32" rx="4" fill="#FB7A24" />
          <path d="M9 9L23 23M23 9L9 23" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );

    case "postman":
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <circle cx="16" cy="16" r="14" fill="#FF6C37" />
          <path d="M9 16L22 10L16 22L14 17L9 16Z" fill="#FFFFFF" />
        </svg>
      );

    case "vercel":
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <rect width="32" height="32" rx="4" fill="#000000" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          <path d="M16 8L25 24H7L16 8Z" fill="#FFFFFF" />
        </svg>
      );

    case "netlify":
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <rect width="32" height="32" rx="4" fill="#00C7B7" />
          <path d="M16 6L24 14L18 20L12 16L16 6Z" fill="#FFFFFF" />
        </svg>
      );

    default:
      // High-quality generic fallback monogram badge
      return (
        <div
          className="flex items-center justify-center rounded-lg border border-white/[0.12] bg-white/[0.04] text-xs font-mono font-bold text-[#F59E0B]"
          style={{ width: size, height: size }}
          aria-hidden="true"
        >
          {name.slice(0, 2).toUpperCase()}
        </div>
      );
  }
}
