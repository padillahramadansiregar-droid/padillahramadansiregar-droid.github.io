"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { ArrowLeft, Send, Mail, CheckCircle2, AlertTriangle, ShieldCheck, RefreshCw } from "lucide-react";
import { PROFILE_DATA } from "@/lib/data";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

type SubmissionStatus = "idle" | "submitting" | "success" | "error";

export default function KirimEmailPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [statusMessage, setStatusMessage] = useState<string>("");
  const [usedFallback, setUsedFallback] = useState<boolean>(false);

  // Input refs for auto-focus on error
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const subjectInputRef = useRef<HTMLInputElement>(null);
  const messageInputRef = useRef<HTMLTextAreaElement>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Validate Name
    const trimmedName = formData.name.trim();
    if (!trimmedName) {
      newErrors.name = "Nama lengkap wajib diisi.";
    } else if (trimmedName.length < 2) {
      newErrors.name = "Nama minimal 2 karakter.";
    } else if (trimmedName.length > 100) {
      newErrors.name = "Nama maksimal 100 karakter.";
    }

    // Validate Email
    const trimmedEmail = formData.email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail) {
      newErrors.email = "Alamat email wajib diisi.";
    } else if (!emailRegex.test(trimmedEmail)) {
      newErrors.email = "Format email tidak valid (contoh: nama@domain.com).";
    } else if (trimmedEmail.length > 150) {
      newErrors.email = "Alamat email maksimal 150 karakter.";
    }

    // Validate Subject
    const trimmedSubject = formData.subject.trim();
    if (!trimmedSubject) {
      newErrors.subject = "Subjek atau topik pesan wajib diisi.";
    } else if (trimmedSubject.length < 3) {
      newErrors.subject = "Subjek minimal 3 karakter.";
    } else if (trimmedSubject.length > 150) {
      newErrors.subject = "Subjek maksimal 150 karakter.";
    }

    // Validate Message
    const trimmedMessage = formData.message.trim();
    if (!trimmedMessage) {
      newErrors.message = "Isi pesan wajib diisi.";
    } else if (trimmedMessage.length < 10) {
      newErrors.message = "Pesan minimal 10 karakter agar maksud tersampaikan jelas.";
    } else if (trimmedMessage.length > 3000) {
      newErrors.message = "Pesan melebihi batas 3000 karakter.";
    }

    setErrors(newErrors);

    // Auto-focus first problematic field
    if (newErrors.name) {
      nameInputRef.current?.focus();
    } else if (newErrors.email) {
      emailInputRef.current?.focus();
    } else if (newErrors.subject) {
      subjectInputRef.current?.focus();
    } else if (newErrors.message) {
      messageInputRef.current?.focus();
    }

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error as user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus("submitting");
    setStatusMessage("");

    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

    // Path A: If an external endpoint (e.g. Formspree) is configured
    if (endpoint && endpoint.trim().length > 0 && endpoint.startsWith("https://")) {
      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim(),
            subject: formData.subject.trim(),
            message: formData.message.trim(),
          }),
        });

        if (response.ok) {
          setStatus("success");
          setUsedFallback(false);
          setStatusMessage("Pesan Anda telah berhasil dikirim ke kotak masuk email Padillah Ramadan Siregar.");
          setFormData({ name: "", email: "", subject: "", message: "" });
        } else {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.error || "Gagal mengirim pesan melalui server layanan.");
        }
      } catch (err: unknown) {
        setStatus("error");
        setUsedFallback(false);
        const errorText = err instanceof Error ? err.message : "Terjadi kendala jaringan saat mengirim formulir.";
        setStatusMessage(`${errorText} Anda tetap dapat menggunakan tombol kirim langsung via aplikasi email di bawah.`);
      }
    } else {
      // Path B: Fallback A — Safe, honest, and reliable mailto redirect
      // Pre-fills recipient, subject, and cleanly structured message body
      const formattedBody = `Halo Padillah,\n\nNama Pengirim: ${formData.name.trim()}\nEmail Pengirim: ${formData.email.trim()}\n\nIsi Pesan:\n${formData.message.trim()}\n\n---\nDikirim melalui formulir website portofolio Padillah Ramadan Siregar.`;

      const mailtoUrl = `mailto:${PROFILE_DATA.contact.email}?subject=${encodeURIComponent(
        formData.subject.trim()
      )}&body=${encodeURIComponent(formattedBody)}`;

      // Simulate a small transition to ensure the user perceives the processing state
      setTimeout(() => {
        try {
          window.location.href = mailtoUrl;
          setStatus("success");
          setUsedFallback(true);
          setStatusMessage(
            "Aplikasi email Anda telah dibuka dengan draf pesan ini. Silakan periksa dan tekan tombol kirim di aplikasi email Anda untuk menyelesaikan pengiriman."
          );
        } catch {
          setStatus("error");
          setUsedFallback(true);
          setStatusMessage("Tidak dapat membuka aplikasi email secara otomatis. Silakan salin email Padillah secara manual dari halaman Kontak.");
        }
      }, 500);
    }
  };

  const handleReset = () => {
    setStatus("idle");
    setStatusMessage("");
  };

  return (
    <div className="py-12 sm:py-16 space-y-12">
      {/* Header with Navigation Link Back to Kontak */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] pb-8">
        <Link
          href="/kontak"
          className="inline-flex items-center gap-2 text-xs font-mono text-white/60 hover:text-[#F59E0B] transition-colors mb-4 focus-visible:ring-2 focus-visible:ring-[#F59E0B] rounded-md px-1 py-0.5"
        >
          <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Kembali ke Halaman Kontak</span>
        </Link>

        <div className="flex items-center gap-2 text-xs font-mono text-[#F59E0B] uppercase tracking-wider mb-2">
          <span>Saluran Komunikasi Langsung</span>
          <span aria-hidden="true" className="text-white/30">/</span>
          <span>Formulir Pesan</span>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
          Kirim Pesan ke Padillah Ramadan Siregar
        </h1>
        <p className="mt-2 text-sm text-white/70 leading-relaxed max-w-2xl">
          Gunakan formulir ini untuk menyusun pesan atau penawaran kerja sama. Pesan akan diteruskan langsung ke alamat email resmi pemilik portofolio.
        </p>
      </section>

      {/* Form Container */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/[0.08] bg-[#111111] p-6 sm:p-10 shadow-xl space-y-8">
          {/* Header Card Status Banner */}
          <div className="flex items-center justify-between pb-6 border-b border-white/[0.06] text-xs font-mono text-white/50">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#F59E0B]" aria-hidden="true" />
              <span>Tujuan: {PROFILE_DATA.contact.email}</span>
            </div>
            <span className="hidden sm:inline">Format: UTF-8 Enkripsi Aman</span>
          </div>

          {/* Success State View */}
          {status === "success" && (
            <div
              role="status"
              aria-live="polite"
              className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-6 space-y-4"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                <div className="space-y-1">
                  <h2 className="text-sm font-semibold text-white">
                    {usedFallback ? "Draf Pesan Siap di Aplikasi Email" : "Pesan Terkirim"}
                  </h2>
                  <p className="text-xs text-white/80 leading-relaxed">
                    {statusMessage}
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 rounded-lg bg-white/[0.08] border border-white/[0.12] px-4 py-2 text-xs font-medium text-white hover:bg-white/[0.15] transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Kirim Pesan Lain</span>
                </button>
                <Link
                  href="/kontak"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[#F59E0B] px-4 py-2 text-xs font-semibold text-black hover:bg-[#D97706] transition-colors"
                >
                  <span>Kembali ke Ringkasan Kontak</span>
                </Link>
              </div>
            </div>
          )}

          {/* Error State Banner */}
          {status === "error" && (
            <div
              role="alert"
              aria-live="assertive"
              className="rounded-xl border border-red-500/30 bg-red-500/10 p-5 flex items-start gap-3"
            >
              <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" aria-hidden="true" />
              <div className="space-y-1 text-xs">
                <p className="font-semibold text-white">Kendala Pengiriman</p>
                <p className="text-white/80 leading-relaxed">{statusMessage}</p>
              </div>
            </div>
          )}

          {/* Form Fields (kept visible so user data is never lost) */}
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Nama Pengirim */}
              <div className="space-y-2">
                <label
                  htmlFor="sender-name"
                  className="block text-xs font-medium uppercase tracking-wider text-white"
                >
                  Nama Lengkap <span className="text-[#F59E0B]">*</span>
                </label>
                <input
                  ref={nameInputRef}
                  id="sender-name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status === "submitting"}
                  placeholder="Contoh: Budi Santoso"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={`w-full rounded-lg border bg-black/40 px-3.5 py-2.5 text-sm text-white placeholder-white/30 transition-colors focus:outline-none focus:ring-2 ${
                    errors.name
                      ? "border-red-500 focus:ring-red-500"
                      : "border-white/[0.1] focus:border-[#F59E0B] focus:ring-[#F59E0B]"
                  }`}
                />
                {errors.name && (
                  <p id="name-error" className="text-xs text-red-400">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Alamat Email Pengirim */}
              <div className="space-y-2">
                <label
                  htmlFor="sender-email"
                  className="block text-xs font-medium uppercase tracking-wider text-white"
                >
                  Alamat Email Anda <span className="text-[#F59E0B]">*</span>
                </label>
                <input
                  ref={emailInputRef}
                  id="sender-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status === "submitting"}
                  placeholder="nama@perusahaan.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={`w-full rounded-lg border bg-black/40 px-3.5 py-2.5 text-sm text-white placeholder-white/30 transition-colors focus:outline-none focus:ring-2 ${
                    errors.email
                      ? "border-red-500 focus:ring-red-500"
                      : "border-white/[0.1] focus:border-[#F59E0B] focus:ring-[#F59E0B]"
                  }`}
                />
                {errors.email && (
                  <p id="email-error" className="text-xs text-red-400">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Subjek Pesan */}
            <div className="space-y-2">
              <label
                htmlFor="message-subject"
                className="block text-xs font-medium uppercase tracking-wider text-white"
              >
                Topik / Subjek Pesan <span className="text-[#F59E0B]">*</span>
              </label>
              <input
                ref={subjectInputRef}
                id="message-subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                disabled={status === "submitting"}
                placeholder="Contoh: Diskusi Peluang Kolaborasi Proyek Web"
                aria-invalid={!!errors.subject}
                aria-describedby={errors.subject ? "subject-error" : undefined}
                className={`w-full rounded-lg border bg-black/40 px-3.5 py-2.5 text-sm text-white placeholder-white/30 transition-colors focus:outline-none focus:ring-2 ${
                  errors.subject
                    ? "border-red-500 focus:ring-red-500"
                    : "border-white/[0.1] focus:border-[#F59E0B] focus:ring-[#F59E0B]"
                }`}
              />
              {errors.subject && (
                <p id="subject-error" className="text-xs text-red-400">
                  {errors.subject}
                </p>
              )}
            </div>

            {/* Isi Pesan */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="message-body"
                  className="block text-xs font-medium uppercase tracking-wider text-white"
                >
                  Isi Pesan <span className="text-[#F59E0B]">*</span>
                </label>
                <span className="text-[11px] font-mono text-white/40">
                  {formData.message.length}/3000 karakter
                </span>
              </div>
              <textarea
                ref={messageInputRef}
                id="message-body"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                disabled={status === "submitting"}
                placeholder="Jelaskan kebutuhan, latar belakang proyek, atau pertanyaan Anda secara rinci..."
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                className={`w-full rounded-lg border bg-black/40 px-3.5 py-3 text-sm text-white placeholder-white/30 transition-colors focus:outline-none focus:ring-2 resize-y ${
                  errors.message
                    ? "border-red-500 focus:ring-red-500"
                    : "border-white/[0.1] focus:border-[#F59E0B] focus:ring-[#F59E0B]"
                }`}
              />
              {errors.message && (
                <p id="message-error" className="text-xs text-red-400">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Transparency Note */}
            <div className="rounded-lg bg-black/30 border border-white/[0.04] p-3.5 text-xs text-white/60 flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
              <p className="leading-relaxed text-[11px]">
                <strong className="text-white/80">Transparansi Privasi:</strong> Data yang Anda ketikkan hanya digunakan untuk keperluan komunikasi langsung dan tidak disimpan ke database analitik atau dibagikan ke pihak ketiga mana pun.
              </p>
            </div>

            {/* Submit & Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#F59E0B] px-6 py-3 text-xs sm:text-sm font-semibold text-black hover:bg-[#D97706] disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus-visible:ring-2 focus-visible:ring-[#F59E0B]"
              >
                {status === "submitting" ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" aria-hidden="true" />
                    <span>Sedang Memproses...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" aria-hidden="true" />
                    <span>Kirim Pesan Sekarang</span>
                  </>
                )}
              </button>

              <Link
                href="/kontak"
                className="inline-flex items-center justify-center gap-1.5 text-xs text-white/60 hover:text-white transition-colors py-2"
              >
                <span>Batal & Kembali ke Kontak</span>
              </Link>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
