Turniej-Axelroda
Projekt w React na zaliczenie przedmiotu.

Opis projektu
Projekt symulujący Turniej Axelroda dla co najmniej 9 różnych strategii w iterowanym dylemacie więźnia. Programy grają ze sobą 1000 razy (każdy z każdym). Wyniki są prezentowane w aplikacji internetowej.

Technologie

* React.js
* JavaScript
* CSS

Architektura i narzędzia

a. Generatory komponentów
W projekcie zastosowano komponenty React.js, które są podstawowymi blokami budującymi aplikację. Każdy komponent odpowiada za konkretną funkcjonalność lub część interfejsu użytkownika. Główne komponenty to:

* App.js: Główny komponent aplikacji, zarządzający strukturą aplikacji.

b. Szablony HTML
Szablony HTML są zintegrowane bezpośrednio w komponentach React. Każdy komponent React używa JSX, aby definiować strukturę HTML dla tej części interfejsu użytkownika.

Struktura projektu

axelrod-tournament/
├── node_modules/
├── public/
├── src/
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   ├── setupTests.js
│   ├── strategies.js
│   └── styles.css
├── .gitignore
├── package-lock.json
├── package.json
└── README.md

Instrukcja uruchomienia

Zainstaluj Node.js i npm.

Sklonuj repozytorium:

### git clone https://github.com/davkooz/axelrod-tournament.git

Przejdź do katalogu projektu:

### cd axelrod-tournament

Zainstaluj zależności:

### npm install

Uruchom aplikację:

### npm start

Otwórz przeglądarkę i przejdź do http://localhost:3000, aby zobaczyć działającą aplikację.

Opis strategii

Zawsze współpracuje: Zawsze wybiera współpracę.
Zawsze zdradza: Zawsze wybiera zdradę.
Losowa: Losowo wybiera współpracę lub zdradę.
Wet za wet: Powtarza ostatni ruch przeciwnika.
Mściwy: Zdradza, jeśli przeciwnik kiedykolwiek zdradził.
Pawłow: Współpracuje, jeśli ostatni ruch obu graczy był taki sam, inaczej zdradza.

Moje dane

### Dawid Kuzmicz 157052