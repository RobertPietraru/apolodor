export interface Guest {
    photo: string,
    name: string,
    role: 'writer' | 'illustrator' | 'singer' | 'moderator',
    specialGuest: boolean,
    content: {
        ro: string,
        en: string,
    },
}

export const guests = {
    adinaPopescu: {
        photo: "/assets/people/adina_popescu.jpg",
        name: "Adina Popescu",
        role: 'writer',
        specialGuest: true,
        content: {
            ro: `# Adina Popescu

S-a născut la 10 septembrie 1978, în Bucureşti. Prima ei carte pentru copii – „Doar un zbor în jurul lumii", a apărut în 1999, la Editura Compania. În 2015, a apărut „Povestiri de pe Calea Moșilor", o carte inițial destinată adulților, dar în care s-au răgăsit și copiii. Trilogia fantastică „O istorie secretă a Țării Vampirilor" a câștigat concursul național Trofeul Arthur. A scris scenarii pentru câteva cărți de bandă desenată la care a colaborat cu artistul Alexandru Ciubotariu. În prezent, Adina Popescu este redactor la revista „Dilema", predă cursuri de scriere creativă și face filme documentare. Ultima carte publicată, „Vine vacanța cu trenul din Franța" (2022) este o radiografie a vacanțelor de familie din România socialistă a anilor 80. 

## De ce am scris "Povestiri de pe Calea Moșilor"?

În primul rînd pentru a-mi documenta și recupera o parte din copilărie care s-a petrecut în anii 80, în plin regim comunist. Îmi place munca asta de recuperare a unui autor, mai ales când e vorba de istorie trăită. M-a interesat acel comunism "domestic" – așa l-am numit eu, care nu se predă la școală. Inițial am scris cartea pentru cei din generația mea, însă m-am bucurat când am descoperit că se citește în familie, copii împreună cu părinți. Asta era și ideea, să creeze o punte de comunicare între generații.`,
            en: `# Adina Popescu

Born on September 10, 1978, in Bucharest. Her first children's book – "Just a Flight Around the World", was published in 1999 by Compania Publishing House. In 2015, "Stories from Moșilor Street" was published, a book initially intended for adults but which also resonated with children. The fantastic trilogy "A Secret History of the Vampire Country" won the national Arthur Trophy competition. She wrote scripts for several comic books in collaboration with artist Alexandru Ciubotariu. Currently, Adina Popescu is an editor at "Dilema" magazine, teaches creative writing courses, and makes documentary films. Her latest published book, "Vacation Comes by Train from France" (2022) is a radiography of family vacations in socialist Romania of the 1980s.

## Why did I write "Stories from Moșilor Street"?

First of all, to document and recover a part of my childhood that took place in the 80s, during the communist regime. I like this work of recovering an author, especially when it comes to lived history. I was interested in that "domestic" communism – as I called it, which isn't taught in school. Initially, I wrote the book for those of my generation, but I was happy to discover that it's read in families, children together with parents. That was the idea, to create a bridge of communication between generations.`
        },
    } satisfies Guest,
    adinaRosetti: {
        specialGuest: true,
        photo: "/assets/people/adina_rosetti.jpg",
        name: "Adina Rosetti",
        role: 'writer',
        content: {
            ro: `# Adina Rosetti

După ce a debutat cu literatură pentru adulți, Adina Rosetti a descoperit că cel mai mult îi place să inventeze povești pentru cei mici. A publicat 13 cărți pentru copii, multe dintre ele premiate și dramatizate. „Domnișoara Poimâine", unul dintre personajele sale cele mai cunoscute, se plimbă prin mai multe povești, pentru diferite vârste; câteodată e o fetiță curioasă și răsfățată („Domnișoara Poimâine și joaca de-a Timpul", „Crăciunul Domnișoarei Poimâine"), alteori o adolescentă rebelă (trilogia „Cronicile Domnișoarei Poimâine").

Adina are o pasiune pentru vrăjitoare, dragoni și spiriduși, așa că a scris despre toate acestea în „De ce zboară vrăjitoarele pe cozi de mătură?" și „De ce și-a pierdut balaurul tableta?". Experiența atelierelor de storytelling cu un grup de copii de etnie romă s-a transformat în „Povestea Kendamei Pierdute", o poveste despre magia prieteniei care poate schimba lumea, premiată de Uniunea Scriitorilor din România.

Printre cele mai recente apariții ale sale sunt „Întâiul meu cuvânt de pionier", „O istorie cu gust de kiwi" și romanul pentru adolescenți „Ultima provocare" (Ed. Arthur).

Adina Rosetti predă cursuri de storytelling și scriere creativă și este membru fondator și președinte al Asociației De Basm.`,
            en: `# Adina Rosetti

After debuting with adult literature, Adina Rosetti discovered that she most enjoys inventing stories for children. She has published 13 children's books, many of them awarded and dramatized. "Miss Tomorrow", one of her most well-known characters, appears in several stories for different ages; sometimes she's a curious and spoiled little girl ("Miss Tomorrow and the Time Game", "Miss Tomorrow's Christmas"), other times a rebellious teenager (the "Chronicles of Miss Tomorrow" trilogy).

Adina has a passion for witches, dragons, and sprites, so she wrote about all these in "Why Do Witches Fly on Broomsticks?" and "Why Did the Dragon Lose His Tablet?". The experience of storytelling workshops with a group of Roma children transformed into "The Story of the Lost Kendama", a tale about the magic of friendship that can change the world, awarded by the Romanian Writers' Union.

Among her most recent publications are "My First Pioneer Word", "A Kiwi-Flavored History" and the young adult novel "The Last Challenge" (Arthur Publishing House).

Adina Rosetti teaches storytelling and creative writing courses and is a founding member and president of the De Basm Association.`
        }
    } satisfies Guest,
    alexMoldovan: {
        photo: "/assets/people/alex_moldovan.jpg",
        name: "Alex Moldovan",
        specialGuest: true,
        role: 'writer',
        content: {
            ro: `# Alex Moldovan

> „Îmi doream de mult să scriu o carte alertă, cu umor și situații incredibile, care să poată fi citită într-o singură după-amiază. 'Dani G. și castelul celor trei măgăruși' e și o încercare de a mă îndepărta de universul 'Olguța', în care am locuit prea mult, ca să nu mai zic că mă plictisesc repede, deci am nevoie mereu de noi provocări. Iar faptul că ilustrațiile lui Andrei Măceșanu completează textul atât de bine (thank you, man!) este o întâmplare miraculoasă."
>
> — Alex Moldovan

Alex Moldovan e scriitor, traducător, dramaturg și scenarist. A devenit cunoscut cu seria „Olguța", a scris romanul „Casa" pentru adolescenți, iar cea mai recentă carte a lui pentru copii e „Dani G. și castelul celor trei măgăruși" (toate, apărute la Editura Arthur).

Scrie pentru revista „Familia" și are un newsletter cu recomandări săptămânale de cărți pentru copii. A câștigat premiul Uniunii Scriitorilor din România pentru Literatură pentru copii și tineret pe anul 2024.`,
            en: `# Alex Moldovan

> "I've long wanted to write a fast-paced book, with humor and incredible situations, that could be read in a single afternoon. 'Dani G. and the Castle of the Three Little Donkeys' is also an attempt to move away from the 'Olguța' universe, where I've lived too long, not to mention that I get bored quickly, so I always need new challenges. And the fact that Andrei Măceșanu's illustrations complement the text so well (thank you, man!) is a miraculous coincidence."
>
> — Alex Moldovan

Alex Moldovan is a writer, translator, playwright, and screenwriter. He became known for the "Olguța" series, wrote the novel "The House" for teenagers, and his most recent children's book is "Dani G. and the Castle of the Three Little Donkeys" (all published by Arthur Publishing House).

He writes for "Familia" magazine and has a newsletter with weekly children's book recommendations. He won the Romanian Writers' Union Award for Children's and Youth Literature in 2024.`
        }
    } satisfies Guest,
    biancaSimionescu: {
        photo: "/assets/people/bianca_simionescu.jpg",
        specialGuest: true,
        name: "Bianca Simionescu",
        role: 'illustrator',
        content: {
            ro: `# Bianca Simionescu

Bianca Simionescu a absolvit Universitatea de Arte „George Enescu" din Iaşi, specializarea Grafică foto-video. A obținut titlul de doctor ȋn arte vizuale cu teza „Ilustrația digitală — interconectarea formelor de artă computerizată". Ȋn prezent, este cadru didactic la Universitatea Națională de Arte „George Enescu", Iași, Facultatea de Arte Vizuale și Design, specializarea Arte Plastice – grafică.

## Premii și Distincții

- 2008: Premiul pentru grafică - „Atelier 35", World Trade Center, UAP, Iaşi
- 2024: Medalia de argint — Euroinvent, European Visual Art Exhibition, Iași

Activitatea sa ȋn zona graficii publicitare se extinde pe mai mult de 17 de ani și conține colaborări cu numeroase edituri și instituții pentru materiale publicitare precum postere, ilustrații pentru coperți.`,
            en: `# Bianca Simionescu

Bianca Simionescu graduated from the "George Enescu" University of Arts in Iași, specializing in Photo-Video Graphics. She obtained her Ph.D. in Visual Arts with the thesis "Digital Illustration — The Interconnection of Computerized Art Forms". Currently, she is a teacher at the "George Enescu" National University of Arts, Iași, Faculty of Visual Arts and Design, specializing in Fine Arts – graphics.

## Awards and Distinctions

- 2008: Graphics Award - "Atelier 35", World Trade Center, UAP, Iași
- 2024: Silver Medal — Euroinvent, European Visual Art Exhibition, Iași

Her activity in advertising graphics extends over more than 17 years and includes collaborations with numerous publishing houses and institutions for advertising materials such as posters and cover illustrations.`
        }
    } satisfies Guest,
    danUngureanu: {
        photo: "/assets/people/dan_ungureanu.jpg",
        specialGuest: true,
        name: "Dan Ungureanu",
        role: 'writer',
        content: {
            ro: `# Dan Ungureanu

Dan Ungureanu a început să deseneze la vârsta la care încep toți copiii și nu s-a mai oprit de atunci. În 2013 s-a înscris la un masterat în ilustrația de carte la Cambridge School of Art. Și, în timp ce studia arta de a ilustra cărți pentru copii, și-a dat seama că e pregătit să scrie. Așa a apărut „Nara and the Island" (Nara și insula), carte nominalizată la Medalia Kate Greenaway și câștigătoare a unei mențiuni la V&A Illustration Prize.

La începutul anului 2016, a făcut prima călătorie în jurul lumii cu pinguinul Apolodor, ilustrând „Cartea cu Apolodor", de Gellu Naum, iar în 2017 a avut creioanele pregătite pentru a însemna fiecare pățanie a pinguinului și a prietenilor lui, pentru „A doua carte cu Apolodor". În același an a publicat „Spune-mi Eli", un roman grafic despre viața în orfelinat, bazat pe biografia Elisabetei Moldovan.

În 2020, „Descoperim cu Apolodor, în Deltă, păsările-n zbor", de Florin Bican, cu ilustrațiile lui Dan Ungureanu, deschide la Editura Arthur colecția Apolodor Explorator. În aceeași colecție au apărut „Hai pe Lună împreună", „Apolodor pe crestele Carpaților" și cea mai recentă, „Descoperim cu Apolodor furnicile și lumea lor". Ultimele două au fost nominalizate la Premiile Cărturino, la categoria Carte ilustrată pentru copii, în 2024 și 2025.

„Vreau să fiu invizibil", carte apărută în 2024, spune povestea lui Toma, un băiat care își dorește să fie lăsat în pace de fratele mai mic, iar invizibilitatea pare singura soluție. Volumul a primit premiul Cărturino 2025 pentru Carte ilustrată pentru copii a anului.

## Cum a fost experiența de a ilustra cartea "Să studiem cu Apolodor furnicile și lumea lor"

Intrarea în mușuroi a fost neașteptată pentru mine, după Delta Dunării, Lună și Munții Carpați, această lume mică, dar plină de lucruri incredibile și fascinante. Nu am avut ocazia până aici să desenez și să studiez lumea furnicilor și a insectelor și doar bănuiam cât de minunată poate fi această făptură.

Adaptabilitatea, puterea individuală și a grupului, societatea mușuroiului, înrudirea cu alte specii, vechimea furnicilor și întinderea pe întreg Pământul, sunt atât de multe lucruri pe care le-am învățat desenând pentru această carte.

Fiecare întâlnire cu cei trei exploratori este ca o ieșire la cafea și depănat povești noi cu prietenii. Cunoscându-i acum, știu cum va reacționa Tiț la vederea unui mușuroi, ce curiozități va avea Maimuțica și cât de departe poate ajunge Apolodor ca explorator.

— Dan Ungureanu`,
            en: `# Dan Ungureanu

Dan Ungureanu started drawing at the age all children do and hasn't stopped since. In 2013, he enrolled in a master's program in book illustration at Cambridge School of Art. And while studying the art of illustrating children's books, he realized he was ready to write. That's how "Nara and the Island" came to be, a book nominated for the Kate Greenaway Medal and winning a mention at the V&A Illustration Prize.

At the beginning of 2016, he made his first journey around the world with Apolodor the penguin, illustrating "The Book of Apolodor" by Gellu Naum, and in 2017 he had his pencils ready to mark each adventure of the penguin and his friends for "The Second Book of Apolodor". In the same year, he published "Tell Me Eli", a graphic novel about life in an orphanage, based on Elisabeta Moldovan's biography.

In 2020, "Discovering Birds in Flight with Apolodor in the Delta" by Florin Bican, with Dan Ungureanu's illustrations, opens the Apolodor Explorer collection at Arthur Publishing House. The same collection includes "Let's Go to the Moon Together", "Apolodor on the Carpathian Peaks" and the most recent, "Discovering Ants and Their World with Apolodor". The last two were nominated for the Cărturino Awards in the Children's Illustrated Book category in 2024 and 2025.

"I Want to Be Invisible", published in 2024, tells the story of Toma, a boy who wants to be left alone by his younger brother, and invisibility seems the only solution. The volume received the 2025 Cărturino Award for Children's Illustrated Book of the Year.

## How was the experience of illustrating the book "Let's Study Ants and Their World with Apolodor"

Entering the anthill was unexpected for me, after the Danube Delta, Moon, and Carpathian Mountains, this small world but full of incredible and fascinating things. I hadn't had the chance until now to draw and study the world of ants and insects and only suspected how wonderful this creature could be.

Adaptability, individual and group strength, anthill society, kinship with other species, the age of ants and their spread across the entire Earth, there are so many things I learned while drawing for this book.

Each meeting with the three explorers is like going out for coffee and spinning new stories with friends. Knowing them now, I know how Tiț will react at the sight of an anthill, what curiosities Maimuțica will have, and how far Apolodor can go as an explorer.

— Dan Ungureanu`
        }
    } satisfies Guest,
    florinBican: {
        specialGuest: true,
        photo: "/assets/people/florin_bican.jpg",
        name: "Florin Bican",
        role: 'writer',
        content: {
            ro: `# Florin Bican

Florin Bican (n. 1956) este, în primul rând, cititor de literatură pentru copii. În al doilea rând, scrie și traduce literatură pentru copii și scrie despre ea de câte ori are ocazia. A predat în învățământul gimnazial, secundar și universitar. În prezent este redactor la Editura Arthur. Ține ateliere de scriere și citire creativă. Are o relație specială cu pinguinul Apolodor și cu Alisa lui Lewis Carroll.

## Cum mi-a venit ideea să scriu Tropice tâmpe

Cărțile pe care le scriu sunt generate de cărțile pe care le citesc. În „Tropice tâmpe" există referințe la multe din cărțile cu care m-am întâlnit, de la abecedar la clasici. Am înglobat în carte și replici auzite întâmplător pe stradă sau la televizor. Cartea a început ca poveste de culcare pentru fiul meu și a crescut pe parcursul plimbărilor noastre, cărora le spuneam „explorări".`,
            en: `# Florin Bican

Florin Bican (b. 1956) is, first and foremost, a reader of children's literature. Secondly, he writes and translates children's literature and writes about it whenever he has the chance. He has taught in middle school, high school, and university education. He is currently an editor at Arthur Publishing House. He conducts creative writing and reading workshops. He has a special relationship with Apolodor the penguin and Lewis Carroll's Alice.

## How I got the idea to write Dumb Tropics

The books I write are generated by the books I read. In "Dumb Tropics" there are references to many of the books I've encountered, from primer to classics. I also incorporated lines overheard on the street or on TV into the book. The book started as a bedtime story for my son and grew during our walks, which we called "explorations".`
        }
    } satisfies Guest,
    ioanaBot: {
        specialGuest: true,
        photo: "/assets/people/ioana_bot.png",
        name: "Ioana Bot",
        role: 'writer',
        content: {
            ro: `# Ioana Bot

Ioana Bot este pseudonimul literar al Ioanei Bican (n. 1964), scriitoare, critic literar, traducătoare de literatură și... profesor univ. la Universitatea Babeș-Bolyai (Cluj-Napoca). Este directoarea Centrului de cercetare în filologie modernă al UBB (https://fim.centre.ubbcluj.ro/membri/membri-titulari/ioana-bican/). A fost profesor invitat de literatură română la universitățile din Florența, Roma (Sapienza), Cracovia, București și Zurich. A publicat volume de studii și de eseuri despre istoria ideilor literare, eminescologie, poetică istorică. Cel mai recent volum: „Jurnale elvețiene" (Cluj-Napoca, 2024).

## De ce am scris "Eminescu explicat fratelui meu" (București, Art, 2012)?

Pentru că îmi plac provocările: e foarte greu să scrii despre scriitorii pe care îi iubești, ale căror opere se potrivesc cu ceva foarte profund din tine însuți. Și apoi, să cauți răspunsuri la întrebările celor din jurul tău (eu sunt profesoară, cel mai des cei din jurul meu sunt elevi sau studenți): De ce să ne placă, azi, un scriitor din secolul al XIX-lea? Ce poate fi interesant în literatura solemnă, canonică, pe care o învățăm la școală? Ce ne spune poezia lui Eminescu nouă, care trăim într-o altă lume și suntem așa de diferiți de el? Suntem, oare, chiar așa de diferiți de el? ...Și ce-are?`,
            en: `# Ioana Bot

Ioana Bot is the literary pseudonym of Ioana Bican (b. 1964), writer, literary critic, literature translator, and... university professor at Babeș-Bolyai University (Cluj-Napoca). She is the director of UBB's Research Center in Modern Philology (https://fim.centre.ubbcluj.ro/membri/membri-titulari/ioana-bican/). She has been a visiting professor of Romanian literature at universities in Florence, Rome (Sapienza), Krakow, Bucharest, and Zurich. She has published volumes of studies and essays on the history of literary ideas, Eminescu studies, and historical poetics. Most recent volume: "Swiss Journals" (Cluj-Napoca, 2024).

## Why did I write "Eminescu Explained to My Brother" (Bucharest, Art, 2012)?

Because I like challenges: it's very difficult to write about writers you love, whose works match something very deep within yourself. And then, to seek answers to the questions of those around you (I am a teacher, most often those around me are pupils or students): Why should we like, today, a writer from the 19th century? What can be interesting in the solemn, canonical literature we learn at school? What does Eminescu's poetry tell us, who live in a different world and are so different from him? Are we really that different from him? ...And what of it?`
        }
    } satisfies Guest,
    mateiVisinec: {
        specialGuest: true,
        photo: "/assets/people/matei_visiniec.jpg",
        name: "Matei Vişniec",
        role: 'writer',
        content: {
            ro: `# Matei Vişniec

Poet, dramaturg, romancier, jurnalist. Născut în 1956 la Rădăuţi, judeţul Suceava.

Studii de filosofie şi istorie la Bucureşti. Membru fondator al Cenaclului de Luni, condus de criticul Nicolae Manolescu. Debut în volum: „La noapte va ninge" (poezie), Editura Albatros, 1980.

În 1987: exil în Franţa, unde a cerut azil politic. 
Între 1990 şi 2022: jurnalist la Radio France Internationale. 

După 1989, activitatea lui Matei Vişniec s-a derulat între Franţa şi România, între două culturi şi două limbi, între Vest şi Est.  

Opera: mai multe volume de poezie şi de articole, şase romane, o culegere de nuvele, peste 70 de piese de teatru. 

Cărți pentru copii editate la Arthur şi Humanitas. Cea mai recentă: „Consulatul Lunii" (Humanitas Junior). 

Numeroase premii, printre care Premiul Academiei Române şi Premiul Uniunii Teatrale din România. 

Membru de onoare al Academiei Române. 

La Suceava, teatrul municipal poartă numele lui Matei Vişniec.`,
            en: `# Matei Vişniec

Poet, playwright, novelist, journalist. Born in 1956 in Rădăuţi, Suceava County.

Studies in philosophy and history in Bucharest. Founding member of the Monday Literary Circle, led by critic Nicolae Manolescu. Volume debut: "Tonight It Will Snow" (poetry), Albatros Publishing House, 1980.

In 1987: exile in France, where he sought political asylum.
Between 1990 and 2022: journalist at Radio France Internationale.

After 1989, Matei Vişniec's activity took place between France and Romania, between two cultures and two languages, between West and East.

Works: several volumes of poetry and articles, six novels, a collection of short stories, over 70 plays.

Children's books published at Arthur and Humanitas. Most recent: "The Moon's Consulate" (Humanitas Junior).

Numerous awards, including the Romanian Academy Award and the Romanian Theatre Union Award.

Honorary member of the Romanian Academy.

In Suceava, the municipal theater bears the name of Matei Vişniec.`
        }
    } satisfies Guest,
    mihaiManescu: {
        specialGuest: true,
        photo: "/assets/people/mihai_manescu.jpg",
        name: "Mihai Manescu",
        role: 'writer',
        content: {
            ro: `# Mihai Mănescu

> „Ideea de a scrie 'Comoara lui Harap-Alb' a venit după ce mulți profesori de română mi-au spus că romanul meu precedent, 'Copacul dorințelor: Amintiri din copilărie' i-a ajutat să îl aducă mai ușor pe Ion Creangă în fața copiilor. Le-a plăcut că am făcut un text relevant pentru generația de azi. Așa că le-am urmat sfatul și am mers mai departe pe linia asta, reinterpretând o altă poveste clasică. 'Povestea lui Harap-Alb' a fost alegerea evidentă."

Pe Mihai îl veți putea cunoaște la prima ediție a Festivalului de Literatură pentru Copii și Adolescenți APOLODOR, LA Botoșani, între 18 și 21 septembrie 2025. 

Mihai Mănescu este autor Humanitas Junior, scenarist și producător de film, autor al cărților „Copacul dorințelor" (2022), „Povești despre speranță" (2023) și „Comoara lui Harap Alb" (2024). Fondator al platformei MiniPovesti.ro, un hub de literatură pentru copii și profesori, Mihai activează în educație, acolo unde coordonează proiecte de comunicare, literație și CSR. A câștigat premiul Cărturino în 2025 pentru cea mai bună carte de literatură pentru copii.`,
            en: `# Mihai Mănescu

> "The idea to write 'Harap-Alb's Treasure' came after many Romanian teachers told me that my previous novel, 'The Wishing Tree: Childhood Memories' helped them bring Ion Creangă more easily to children. They liked that I made a text relevant for today's generation. So I followed their advice and continued along this line, reinterpreting another classic story. 'The Story of Harap-Alb' was the obvious choice."

You can meet Mihai at the first edition of the APOLODOR Children's and Young Adult Literature Festival in Botoșani, between September 18-21, 2025.

Mihai Mănescu is a Humanitas Junior author, screenwriter, and film producer, author of the books "The Wishing Tree" (2022), "Stories About Hope" (2023), and "Harap-Alb's Treasure" (2024). Founder of the MiniPovesti.ro platform, a hub for children's literature and teachers, Mihai is active in education, where he coordinates communication, literacy, and CSR projects. He won the Cărturino prize in 2025 for the best children's literature book.`
        }
    } satisfies Guest,
    mirceaPricajan: {
        specialGuest: true,
        photo: "/assets/people/mircea_pricajan.jpg",
        name: "Mircea Pricajan",
        role: 'writer',
        content: {
            ro: `# Mircea Pricăjan

Mircea Pricăjan s-a născut pe 2 septembrie 1980, la Oradea. A absolvit Facultatea de Litere din orașul natal. A debutat în 1997, cu proză scurtă, în suplimentul unui ziar local. A publicat romanele „În umbra deasă a realității" (Editura Universității din Oradea, 2002), „Calitatea luminii" (Polirom, 2016), „Pumn-de-Fier" (Polirom, 2018), „Murmur" (Humanitas, 2023), „Gașca" (Polirom, 2024) și volumul de proză scurtă „Perseidele" (Charmides, 2019). 

A tradus din limba engleză peste 60 de volume. A îngrijit apariția mai multor reviste literare online, deopotrivă în română și engleză, iar în anul 2012 a fondat „Revista de suspans". A editat două antologii tematice de proză scurtă. În intervalul 2003–2020 a fost redactor la revista de cultură „Familia", iar în anul 2021 a devenit redactor-șef al aceleiași publicații.

## Cum v-a venit ideea să scrieți cartea "Gașca"

Ideea mi-a venit în timpul izolării și am suferit că nu aveam atunci timp de ea. Povestea se desfășoară chiar în acea perioadă. Dar poate că a fost mai bine așa. Când am început s-o scriu, în ianuarie 2021, aveam deja mai clar conturate în gând primele momente ale acțiunii, ba chiar – mai important – o paralelă cu basm clasic care dă o dimensiune în plus cărții.`,
            en: `# Mircea Pricăjan

Mircea Pricăjan was born on September 2, 1980, in Oradea. He graduated from the Faculty of Letters in his hometown. He made his debut in 1997, with short prose, in a local newspaper supplement. He published the novels "In the Dense Shadow of Reality" (University of Oradea Publishing House, 2002), "The Quality of Light" (Polirom, 2016), "Iron-Fist" (Polirom, 2018), "Murmur" (Humanitas, 2023), "The Gang" (Polirom, 2024) and the short prose volume "The Perseids" (Charmides, 2019).

He has translated over 60 volumes from English. He has overseen the publication of several online literary magazines, both in Romanian and English, and in 2012 he founded "The Suspense Magazine". He edited two thematic anthologies of short prose. Between 2003-2020 he was an editor at the cultural magazine "Familia", and in 2021 he became editor-in-chief of the same publication.

## How did you get the idea to write "The Gang"

The idea came to me during lockdown and I suffered because I didn't have time for it then. The story actually takes place during that period. But maybe it was better that way. When I started writing it, in January 2021, I already had the first moments of the action more clearly outlined in my mind, and even more importantly – a parallel with a classic fairy tale that gives an extra dimension to the book.`
        }
    } satisfies Guest,
    veronicaNiculescu: {
        specialGuest: true,
        photo: "/assets/people/veronica_niculescu.jpg",
        name: "Veronica Niculescu",
        role: 'writer',
        content: {
            ro: `# Veronica D. Niculescu

Veronica D. NICULESCU (n. 1968), scriitoare şi traducătoare. Printre cele mai cunoscute cărți ale sale: „Roşu, roşu, catifea", „Simfonia animalieră", „Spre văi de jad şi sălbăţie", „Toţi copiii librăresei". Pentru copii și adolescenți a scris romanele „O vară cu Isidor" și „Iarna lui Isidor", precum și „Grădina pământeană a Prinţesei de Marţi". A tradus din Vladimir Nabokov, Samuel Beckett, Lewis Carroll şi mulți alţii. Cărțile și traducerile sale au fost recompensate cu diferite premii și nominalizări la cele mai importante premii naționale.

## Cum v-a venit ideea să scrieți cartea "O vară cu Isidor"?

Primul lucru care m-a impresionat când am citit despre condori – și mai ales despre un condor anume, închis într-o cușcă, la o grădină zoologică din București –, a fost acela că un condor poate trăi 50 de ani. Mă apropiam eu însămi de vârsta asta ireală și probabil mă aflam chiar eu într-un fel de cușcă atunci. De-a lungul vieții, sunt multe momente în care simțim gratii în jurul nostru – imaginare sau nu, montate de alții sau de noi înșine. Pentru ideea asta, a libertății, a eliberării, am scris „O vară cu Isidor". Ca să eliberez ființa care risca să stea 50 de ani într-o cușcă am inventat-o pe Serena, o fetiță curajoasă, salvatoarea lui Isidor.`,
            en: `# Veronica D. Niculescu

Veronica D. NICULESCU (b. 1968), writer and translator. Among her most well-known books: "Red, Red, Velvet", "Animal Symphony", "Towards Valleys of Jade and Wilderness", "All the Bookseller's Children". For children and young adults, she wrote the novels "A Summer with Isidor" and "Isidor's Winter", as well as "The Earthly Garden of Tuesday's Princess". She has translated works by Vladimir Nabokov, Samuel Beckett, Lewis Carroll, and many others. Her books and translations have been rewarded with various prizes and nominations for the most important national awards.

## How did you get the idea to write "A Summer with Isidor"?

The first thing that impressed me when I read about condors – and especially about a particular condor, locked in a cage at a zoo in Bucharest – was that a condor can live for 50 years. I was approaching that surreal age myself and was probably in some kind of cage myself then. Throughout life, there are many moments when we feel bars around us – imaginary or not, put up by others or by ourselves. For this idea of freedom, of liberation, I wrote "A Summer with Isidor". To free the being who risked staying in a cage for 50 years, I invented Serena, a brave little girl, Isidor's savior.`
        }
    } satisfies Guest,
    viorelIlisoi: {
        specialGuest: true,
        photo: "/assets/people/viorel_ilisoi.jpg",
        name: "Viorel Ilisoi",
        role: 'writer',
        content: {
            ro: `# Viorel Ilișoi

Viorel Ilișoi, născut la Botoșani este scriitor, jurnalist și editor. Este cunoscut pentru reportajele literare publicate în presa centrală, impunând un stil narativ inconfundabil, poetic și confesiv. A lucrat în redacții importante, iar textele sale au fost premiate pentru forța expresivă și profunzimea umană. Scrie și poezie, proză, eseuri interviuri. Coordonează Editura GRI, unde își publică scrierile în regim independent.`,
            en: `# Viorel Ilișoi

Viorel Ilișoi, born in Botoșani, is a writer, journalist, and editor. He is known for his literary reportages published in the central press, establishing an unmistakable narrative style, both poetic and confessional. He has worked in important editorial offices, and his texts have been awarded for their expressive force and human depth. He also writes poetry, prose, essays, and interviews. He coordinates GRI Publishing House, where he publishes his writings independently.`
        }
    } satisfies Guest,
    adaMilea: {
        photo: "/assets/people/ada_milea.jpg",
        name: "Ada Milea",
        specialGuest: false,
        role: 'singer',
        content: {
            ro: ``,
            en: ``,
        }
    } satisfies Guest,

    ralucaBurca: {
        photo: "/assets/people/raluca_burca.jpg",
        name: "Raluca Burca",
        role: 'illustrator',
        specialGuest: false,
        content: {
            ro: `Raluca Burcă este ilustratoare și iubitoare de povești pentru copii.

De-a lungul celor 6 ani de experiență a colaborat cu Muzeul de artă Brașov, Ambasada Spaniei la București, Metrorex, Cărturești, Teatrul Ion Creangă, precum și edituri, cum ar fi Humanitas, Signatura, Cartier, Editura pentru Artă și Literatură.

A studiat artele grafice la Facultatea de Arte din Iași, București și Polonia.

În 2018, a fost bursieră a Fundației Regale Margareta a României și tot în același an, a devenit membră a Clubului Ilustratorilor.

În 2024, la invitația Ministerului Culturii, a reprezentat România la Târgul Internațional de carte ilustrată “Bologna Children’s Book Fair”.

Raluca lucrează în tehnici tradiționale, pe care le îmbină cu o curiozitate artistică, explorând constant modalități de a da viață poveștilor prin artă.
`,
            en: `
Raluca Burca is an illustrator and lover of stories for children.

Over the 6 years of experience, she has collaborated with the Brașov Museum of Art, the Spanish Embassy in Bucharest, Metrorex, Cărturești, the Ion Creangă Theater, as well as publishers, such as Humanitas, Signatura, Cartier, and Editura pentru Artă și Literatură.

She studied graphic arts at the Faculty of Arts in Iași, Buchurești, and Poland.

In 2018, she was a scholarship holder of the Royal Margareta Foundation of Romania and in the same year, she became a member of the Club of Illustrators.

In 2024, at the invitation of the Ministry of Culture, she represented Romania at the Bologna Children's Book Fair.

Raluca works in traditional techniques, which she combines with an artistic curiosity, exploring constantly ways to give life to stories through art.
`
        }
    } satisfies Guest,

    sabinaDrinceanu: {
        photo: "/assets/people/sabina_drinceanu.jpg",
        name: "Sabina Drînceanu",
        role: 'illustrator',
        specialGuest: false,
        content: {
            ro: `# Ana-Sabina Drînceanu

Ana-Sabina Drînceanu, artist vizual și ilustrator, născută la 3 ianuarie 1992 în Iași, a urmat cursurile de licență și master în cadrul Universității Naționale de Arte „George Enescu" din Iași, între 2011-2016. În anul 2020 obține titlul de doctor în arte vizuale în cadrul aceleași universități, iar în perioada 2018-2019 încheie cursul de master MA Illustration and Book Art la Cambridge School of Art, Anglia Ruskin University, în Marea Britanie. Propune un stil ilustrativ și narativ în lucrările sale, preferând abordările figurative care fac trimiteri spre tematicile mitologice. 

## Expoziții și Proiecte

- 2025: „Atemkristall / Breathcrystal", Blythe Gallery, Imperial College London — Londra, Marea Britanie
- 2024: „Postumanism domestic", Galeria Arteast — Iași
- 2023: „Virtual Illustrators Wall", Bologna Children's Book Festival
- 2023: „CARACTERE", Galeria Brăteanu — Timișoara
- 2023: „WHO PAINTED MY RABBIT RED", Elite Art Gallery — București

A realizat proiecte ilustrate în colaborare cu Editura Gama: cărți ilustrate pentru copii precum „Prinț și cerșetor", „Iliada", „Robin Hood", dar și ilustrații pentru jocuri de societate pentru copii: „Comoara zmeilor" și „Alice în Țara Aritmeticii". 

Din 2023 face parte din grupul de ilustratori Drawing Group Iași, iar împreună cu aceștia a realizat câteva proiecte de zine-uri ilustrate.

Din anul 2021 este cadrul didactic titular al specializării grafică la Universitatea Națională de Arte „George Enescu" Iași.`,
            en: `# Ana-Sabina Drînceanu

Ana-Sabina Drînceanu, visual artist and illustrator, born on January 3, 1992, in Iași, completed her bachelor's and master's degrees at the "George Enescu" National University of Arts in Iași between 2011-2016. In 2020, she obtained her PhD in visual arts from the same university, and during 2018-2019, she completed her MA in Illustration and Book Art at Cambridge School of Art, Anglia Ruskin University, in the United Kingdom. She proposes an illustrative and narrative style in her works, preferring figurative approaches that reference mythological themes.

## Exhibitions and Projects

- 2025: "Atemkristall / Breathcrystal", Blythe Gallery, Imperial College London — London, United Kingdom
- 2024: "Domestic Posthumanism", Arteast Gallery — Iași
- 2023: "Virtual Illustrators Wall", Bologna Children's Book Festival
- 2023: "CHARACTERS", Brăteanu Gallery — Timișoara
- 2023: "WHO PAINTED MY RABBIT RED", Elite Art Gallery — Bucharest

She has created illustrated projects in collaboration with Gama Publishing House: illustrated children's books such as "The Prince and the Pauper", "The Iliad", "Robin Hood", as well as illustrations for children's board games: "The Dragons' Treasure" and "Alice in Arithmetic Land".

Since 2023, she has been part of the Drawing Group Iași illustrators' group, and together they have created several illustrated zine projects.

Since 2021, she has been a tenured faculty member in the graphics specialization at the "George Enescu" National University of Arts Iași.`
        }
    } satisfies Guest,
    adelaGreceanu: {
        photo: "/assets/people/adela_greceanu.jpg",
        name: "Adela Greceanu",
        role: 'moderator',
        specialGuest: false,
        content: {
            ro: `Adela Greceanu (n. 1975) este scriitoare şi jurnalistă. Realizează, împreună cu Matei Martin, emisiunea „Timpul prezent”, la Radio România Cultural. De-a lungul timpului a intervievat numeroase personalități culturale, din țară și străinătate. A publicat patru volume de poezie, un roman și cîteva povestiri. În 2021 i-a apărut antologia „Șuruburi, șaibe, cuie, piulițe. Poeme alese 1997-2014”, Editura Cartier.`,
            en: `Adela Greceanu (b. 1975) is a writer and journalist. She produces, together with Matei Martin, the "Timpul prezent" program, at Radio România Cultural. Over the years, she has interviewed numerous cultural figures, from Romania and abroad. She has published four volumes of poetry, a novel, and several short stories. In 2021, the anthology "Șuruburi, șaibe, cuie, piulițe. Poeme alese 1997-2014" was published, Editura Cartier.`
        }
    } satisfies Guest,
    ralucaAftene: {
        photo: "/assets/people/raluca_aftene.jpg",
        name: "Raluca Aftene",
        role: 'moderator',
        specialGuest: false,
        content: {
            ro: `# Raluca Aftene
Realizator de emisiuni şi prezentator la TVR Iaşi, cu o experinţă vastă în numeroase genuri publicistice: reportaj, documentar, actualitate. Pentru scurta vreme a  fost şi librar. Ca jurnalist, a realizat interviuri cu numeroase personalităţi din lumea literară, între care  câştigătorul Nobel pentru Literatură Abdulrazak Gurnah,  Richard Ford, Jonathan Franzen, Kapka Kassabova, Arian Harwicz.`,
            en: `# Raluca Aftene
Realizator de emisiuni şi prezentator la TVR Iaşi, cu o experinţă vastă în numeroase genuri publicistice: reportaj, documentar, actualitate. Pentru scurta vreme a  fost şi librar. Ca jurnalist, a realizat interviuri cu numeroase personalităţi din lumea literară, între care  câştigătorul Nobel pentru Literatură Abdulrazak Gurnah,  Richard Ford, Jonathan Franzen, Kapka Kassabova, Arian Harwicz.`,
        }
    } satisfies Guest,
    mateiMartin: {
        photo: "/assets/people/matei_martin.jpg",
        name: "Matei Martin",
        role: 'moderator',
        specialGuest: false,
        content: {
            ro: `# Matei Martin
Matei Martin este jurnalist. 
Co-realizator al emisiunii „Timpul prezent” la Radio România Cultural, redactor-șef al revistei „Observator cultural”, fondator al newsletterului „Vineri”,  Matei e interesat de transformarea instituțiilor și de evoluția politicilor culturale din Europa și din România.`,
            en: `# Matei Martin
Matei Martin is a journalist. 
Co-realizer of the "Timpul prezent" program at Radio România Cultural, editor-in-chief of the "Observator cultural" magazine, founder of the "Vineri" newsletter, Matei is interested in the transformation of institutions and the evolution of cultural policies in Europe and Romania.`,
        }
    } satisfies Guest,

    mihneaMaruta: {
        photo: "/assets/people/mihnea_maruta.jpg",
        name: "Mihnea Maruta",
        role: 'writer',
        specialGuest: false,
        content: {
            ro: `„De ce petrecem tot mai mult timp, și de la vârste tot mai mici, în rețele de socializare?
Aceste rețele sunt concepute să exploateze o vulnerabilitate a minții noastre. Care este aceasta? Fiecare anunț că ai primit un like sau o inimioară. Fiecare anunț cu privire la un comentariu. Fiecare anunț cu privire la cineva care a dat share postării tale. Afișarea permanentă a numărului de like-uri (pentru că vrei să crească). Posibilitatea de a face scrolling la infinit.
Toate acestea declanșează o secreție de dopamină în creier.
Dopamina este o substanță care joacă rolul de curier între neuroni, fiind răspunzătoare pentru senzațiile de plăcere. Creierul nostru o folosește ca răsplată pentru a ne determina să repetăm anumite comportamente care ne asigură supraviețuirea. Dopamina este secretată, de pildă, în timpul actului sexual, pe care creierul îl percepe ca indispensabil pentru procreare, deci pentru perpetuarea speciei.
Ce anume vrea creierul să repetăm când vine vorba despre social media?
Noutatea. Faptul că, la fiecare câteva secunde, primește o informație nouă, îi dă creierului iluzia că își extinde cunoașterea, că e mai pregătit pentru realitate și, deci, pentru supraviețuire.
Deci, mecanismul prin care social media creează dependență este o combinație de excitație continuă cu noutate continuă, iar ceea ce creează dependență, la fel ca în cazul drogurilor sau al jocurilor mecanice, este secreția de dopamină în creier”.


Mihnea Măruţă este jurnalist și doctor în filosofie al Universității „Babeș-Bolyai”. Teza sa de doctorat, publicată în 2023 sub titlul „Identitatea virtuală. Cum și de ce ne transformă rețelele de socializare", a devenit un bestseller al Editurii Humanitas.
Mihnea Măruță predă cursul „Filosofia comunicării” la Departamentul de Jurnalism al UBB, scrie pentru reviste de cultură și încearcă să întrețină o dezbatere națională privind efectele mediului virtual asupra copiilor și adolescenților.

`,
            en: `“Why do we spend more and more time, and from an early age, on social media?
These networks are designed to exploit a vulnerability of our mind. What is this? Every notification that you have received a like or a heart. Every notification about a comment. Every notification about someone who has shared your post. The constant display of the number of likes (because you want to increase it). The possibility of scrolling infinitely.
All of these trigger a secretion of dopamine in the brain.
Dopamine is a substance that plays the role of messenger between neurons, responsible for pleasure sensations. Our brain uses it as a reward for performing certain behaviors that ensure our survival. Dopamine is secreted, for example, during sexual act, which the brain perceives as indispensable for reproduction, therefore for the perpetuation of the species.
What does the brain want us to repeat when it comes to social media?
The novelty. The fact that, every few seconds, it receives a new piece of information, gives the brain the illusion that it expands its knowledge, that it is better prepared for reality and, therefore, for survival.
So, the mechanism by which social media creates dependence is a combination of continuous excitement with continuous novelty, and what creates dependence, just like with drugs or mechanical games, is the secretion of dopamine in the brain”.


Mihnea Măruță is a journalist and PhD in philosophy from the "Babeș-Bolyai" University. His PhD thesis, published in 2023 under the title "Virtual Identity. How and why social media transforms our lives", has become a bestseller of the Humanitas Publishing House.
Mihnea Măruță teaches the "Philosophy of Communication" course at the Department of Journalism at UBB, writes for cultural magazines and tries to maintain a national debate on the effects of the virtual environment on children and adolescents.
`,
        }
    } satisfies Guest,
    svetlanaCirstean: {
        photo: "/assets/people/svetlana_cirstlean.jpg",
        name: "Svetlana Cârstean",
        role: 'writer',
        specialGuest: false,
        content: {
            ro: `#SVETLANA CÂRSTEAN

Svetlana Cârstean (n. Botoșani,1969) este poetă, traducătoare și curatoare de proiecte culturale. Pentru Floarea de menghină (Cartea Românească, 2008), a primit Premiul pentru Debut în Poezie al Uniunii Scriitorilor, dar și Premiul Național de Poezie ”Mihai Eminescu”. A publicat apoi: Gravitație (Trei, 2015), volumul Trado, împreună cu poeta suedeză Athena Farrokhzad (Nemira, 2016), Sînt alta (Nemira, 2021), Restul (Nemira, 2025), prima carte dintr-o trilogie. Cea de a doua, Arteziana, este în curs de apariție. Coordonează la editura Nemira colecția de poezie Vorpal. 
`,
            en: `#SVETLANA CÂRSTEAN

Svetlana Cârstean (born in Botoșani, 1969) is a poet, translator, and curator of cultural projects. For The Menghin Flower (Cartea Românească, 2008), she received the Prize for New Poetry of the Writers' Union, as well as the Mihai Eminescu National Poetry Prize. She published: Gravity (Trei, 2015), the volume Trado, together with the Swedish poet Athena Farrokhzad (Nemira, 2016), I Am Another (Nemira, 2021), Rest (Nemira, 2025), the first book in a trilogy. The second, Arteziana, is in progress. She coordinates the Nemira collection of poetry Vorpal. 
`,
        },

    } satisfies Guest,
    gabrielaAdamesteanu: {
        photo: "/assets/people/gabriela_adamesteanu.jpg",
        name: "Gabriela Adamesteanu",
        role: 'writer',
        specialGuest: false,
        content: {
            ro: `„Copilăria este vârsta pe care o purtăm în noi toată viața. Din poveștile ascultate și citite atunci ne-am ales modelele imaginare, așa cum din anturaj ne-am ales modelele umane.
Conștientă de puterea  deprinderilor din copilărie, o tot mai largă comunitate de părinți și profesori, psihologi și sociologi, editori, ilustratori și scriitori  pentru copii, se străduie să stabilizeze obiceiul cititului de la vârstele mici care îmbogățește mințile tinere. Destinul omului, confruntat azi cu tehnologia înaltă, creată tot de el, capătă  o șansă în plus prin cartea copilăriei și  adolescenței.
Generațiile noi de părinți par să-i înțeleagă utilitatea, iar târgurile și festivalurile se înviorează și se colorează cu un aflux de mici cititori”. - Gabriela Adameșteanu


Gabriela Adameșteanu este una dintre cele mai importante prozatoare ale literaturii române postbelice. A absolvit Facultatea de Limba şi Literatura Română, Universitatea Bucureşti (1965). Redactor la Editura Enciclopedică (1965-1984) şi lector la Cartea Românească (1985-1989). A condus revista 22, publicată de Grupul pentru Dialog Social (1991-2005), şi apoi suplimentul ei literar, Bucureştiul Cultural (până în 2013). 
A primit Premiul Hellman-Hammett pentru curaj în jurnalism, acordat de Human Rights Watch (2002), şi titlul „Chevalier de L’Ordre des Arts et des Lettres“ (2013) din partea guvernului francez. Vicepreşedintă (2000-2004) şi preşedintă (2004-2006) a Centrului PEN Român. Cărţile ei, constant reeditate, sunt traduse în 18 limbi şi elogiate în presa românescă şi internaţională.


Romane: Drumul egal al fiecărei zile (1975); Dimineaţă pierdută (1984); Întâlnirea (2003, 2007); Provizorat (2010); Fontana di Trevi (2018); Voci la distanţă (2022).
Proză scurtă: Dăruieşte-ţi o zi de vacanţă (1979); Varăprimăvară (1989); Gara de Est (2008).
Nonficţiune: Obsesia politicii, interviuri (1995); Cele două Românii, publicistică (2000); Anii romantici, memorialistică (2014); Crescând lângă doi nostalgici, memorialistică (2023).

`,
            en: `“Childhood is the age we carry in us all our lives. From the stories we listened to and read then, we chose our imaginary models, just as from the upbringing we chose our human models.
Aware of the power of habits from childhood, an ever-widening community of parents and teachers, psychologists and sociologists, editors, illustrators, and writers for children, strive to stabilize the habit of reading from a young age, which enriches young minds. The fate of man, today confronted with high technology, created by him, gains an extra chance through the book of childhood and adolescence.
The new generations of parents seem to understand the usefulness, and fairs and festivals are becoming more colorful with an influx of young readers”. - Gabriela Adameșteanu


Gabriela Adameșteanu is one of the most important prose writers of the post-war Romanian literature. She graduated from the Faculty of Romanian Language and Literature, University of Bucharest (1965). Editor at the Encyclopedic Publishing House (1965-1984) and lecturer at Cartea Românească (1985-1989). She was the editor of the 22 magazine, published by the Social Dialog Group (1991-2005), and then its literary supplement, Bucureştiul Cultural (until 2013). 
She received the Hellman-Hammett Prize for courage in journalism, awarded by Human Rights Watch (2002), and the title "Chevalier de L’Ordre des Arts et des Lettres" (2013) from the French government. Vicepresident (2000-2004) and president (2004-2006) of the PEN Romanian Center. Her books, constantly reissued, are translated into 18 languages and praised in the Romanian press and international media.


Romances: The Equal Road of Every Day (1975); Lost Morning (1984); Meeting (2003, 2007); Provizor (2010); Fontana di Trevi (2018); Voices at a Distance (2022).
Short prose: Give Yourself a Day off (1979); Summer-Spring (1989); Gara de Est (2008).
Nonfiction: Obsession with politics, interviews (1995); The Two Romans, publicistic (2000); The Romantic Years, memorialistic (2014); Growing Up with Two Nostalgic, memorialistic (2023).
`,
        }
    } satisfies Guest,
    vasileIftime: {
        photo: "/assets/people/vasile_iftime.jpg",
        name: "Vasile Iftime",
        role: 'writer',
        specialGuest: false,
        content: {
            ro: `Iftime Vasile (n. 17 decembrie 1971, Sarata Basarab, Hăneşti) – scriitor, membru al Uniunii Scriitorilor din România (din 2008), Membru PEN România (din 2022). A debutat editorial în 2005 cu volumul de poezie Umbre (Editura „Geea”, 2005). A publicat 16 volume de poezie, un roman și un volum de eseu critic. A colaborat la numeroase reviste, a primit și a fost nominalizat la diverse premii. Coordonează ateliere de scriere creativă. „În tot ce ne înconjoară descoperim poezia. Dacă acceptăm realitatea așa cum este, concretă și imediată, dacă ne mulțumim cu ordinea firelor din clepsidră, dacă credem că plânsul este doar circuitul apei în natură, dacă nu înțelegem că păsările duc unul din zece paie în cer și că piatra de râu știe pe de rost poveștile izvoarelor, sâmburele de poezie din inima fiecăruia va fi precum talantul îngropat în pământul nerodirilor și este păcat. Poezia este prea gol și preaplin, noi suntem amfora”, crede Vasile Iftime.`,
            en: `Iftime Vasile (born December 17, 1971, Sarata Basarab, Hăneşti) – writer, member of the Writers' Union of Romania (from 2008), member of PEN Romania (from 2022). He debuted in 2005 with the poetry volume Umbre (Editura „Geea”, 2005). He has published 16 poetry volumes, a novel, and a critical essay volume. He has collaborated with many magazines, received and was nominated for various prizes. He coordinates creative writing workshops. "In everything that surrounds us we discover poetry. If we accept reality as it is, concrete and immediate, if we are content with the order of the waters in nature, if we believe that the weeping is only the circuit of water in nature, if we do not understand that the birds carry one out of ten feathers in the sky and that the river stone knows of the stories of the springs, the core of poetry in each of us will be like the talent buried in the earth of the unhewn stones and it is a sin. Poetry is too empty and too superficial, we are amphorae", believes Vasile Iftime.`,
        }
    } satisfies Guest,

}

export const allGuests = Object.values(guests)

export const landingPageGuests = {
    writers: [
        guests.florinBican,
        guests.veronicaNiculescu,
        guests.adinaRosetti,
        guests.mateiVisinec,
    ],
    illustrators: [
        guests.ralucaBurca,
        guests.sabinaDrinceanu,
        guests.biancaSimionescu,
    ],
    singer: guests.adaMilea,
}