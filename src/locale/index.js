/* eslint-disable prettier/prettier */
import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
    en: {
      switchLocale: {
        switch: "Română"
      },
      error: {
        e404: "Oops! It seems like the page you are looking for can't be found. Try going back to the previous page or access the menu for more information."
      },
      navigation: {
        home: "Home",
        about: "About",
        portfolio: "Portfolio",
        contact: "Contact"
      },
      mainHeader: {
        hello: "Hello there!",
        helloText: "I am Bogdan. Nice to meet you! As a recent graduate of Web Development and Multimedia Design, I am looking for a full-time job as a Front-End Developer or Web Designer. Designer. I can build modern web applications, handle and develop user-friendly web interfaces and create graphic, visual and web designs suitable for every type of company.",
        helloButton: "Check my portfolio"
      },
      about: {
        title: "About Bogdan",
        description: "An enthusiast of new technologies, web design and development, football and sneaker culture. Hard worker, a great team player and always ready for new challenges. Let me tell you more about me, my goals and my short-term and long-term objectives."
      },
      introduction: {
        title: "Get to know me better",
        text: "An enthusiast of new technologies, web design and development, football and sneaker culture. Hard worker, a great team player and always ready for new challenges. Let me tell you more about me, my goals and my short-term and long-term objectives.",
        textButton: "Read more"
      },
      education: {
        titleSection: "Education",
        typeWD: "Bachelor's Degree",
        typeMD: "Academic Degree",
        titleWD: "Web Development",
        titleMD: "Multimedia Design",
        name: "University College of Northern Denmark",
        periodWD: "September 2018 - February 2020",
        periodMD: "September 2016 - June 2018",
        location: "Aalborg, Denmark",
      },
      experience: {
        titleSection: "Experience in the field",
        otherExperienceTitle: "Other workplaces",
        companyoung: {
          companyName: "CompanYoung",
          jobTitle: "Assistant Web Developer",
          jobType: "Internship",
          period: "August 2019 - December 2019",
          location: "Aalborg, Denmark",
        },
        ronaldo: {
          companyName: "Ronaldo.com",
          jobTitle: "Front-End Developer",
          jobType: "Part-time",
          period: "October 2018 - February 2019",
          location: "Aalborg, Denmark",
        },
        nomore: {
          companyName: "No-More ApS",
          jobTitle: "Web Developer",
          jobType: "Internship",
          period: "January 2018 - April 2018",
          location: "Copenhagen, Denmark",
        },
        elmariachi: {
          companyName: "El Mariachi Gastro Pub",
          jobTitle: "Kitchen Assistant",
          jobType: " ",
          period: "August 2018 - January 2020",
          location: "Aalborg, Denmark",
        },
        andreiDistribution: {
          companyName: "Andrei Distribution",
          jobTitle: "Delivery man",
          jobType: " ",
          period: "September 2017 - January 2018",
          location: "Aalborg, Denmark",
        },
        bibliotecaMedgidia: {
          companyName: "Northern Library of Medgidia",
          jobTitle: "Volunteer",
          jobType: " ",
          period: "September 2012 - June 2016",
          location: "Medgidia, Romania",
        },
      },
      portfolio: {
        backTitle: "Back to the projects",
        backDescription: "You have reached the end of this project. Go back to the portfolio overview and check out the other projects.",
        backButtonText: "Take me back",
        latest: "Latest projects",
        buttonLatest: "See all projects",
        descriptionLatest: "Down below you can see all the projects that I have made in the last period. You can check all of my projects by simply clicking the button from the right side.",
        title: "Portfolio",
        description: "Here you can see in detail all of my work done in the past years. This section includes work that I have done during the studies, internships and other workplaces.",
        elMariachi: {
          title: "El Mariachi Mexican Gastro Pub",
          description: "Web Application made for El Mariachi Mexican Gastro Pub based in Aalborg. The main goal of the application is to ease the kitchen management problems encountered by the employees.",
          buttonText: "View project",
          concept: {
            title: "About the project",
            description: "The client is looking for a web-based solution, preferably a website that is focused mostly on phone and tablet, that can help the kitchen staff managing the work more easily and have a better overview of all the important tasks. Currently, the kitchen is writing down on paper every day a list that contains the current available stock of the products. Right now, is hard to keep track of all the products due to the new employees and the variety of products. El Mariachi considers that an application that can contain all of this information and that can be updated by the staff will be a big improvement for them. Since all the checking lists and to do lists are written down on a piece of paper, the web application should include them as functionalities.",
            technologies: "Used technologies",
            technologiesDescription: "This project is categorized as a Progressive Web Application. The product was built using VueJS, Firebase and TailwindCSS. By clicking the button you can access the source code for this project available on GitHub.", 
            sourceButtonText: "Access GitHub",
          },
        },
        noMore: {
          title: "No-More ApS",
          description: "Website created for No-More ApS based in Copenhagen. The entire website was developed during my first internship using Laravel and Tailwind CSS.",
          buttonText: "Go to website",
        },
        biblioVoluntarii: {
          title: "BiblioVoluntarii NGO",
          description: "BiblioVoluntarii are a non-governmental organization that activate for the Northern Library in Medgidia, Romania.",
          buttonText: "See more",
        },
        bibliotecaMedgidia: {
          title: "Northern Library of Medgidia",
          description: "The library has an important role in the local community. It is a socially committed public library from the northern area of Medgidia, having a rich cultural tradition of hosting events that help the young and elders to develop themselves in the modern environment.",
          buttonText: "Go to website",
        },
        companyoung: {
          title: "CompanYoung ",
          description: "User-friendly interface created for CompanYoung JobAPI during my internship as Assistant Web Developer. The design was build using Adobe XD and for the development was used WordPress, PHP and Bootstrap.",
          buttonText: "See more"
        },
        fryd: {
          title: "1000FRYD",
          description: "1000FRYD is powered by volunteer activists. It is Aalborg's user-managed cultural center. 1000FRYD forms the framework for a wide variety of activities. Additionally 1000FRYD is a bar and a cafe that also provides training rooms, study rooms, studio and more.",
          buttonText: "Go to website"
        },
        dizzyapp: {
          title: "Dizzyapp",
          description: "Web Application made for tracking the patients dizziness level and record their medical record, exercises and treatment.",
          buttonText: "See more",
          concept: {
            title: "About the project",
            description: "Many citizens experienced, at least once, a problem with dizziness disorders. A part of these problems can be treated by a physical therapist. The assignment is to develop a digital application that can help the patients in their life. The concept will be accessible as a Progressive Web Application in order to facilitate the work of both the therapist and citizen, but the data entered in it, will be available for research.",
            technologies: "Used technologies",
            technologiesDescription: "This project is categorized as a Progressive Web Application. The product was built using Angular, Firebase and TailwindCSS. By clicking the button you can access the source code for this project available on GitHub.", 
            sourceButtonText: "Access GitHub",
          },
        },
        rollUpPoster: {
          title: "Roll-up Poster",
          description: "The poster contains information about the projects that Northern Library of Medgidia and BiblioVoluntarii NGO organized with the goal of informing the citizens about how they can prevent the breast cancer.",
          buttonText: "See more"
        },
        seiersBitters: {
          title: "Seiers Scandinavian Craft Bitters",
          description: "Seiers is a company from Aalborg which is known for producing different bitter flavours for cocktails.",
          buttonText: "See more"
        },
        cyberboxx: {
          title: "Cyberboxx",
          description: "Cyberbox is a progressive web app designed to cover basic student needs such as file storing and sharing, quick note-taking and custom alarms & reminders.",
          buttonText: "See more"
        },
        pende: {
          title: "Pendë",
          description: "Pende is a web-based integrated development environment for C/C++ built to allow anyone to store, run, debug and format their code from any device.",
          buttonText: "See more"
        },
      },
      contact: {
        title: "Contact",
        description: "Interested in working together? Let's have a little chat. If you don't find what you are looking for, feel free to contact me via email or phone and I will be happy to assist.",
        mailTitle: "Send me an e-mail",
        mailDescription: "Send me a message right now and let's have a little chat!",
        mailButtonText: "Send e-mail",
        phoneTitle: "Give me a call",
        phoneDescription: "If you are comfortable talking over the phone then I am too!",
        phoneButtonText: "Call me"
      },
      footer: {
        resumeTitle: "Look over my resume",
        resumeText:
          "All the information presented on the website can be found in a summarized version right here. Check it out and let me know if you like it.",
        resumeTextButton: "View resume",
        footerTitle: "Get in touch",
        footerText:
          "You reached the bottom fo the page. If you don't find what you are looking for, feel free to contact me via email or phone and I will be happy to assist.",
        footerNavigation: "Quick access",
        footerSocial: "Follow me",
        footerCopyright: "Copyright © 2020 Bogdan Bologa. All rights reserved."
      },
      skills: {
        title: "Skills & Proficiency",
        titleWeb: "Web Development",
        descriptionWeb: "Regarding the development part, I like to work with new technologies and always try the newest things. I consider that writing a clean and understandable code and meeting up the deadlines are the most crucial factors while working in a development team. Below you can visualize all the technologies that I have worked with and the ones that I am trying to learn at the moment.",
        titleDesign: "Design",
        descriptionDesign: " I love good looking, easy to use, and clear user interfaces. They are just beautiful. This is why I am trying to create the best possible designs that can fulfil the users needs and demands. While most of my work is focused around interactive projects, I do business cards, logo design and other printed materials from time to time.",
        titleWork: "That's all?",
        descriptionWork: "Take a look over all of my project done during my studies and previous workplaces.",
        buttonText: "View projects",
        advanced: "Advanced",
        proficient: "Proficient",
        developing: "Developing",
      }, 
      gallery: {
        title: "Gallery",
        description: "Down below you can access the photo gallery of the project. Click on one of the images in order to zoom in and have a better overview of the pictures.",
      },
      alert: {
        galleryInfo: "Some images might not be displayed correctly. For a better overview of the images, use the desktop version or open them in another tab.",
        available: "At this moment I am available for any business inquiries. Don't hesitate to contact me through phone or e-mail if you want to chat."

      }
    },


    ro: {
      switchLocale: {
        switch: "English"
      },
      error: {
        e404: "Oops! Nu am putut găsi pagina pe care o căutai. Încearcă să navighezi către pagina precedentă sau accesează o nouă pagină din meniu."
      },
      navigation: {
        home: "Acasă",
        about: "Despre",
        portfolio: "Portofoliu",
        contact: "Contact"
      },
      mainHeader: {
        hello: "Salut!",
        helloText: "Numele meu este Bogdan Bologa. Încântat de cunoștință! Recent am terminat studiile la University College Northern Denmark și sunt în căutarea unui loc de muncă ca Front-End Developer sau Web Designer. Pot să construiesc aplicații web moderne, interfețe dinamice pentru fiecare tip de utilizator și pot realiza design grafic potrivit pentru orice persoană sau companie.",
        helloButton: "Vezi portofoliu"
      },
      about: {
        title: "Despre Bogdan",
        description: "Un pasionat al calculatoarelor si al design-ului. Iubesc fotbalul și colecționez adidași. Sunt o persoană muncitoare, îmi place să lucrez în echipă și sunt mereu pregătit pentru noi provocări."
      },
      introduction: {
        title: "Află mai multe despre mine",
        text: "Un pasionat al calculatoarelor si al design-ului. Iubesc fotbalul și colecționez adidași. Sunt o persoană muncitoare, îmi place să lucrez în echipă și sunt mereu pregătit pentru noi provocări.",
        textButton: "Citește mai mult"
      },
      education: {
        titleSection: "Educație",
        typeWD: "Licență",
        typeMD: "Diplomă Academică",
        titleWD: "Web Development",
        titleMD: "Multimedia Design",
        name: "University College of Northern Denmark",
        periodWD: "Septembrie 2018 - Februarie 2020",
        periodMD: "Septembrie 2016 - Iunie 2018",
        location: "Aalborg, Denmark",
},
      experience: {
        titleSection: "Experiență în domeniu",
        otherExperienceTitle: "Alte locuri de muncă",
        companyoung: {
          companyName: "CompanYoung",
          jobTitle: "Asistent Web Developer",
          jobType: "Intern",
          period: "August 2019 - Decembrie 2019",
          location: "Aalborg, Danemarca",
        },
        ronaldo: {
          companyName: "Ronaldo.com",
          jobTitle: "Front-End Developer",
          jobType: "Part-time",
          period: "Octombrie 2018 - Februarie 2019",
          location: "Aalborg, Danemarca",
        },
        nomore: {
          companyName: "No-More ApS",
          jobTitle: "Web Developer",
          jobType: "Intern",
          period: "Ianuarie 2018 - Aprilie 2018",
          location: "Copenhaga, Danemarca",
        },
        elmariachi: {
          companyName: "El Mariachi Gastro Pub",
          jobTitle: "Ajutor de bucătar",
          jobType: " ",
          period: "August 2018 - Ianuarie 2020",
          location: "Aalborg, Danemarca",
        },
        andreiDistribution: {
          companyName: "Andrei Distribution",
          jobTitle: "Curier",
          jobType: " ",
          period: "Septembrie 2017 - Ianuarie 2018",
          location: "Aalborg, Danemarca",
        },
        bibliotecaMedgidia: {
          companyName: "Biblioteca Medgidia - Filiala Nord",
          jobTitle: "Voluntar",
          jobType: " ",
          period: "Septembrie 2012 - Iunie 2016",
          location: "Medgidia, România",
        },
      },
      portfolio: {
        backTitle: "Înapoi la proiecte",
        backDescription: "Ai ajuns la sfârșitul acestui proiect. Du-te înapoi la prezentarea generală a portofoliului și uită-te peste celelalte proiecte.",
        backButtonText: "Du-mă înapoi",
        latest: "Ultimele proiecte",
        buttonLatest: "Vezi toate proiectele",
        descriptionLatest : "Mai jos sunt descrise câteva dintre proiectele la care am lucrat în ultima perioadă. Poți vedea toate proiectele accesând butonul de alături.",
        title: "Portofoliu",
        description: "Aici poți să vezi toate proiectele mele în detaliu. Această parte include proiecte care au fost dezolvate în timpul facultății, stagiilor de pregătire și alte locuri de muncă. ",
        elMariachi: {
          title: "El Mariachi Mexican Gastro Pub",
          description: "Aplicație Web realizată pentru El Mariachi Gastro Pub din Aalborg, Danemarca. Platforma a fost creată cu scopul de a ușura probleme administrative din bucătăria restaurantului. ",
          buttonText: "Vezi proiect",
          concept: {
            title: "Despre proiect",
            description: "Restaurantul are nevoie de o soluție web, de preferabil un website, care se poate folosi pe telefon și pe tabletă. Acest website este creat cu scopul de a ajuta personalul din bucătăria restaurantului pentru a ușura munca angajaților și pentru a avea o mai bună vizualizare a tuturor alimentelor disponibile. În momentul de față, angajații din bucătărie scriu în fiecare zi pe hârtie stocul de alimente rămas pentru ziua următoare. Din acest motiv este foarte greu de ținut evidența tuturor produselor din cauza faptului că restaurantul își schimbă destul de des personalul, iar produsele sunt în număr foarte mare. De asemenea, angajații au diferite liste de completat înainte și după terminarea programului.",
            technologies: "Tehnologii folosite",
            technologiesDescription: "Acest proiect este categorizat ca o aplicație web progresivă. Produsul a fost construit folosind VueJS, Firebase și TailwindCSS. Mai jos puteți accesa codul sursă al acestui proiect, disponibil pe profilul meu de GitHub.",
            sourceButtonText: "Accesează GitHub",
          },
        },
        noMore: {
          title: "No-More ApS",
          description: "Website creat pentru No-More ApS din Copenhaga în timpul primului meu stagiu de pregătire din cadrul facultății de Multimedia Design. Această pagină web a fost dezvoltată folosind Laravel și Tailwind CSS.",
          buttonText: "Vezi website",
        },
        biblioVoluntarii: {
          title: "BiblioVoluntarii ONG",
          description: "BiblioVoluntarii reprezintă o organizație non-guvernamentală din cadrul Bibliotecii Municipale Medgidia - Filiala Nord.",
          buttonText: "Vezi mai mult",
        },
        bibliotecaMedgidia: {
          title: "Biblioteca Medgidia - Filiala Nord",
          description: "Biblioteca are un rol foarte important în comunitatea locală. Este o bibliotecă din zona de nord a orașului Medgidia care organizează diferite activități culturale și sociale pentru toate categoriile de vârstă.",
          buttonText: "Vezi website",
        },
        companyoung: {
          title: "CompanYoung",
          description: "Interfață creată pentru CompanYoung în timpul celui de al doilea stagiu de pregătire din cadrul facultății de Web Development. Interfața a fost creată în Adobe XD și dezvoltată în WordPress, PHP și Bootstrap.",
          buttonText: "Vezi proiect"
        },
        fryd: {
          title: "1000FRYD",
          description: "1000FRYD este un loc administrat de voluntari. Localul se află în inima orașului Aalborg și este cunoscut ca fiind un centru cultural pentru tineri unde se desfășoară diferite activități și concerte de toate genurile.",
          buttonText: "Vezi website"
        },
        dizzyapp: {
          title: "Dizzyapp",
          description: "Aplicație Web realizată cu scopul de a urmări nivelul de amețeală al pacienților și pentru a înregistra consulațiile medicale, exercițiile și tratamentul acestora.",
          buttonText: "Vezi proiect",
          concept: {
            title: "Despre proiect",
            description: "Mulți cetățeni au experimentat, cel puțin odată în viață, probleme medicale legate de amețeală. Majoritatea acestor probleme pot fi tratate de către un fizioterapeut. Scopul acestui proiect este să se dezvolte o aplicație digitală care să ajute pacienții în viața de zi cu zi în legătură cu aceste probleme. Conceptul este dezolvat ca o aplicație web progresivă, unde datele introduse de către pacienți sunt analizate de către cercetători din domeniu.",
            technologies: "Tehnologii folosite",
            technologiesDescription: "Acest proiect este categorizat ca o aplicație web progresivă. Produsul a fost construit folosind Angular, Firebase și TailwindCSS. Mai jos puteți accesa codul sursă al acestui proiect, disponibil pe profilul meu de GitHub.",
            sourceButtonText: "Accesează GitHub",
          },
        },
        rollUpPoster: {
          title: "Roll-up Poster",
          description: "Poster realizat pentru Biblioteca Medgidia - Filiala Nord și BiblioVoluntarii ONG. Posterul conține informații despre proiectele care au fost organizate cu scopul de a informa cetățenii cu privire la prevenirea cancerului la sân.",
          buttonText: "Vezi mai mult"
        },
        seiersBitters: {
          title: "Seiers Scandinavian Craft Bitters",
          description: "Seiers este o companie din Aalborg care produce diferite arome de bittere pentru cocktailuri.",
          buttonText: "Vezi mai mult"
        },
        cyberboxx: {
          title: "Cyberboxx",
          description: "Cyberboxx este o aplicație web progresivă realizată pentru a acoperi necesitățile de bază ale unui student. De exemplu, încărcarea și distribuirea de fișiere, posibilitatea de a lua notițe și de a seta alarme.",
          buttonText: "See more"
        },
        pende: {
          title: "Pendë",
          description: "Pende este un soluție web pentru C/C++ care permite accesul la stocare, depanare, rulare și formatare a codului de pe orice dispozitiv.",
          buttonText: "See more"
        },
      },
      contact: {
        title: "Contact",
        description: "Ești interesat să lucrăm împreună? Contactează-mă și hai să punem țara la cale! Mă poți contacta prin e-mail sau telefon.",
        mailTitle: "Trimite un e-mail",
        mailDescription: "Încerc să răspund cât mai repede posibil solicitării dumneavoastră.",
        mailButtonText: "Trimite mesaj",
        phoneTitle: "Contactează-mă telefonic",
        phoneDescription: "Pentru persoanele care sunt mai confortabile atunci când vorbesc la telefon.",
        phoneButtonText: "Sună-mă",
      },
      footer: {
        resumeTitle: "Uită-te pe CV-ul meu",
        resumeText:
          "Toate informațiile prezentate pe această pagină se pot găsi intr-o variantă sintetizată. Uită-te prin el și spune-mi dacă-ți place.",
        resumeTextButton: "Descarcă CV",
        footerTitle: "Contactează-mă",
        footerText:"Din păcate, aici se termină pagina. Dacă nu ai găsit ceea ce căutai, contactează-mă prin e-mail sau telefon. Încerc să răspund cât mai repede posibil.",
        footerNavigation: "Acces rapid",
        footerSocial: "Urmărește-mă",
        footerCopyright:
          "Copyright © 2020 Bogdan Bologa. Toate drepturile rezervate."
      },
      skills: {
        title: "Abilități & Experiență",
        titleWeb: "Web Development",
        descriptionWeb: "Îmi place să lucrez cu tehnologii noi, iar atunci când am posibilitatea încerc să învăț cum să folosesc cele mai noi metode de implementare. Consider că, scrierea unui cod cât mai inteligibil și curat, livrarea cerințelor în timpul prestabilit și munca colectivă sunt unele dintre cele mai importante aspecte privind dezvoltarea unei aplicații web. Mai jos puteți vedea toate tehnologiile cu care sunt familiar și pe care le folosesc.",
        titleDesign: "Design",
        descriptionDesign: "Iubesc interfețele digitale care arată bine, care sunt ușor de folosit și de navigat. Pot spune că sunt minunate. Din acest motiv încerc să construiesc cel mai bun design posibil care poate să mulțumească orice categorie de vizitatori. În timp ce majoritate din munca pe care o prestez este în jurul proiectelor interactive, îmi găsesc timp să realizez și alte materiale precum logo-uri, design grafic, cărți de vizită și diferite produse care se pot imprima.",
        titleWork: "Asta-i tot?",
        descriptionWork: "Aruncă un ochi peste toate proiectele mele realizate până în prezent.",
        buttonText: "Vezi portofoliu",
        advanced: "Avansat",
        proficient: "Experimentat",
        developing: "Începător",
      },
      gallery: {
        title: "Galerie",
        description: "Mai jos puteți accesa galeria foto a proiectului. Apăsați pe oricare dintre imagini pentru a mări fotografiile și pentru o mai bună vizualizare.",
      },
      alert: {
        galleryInfo: "Câteva imagini nu sunt afișate corect. Pentru o vizualizare mai bună a imaginilor, vă rugăm să folosiți varianta desktop sau să le deschideți într-o fereastră nouă.",
        available: "În acest moment sunt deschis oricărei oferte de muncă. Nu ezita să ma contactezi prin telefon sau e-mail.",
      }
      
    }
  };

const i18n = new VueI18n({
  locale: "en", // set locale
  messages // set locale messages
});

export default i18n;
