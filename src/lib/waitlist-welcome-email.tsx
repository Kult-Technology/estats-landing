import { SITE_URL } from "./seo";

type WaitlistWelcomeEmailProps = {
  email: string;
  unsubscribeUrl: string;
};

// Self-contained, table-based, inline-styled HTML email so it renders reliably
// across Gmail / Apple Mail / Outlook. Dark, on-brand premium look matching the
// Estats site (near-black background, electric-blue accent).
const C = {
  pageBg: "#08090c",
  cardBg: "#141519",
  cardBorder: "#262932",
  innerBg: "#1a1c22",
  innerBorder: "#2b2e38",
  heading: "#f6f7f9",
  body: "#c4c7d0",
  muted: "#8b8f9b",
  faint: "#676b76",
  brand: "#3b76ff",
  brandText: "#8fb0ff",
  brandSoftBg: "#111a33",
  brandSoftBorder: "#26365f",
};

const steps = [
  {
    title: "Odezwiemy się w sprawie testów",
    copy: "Gdy otworzymy zamknięte testy, dostaniesz od nas maila z zaproszeniem i dostępem. Osoby z waitlisty wchodzą pierwsze, jeszcze przed publicznym startem.",
  },
  {
    title: "Kiedy zaczniesz testować",
    copy: "Wciąż dopinamy MVP, więc nie rzucamy sztywną datą. Damy znać, gdy tylko aplikacja będzie gotowa do testów - bez spamu, tylko konkrety.",
  },
  {
    title: "Twój głos kształtuje produkt",
    copy: "W trakcie testów zgłaszasz problemy i podpowiadasz funkcje, których potrzebujesz. Pisz do nas na kontakt@kulttechnology.pl - czytamy każdą wiadomość.",
  },
];

const fontStack =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

