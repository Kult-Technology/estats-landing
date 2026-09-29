// The operator's registered details as its KRS extract states them. Both legal documents
// quote them from here, so a change of address or capital is made once.
export const COMPANY = {
  name: "Kult Technology sp. z o.o.",
  legalName: "Kult Technology spółka z ograniczoną odpowiedzialnością",
  street: "ul. Józefa Ignacego Kraszewskiego 30/23",
  postcode: "15-025",
  city: "Białystok",
  court: "Sąd Rejonowy w Białymstoku, XII Wydział Gospodarczy Krajowego Rejestru Sądowego",
  krs: "0001215313",
  nip: "9662216100",
  regon: "543648551",
  // Non-breaking spaces: the amount must not wrap between its digits or before the currency
  capital: "5\u00a0100,00\u00a0zł",
  email: "kontakt@kulttechnology.pl",
} as const;

// The day both documents took effect. A new version moves this date, and the changes clause
// of the terms decides how far ahead users are told.
export const LEGAL_EFFECTIVE_DATE = "22 czerwca 2026 r.";
