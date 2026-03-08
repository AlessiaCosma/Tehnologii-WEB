# Campus Info Hub

## 1. Ce este o resursa (resource) in aplicatia mea?

In aplicatia "Campus Info Hub", o resursa reprezinta un loc sau un serviciu din campus. Exemple de resurse sunt biblioteca si cantina. Fiecare resursa este descrisa in fisierul `resources.json` si contine informatii precum numele, tipul, locatia, programul si anumite tag-uri.

## 2. Exemplu de URI si componentele sale

Exemplu de URI: `/library.html#schedule`

- **Path**: `/library.html` – indica pagina HTML care contine informatiile despre biblioteca.
- **Fragment**: `#schedule` – indica o sectiune specifica din pagina, in acest caz programul bibliotecii.

## 3. Care parti sunt statice si care sunt dinamice? 

**Parti statice:**
- Fisierele HTML (`index.html`, `library.html`, `cafeteria.html`)
- Structura paginilor si linkurile de navigare
- Continutul fix din pagini (titluri, descrieri)

**Parti dinamice:**
- Datele din fisierul `resources.json`
- Afisarea resurselor in pagina principala folosind JavaScript
- Filtrarea resurselor (de exemplu locuri destinate studiului)
- Generarea listei de tag-uri

## 4. Este aplicatia mea document-centric sau interactive (sau ambele)? De ce?

Aplicatia este atat document-centric, cat si interactiva.

Este document-centric deoarece contine mai multe pagini HTML care prezinta informatii despre resursele din campus, cum ar fi biblioteca sau cantina.

Este si interactiva deoarece foloseste JavaScript pentru a incarca si afisa dinamic date din fisierul JSON, pentru a filtra resursele si pentru a genera lista de categorii (tags) in pagina principala.
