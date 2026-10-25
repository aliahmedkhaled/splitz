/**
 * Contact details are intentionally unconfigured in the demo.
 * Set real business details in .env.local before enabling direct contact.
 * Never insert example phone numbers or email addresses as live contacts.
 */
const candidateEmail = process.env.SPLITZ_CONTACT_EMAIL?.trim() ?? "";
const candidateWhatsApp = (process.env.SPLITZ_WHATSAPP_NUMBER ?? "").replace(/[\s+()-]/g, "");

export const contactSettings = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(candidateEmail)
    ? candidateEmail
    : null,
  whatsappUrl: /^\d{10,15}$/.test(candidateWhatsApp)
    ? `https://wa.me/${candidateWhatsApp}`
    : null
} as const;
