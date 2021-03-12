## IPA-Projekt 2021 Milos Jovanovic

### Webinterface für Drohne

![Design der Interface](https://user-images.githubusercontent.com/58105956/110535662-d9ec2300-8120-11eb-9e6f-2d39a9b1adc9.PNG)

# Kurzfassung

- Das Projekt ist meine Abschlussarbeit (IPA) in der Ausbildung als Applikationsentwickler EFZ.

- Die readme Anleitung soll möglichen Benutzern (wie Frontend, Backend oder auch anderen Engineers) helfen, die DJI Tello Drone über den PC steuern zu können.

## **!!!!!ACHTUNG!!!!!!**

**Die Verwendung des Codes auf eigener Verantwortung**

## Verwendete Software

- [React Framework](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Tailwindcss](https://tailwindcss.com/) (framework for design)
- [Node.js](https://nodejs.org/api/dgram.html) und UDP4 sockets (für Verbindung mit dem mit dem Drohne)
- [Socket.io](https://socket.io/) WebSockets (für kommunikation zwischen Browser und backend)
- [NPM Packages](https://www.npmjs.com/)

## Verwendete Hardware

- [DJI Tello Drone](https://www.digitec.ch/Search?q=dji%20tello%20drone)

## Benutzung des Codes

### Backend

1. Als erstes muss die Drohne mit dem PC verbunden werden über Wifi.
2. cd `backend`(in eurem "IDE" Terminal geben sie das folgende Kommando)
3. `npm install`(danach installieren sie NPM packages, mehr Infos über NPM im oberen Link)
4. `npm start`(wenn die zwei Schritte ausgeführt sind, drücken sie das Kommando im Terminal, welches den backend Server startet)

### Frontend

1. cd `frontend`(in eurem "IDE" terminal geben sie das folgende Kommando)
2. `npm install`(danach installieren sie NPM packages, mehr Info über NPM im oberen Link)
3. `npm run dev`(wenn die zwei Schritte ausgeführt sind, drücken sie das Kommando im Terminal, welches den [localhost:3000](http://localhost:3000/) Server startet)

## Resources

- [Youtube tutorial von Wes Bos](https://www.youtube.com/watch?v=JzFvGf7Ywkk&t=260s)
- [Youtube tutorial von Tudor Barbulescu](https://www.youtube.com/watch?v=ShBrDWSeIgU&t=170s)

## Fehlerbehebung

- [Tello SDK User guide ](https://dl-cdn.ryzerobotics.com/downloads/Tello/Tello%20SDK%202.0%20User%20Guide.pdf)

1. Wenn Sie die WIFI-Verbindung zwischen backend Server und der Drohne verlieren, müssen Sie den Server neu starten, indem sie "rs" Kommando im Terminal eingeben.
2. Die zweite Variante (im Fall die erste schief läuft) starten sie die `IDE` neu, danach starten sie den Server nochmals mit dem Kommando `npm start`.
3. Die dritte Variante (im Fall die ersten zwei nicht laufen) führen sie ein reset der Drohne wie folgt durch: sollte der orange Knopf blinken, so drücken sie den Knopf auf dem Drohnen und halten ihn für fünf Sekunden gedrückt. Nun ist der Drohnen gestartet.
