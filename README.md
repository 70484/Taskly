Taskly – Personal Task Manager

Taskly to lekka, responsywna aplikacja internetowa do zarządzania zadaniami, zbudowana w oparciu o czysty kod (Vanilla JS) i nowoczesne standardy HTML5/CSS3. Projekt został zrealizowany w celu demonstracji umiejętności tworzenia dynamicznych interfejsów użytkownika.

Link do wersji live: https://70484.github.io/Taskly

Instrukcja instalacji i uruchomienia:
Do uruchomienia projektu wystarczy dowolna nowoczesna przeglądarka internetowa.

Wykorzystane technologie:
- HTML5: Semantyczna struktura dokumentu (header, nav, article, section).

- CSS3: Flexbox i CSS Grid (layout), Media Queries (responsywność), Keyframe Animations.

- JavaScript (ES6+): Manipulacja drzewem DOM, Event Listeners, LocalStorage API.

- Git & GitHub: Kontrola wersji i hosting (GitHub Pages).

Architektura aplikacji:
Aplikacja opiera się na architekturze Client-Side Only.

Warstwa widoku: Trzy niezależne pliki HTML (index, tasks, about) współdzielące arkusz stylów.

Warstwa logiki: Centralny plik app.js zarządzający stanem aplikacji (listą zadań) i synchronizacją z pamięcią przeglądarki.

Persystencja danych: Wykorzystanie mechanizmu localStorage, co pozwala na zachowanie danych po zamknięciu przeglądarki bez konieczności posiadania backendu.