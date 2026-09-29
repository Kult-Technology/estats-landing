import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { CompanyAddress, LegalDocument, type LegalSection } from "../components/legal-document";
import { COMPANY } from "../lib/company";
import { SITE_URL } from "../lib/seo";

const TITLE = "Polityka prywatności";
const DESCRIPTION =
  "Jak Kult Technology sp. z o.o. przetwarza dane osobowe w Estats: w aplikacji, na stronie estats.pl i w Centrum opinii.";

const email = (
  <a href={`mailto:${COMPANY.email}`} className="whitespace-nowrap">
    {COMPANY.email}
  </a>
);

type PurposeProps = {
  title: string;
  rows: [term: string, value: ReactNode][];
};

function Purpose({ title, rows }: PurposeProps) {
  return (
    <div className="legal-card">
      <h3>{title}</h3>
      <dl>
        {rows.map(([term, value]) => (
          <div key={term}>
            <dt>{term}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

const sections: LegalSection[] = [
  {
    id: "administrator",
    title: "1. Administrator danych",
    body: (
      <>
        <p>
          Administratorem Twoich danych osobowych jest {COMPANY.legalName} z siedzibą w Białymstoku,{" "}
          <CompanyAddress />, wpisana do rejestru przedsiębiorców KRS pod numerem {COMPANY.krs}, NIP{" "}
          {COMPANY.nip} („my").
        </p>
        <p>
          W sprawach dotyczących danych osobowych napisz na {email} albo na adres siedziby. Nie
          wyznaczyliśmy inspektora ochrony danych.
        </p>
      </>
    ),
  },
  {
    id: "zakres",
    title: "2. Czego dotyczy polityka",
    body: (
      <>
        <p>Polityka opisuje, jak przetwarzamy dane osobowe osób, które:</p>
        <ul>
          <li>odwiedzają stronę estats.pl lub zapisują się na Listę oczekujących;</li>
          <li>korzystają z aplikacji Estats (app.estats.pl) albo otrzymały Zaproszenie;</li>
          <li>korzystają z Centrum opinii (feedback.estats.pl);</li>
          <li>kontaktują się z nami.</li>
        </ul>
        <p>
          Pojęcia pisane wielką literą mają znaczenie nadane im w{" "}
          <Link to="/regulamin">Regulaminie</Link>.
        </p>
      </>
    ),
  },
  {
    id: "dane-w-przestrzeniach",
    title: "3. Dane w Przestrzeniach",
    body: (
      <>
        <p>
          Dane, które Użytkownicy wprowadzają do Przestrzeni - na przykład dane klientów kupujących
          mieszkania, inwestorów i wykonawców, dokumenty i zdjęcia - należą do Klienta, który
          prowadzi Przestrzeń. Ich administratorem jest Klient, a my przetwarzamy je w jego imieniu,
          na podstawie umowy powierzenia zawartej w{" "}
          <Link to="/regulamin" hash="powierzenie-danych">
            § 15 Regulaminu
          </Link>
          .
        </p>
        <p>
          Jeśli Twoje dane znalazły się w czyjejś Przestrzeni, z prośbą o informację, sprostowanie
          lub usunięcie zwróć się do tego Klienta. Jeżeli napiszesz do nas, przekażemy Twoją prośbę
          Klientowi.
        </p>
        <p>
          Z danych w Przestrzeniach korzystamy wyłącznie po to, by świadczyć usługę. Nie sprzedajemy
          ich, nie wykorzystujemy do reklamy ani do trenowania modeli sztucznej inteligencji.
        </p>
      </>
    ),
  },
  {
    id: "cele",
    title: "4. Cele, podstawy prawne i okres przetwarzania",
    body: (
      <>
        <div className="legal-cards">
          <Purpose
            title="Lista oczekujących"
            rows={[
              ["Dane", "adres e-mail"],
              ["Cel", "informacja o starcie Estats i wczesnym dostępie, wiadomość powitalna"],
              ["Podstawa prawna", "Twoja zgoda (art. 6 ust. 1 lit. a RODO)"],
              [
                "Jak długo",
                "do wycofania zgody - linkiem w wiadomości albo e-mailem do nas - lub do zakończenia zapisów. Po wypisaniu zachowujemy sam adres na liście osób, do których nie piszemy, aby uszanować Twoją rezygnację (art. 6 ust. 1 lit. f RODO).",
              ],
            ]}
          />
          <Purpose
            title="Konto w Estats"
            rows={[
              [
                "Dane",
                "adres e-mail, imię i nazwisko, hasło (wyłącznie w postaci skrótu), a jeśli je podasz - numer telefonu i zdjęcie profilowe; ustawienia Konta; Przestrzenie i Role, które masz",
              ],
              [
                "Cel",
                "prowadzenie Konta, logowanie, świadczenie usług i wiadomości o usłudze, np. reset hasła i zmiany Regulaminu",
              ],
              ["Podstawa prawna", "wykonanie umowy (art. 6 ust. 1 lit. b RODO)"],
              [
                "Jak długo",
                "do usunięcia Konta, a potem tylko w zakresie potrzebnym do ustalenia, dochodzenia lub obrony roszczeń - do ich przedawnienia (art. 6 ust. 1 lit. f RODO)",
              ],
            ]}
          />
          <Purpose
            title="Zaproszenia"
            rows={[
              [
                "Dane",
                "adres e-mail osoby zapraszanej, Rola i miejsce, do którego prowadzi Zaproszenie, imię i nazwisko osoby zapraszającej",
              ],
              ["Skąd je mamy", "od osoby, która Cię zaprasza"],
              ["Cel", "wysłanie Zaproszenia i założenie Konta"],
              [
                "Podstawa prawna",
                "przetwarzamy je w imieniu Klienta, który wysyła Zaproszenie (punkt 3); po jego przyjęciu - wykonanie umowy (art. 6 ust. 1 lit. b RODO)",
              ],
              [
                "Jak długo",
                "link działa 7 dni; Zaproszenie pozostaje na liście zaproszeń Przestrzeni do czasu jego przyjęcia albo usunięcia",
              ],
            ]}
          />
          <Purpose
            title="Bezpieczeństwo i działanie usług"
            rows={[
              [
                "Dane",
                "adres IP, informacje o przeglądarce, data, godzina i adres żądania (logi serwera), nieudane próby logowania na dany adres e-mail, raporty błędów Aplikacji",
              ],
              [
                "Cel",
                "ochrona przed nadużyciami i atakami, m.in. czasowa blokada logowania po kilku nieudanych próbach, wykrywanie i usuwanie błędów",
              ],
              [
                "Podstawa prawna",
                "nasz prawnie uzasadniony interes - bezpieczeństwo i poprawne działanie Estats (art. 6 ust. 1 lit. f RODO)",
              ],
              [
                "Jak długo",
                "logi serwera i raporty błędów - do 90 dni; zapis nieudanych logowań - do udanego logowania, nie dłużej niż 30 dni",
              ],
            ]}
          />
          <Purpose
            title="Kontakt i reklamacje"
            rows={[
              ["Dane", "adres e-mail, imię i nazwisko i inne dane, które podasz w wiadomości"],
              ["Cel", "odpowiedź na wiadomość, rozpatrzenie reklamacji lub zgłoszenia"],
              [
                "Podstawa prawna",
                "prawnie uzasadniony interes - prowadzenie korespondencji (art. 6 ust. 1 lit. f RODO), a przy reklamacjach także obowiązek prawny (art. 6 ust. 1 lit. c RODO)",
              ],
              [
                "Jak długo",
                "do zakończenia sprawy, a następnie do przedawnienia ewentualnych roszczeń",
              ],
            ]}
          />
          <Purpose
            title="Centrum opinii"
            rows={[
              [
                "Dane",
                "identyfikator Konta, adres e-mail, imię i nazwisko oraz zdjęcie profilowe przekazywane przy logowaniu przez Estats; Twoje wpisy, komentarze i głosy",
              ],
              ["Cel", "zbieranie opinii i pomysłów, rozwój Estats"],
              [
                "Podstawa prawna",
                "prawnie uzasadniony interes - rozwój produktu (art. 6 ust. 1 lit. f RODO)",
              ],
              [
                "Jak długo",
                "do usunięcia wpisów lub konta w Centrum opinii - na Twoje żądanie - albo do zamknięcia portalu. Wpisy są widoczne dla odwiedzających portal wraz z imieniem, nazwiskiem i zdjęciem autora.",
              ],
            ]}
          />
          <Purpose
            title="Statystyki odwiedzin Strony"
            rows={[
              [
                "Dane",
                "adres odwiedzanej podstrony, strona odsyłająca, kraj, typ urządzenia, system operacyjny i przeglądarka - bez plików cookies i bez łączenia odwiedzin z Twoją tożsamością",
              ],
              ["Cel", "liczba odwiedzin i ulepszanie Strony"],
              [
                "Podstawa prawna",
                "prawnie uzasadniony interes - analiza ruchu (art. 6 ust. 1 lit. f RODO)",
              ],
              ["Jak długo", "dane zagregowane, przechowywane przez dostawcę usługi statystyk"],
            ]}
          />
        </div>
        <p>
          Dane przetwarzamy też wtedy, gdy wymaga tego prawo, np. na żądanie uprawnionych organów
          (art. 6 ust. 1 lit. c RODO).
        </p>
      </>
    ),
  },
  {
    id: "zrodla",
    title: "5. Skąd mamy dane i czy musisz je podać",
    body: (
      <>
        <p>
          Dane pochodzą przede wszystkim od Ciebie. Adres e-mail w Zaproszeniu podaje osoba
          zapraszająca, a dane w Przestrzeniach - ich Użytkownicy (punkt 3).
        </p>
        <p>
          Podanie danych jest dobrowolne, ale bez adresu e-mail nie można założyć Konta ani zapisać
          się na Listę oczekujących.
        </p>
      </>
    ),
  },
  // Providers are named by category alone. One that fits no category below is added before it
  // is used, and the terms' § 15 announces it to customers 7 days ahead.
  {
    id: "odbiorcy",
    title: "6. Odbiorcy danych",
    body: (
      <>
        <p>
          Aplikacja i jej baza danych działają na serwerach zlokalizowanych w Polsce. Korzystamy też
          z dostawców, którzy przetwarzają dane w naszym imieniu i na nasze polecenie - są to
          dostawcy usług:
        </p>
        <ul>
          <li>przechowywania plików - dokumentów i zdjęć - na serwerach w Unii Europejskiej;</li>
          <li>wysyłki wiadomości e-mail;</li>
          <li>monitorowania błędów Aplikacji;</li>
          <li>obsługi Centrum opinii;</li>
          <li>hostingu Strony i statystyk odwiedzin;</li>
          <li>przechowywania Listy oczekujących;</li>
          <li>poczty elektronicznej.</li>
        </ul>
        <p>
          Dane mogą otrzymać także podmioty świadczące nam usługi prawne i księgowe oraz organy
          publiczne, gdy wymaga tego prawo.
        </p>
        <p>
          Inni Użytkownicy Przestrzeni, do których należysz, mogą widzieć - zależnie od swojej Roli
          - Twoje imię i nazwisko, adres e-mail i zdjęcie profilowe. Twój numer telefonu widzą
          wyłącznie Flipperzy tych Przestrzeni.
        </p>
      </>
    ),
  },
  {
    id: "przekazywanie",
    title: "7. Przekazywanie danych poza Europejski Obszar Gospodarczy",
    body: (
      <p>
        Część dostawców ma siedzibę w USA. Przekazujemy im dane na podstawie decyzji Komisji
        Europejskiej stwierdzającej odpowiedni stopień ochrony (EU-US Data Privacy Framework) -
        wobec dostawców, którzy do niej przystąpili - a w pozostałych przypadkach na podstawie
        standardowych klauzul umownych przyjętych przez Komisję Europejską. Kopię zabezpieczeń
        możesz otrzymać, pisząc do nas.
      </p>
    ),
  },
  {
    id: "uslugi-zewnetrzne",
    title: "8. Usługi zewnętrzne wywoływane przez przeglądarkę",
    body: (
      <>
        <p>Dwie funkcje korzystają z usług niezależnych dostawców:</p>
        <ul>
          <li>
            <strong>Czcionki na Stronie</strong> są pobierane z serwerów zewnętrznego dostawcy,
            któremu przeglądarka przekazuje wtedy adres IP i informacje o przeglądarce.
          </li>
          <li>
            <strong>Podpowiedź kodu pocztowego w Aplikacji.</strong> Gdy wpisujesz adres
            nieruchomości, przeglądarka wysyła nazwę miejscowości i ulicy do zewnętrznej usługi
            wyszukiwania adresów, która otrzymuje przy tym także Twój adres IP. Innych danych z
            Aplikacji nie przekazujemy.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "cookies",
    title: "9. Pliki cookies i pamięć przeglądarki",
    body: (
      <>
        <ul>
          <li>
            Nie używamy plików cookies reklamowych ani śledzących. Statystyki odwiedzin Strony
            działają bez plików cookies.
          </li>
          <li>
            <strong>Plik cookie w domenie estats.pl</strong> (do 30 dni) informuje Stronę, że w tej
            przeglądarce trwa sesja w Aplikacji - dzięki temu Strona od razu otwiera Aplikację. Nie
            zawiera danych, które pozwalają Cię zidentyfikować.
          </li>
          <li>
            <strong>Pamięć przeglądarki w Aplikacji</strong> przechowuje dane sesji, dzięki którym
            nie musisz logować się ponownie (do 30 dni), ustawienia widoku, np. szerokość panelu
            bocznego, oraz niedokończone szkice formularzy. Dane sesji usuwa wylogowanie, pozostałe
            - wyczyszczenie danych przeglądarki.
          </li>
          <li>
            <strong>Centrum opinii</strong> korzysta z plików cookies swojego dostawcy, potrzebnych
            do logowania.
          </li>
        </ul>
        <p>
          Te mechanizmy są niezbędne do świadczenia usług, z których korzystasz, dlatego nie
          wymagają zgody. Możesz je zablokować w ustawieniach przeglądarki, ale Aplikacja nie będzie
          wtedy działać.
        </p>
      </>
    ),
  },
  {
    id: "prawa",
    title: "10. Twoje prawa",
    body: (
      <>
        <p>Masz prawo:</p>
        <ul>
          <li>dostępu do swoich danych i otrzymania ich kopii;</li>
          <li>sprostowania danych;</li>
          <li>usunięcia danych;</li>
          <li>ograniczenia przetwarzania;</li>
          <li>przenoszenia danych przetwarzanych na podstawie zgody lub umowy;</li>
          <li>sprzeciwu wobec przetwarzania opartego na naszym prawnie uzasadnionym interesie;</li>
          <li>
            wycofania zgody w dowolnym momencie - bez wpływu na zgodność z prawem przetwarzania
            przed jej wycofaniem.
          </li>
        </ul>
        <p>Aby skorzystać z tych praw, napisz na {email}. Odpowiemy w ciągu miesiąca.</p>
        <p>
          Masz też prawo wnieść skargę do Prezesa Urzędu Ochrony Danych Osobowych (ul. Stawki 2,
          00-193 Warszawa,{" "}
          <a href="https://uodo.gov.pl" target="_blank" rel="noopener noreferrer">
            uodo.gov.pl
          </a>
          ).
        </p>
      </>
    ),
  },
  {
    id: "decyzje",
    title: "11. Zautomatyzowane decyzje",
    body: (
      <p>
        Nie podejmujemy decyzji opartych wyłącznie na zautomatyzowanym przetwarzaniu, w tym
        profilowaniu, które wywoływałyby wobec Ciebie skutki prawne lub w podobny sposób istotnie na
        Ciebie wpływały.
      </p>
    ),
  },
  {
    id: "bezpieczenstwo",
    title: "12. Bezpieczeństwo",
    body: (
      <>
        <p>Stosujemy środki techniczne i organizacyjne odpowiednie do ryzyka, w szczególności:</p>
        <ul>
          <li>szyfrowane połączenia;</li>
          <li>hasła przechowywane wyłącznie w postaci skrótów;</li>
          <li>
            dostęp do danych w Przestrzeniach ograniczony Rolami i uprawnieniami nadanymi przez
            Klienta;
          </li>
          <li>czasową blokadę logowania po kilku nieudanych próbach;</li>
          <li>
            usuwanie ze zdjęć metadanych, w tym informacji o miejscu ich wykonania - zachowujemy
            jedynie datę wykonania zdjęcia;
          </li>
          <li>linki do plików ważne przez ograniczony czas.</li>
        </ul>
      </>
    ),
  },
  {
    id: "zmiany",
    title: "13. Zmiany polityki",
    body: (
      <p>
        Politykę aktualizujemy, gdy zmieniają się funkcje Estats, dostawcy lub przepisy. O istotnych
        zmianach informujemy Użytkowników e-mailem lub w Aplikacji. Aktualna wersja jest zawsze
        dostępna pod adresem estats.pl/prywatnosc.
      </p>
    ),
  },
];

export const Route = createFileRoute("/prywatnosc")({
  head: () => ({
    meta: [
      { title: `${TITLE} - Estats` },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: `${TITLE} - Estats` },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: `${SITE_URL}/prywatnosc` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/prywatnosc` }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return <LegalDocument title={TITLE} sections={sections} />;
}
