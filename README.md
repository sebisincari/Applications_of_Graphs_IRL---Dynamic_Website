# GrafXplor - Explorarea Grafurilor

![GrafXplor](https://example.com/grafxplor-banner.png)

## Descriere

GrafXplor este o platformă web dedicată explorării și vizualizării grafurilor. Aici, utilizatorii pot să-și creeze conturi, să exploreze conceptele de bază ale grafurilor, să creeze și să vizualizeze grafuri personalizate, și să interacționeze cu o comunitate pasionată de domeniul grafurilor.

## Caracteristici principale

- **Pagină introductivă captivantă:** Pagina de start oferă o prezentare atrăgătoare a platformei, explicând conceptele de bază ale grafurilor și modalitatea de utilizare a site-ului.
- **Creare de conturi personalizate:** Utilizatorii pot să-și creeze conturi personalizate pentru a avea acces la funcționalități avansate ale platformei. Informațiile de cont sunt stocate într-o bază de date MongoDB.
- **Interfață prietenoasă:** Interfața intuitivă și prietenoasă a platformei facilitează utilizatorilor explorarea și interacțiunea cu grafurile.
- **Vizualizare și creare de grafuri personalizate:** Utilizatorii pot să creeze și să vizualizeze grafuri personalizate folosind instrumentele interactive ale platformei.
- **Generare automată de SVG-uri:** Pentru fiecare cont creat, platforma generează automat SVG-uri reprezentând grafurile asociate cu acel cont. Grafurile sunt stocate și gestionate într-o bază de date MongoDB.

## Tehnologii folosite

- **Node.js:** Platforma este construită utilizând Node.js pentru gestionarea backend-ului.
- **Express.js:** Framework-ul Express.js este folosit pentru gestionarea rutei și a logicii backend.
- **MongoDB:** Baza de date MongoDB este folosită pentru stocarea conturilor utilizatorilor și a grafurilor asociate.

## Cum să rulezi platforma local

1. Clonează acest repository pe mașina ta locală:

```
git clone https://github.com/utilizator/grafxplor.git
```

2. Instalează dependințele Node.js:

```
cd grafxplor
npm install
```

3. Configurează baza de date MongoDB: Asigură-te că MongoDB este instalat pe mașina ta locală sau utilizează un serviciu de gazduire MongoDB.

4. Setează variabilele de mediu: Creează un fișier `.env` în directorul principal al proiectului și adaugă următoarele variabile de mediu:

```
MONGODB_URI=adresa_baza_de_date_mongodb
PORT=3000
```

Înlocuiește `adresa_baza_de_date_mongodb` cu adresa bazei tale de date MongoDB.

5. Rulează aplicația:

```
npm start
```

6. Accesează platforma în browser:

```
http://localhost:3025
```

## Contribuie

Dacă dorești să contribui la dezvoltarea platformei GrafXplor, te invităm să clonaze acest repository și să trimiți pull request-uri cu îmbunătățiri sau noi caracteristici.

## Autor

GrafXplor a fost creat de John Doe. Poți să-l contactezi pe [john.doe@example.com](mailto:john.doe@example.com) pentru întrebări sau sugestii.

## Licență

Acest proiect este licențiat sub [Licența MIT](https://opensource.org/licenses/MIT).

## Mulțumiri

GrafXplor utilizează următoarele resurse externe și librării:
- [D3.js](https://d3js.org/) - Pentru vizualizarea și manipularea grafurilor în SVG.
- [Express.js](https://expressjs.com/) - Pentru gestionarea rutelor și a logicii backend.
- [MongoDB](https://www.mongodb.com/) - Pentru stocarea și gestionarea datelor utilizatorilor și a grafurilor.
