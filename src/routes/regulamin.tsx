import { createFileRoute, Link } from "@tanstack/react-router";

import { CompanyAddress, LegalDocument, type LegalSection } from "../components/legal-document";
import { COMPANY, LEGAL_EFFECTIVE_DATE } from "../lib/company";
import { SITE_URL } from "../lib/seo";

const TITLE = "Regulamin Estats";
const DESCRIPTION =
  "Regulamin korzystania z Estats - platformy do zarządzania flipami nieruchomości prowadzonej przez Kult Technology sp. z o.o.";

const email = (
  <a href={`mailto:${COMPANY.email}`} className="whitespace-nowrap">
    {COMPANY.email}
  </a>
);

const sections: LegalSection[] = [
  {
    id: "postanowienia-ogolne",
    title: "§ 1. Postanowienia ogólne",
    body: (
      <ol>
        <li>
          Regulamin określa zasady korzystania z Estats - platformy do zarządzania flipami
          nieruchomości, na którą składają się strona estats.pl, aplikacja dostępna pod adresem
          app.estats.pl oraz Centrum opinii pod adresem feedback.estats.pl.
        </li>
        <li>
          Estats prowadzi {COMPANY.legalName} z siedzibą w Białymstoku, <CompanyAddress />, wpisana
          do rejestru przedsiębiorców Krajowego Rejestru Sądowego prowadzonego przez {COMPANY.court}{" "}
          pod numerem KRS {COMPANY.krs}, NIP {COMPANY.nip}, REGON {COMPANY.regon}, kapitał zakładowy{" "}
          {COMPANY.capital}.
        </li>
        <li>
          Z Usługodawcą można się kontaktować e-mailem pod adresem {email} albo listownie na adres
          siedziby.
        </li>
        <li>
          Regulamin jest regulaminem, o którym mowa w art. 8 ustawy z dnia 18 lipca 2002 r. o
          świadczeniu usług drogą elektroniczną. Jest udostępniony nieodpłatnie pod adresem
          estats.pl/regulamin w formie, która umożliwia jego pobranie, utrwalenie i wydrukowanie.
        </li>
        <li>
          Zasady przetwarzania danych osobowych opisuje{" "}
          <Link to="/prywatnosc">Polityka prywatności</Link>.
        </li>
      </ol>
    ),
  },
  {
    id: "definicje",
    title: "§ 2. Definicje",
    body: (
      <>
        <p>Pojęcia użyte w Regulaminie oznaczają:</p>
        <ol className="points">
          <li>
            <strong>Usługodawca</strong> - {COMPANY.name}, wskazana w § 1 ust. 2;
          </li>
          <li>
            <strong>Estats</strong> - platforma prowadzona przez Usługodawcę, obejmująca Stronę,
            Aplikację i Centrum opinii;
          </li>
          <li>
            <strong>Strona</strong> - serwis internetowy pod adresem estats.pl;
          </li>
          <li>
            <strong>Aplikacja</strong> - aplikacja internetowa pod adresem app.estats.pl;
          </li>
          <li>
            <strong>Centrum opinii</strong> - portal pod adresem feedback.estats.pl, w którym
            Użytkownicy zgłaszają pomysły i błędy oraz głosują na zgłoszenia;
          </li>
          <li>
            <strong>Użytkownik</strong> - osoba fizyczna, która ma Konto;
          </li>
          <li>
            <strong>Konto</strong> - indywidualne konto Użytkownika w Aplikacji, do którego dostęp
            chronią adres e-mail i hasło;
          </li>
          <li>
            <strong>Przestrzeń</strong> - wydzielona część Aplikacji, w której Użytkownicy wspólnie
            prowadzą flipy, inwestycje i firmy;
          </li>
          <li>
            <strong>Właściciel Przestrzeni</strong> - Użytkownik, który utworzył Przestrzeń, albo
            Użytkownik, któremu przekazano tę funkcję;
          </li>
          <li>
            <strong>Klient</strong> - Właściciel Przestrzeni, a jeżeli utworzył on Przestrzeń w
            imieniu przedsiębiorcy lub innej organizacji - ten podmiot;
          </li>
          <li>
            <strong>Rola</strong> - zakres uprawnień Użytkownika w Przestrzeni: Flipper,
            Koordynator, Sprzedawca albo Inwestor;
          </li>
          <li>
            <strong>Zaproszenie</strong> - wiadomość e-mail z linkiem, za pomocą której uprawniony
            Użytkownik zaprasza inną osobę do Przestrzeni, firmy, flipa lub inwestycji;
          </li>
          <li>
            <strong>Dane Klienta</strong> - treści wprowadzone do Przestrzeni przez jej
            Użytkowników, w szczególności dane flipów i inwestycji, budżety, koszty, faktury,
            dokumenty, zdjęcia, zadania, wpisy w kalendarzu oraz dane kontaktowe klientów,
            inwestorów i wykonawców;
          </li>
          <li>
            <strong>Lista oczekujących</strong> - usługa zapisu adresu e-mail na Stronie w celu
            otrzymania informacji o starcie Estats i wczesnym dostępie do niego;
          </li>
          <li>
            <strong>Konsument</strong> - osoba fizyczna zawierająca z Usługodawcą umowę niezwiązaną
            bezpośrednio z jej działalnością gospodarczą lub zawodową;
          </li>
          <li>
            <strong>Przedsiębiorca na prawach konsumenta</strong> - osoba fizyczna zawierająca z
            Usługodawcą umowę bezpośrednio związaną z jej działalnością gospodarczą, gdy z treści
            tej umowy wynika, że nie posiada ona dla niej charakteru zawodowego, wynikającego w
            szczególności z przedmiotu wykonywanej przez nią działalności gospodarczej,
            udostępnionego na podstawie przepisów o Centralnej Ewidencji i Informacji o Działalności
            Gospodarczej;
          </li>
          <li>
            <strong>Przedsiębiorca</strong> - osoba lub podmiot zawierający z Usługodawcą umowę w
            związku ze swoją działalnością gospodarczą lub zawodową, niebędący Przedsiębiorcą na
            prawach konsumenta;
          </li>
          <li>
            <strong>Umowa</strong> - umowa o świadczenie usług drogą elektroniczną zawarta z
            Usługodawcą na zasadach Regulaminu;
          </li>
          <li>
            <strong>RODO</strong> - rozporządzenie Parlamentu Europejskiego i Rady (UE) 2016/679 z
            dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem
            danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy
            95/46/WE (ogólne rozporządzenie o ochronie danych).
          </li>
        </ol>
      </>
    ),
  },
  {
    id: "uslugi",
    title: "§ 3. Usługi",
    body: (
      <ol>
        <li>
          Usługodawca świadczy następujące usługi:
          <ol>
            <li>prowadzenie Konta i udostępnianie Aplikacji;</li>
            <li>Lista oczekujących;</li>
            <li>Centrum opinii.</li>
          </ol>
        </li>
        <li>
          Aplikacja umożliwia w szczególności:
          <ol>
            <li>tworzenie Przestrzeni i firm oraz prowadzenie w nich flipów i inwestycji;</li>
            <li>planowanie budżetu, ewidencję kosztów i faktur oraz prognozowanie wyniku flipa;</li>
            <li>ewidencję finansowania oraz rozliczeń i wypłat z inwestorami;</li>
            <li>prowadzenie etapów remontu, zadań, aktualizacji ze zdjęciami i dokumentów;</li>
            <li>obsługę sprzedaży, w tym klientów, rezerwacji i kalendarza;</li>
            <li>zapraszanie osób do Przestrzeni i nadawanie im Ról;</li>
            <li>
              udostępnianie wybranych folderów z plikami za pomocą linku osobom, które nie mają
              Konta.
            </li>
          </ol>
        </li>
        <li>
          Umowa o świadczenie usługi Lista oczekujących zostaje zawarta z chwilą zapisania adresu
          e-mail na Stronie, a usługi Centrum opinii - z chwilą pierwszego zalogowania się do
          Centrum opinii za pomocą Konta.
        </li>
        <li>
          Estats jest narzędziem do ewidencji i obliczeń. Wyniki, prognozy, podziały zysku i kwoty
          wypłat pokazywane w Aplikacji wynikają z danych wprowadzonych przez Użytkowników i nie
          stanowią doradztwa inwestycyjnego, podatkowego, prawnego ani księgowego.
        </li>
        <li>
          Zakres funkcji Aplikacji zmienia się wraz z jej rozwojem, na zasadach{" "}
          <a href="#dostepnosc">§ 10</a>.
        </li>
      </ol>
    ),
  },
  {
    id: "wymagania-techniczne",
    title: "§ 4. Wymagania techniczne",
    body: (
      <ol>
        <li>
          Do korzystania z Estats potrzebne są:
          <ol>
            <li>urządzenie z dostępem do internetu;</li>
            <li>
              aktualna wersja przeglądarki Chrome, Edge, Firefox lub Safari z włączoną obsługą
              JavaScript, plików cookies i pamięci lokalnej przeglądarki;
            </li>
            <li>aktywny adres e-mail.</li>
          </ol>
        </li>
        <li>
          Korzystanie z usług świadczonych drogą elektroniczną wiąże się z zagrożeniami typowymi dla
          internetu, takimi jak złośliwe oprogramowanie, wyłudzanie danych (phishing) czy przejęcie
          hasła. Usługodawca nigdy nie prosi o podanie hasła w wiadomości e-mail ani telefonicznie.
        </li>
      </ol>
    ),
  },
  {
    id: "konto",
    title: "§ 5. Konto i zawarcie Umowy",
    body: (
      <ol>
        <li>
          Konto może mieć osoba fizyczna, która ukończyła 18 lat i ma pełną zdolność do czynności
          prawnych.
        </li>
        <li>
          Konto zakłada się:
          <ol>
            <li>
              przyjmując Zaproszenie - przez ustawienie hasła na stronie, do której prowadzi link z
              Zaproszenia;
            </li>
            <li>
              w okresie testów zamkniętych - także na podstawie zgłoszenia przyjętego przez
              Usługodawcę, w szczególności z Listy oczekujących; Usługodawca zakłada wtedy Konto i
              przekazuje dane potrzebne do pierwszego logowania.
            </li>
          </ol>
        </li>
        <li>
          Umowa o prowadzenie Konta zostaje zawarta na czas nieoznaczony z chwilą założenia Konta, a
          w przypadku, o którym mowa w ust. 2 pkt 2 - z chwilą pierwszego zalogowania. Przed
          zawarciem Umowy należy zapoznać się z Regulaminem.
        </li>
        <li>
          Użytkownik, który ma Konto, przyjmuje kolejne Zaproszenia w ramach tego samego Konta.
        </li>
        <li>
          Użytkownik podaje prawdziwe dane, chroni hasło przed innymi osobami i niezwłocznie
          zawiadamia Usługodawcę o podejrzeniu, że ktoś inny uzyskał dostęp do jego Konta. Konto
          jest osobiste i nie może być udostępniane innym osobom.
        </li>
        <li>
          Kto tworzy Przestrzeń albo działa w niej w imieniu przedsiębiorcy lub innej organizacji,
          oświadcza, że jest do tego umocowany.
        </li>
      </ol>
    ),
  },
  {
    id: "przestrzenie",
    title: "§ 6. Przestrzenie i Role",
    body: (
      <ol>
        <li>
          Przestrzeń może utworzyć Użytkownik, któremu Aplikacja to umożliwia. Staje się on
          Właścicielem Przestrzeni.
        </li>
        <li>
          Klient decyduje, kogo zaprasza do Przestrzeni, jakie Role nadaje oraz które sekcje
          Aplikacji są dostępne dla poszczególnych Ról. Aplikacja pokazuje każdemu Użytkownikowi
          wyłącznie dane, do których uprawniają go jego Rola i ustawienia Przestrzeni.
        </li>
        <li>
          Klient odpowiada za to, komu i w jakim zakresie udostępnia Dane Klienta, w tym przez
          Zaproszenia, Role i linki udostępniające.
        </li>
        <li>
          Link udostępniający folder pozwala każdemu, kto go zna, przeglądać i pobierać pliki z tego
          folderu, dopóki link nie zostanie wyłączony.
        </li>
        <li>
          Właściciel Przestrzeni może przekazać tę funkcję innemu Flipperowi Przestrzeni oraz usunąć
          Przestrzeń. Usunięcie Przestrzeni jest nieodwracalne i usuwa wszystkie zapisane w niej
          Dane Klienta.
        </li>
        <li>
          Usługodawca nie decyduje o tym, jakie dane trafiają do Przestrzeni ani komu są
          udostępniane, i nie sprawdza Danych Klienta, z zastrzeżeniem{" "}
          <a href="#tresci-niezgodne-z-prawem">§ 16</a>.
        </li>
      </ol>
    ),
  },
  {
    id: "oplaty",
    title: "§ 7. Opłaty",
    body: (
      <ol>
        <li>W okresie testów zamkniętych korzystanie z Estats jest bezpłatne.</li>
        <li>
          Usługodawca może wprowadzić płatne plany. O ich zakresie, cenach i warunkach płatności
          poinformuje Klientów e-mailem co najmniej 7 dni przed ich wprowadzeniem, zmieniając
          Regulamin na zasadach <a href="#zmiany-regulaminu">§ 18</a>.
        </li>
        <li>
          Usługodawca nie pobiera żadnych opłat bez wyraźnej zgody Klienta. Korzystanie z płatnego
          planu wymaga jego wybrania przez Klienta.
        </li>
        <li>
          Klient, który nie zgadza się na płatny plan, może rozwiązać Umowę bez ponoszenia kosztów.
          Jeżeli Klient nie wybierze płatnego planu, Usługodawca może zakończyć świadczenie usług w
          jego Przestrzeni po upływie terminu wskazanego w informacji, o której mowa w ust. 2, nie
          krótszego niż 7 dni, umożliwiając wcześniej pobranie zapisanych w niej plików.
        </li>
      </ol>
    ),
  },
  {
    id: "zasady-korzystania",
    title: "§ 8. Zasady korzystania",
    body: (
      <ol>
        <li>Użytkownik korzysta z Estats zgodnie z prawem, Regulaminem i dobrymi obyczajami.</li>
        <li>
          Zabronione jest w szczególności:
          <ol>
            <li>
              dostarczanie treści o charakterze bezprawnym, w tym naruszających prawa osób trzecich;
            </li>
            <li>wprowadzanie danych osobowych innych osób bez podstawy prawnej;</li>
            <li>
              przesyłanie złośliwego oprogramowania, próby uzyskania dostępu do cudzych Kont,
              Przestrzeni lub danych, obchodzenie zabezpieczeń i zakłócanie działania Estats;
            </li>
            <li>
              automatyczne pobieranie danych z Estats i nadmierne obciążanie jego infrastruktury;
            </li>
            <li>udostępnianie Konta innym osobom;</li>
            <li>wykorzystywanie Estats do przesyłania niezamówionych informacji handlowych.</li>
          </ol>
        </li>
        <li>Użytkownik odpowiada za treści, które wprowadza do Estats.</li>
      </ol>
    ),
  },
  {
    id: "prawa-do-tresci",
    title: "§ 9. Prawa do treści i do Estats",
    body: (
      <ol>
        <li>
          Dane Klienta należą do Klienta albo do Użytkowników, którzy je wprowadzili. W zakresie, w
          jakim Dane Klienta są utworami, Użytkownik udziela Usługodawcy nieodpłatnej, niewyłącznej
          licencji na ich przechowywanie, zwielokrotnianie i wyświetlanie uprawnionym Użytkownikom -
          wyłącznie w celu świadczenia usług i na czas przechowywania ich w Estats.
        </li>
        <li>
          Oprogramowanie, wygląd i znak Estats są chronione prawem. Umowa nie przenosi na
          Użytkownika praw do Estats poza prawem do korzystania z niego zgodnie z Regulaminem.
        </li>
        <li>
          Pomysły i uwagi przekazane Usługodawcy, w tym w Centrum opinii, Usługodawca może
          bezpłatnie wykorzystać do rozwoju Estats.
        </li>
        <li>
          Wpisy, komentarze i głosy w Centrum opinii są widoczne dla odwiedzających portal wraz z
          imieniem, nazwiskiem i zdjęciem profilowym autora.
        </li>
      </ol>
    ),
  },
  {
    id: "dostepnosc",
    title: "§ 10. Dostępność i rozwój Estats",
    body: (
      <ol>
        <li>
          Usługodawca dba o to, by Estats działał nieprzerwanie i poprawnie. W okresie testów
          zamkniętych Estats jest intensywnie rozwijany i może zawierać błędy, które Usługodawca
          usuwa na bieżąco.
        </li>
        <li>
          Usługodawca może czasowo ograniczyć dostęp do Estats w celu konserwacji, aktualizacji lub
          usunięcia awarii, dbając o to, by przerwy były możliwie krótkie.
        </li>
        <li>
          Usługodawca może rozwijać i zmieniać funkcje Estats. O zmianie, która w istotny sposób
          ogranicza funkcje, z których korzysta Użytkownik, Usługodawca informuje z wyprzedzeniem;
          Użytkownik może wtedy rozwiązać Umowę bez kosztów.
        </li>
        <li>Zaleca się przechowywanie kopii ważnych dokumentów także poza Estats.</li>
      </ol>
    ),
  },
  {
    id: "odpowiedzialnosc",
    title: "§ 11. Odpowiedzialność",
    body: (
      <ol>
        <li>
          Usługodawca odpowiada za niewykonanie lub nienależyte wykonanie Umowy na zasadach
          określonych w przepisach prawa, z zastrzeżeniem ust. 3 i 4.
        </li>
        <li>
          Usługodawca nie odpowiada za szkody wynikające z:
          <ol>
            <li>
              wprowadzenia przez Użytkowników błędnych lub niepełnych danych oraz decyzji podjętych
              na ich podstawie;
            </li>
            <li>
              udostępnienia danych przez Klienta lub Użytkownika innym osobom, w tym przez
              Zaproszenie, nadanie Roli lub link udostępniający;
            </li>
            <li>udostępnienia przez Użytkownika hasła innym osobom.</li>
          </ol>
        </li>
        <li>
          Wobec Przedsiębiorców Usługodawca odpowiada wyłącznie za szkodę rzeczywistą, do łącznej
          kwoty opłat zapłaconych przez Klienta za 12 miesięcy poprzedzających zdarzenie, a gdy
          usługi są bezpłatne - do kwoty 500 zł.
        </li>
        <li>
          Ograniczenie z ust. 3 nie dotyczy szkody wyrządzonej umyślnie oraz przypadków, w których
          przepisy prawa nie pozwalają na ograniczenie odpowiedzialności. Nie stosuje się go do
          Konsumentów ani Przedsiębiorców na prawach konsumenta.
        </li>
      </ol>
    ),
  },
  {
    id: "reklamacje",
    title: "§ 12. Reklamacje",
    body: (
      <ol>
        <li>
          Reklamację dotyczącą Estats można złożyć e-mailem na adres {email} albo listownie na adres
          siedziby Usługodawcy.
        </li>
        <li>
          W reklamacji należy podać adres e-mail Konta lub inne dane kontaktowe i opisać problem.
          Jeżeli czegoś brakuje, Usługodawca poprosi o uzupełnienie.
        </li>
        <li>
          Usługodawca odpowiada na reklamację w terminie 14 dni od jej otrzymania, e-mailem na
          adres, z którego ją wysłano, albo na inny wskazany adres.
        </li>
        <li>
          Jeżeli Usługodawca nie odpowie na reklamację Konsumenta lub Przedsiębiorcy na prawach
          konsumenta w terminie 14 dni, uważa się, że uznał ją za uzasadnioną.
        </li>
      </ol>
    ),
  },
  {
    id: "rozwiazanie-umowy",
    title: "§ 13. Rozwiązanie Umowy i usunięcie danych",
    body: (
      <ol>
        <li>
          Użytkownik może w każdej chwili, bez podania przyczyny i bez kosztów, rozwiązać Umowę o
          prowadzenie Konta, wysyłając żądanie usunięcia Konta na adres {email} z adresu e-mail
          Konta. Usługodawca usuwa Konto niezwłocznie, nie później niż w ciągu 14 dni od otrzymania
          żądania.
        </li>
        <li>
          Właściciel Przestrzeni przed usunięciem Konta przekazuje tę funkcję innemu Flipperowi albo
          usuwa Przestrzeń.
        </li>
        <li>
          Klient może w każdej chwili zakończyć korzystanie z Przestrzeni, usuwając ją w
          ustawieniach Przestrzeni.
        </li>
        <li>
          Usunięcie Użytkownika z Przestrzeni nie rozwiązuje Umowy o prowadzenie jego Konta. Treści
          wprowadzone przez Użytkownika do Przestrzeni są Danymi Klienta i pozostają w niej po
          usunięciu jego Konta.
        </li>
        <li>
          Usługodawca może rozwiązać Umowę z ważnych przyczyn, z zachowaniem 30-dniowego okresu
          wypowiedzenia, zawiadamiając Użytkownika e-mailem. Ważnymi przyczynami są zakończenie
          świadczenia Estats oraz zmiana przepisów uniemożliwiająca świadczenie usług na
          dotychczasowych zasadach.
        </li>
        <li>
          Usługodawca może rozwiązać Umowę ze skutkiem natychmiastowym, jeżeli Użytkownik rażąco lub
          uporczywie narusza Regulamin, w szczególności § 8 ust. 2, a wezwanie do zaprzestania
          naruszeń okazało się bezskuteczne. Wezwanie nie jest wymagane, gdy naruszenie polega na
          ataku na bezpieczeństwo Estats lub dostarczaniu treści o charakterze bezprawnym.
        </li>
        <li>
          Po usunięciu Konta albo Przestrzeni Usługodawca usuwa odpowiednio dane Konta albo Dane
          Klienta z systemów produkcyjnych niezwłocznie, a z kopii zapasowych - w ciągu 30 dni,
          chyba że przepisy prawa wymagają ich dłuższego przechowywania. Przed usunięciem
          Przestrzeni Klient może pobrać zapisane w niej pliki.
        </li>
        <li>
          Z Listy oczekujących można się wypisać w każdej chwili - przez link w wiadomości od Estats
          albo e-mailem na adres {email}.
        </li>
      </ol>
    ),
  },
  {
    id: "dane-osobowe",
    title: "§ 14. Dane osobowe",
    body: (
      <ol>
        <li>
          Administratorem danych osobowych Użytkowników związanych z Kontem, osób zapisanych na
          Listę oczekujących i Użytkowników Centrum opinii jest Usługodawca. Szczegóły opisuje{" "}
          <Link to="/prywatnosc">Polityka prywatności</Link>.
        </li>
        <li>
          Administratorem danych osobowych zawartych w Danych Klienta jest Klient. Usługodawca
          przetwarza je w imieniu Klienta na zasadach <a href="#powierzenie-danych">§ 15</a>.
        </li>
      </ol>
    ),
  },
  {
    id: "powierzenie-danych",
    title: "§ 15. Powierzenie przetwarzania danych osobowych",
    body: (
      <ol>
        <li>
          Klient powierza Usługodawcy przetwarzanie danych osobowych zawartych w Danych Klienta. Ten
          paragraf stanowi umowę powierzenia przetwarzania danych osobowych, o której mowa w art. 28
          ust. 3 RODO.
        </li>
        <li>
          Usługodawca przetwarza dane w celu i w zakresie niezbędnym do świadczenia usług Estats - w
          szczególności je przechowuje, porządkuje, udostępnia uprawnionym Użytkownikom, tworzy ich
          kopie zapasowe i usuwa - przez czas trwania Umowy i do czasu usunięcia danych zgodnie z §
          13 ust. 7.
        </li>
        <li>
          Powierzenie obejmuje:
          <ol>
            <li>
              dane identyfikacyjne i kontaktowe, w tym imiona, nazwiska, nazwy, adresy e-mail,
              numery telefonów i numery NIP;
            </li>
            <li>
              dane o transakcjach i rozliczeniach, w tym kwoty, udziały, wypłaty i rezerwacje;
            </li>
            <li>dane zawarte w dokumentach i na zdjęciach przesłanych przez Użytkowników;</li>
            <li>dane o aktywności Użytkowników w Przestrzeni.</li>
          </ol>
        </li>
        <li>
          Dane dotyczą Użytkowników Przestrzeni, inwestorów, klientów i osób im towarzyszących,
          wykonawców i ich przedstawicieli oraz innych osób, których dane Użytkownicy wprowadzą.
        </li>
        <li>
          Klient nie powinien wprowadzać do Estats szczególnych kategorii danych osobowych, o
          których mowa w art. 9 ust. 1 RODO, ani danych dotyczących wyroków skazujących i czynów
          zabronionych, chyba że jest to niezbędne i zgodne z prawem.
        </li>
        <li>
          Usługodawca:
          <ol>
            <li>
              przetwarza dane wyłącznie na udokumentowane polecenie Klienta - poleceniem są
              Regulamin oraz czynności wykonywane przez Użytkowników Przestrzeni w Aplikacji - chyba
              że obowiązek przetwarzania nakłada na niego prawo; wtedy informuje o nim Klienta, o
              ile prawo tego nie zabrania;
            </li>
            <li>
              zapewnia, że osoby upoważnione do przetwarzania danych zobowiązały się do zachowania
              ich w tajemnicy;
            </li>
            <li>stosuje środki bezpieczeństwa, o których mowa w art. 32 RODO;</li>
            <li>
              w miarę możliwości pomaga Klientowi odpowiadać na żądania osób, których dane dotyczą,
              oraz wywiązywać się z obowiązków określonych w art. 32-36 RODO;
            </li>
            <li>
              zgłasza Klientowi naruszenie ochrony danych osobowych bez zbędnej zwłoki, nie później
              niż w ciągu 48 godzin od jego stwierdzenia;
            </li>
            <li>
              po zakończeniu świadczenia usług usuwa dane zgodnie z § 13 ust. 7, chyba że prawo
              nakazuje ich dalsze przechowywanie;
            </li>
            <li>
              udostępnia Klientowi informacje niezbędne do wykazania spełnienia obowiązków
              określonych w art. 28 RODO i umożliwia przeprowadzenie audytu w terminie i zakresie
              uzgodnionym z co najmniej 14-dniowym wyprzedzeniem, z poszanowaniem tajemnicy
              przedsiębiorstwa Usługodawcy i danych innych klientów.
            </li>
          </ol>
        </li>
        <li>
          Klient udziela Usługodawcy ogólnej zgody na powierzanie przetwarzania danych dalszym
          podmiotom przetwarzającym. Ich kategorie wskazuje{" "}
          <Link to="/prywatnosc" hash="odbiorcy">
            Polityka prywatności
          </Link>
          , a aktualną listę Usługodawca przekazuje Klientowi na żądanie. O zamiarze dodania lub
          zastąpienia dalszego podmiotu przetwarzającego Usługodawca informuje Klientów co najmniej
          7 dni wcześniej; Klient może zgłosić sprzeciw, a jeżeli strony nie dojdą do porozumienia -
          rozwiązać Umowę. Usługodawca nakłada na dalsze podmioty przetwarzające obowiązki ochrony
          danych odpowiadające tym z niniejszego paragrafu.
        </li>
        <li>
          Dane mogą być przekazywane do państw spoza Europejskiego Obszaru Gospodarczego wyłącznie z
          zastosowaniem zabezpieczeń przewidzianych w rozdziale V RODO.
        </li>
        <li>
          Klient oświadcza, że ma podstawę prawną do przetwarzania danych, które wprowadza do
          Estats, i do powierzenia ich Usługodawcy, oraz że wykonuje wobec osób, których dane
          dotyczą, obowiązki informacyjne.
        </li>
      </ol>
    ),
  },
  {
    id: "tresci-niezgodne-z-prawem",
    title: "§ 16. Zgłaszanie treści niezgodnych z prawem",
    body: (
      <ol>
        <li>
          Pojedynczym punktem kontaktowym, o którym mowa w art. 11 i 12 rozporządzenia Parlamentu
          Europejskiego i Rady (UE) 2022/2065 (akt o usługach cyfrowych), dla organów państw
          członkowskich, Komisji Europejskiej, Europejskiej Rady ds. Usług Cyfrowych i odbiorców
          usług jest adres {email}. Kontakt jest możliwy w języku polskim i angielskim.
        </li>
        <li>
          Każdy może zgłosić treść dostępną w Estats, którą uważa za niezgodną z prawem, na adres
          wskazany w ust. 1. Zgłoszenie powinno zawierać:
          <ol>
            <li>wyjaśnienie, dlaczego treść jest niezgodna z prawem;</li>
            <li>wskazanie, gdzie treść się znajduje, np. link;</li>
            <li>
              imię i nazwisko lub nazwę oraz adres e-mail zgłaszającego, z wyjątkiem zgłoszeń
              dotyczących przestępstw, o których mowa w art. 3-7 dyrektywy 2011/93/UE;
            </li>
            <li>
              oświadczenie, że zgłaszający w dobrej wierze uważa informacje zawarte w zgłoszeniu za
              prawidłowe i kompletne.
            </li>
          </ol>
        </li>
        <li>
          Usługodawca potwierdza otrzymanie zgłoszenia, rozpatruje je niezwłocznie, starannie i
          obiektywnie oraz informuje zgłaszającego o swojej decyzji i możliwości jej zaskarżenia.
        </li>
        <li>
          Jeżeli Usługodawca usunie treść, uniemożliwi do niej dostęp albo ograniczy lub zablokuje
          Konto z powodu niezgodności treści z prawem lub z Regulaminem, przekazuje Użytkownikowi,
          którego to dotyczy, uzasadnienie zgodne z art. 17 aktu o usługach cyfrowych. Użytkownik
          może odwołać się od decyzji na adres wskazany w ust. 1; Usługodawca rozpatruje odwołanie w
          terminie 14 dni. Użytkownikowi przysługuje także droga sądowa.
        </li>
        <li>
          Usługodawca nie monitoruje Danych Klienta i nie stosuje zautomatyzowanych narzędzi
          moderowania treści; zgłoszenia i odwołania rozpatrują ludzie.
        </li>
      </ol>
    ),
  },
  {
    id: "konsumenci",
    title: "§ 17. Konsumenci",
    body: (
      <ol>
        <li>
          Konsument może odstąpić od Umowy bez podania przyczyny w terminie 14 dni od dnia jej
          zawarcia. W tym celu wystarczy przed upływem terminu wysłać Usługodawcy oświadczenie, np.
          e-mailem na adres {email}. Można skorzystać ze{" "}
          <a href="#formularz-odstapienia">wzoru formularza</a> zamieszczonego na końcu Regulaminu,
          ale nie jest to obowiązkowe. Usługodawca niezwłocznie potwierdza otrzymanie oświadczenia.
        </li>
        <li>
          Usługi są bezpłatne, dlatego odstąpienie od Umowy nie wiąże się z żadnymi kosztami. Jego
          skutkiem jest usunięcie Konta albo wypisanie z Listy oczekujących.
        </li>
        <li>
          Usługodawca odpowiada wobec Konsumenta za zgodność usług z Umową na zasadach przepisów
          ustawy z dnia 30 maja 2014 r. o prawach konsumenta dotyczących usług cyfrowych, w
          zakresie, w jakim przepisy te mają zastosowanie.
        </li>
        <li>
          Postanowienia Regulaminu nie wyłączają ani nie ograniczają praw Konsumenta wynikających z
          bezwzględnie obowiązujących przepisów prawa.
        </li>
        <li>Przepisy ust. 1-4 stosuje się również do Przedsiębiorców na prawach konsumenta.</li>
        <li>
          Konsument może skorzystać z pozasądowych sposobów rozpatrywania reklamacji i dochodzenia
          roszczeń, w szczególności zwrócić się o pomoc do miejskiego lub powiatowego rzecznika
          konsumentów. Informacje o tych sposobach i procedurach są dostępne na stronie Urzędu
          Ochrony Konkurencji i Konsumentów:{" "}
          <a href="https://uokik.gov.pl" target="_blank" rel="noopener noreferrer">
            uokik.gov.pl
          </a>
          .
        </li>
      </ol>
    ),
  },
  {
    id: "zmiany-regulaminu",
    title: "§ 18. Zmiany Regulaminu",
    body: (
      <ol>
        <li>
          Usługodawca może zmienić Regulamin z ważnych przyczyn, którymi są: zmiana przepisów prawa,
          orzeczenie sądu lub decyzja organu, wprowadzenie płatnych planów, zmiana zakresu lub
          sposobu świadczenia usług, zmiana dostawców, konieczność zapewnienia bezpieczeństwa Estats
          oraz zmiana danych Usługodawcy.
        </li>
        <li>
          O zmianie Regulaminu Usługodawca informuje Użytkowników e-mailem lub w Aplikacji co
          najmniej 7 dni przed jej wejściem w życie. Zmiana wynikająca z przepisów prawa, decyzji
          organu lub potrzeby zapewnienia bezpieczeństwa może wejść w życie wcześniej, jeżeli
          wymagają tego te okoliczności.
        </li>
        <li>
          Użytkownik, który nie akceptuje zmian, może przed ich wejściem w życie rozwiązać Umowę bez
          kosztów, zgodnie z § 13 ust. 1.
        </li>
        <li>Zmiana Regulaminu nie narusza praw nabytych przed jej wejściem w życie.</li>
      </ol>
    ),
  },
  {
    id: "postanowienia-koncowe",
    title: "§ 19. Postanowienia końcowe",
    body: (
      <ol>
        <li>
          Umowa jest zawierana w języku polskim. Prawem właściwym dla Umowy jest prawo polskie.
          Wybór prawa nie pozbawia Konsumenta ochrony, jaką zapewniają mu bezwzględnie obowiązujące
          przepisy państwa jego zwykłego pobytu.
        </li>
        <li>
          Spory z Przedsiębiorcami rozstrzyga sąd właściwy dla siedziby Usługodawcy. Spory z
          Konsumentami i Przedsiębiorcami na prawach konsumenta rozstrzyga sąd właściwy według
          przepisów ogólnych.
        </li>
        <li>Regulamin obowiązuje od {LEGAL_EFFECTIVE_DATE}</li>
      </ol>
    ),
  },
  {
    id: "formularz-odstapienia",
    title: "Wzór formularza odstąpienia od umowy",
    body: (
      <div className="legal-form">
        <p className="legal-form__note">
          (formularz ten należy wypełnić i odesłać tylko w przypadku chęci odstąpienia od umowy)
        </p>
        <p>
          Adresat: {COMPANY.name}, <CompanyAddress />, {COMPANY.email}
        </p>
        <p>
          Ja/My(*) niniejszym informuję/informujemy(*) o moim/naszym odstąpieniu od umowy o
          świadczenie następującej usługi: <span className="legal-form__blank" />
        </p>
        <p>
          Data zawarcia umowy: <span className="legal-form__blank" />
        </p>
        <p>
          Imię i nazwisko konsumenta(-ów): <span className="legal-form__blank" />
        </p>
        <p>
          Adres konsumenta(-ów): <span className="legal-form__blank" />
        </p>
        <p>
          Adres e-mail Konta: <span className="legal-form__blank" />
        </p>
        <p>
          Podpis konsumenta(-ów) (tylko jeżeli formularz jest przesyłany w wersji papierowej):{" "}
          <span className="legal-form__blank" />
        </p>
        <p>
          Data: <span className="legal-form__blank" />
        </p>
        <p className="legal-form__note">(*) Niepotrzebne skreślić.</p>
      </div>
    ),
  },
];

export const Route = createFileRoute("/regulamin")({
  head: () => ({
    meta: [
      { title: "Regulamin - Estats" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: `${SITE_URL}/regulamin` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/regulamin` }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return <LegalDocument title={TITLE} sections={sections} />;
}
