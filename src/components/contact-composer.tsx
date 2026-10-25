"use client";

import {useState, type FormEvent} from "react";
import {useTranslations} from "next-intl";

type ContactComposerProps = {
  contactEmail: string | null;
};

type Notice = "copied" | "copyError" | "emailOpened" | null;

export default function ContactComposer({contactEmail}: ContactComposerProps) {
  const t = useTranslations("ContactPage");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [notice, setNotice] = useState<Notice>(null);

  function composeDraft() {
    return [
      `${t("draftName")}: ${name.trim()}`,
      `${t("draftEmail")}: ${email.trim()}`,
      `${t("draftSubject")}: ${subject.trim()}`,
      "",
      message.trim()
    ].join("\n");
  }

  async function copyDraft() {
    setNotice(null);
    try {
      await navigator.clipboard.writeText(composeDraft());
      setNotice("copied");
    } catch {
      setNotice("copyError");
    }
  }

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (contactEmail) {
      const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(`${t("emailSubjectPrefix")}: ${subject.trim()}`)}&body=${encodeURIComponent(composeDraft())}`;
      window.location.href = mailto;
      // Opening a mail app is NOT confirmation of sending an email.
      setNotice("emailOpened");
    } else {
      void copyDraft();
    }
  }

  return (
    <form className="co-contact-form" onSubmit={submitForm}>
      <div className="co-contact-formHeading">
        <div>
          <span className="section-kicker" dir="ltr">02 / YOUR MESSAGE</span>
          <h2>{t("formTitle")}</h2>
        </div>
        <span className="co-contact-formTag">{t("formTag")}</span>
      </div>
      <p className="co-contact-formIntro">{t("formIntro")}</p>

      <div className="co-contact-fields2">
        <label className="co-contact-field">
          <span>{t("nameLabel")} <b aria-hidden="true">*</b></span>
          <input name="name" type="text" autoComplete="name" required maxLength={100}
            value={name} onChange={event => {setName(event.target.value); setNotice(null);}}
            placeholder={t("namePlaceholder")}/>
        </label>
        <label className="co-contact-field">
          <span>{t("emailLabel")} <b aria-hidden="true">*</b></span>
          <input name="email" type="email" autoComplete="email" dir="ltr" required maxLength={254}
            value={email} onChange={event => {setEmail(event.target.value); setNotice(null);}}
            placeholder="name@example.com"/>
        </label>
      </div>
      <label className="co-contact-field">
        <span>{t("subjectLabel")} <b aria-hidden="true">*</b></span>
        <input name="subject" type="text" required maxLength={120}
          value={subject} onChange={event => {setSubject(event.target.value); setNotice(null);}}
          placeholder={t("subjectPlaceholder")}/>
      </label>
      <label className="co-contact-field">
        <span>{t("messageLabel")} <b aria-hidden="true">*</b></span>
        <textarea name="message" required minLength={10} maxLength={2000} rows={6}
          value={message} onChange={event => {setMessage(event.target.value); setNotice(null);}}
          placeholder={t("messagePlaceholder")}/>
      </label>

      <div className="co-contact-formBottom">
        <button className="co-contact-submit" type="submit">
          {contactEmail ? t("openMailApp") : t("copyMessage")}
          <span aria-hidden="true">↗</span>
        </button>
        <span className="co-contact-formSafety">{t("formSafety")}</span>
      </div>
      {notice && (
        <p role="status" aria-live="polite" className={notice === "copyError" ? "co-contact-formNotice is-error" : "co-contact-formNotice"}>
          {t(notice === "copied" ? "copiedNotice" : notice === "copyError" ? "copyErrorNotice" : "emailOpenedNotice")}
        </p>
      )}
    </form>
  );
}
