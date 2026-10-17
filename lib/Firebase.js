import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

// Nilai dibaca dari .env.local. Awalan NEXT_PUBLIC_ wajib agar bisa dipakai di browser.
// Tulis process.env.NEXT_PUBLIC_... secara langsung (jangan lewat variabel dinamis),
// karena Next.js hanya mengganti nilai yang ditulis seperti ini saat build.
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Cegah inisialisasi ganda (sering terjadi saat hot reload di Next.js).
export const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Analytics hanya bisa jalan di browser. Panggil fungsi ini dari komponen client
// (misalnya di dalam useEffect), bukan langsung di level modul.
export async function getFirebaseAnalytics() {
  if (typeof window === "undefined") return null;
  return (await isSupported()) ? getAnalytics(app) : null;
}
