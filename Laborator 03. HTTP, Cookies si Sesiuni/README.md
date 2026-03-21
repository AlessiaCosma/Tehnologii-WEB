# HTTP, Cookies si Sesiuni - Partea 1: Analiza Protocolului HTTP

## 1. Care sunt cele 4 metode HTTP principale și când se folosește fiecare?

- **GET** - interogare de resurse
- **POST** - aduagare de resurse. De obicei are si date atasate.
- **PUT** - modificare de resurse. De obicei are si date atasate.
- **DELETE** - stergere de resurse

## 2. Ce semnifică codurile de status: 200, 301, 400, 401, 403, 404, 500?

- 200 OK - cererea a fost procesata cu succes
- 301 Moved Permanently - resursa a fost mutata definitiv la alt URL
- 400 Bad Request - cererea este invalida (date gresite)
- 401 Unauthorized - autentificare necesara sau esuata
- 403 Forbidden - serverul intelege cererea, dar refuza accesul
- 404 Not Found - resursa nu exista
- 500 Internal Server Error - eroare pe server

## 3. Care este diferența între HTTP și HTTPS?
**HTTP (HyperText Transfer Protocol):**
- transmite datele in text simplu (necriptat)
- nu ofera securitate (datele pot fi interceptate)
- foloseste implicit portul 80
  
**HTTPS (HyperText Transfer Protocol Secure):**
- este varianta securizata a HTTP
- foloseste TLS (Transport Layer Security) pentru a cripta comunicarea
asigura:
    - confidentialitatea datelor (prin criptare)
    - integritatea datelor (nu pot fi modificate in tranzit)
    - autentificarea serverului (prin certificate digitale)
- foloseste implicit portul 443
  
**Diferenta principala:**
HTTP transmite datele necriptat, in timp ce HTTPS transmite datele criptat, fiind mult mai sigur.