export function WaitlistWelcomeEmail({ email, unsubscribeUrl }: WaitlistWelcomeEmailProps) {
  return (
    <table
      role="presentation"
      width="100%"
      cellPadding={0}
      cellSpacing={0}
      style={{
        margin: 0,
        padding: 0,
        width: "100%",
        backgroundColor: C.pageBg,
        fontFamily: fontStack,
      }}
    >
      <tbody>
        <tr>
          <td align="center" style={{ padding: "40px 16px" }}>
            {/* Hidden preheader (inbox preview line) */}
            <div
              style={{
                display: "none",
                overflow: "hidden",
                lineHeight: "1px",
                maxHeight: 0,
                maxWidth: 0,
                opacity: 0,
                color: C.pageBg,
              }}
            >
              Jesteś na liście. Odezwiemy się, gdy ruszą zamknięte testy Estats.
            </div>

            <table
              role="presentation"
              width="600"
              cellPadding={0}
              cellSpacing={0}
              style={{
                width: "100%",
                maxWidth: "600px",
                backgroundColor: C.cardBg,
                border: `1px solid ${C.cardBorder}`,
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              <tbody>
                {/* Brand header */}
                <tr>
                  <td style={{ padding: "28px 36px 8px" }}>
                    <table role="presentation" cellPadding={0} cellSpacing={0}>
                      <tbody>
                        <tr>
                          <td style={{ paddingRight: "10px", verticalAlign: "middle" }}>
                            <img
                              src={`${SITE_URL}/estats-icon.png`}
                              width="30"
                              height="30"
                              alt="Estats"
                              style={{ display: "block", borderRadius: "7px" }}
                            />
                          </td>
                          <td style={{ verticalAlign: "middle" }}>
                            <span
                              style={{
                                fontSize: "19px",
                                fontWeight: 700,
                                letterSpacing: "-0.01em",
                                color: C.heading,
                              }}
                            >
                              Estats
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

                {/* Hero */}
                <tr>
                  <td style={{ padding: "20px 36px 4px" }}>
                    <span
                      style={{
                        display: "inline-block",
                        padding: "5px 12px",
                        borderRadius: "999px",
                        backgroundColor: C.brandSoftBg,
                        border: `1px solid ${C.brandSoftBorder}`,
                        fontSize: "11px",
                        fontWeight: 600,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: C.brandText,
                      }}
                    >
                      Program wczesnych testów
                    </span>
                    <h1
                      style={{
                        margin: "20px 0 0",
                        fontSize: "30px",
                        lineHeight: "1.2",
                        fontWeight: 700,
                        letterSpacing: "-0.02em",
                        color: C.heading,
                      }}
                    >
                      Jesteś na liście. Dziękujemy!
                    </h1>
                    <p
                      style={{
                        margin: "16px 0 0",
                        fontSize: "16px",
                        lineHeight: "1.65",
                        color: C.body,
                      }}
                    >
                      Dziękujemy za zapisanie się na listę oczekujących Estats - systemu, który
                      porządkuje cały proces flipa: zakup, remont, finanse i sprzedaż w jednym
                      miejscu. Trafiłeś do grona osób, które zobaczą produkt jako pierwsze.
                    </p>
                  </td>
                </tr>

                {/* What's next */}
                <tr>
                  <td style={{ padding: "28px 36px 8px" }}>
                    <p
                      style={{
                        margin: "0 0 16px",
                        fontSize: "12px",
                        fontWeight: 600,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: C.muted,
                      }}
                    >
                      Co dalej?
                    </p>
                    <table role="presentation" width="100%" cellPadding={0} cellSpacing={0}>
                      <tbody>
                        {steps.map((step, index) => (
                          <tr key={step.title}>
                            <td
                              style={{
                                padding: index === 0 ? "0" : "12px 0 0",
                              }}
                            >
                              <table
                                role="presentation"
                                width="100%"
                                cellPadding={0}
                                cellSpacing={0}
                                style={{
                                  backgroundColor: C.innerBg,
                                  border: `1px solid ${C.innerBorder}`,
                                  borderRadius: "14px",
                                }}
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      width="56"
                                      style={{
                                        padding: "18px 0 18px 18px",
                                        verticalAlign: "top",
                                      }}
                                    >
                                      <table role="presentation" cellPadding={0} cellSpacing={0}>
                                        <tbody>
                                          <tr>
                                            <td
                                              align="center"
                                              valign="middle"
                                              width="34"
                                              height="34"
                                              style={{
                                                width: "34px",
                                                height: "34px",
                                                borderRadius: "10px",
                                                backgroundColor: C.brandSoftBg,
                                                border: `1px solid ${C.brandSoftBorder}`,
                                                color: C.brandText,
                                                fontSize: "14px",
                                                fontWeight: 700,
                                              }}
                                            >
                                              {index + 1}
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                    <td style={{ padding: "16px 18px 16px 12px" }}>
                                      <p
                                        style={{
                                          margin: 0,
                                          fontSize: "15px",
                                          fontWeight: 600,
                                          color: C.heading,
                                        }}
                                      >
                                        {step.title}
                                      </p>
                                      <p
                                        style={{
                                          margin: "5px 0 0",
                                          fontSize: "14px",
                                          lineHeight: "1.6",
                                          color: C.muted,
                                        }}
                                      >
                                        {step.copy}
                                      </p>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                </tr>

                {/* CTA */}
                <tr>
                  <td style={{ padding: "20px 36px 4px" }}>
                    <table role="presentation" cellPadding={0} cellSpacing={0}>
                      <tbody>
                        <tr>
                          <td
                            style={{
                              borderRadius: "12px",
                              backgroundColor: C.brand,
                            }}
                          >
                            <a
                              href={SITE_URL}
                              style={{
                                display: "inline-block",
                                padding: "13px 26px",
                                fontSize: "15px",
                                fontWeight: 600,
                                color: "#ffffff",
                                textDecoration: "none",
                                borderRadius: "12px",
                              }}
                            >
                              Zobacz, co budujemy →
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

                {/* Sign-off */}
                <tr>
                  <td style={{ padding: "26px 36px 32px" }}>
                    <div
                      style={{
                        borderTop: `1px solid ${C.cardBorder}`,
                        paddingTop: "22px",
                      }}
                    >
                      <p
                        style={{
                          margin: 0,
                          fontSize: "15px",
                          lineHeight: "1.6",
                          color: C.body,
                        }}
                      >
                        Do usłyszenia,
                        <br />
                        <strong style={{ color: C.heading }}>Kamil i Dominik</strong> - twórcy
                        Estats
                      </p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Footer */}
            <table
              role="presentation"
              width="600"
              cellPadding={0}
              cellSpacing={0}
              style={{ width: "100%", maxWidth: "600px" }}
            >
              <tbody>
                <tr>
                  <td style={{ padding: "22px 36px 8px", textAlign: "center" }}>
                    <p style={{ margin: 0, fontSize: "12px", lineHeight: "1.6", color: C.faint }}>
                      Estats to produkt Kult Technology sp. z o.o.
                    </p>
                    <p
                      style={{
                        margin: "8px 0 0",
                        fontSize: "12px",
                        lineHeight: "1.6",
                        color: C.faint,
                      }}
                    >
                      Otrzymujesz tę wiadomość, bo {email} zapisał się na listę oczekujących Estats.
                      Nie chcesz więcej wiadomości?{" "}
                      <a
                        href={unsubscribeUrl}
                        style={{ color: C.brandText, textDecoration: "underline" }}
                      >
                        Wypisz się jednym kliknięciem
                      </a>
                      .
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
