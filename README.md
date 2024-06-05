# Applications of Graphs in Real Life

## Descriere

Applications_of_Graphs_IRL este o platformă web dedicată explorării și vizualizării grafurilor. Aici, utilizatorii pot să-și creeze conturi, să exploreze conceptele de bază ale grafurilor, să creeze și să vizualizeze grafuri personalizate, și să interacționeze cu o comunitate pasionată de domeniul grafurilor.

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
git clone https://github.com/sebisincari/Applications_of_Graphs_IRL.git
```

2. Instalează dependințele Node.js:

```
cd Applications_of_Graphs_IRL
npm install
npm i nodemon
npm i bcrypt
npm i connect-mongo
npm i cookie-parser
npm i dotenv
npm i ejs
npm i express
npm i express-ejs-layouts
npm i express-session
npm i jsonwebtoken
npm i method-override
npm i mongoose
```

3. Configurează baza de date MongoDB: Asigură-te că MongoDB este instalat pe mașina ta locală sau utilizează un serviciu de gazduire MongoDB.

4. Setează variabilele de mediu: Creează un fișier `.env` în directorul principal al proiectului și adaugă următoarele variabile de mediu:

```
MONGODB_URI=adresa_baza_de_date_mongodb
PORT=3025
```

Înlocuiește `adresa_baza_de_date_mongodb` cu adresa bazei tale de date MongoDB.

5. Rulează aplicația:

```
npm run dev
```

6. Accesează platforma în browser:

```
http://localhost:3025
```

## Contribuie

Dacă dorești să contribui la dezvoltarea platformei GrafXplor, te invităm să clonaze acest repository și să trimiți pull request-uri cu îmbunătățiri sau noi caracteristici.

## Autor

GrafXplor a fost creat de Sincari Sebastian George. Poți să-l contactezi pe [sincarisebastian@gmail.com](mailto:sincarisebastian@gmail.com) pentru întrebări sau sugestii.

