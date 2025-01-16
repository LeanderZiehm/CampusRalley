const data = {
    "intro": "Herzlichen Willkommen bei unserer Campusralley. Schön, dass du dabei bist. Es erwarten dich 15 Fragen, die dich über unseren Campus führen. Aus deinen Antworten ergibt sich ein Lösungwort. Umso mehr richtige Antworten, umso besser! Bei richtiger Antwort kommt die Info „Richtig!“ + Input. Bei falscher Antwort kommt „Leider falsch. Probiere es nochmal“. Klick den Button „Lösungswort prüfen“ im ersten Schritt, um zu starten.",
    "questions": [
        { 
            text: "Ich stehe Mitten auf dem Campus. Ich bin kein Gebäude, aber trotzdem stabil. Wenn du hoch hinaus willst, steigst du auf mich.", 
            answer: "Treppe", 
            info: "Richtig! Wenn du Lust hast, stelle oder setze dich auf unsere Campustreppe und mach ein Erinnerungsfoto – Cheeeese 😊"
        },
        { 
            text: "Ich bin ein Gebäude, in dem es meistens leise ist. Wenn ihr lernen müsst, braucht ihr das, was in mir wohnt. Gehe in das Gebäude. Dort befindet sich ein Wasserspender. Welche Nummer steht darauf? Schreibe die Zahl aus!", 
            answer: "Sechsundsechzig", 
            info: "Richtig! Die Bibliothek hat in der Prüfungszeit 24h für unsere Studierende geöffnet. Erstemester-Studierende machen eine BIBB-Schulung. Selbstverständlich hast du auch Zugriff auf unendlich viele E-Books und Zeitschriften in digitaler Form."
        },
        { 
            text: "Unsere Gebäude sind nach dem Alphabet „benannt“. Dieses Gebäude ist das letzte im THD „ABC“. Welches Tier befindet sich im Gebäude?", 
            answer: "Eidechse", 
            info: "Richtig!"
        },
        { 
            text: "Wie viele graue Gebäude stehen auf dem Neucampus? Schreibe die Zahl aus.", 
            answer: "Fünf", 
            info: "Richtig! 1997 wurde der „Altcampus“ fertiggestellt (rosafarbene Gebäude). 2014 wurden die neuen Gebäude auf dem „Neucampus“ bezogen."
        },
        { 
            text: "Dieses Gebäude ist keine Fakultät. Es gibt nur Vorlesungssäle, in denen unterrichtet wird. In dem Gebäude befindet sich eine Bildergalerie. Schaue dir die Bilder genau an. Worin sitzt Dr. Wolfgang Heubisch?", 
            answer: "Rennauto", 
            info: "Richtig! Um genau zu sein handelt es sich dabei, um das Fahrzeug unseres Formular-Studentenvereins „Fast Forest“. Bei uns kannst du Mitglied von rund 20 Vereinen sein. Und nicht nur das. Für alle musisch und künstlerisch Interessierten gibt es eine THD Bigband, einen THD Chor und einen THD Theaterverein. Genug Möglichkeiten also, dich bei uns zu vernetzen! Und wenn du Bewegung brauchst, machst du bei unseren Hochschulsportangeboten mit. Von Yoga bis Rudern, Schwimmen und Fußball ist einiges dabei!"
        },
        { 
            text: "Gehe in das Gebäude B. Links befindet sich das Studienzentrum. Daneben direkt ein großer Hörsaal. Dieser hat einen Namen. Wie lautet der Vorname?", 
            answer: "Josef", 
            info: "Richtig! Die Mitarbeiter des Studienzentrums kümmern sich um die Bewerbungen und Zulassungen für einen Studiengang. Insgesamt bearbeiten sie ca. 30.000 Bewerbungen im Jahr!"
        },
        { 
            text: "Was befindet sich im Holzgebäude auf dem Campus?", 
            answer: "Campusstore", 
            info: "Richtig! Der Campusstore wurde zum 2024 zum 30. Jährigen Jubiläum der THD eröffnet. Nebenan befindet sich die Begegnungsstätte für unsere Studierenden."
        },
        { 
            text: "In welchem Gebäude befindet sich der Studiengang Medientechnik?", 
            answer: "J", 
            info: "Richtig! Es gibt hier eine Besonderheit: Die Medientechniker haben ihr ganz eigenes Gebäude, weil sie viel Platz benötigen. Ein eigenes Fernsehstudio, einige Schnitträume, Audiolabore und ein schallisolierter Raum finden darin Platz."
        },
        { 
            text: "Mittagsgerichte und Snacks gibt es in diesem Gebäude. In einer Firma sagt man dazu Kantine, an der Hochschule…?", 
            answer: "Mensa", 
            info: "Richtig! Wir zählen zu der am schnellsten wachsenden Hochschule Bayerns. 1994 war der Startschuss mit 93 Studierenden im ersten Semester. 30 Jahre später sind es insgesamt 9000 Studierende!"
        },
        { 
            text: "Kopieren, Drucken, Binden – In diesem Laden kannst du das machen. (Tipp: Schau in den Lageplan)", 
            answer: "Copyshop", 
            info: "Richtig! Unser Copyshop befindet sich ganz bequem erreichbar direkt am Campus."
        },
        { 
            text: "Wie viele Säulen stehen am Eingang zum THD Campus an der Hauptstraße? Schreibe die Zahl aus!", 
            answer: "Zehn", 
            info: "Richtig!"
        }
    ],
    "finalText":"Herzlichen Glückwunsch du hast [REPLACE_1] Fragen richtig beantwortet.",
    "finalText2":"Herzlichen Glückwunsch du hast [REPLACE_1] Fragen richtig beantwortet. Folgende Buchstaben hast du für das Lösungswort freigeschaltet: [REPLACE_2] Bringe die Buchstaben in die richtige Reihenfolge. Wie lautet dein Lösungswort? ",
    "solutionWords": [
        "Treppe", "Sechsundsechzig", "Eidechse", "Fünf", "Rennauto", "Josef", "Campusstore", "J", "Mensa", "Copyshop", "Zehn"
    ]
};
