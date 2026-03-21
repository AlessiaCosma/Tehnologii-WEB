# HTTP, Cookies si Sesiuni - Partea 1: Analiza Protocolului HTTP
## 1.1 Întrebări Teoretice 

### 1. Care sunt cele 4 metode HTTP principale și când se folosește fiecare?

- **GET** - interogare de resurse
- **POST** - aduagare de resurse. De obicei are si date atasate.
- **PUT** - modificare de resurse. De obicei are si date atasate.
- **DELETE** - stergere de resurse
---
### 2. Ce semnifică codurile de status: 200, 301, 400, 401, 403, 404, 500?

- 200 OK - cererea a fost procesata cu succes
- 301 Moved Permanently - resursa a fost mutata definitiv la alt URL
- 400 Bad Request - cererea este invalida (date gresite)
- 401 Unauthorized - autentificare necesara sau esuata
- 403 Forbidden - serverul intelege cererea, dar refuza accesul
- 404 Not Found - resursa nu exista
- 500 Internal Server Error - eroare pe server
---
### 3. Care este diferența între HTTP și HTTPS?

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

## 1.2 Exercițiu Practic - Analiza HTTP cu Developer Tools

### Exemplu de cerere GET

- **Request URL**: https://httpbin.org/
- **Request Method**: GET
- **Status Code**: 200 OK
---
### Request Headers

- **User-Agent**: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
- **Accept**: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7 
- **Accept-Language**: ro-RO,ro;q=0.9,en-US;q=0.8,en;q=0.7
- **Host**: httpbin.org  
---
### Response Headers

- **Content-Type**: text/html; charset=utf-8  
- **Server**: gunicorn/19.9.0  
- **Date**: Sat, 21 Mar 2026 13:06:32 GMT  
