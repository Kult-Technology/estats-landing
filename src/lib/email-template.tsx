type EmailTemplateProps = {
  email: string;
};

export function EmailTemplate({ email }: EmailTemplateProps) {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: 1.6, color: "#0f172a" }}>
      <h2 style={{ margin: "0 0 12px" }}>Nowy zapis na waitlistę Estats</h2>
      <p style={{ margin: 0 }}>
        Adres e-mail: <strong>{email}</strong>
      </p>
    </div>
  );
}
