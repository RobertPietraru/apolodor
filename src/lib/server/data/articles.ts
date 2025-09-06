export const articles: {
  id: string;
  related: string[];
  featured: boolean;
  title: {
    en: string;
    ro: string;
  };
  date: string;
  excerpt: {
    en: string;
    ro: string;
  };
  content: {
    en: string;
    ro: string;
  };
  image: {
    en: string;
    ro: string;
  };
  category: 'program' | 'workshops' | 'news' | 'guests';
}[] = [
    {
      id: "1",
      related: ["2", "3", "4"],
      featured: true,
      title: {
        en: 'Press Release',
        ro: 'Comunicat de presă'
      },
      date: '2025-09-05',
      excerpt: {
        en: 'The APOLODOR Children and Youth Literature Festival brings to the public exhibits that reflect contemporary trends in Romanian illustration',
        ro: 'Festivalul de Literatură pentru Copii și Adolescenți APOLODOR aduce publicului expoziții ce reflectă tendințele contemporane din ilustrația românească'
      },
      content: {
        en: `
# Press Release

## **The APOLODOR Festival – A Celebration of Romanian Book Illustration**

- 📚 **Six exhibitions** of old and contemporary book illustration, with published and unpublished works
- 🎨 **Creations by dozens of visual artists** exhibited in **Botosani** and **Ipotesti**
- ✏️ **APOLODOR Workshops**: children and youth will learn how to create characters and illustrate books

---

### 📅 **September 18-21 • Botosani**

The APOLODOR Children's and Youth Literature Festival brings to the public:
- Exhibitions reflecting **contemporary trends** in Romanian illustration
- **Never-before-seen** illustrations by the great artist **Tia Peltz**
- Works by **young graduates** and **students** passionate about illustration

---

## 🖼 Exhibitions

### **BOOKM@P. Mapping Romanian Illustration**
*Curator: Cezarina Caloian*
📍 **Mihai Eminescu Theater Foyer**

Over **40 works** signed by **23 established artists**, known to the public through their beloved books:
Bianca Anton, Anna Benczedi, Raluca Burca, Maria Caruntu, Georgiana Chitac, Alexandru Ciubotariu, Florin Corodescu, Mihail Cosuletu, Marina Debattista, Irina Dobrescu, Sabina Drinceanu, Agnes Keszeg, Ana Maria Lemnaru, Stela Lie, Andrei Maceseanu, Daniela Olaru, Mihaela Paraschivu, Anca Smarandache, Maria Surducan, Diana Tivu, Radu Raileanu, Dan Ungureanu, Cristiana Radu.

---

### **1001 Book Objects**
*Ipotesti Memorial Gallery*

Dedicated to **emerging young illustrators**, this exhibition showcases diverse **artistic perspectives**, **techniques** and **experimental formats**.
> "In this year's edition we are presenting works by students and graduates from the **Graphics** program at **UNAGE Iasi**... In future editions we aim to include all art universities across the country."
> — *Cezarina Caloian, curator*

---

### **Illustrations for Ion Creanga's Stories – Tia Peltz**
📍 **Mihai Eminescu County Library**
Exhibition featuring **six unpublished drawings** created for an unpublished volume of **Ion Creanga's** stories.

---

### **Neanderthal** – Raluca Burca
📍 **Teachers' Training Center**
Illustrations that formed the basis for the book *"A Journey Through Time to the Neanderthals"* (Humanitas Junior).
Raluca Burca, originally from Botosani, returns home to show how **research and imagination can recreate history** in images.

---

### **Maria Baciu, Autographed Childhoods**
📍 **Mihai Eminescu County Library**
*Curator: Blanche Anemone Pietraru*

### **Fairytale Illustrations**
📍 **County Library Reading Room**
Works by students from **Stefan Luchian Art High School**
*Curator: Prof. Genoveva Dolhescu*

---

## 🛠 Workshops & Activities

- **A Famous Penguin!** – *Dan Ungureanu*
  How **Apolodor** came to be, from initial sketches to final character.

- **Character Design in Illustration and Animation** – *Sabina Drinceanu & Bianca Simionescu*
  Steps in conceiving and constructing a character:
  physiology, gestures, expressions, clothing, typology.

- **Storyboarding for Children's Picture Books** – *Sabina Drinceanu*
  From text to **visual narrative**: scenes, characters, atmosphere.

> Workshops are conducted in collaboration with **Stefan Luchian Art High School** in Botosani.

---

## 👥 Festival Team

- **Director:** Dan Lungu
- **Artistic Director:** Luminita Corneanu
- **Curator:** Cezarina Caloian
- **Executive Director:** Costica Roman
- **Logistics & Volunteer Manager:** Alexandru Teiosanu
- **Visual Identity:** Marinela Ciobanu
- **Communications:** Irina Simniceanu
- **Social Media:** Ana Maria Ionel
- **Website:** Robert Pietraru

---

## 📢 Organizers & Partners

- **Organizer:** Corona Foundation
- **Funders:** Local Council & City Hall of Botosani

**Partners:**
Botosani County School Inspectorate • Mihai Eminescu National Theater • Ipotesti Memorial – Mihai Eminescu National Study Center • Mihai Eminescu County Library • UNAGE Iasi • Botosani Children's Palace • Botosani Teachers' Training Center • ArtEast Gallery Iasi • Printco Printing House Iasi • Caracteristic Agency • CNIPT Botosani • Cultural Hospitality Association – AOC Iasi • De Basm Association • Star of Hope Foundation – SOH Romania

**Partner Publishers:** Arthur • Polirom • Vlad and the Genius Book • YoungArt • Minigrafic • Humanitas Junior • Gama • Alice Books

**Media Partners:** Radio Romania Cultural • TVR Cultural • TVR Iasi • Buzz Botosani • PressHub • Clivaj Magazine • Botosaneanul • VIVA FM • Botosani Monitor • Observator Cultural

**Sponsors:** Nea Ilie the Cook Sulita • Practic-Comert-Strugaru S.R.L Darabani • Rida Confectionery Botosani • Artechwine Botosani • Danimet Exim SRL • SC Optim Diagnostic SRL • SC S&S BISMGM SRL • Botosani Shopping Center

---

## 🎟 Access
**All events in the program are free to attend.**
`,
        ro: `
# Comunicat de presă

## **Festivalul APOLODOR – un regal al ilustrației de carte românească**

- 📚 **Șase expoziții** de ilustrație de carte veche și contemporană, cu lucrări publicate sau inedite  
- 🎨 **Creațiile a zeci de artiști plastici** expuse la **Botoșani** și **Ipotești**  
- ✏️ **Ateliere APOLODOR**: copiii și tinerii vor învăța cum se creează un personaj și cum se ilustrează o carte  

---

### 📅 **18 – 21 septembrie • Botoșani**

Festivalul de Literatură pentru Copii și Adolescenți **APOLODOR** aduce publicului:
- Expoziții ce reflectă **tendințele contemporane** din ilustrația românească
- Ilustrații **inedite** ale marii artiste **Tia Peltz**
- Lucrări ale **tinerilor absolvenți** și **elevilor** pasionați de ilustrație

---

## 🖼 Expoziții

### **BOOKM@P. Cartografia ilustrației românești**  
*Curator: Cezarina Caloian*  
📍 **Foaierul Teatrului Mihai Eminescu**

Peste **40 de lucrări**, semnate de **23 de artiști consacrați**, cunoscuți publicului prin volumele lor îndrăgite:
Bianca Anton, Anna Benczedi, Raluca Burcă, Maria Căruntu, Georgiana Chițac, Alexandru Ciubotariu, Florin Corodescu, Mihail Coșulețu, Marina Debattista, Irina Dobrescu, Sabina Drinceanu, Agnes Keszeg, Ana Maria Lemnaru, Stela Lie, Andrei Măceșanu, Daniela Olaru, Mihaela Paraschivu, Anca Smărăndache, Maria Surducan, Diana Tivu, Radu Răileanu, Dan Ungureanu, Cristiana Radu.

---

### **1001 de cărți obiect**  
*Galeria Memorialului Ipotești*

Dedicată **tinerilor ilustratori aflați la debut**, această expoziție prezintă diversitatea de **perspective artistice**, **tehnici** și **formate experimentale**.  
> „În ediția de anul acesta prezentăm o serie de studenți și absolvenți ai specializării **Grafică** din cadrul **UNAGE Iași**... În edițiile viitoare dorim deschiderea către toate universitățile de artă din țară.”  
> — *Cezarina Caloian, curator*

---

### **Ilustrații la poveștile lui Ion Creangă – Tia Peltz**  
📍 **Biblioteca Județeană „Mihai Eminescu”**  
Expoziție cu **șase desene inedite**, realizate pentru un volum nepublicat al poveștilor lui **Ion Creangă**.

---

### **Neanderthal** – Raluca Burcă  
📍 **Casa Corpului Didactic**  
Ilustrații ce au stat la baza cărții *„O călătorie în timp la oamenii de Neanderthal”* (Humanitas Junior).  
Raluca Burcă, botoșăneancă de origine, revine acasă pentru a arăta **cum documentarea și imaginația pot recrea istoria** în imagini.

---

### **Maria Baciu, copilării cu autograf**  
📍 **Biblioteca Județeană „Mihai Eminescu”**  
*Curator: Blanche Anemone Pietraru*

### **Ilustrații de poveste**  
📍 **Sala de lectură a Bibliotecii Județene**  
Lucrări ale elevilor de la **Liceul de Artă „Ștefan Luchian”**  
*Curator: prof. Genoveva Dolhescu*

---

## 🛠 Ateliere & Workshopuri

- **Un pinguin celebru!** – *Dan Ungureanu*  
  Cum a apărut **Apolodor**, de la primele schițe la personajul final.

- **Character design în ilustrație și animație** – *Sabina Drinceanu & Bianca Simionescu*  
  Etapele de concepere și construcție a unui personaj:  
  fizionomie, gestică, mimică, vestimentație, tipologie.

- **Storyboard-ul în cartea ilustrată pentru copii** – *Sabina Drinceanu*  
  De la text la **narațiunea vizuală**: scene, personaje, atmosferă.

> Atelierele se desfășoară în colaborare cu **Liceul de Artă „Ștefan Luchian”** din Botoșani.

---

## 👥 Echipa Festivalului

- **Director:** Dan Lungu  
- **Director artistic:** Luminița Corneanu  
- **Curator:** Cezarina Caloian  
- **Director executiv:** Costică Roman  
- **Manager logistică & voluntari:** Alexandru Teioșanu  
- **Identitate vizuală:** Marinela Ciobanu  
- **Comunicare:** Irina Simniceanu  
- **Social Media:** Ana Maria Ionel  
- **Website:** Robert Pietraru

---

## 📢 Organizatori & Parteneri

- **Organizator:** Fundația Corona  
- **Finanțatori:** Consiliul Local & Primăria Municipiului Botoșani  

**Parteneri:**  
Inspectoratul Școlar Județean Botoșani • Teatrul Național „Mihai Eminescu” • Memorialul Ipotești – Centrul Național de Studii „Mihai Eminescu” • Biblioteca Județeană „Mihai Eminescu” • UNAGE Iași • Palatul Copiilor Botoșani • Casa Corpului Didactic Botoșani • Galeria ArtEast Iași • Tipografia Printco Iași • Agenția Caracteristic • CNIPT Botoșani • Asociația pentru Ospitalitate Culturală – AOC Iași • Asociația „De Basm” • Fundația Star of Hope – SOH România

**Edituri partenere:** Arthur • Polirom • Vlad și Cartea cu Genius • YoungArt • Minigrafic • Humanitas Junior • Gama • Alice Books  

**Parteneri media:** Radio România Cultural • TVR Cultural • TVR Iași • Buzz Botoșani • PressHub • Revista Clivaj • Botoșăneanul • VIVA FM • Monitorul de Botoșani • Observator Cultural  

**Sponsori:** Nea Ilie Bucătarul Sulița • Practic-Comerț-Strugaru S.R.L Darabani • Cofetăria Rida Botoșani • Artechwine Botoșani • Danimet Exim SRL • SC Optim Diagnostic SRL • SC S&S BISMGM SRL • Botoșani Shopping Center  

---

## 🎟 Acces
**Accesul la toate evenimentele din program este gratuit.**
`,
      },
      image: {
        en: '/assets/articles/press.jpg',
        ro: '/assets/articles/press.jpg'
      },
      category: 'news'
    },
    {
      id: "2",
      related: ["1", "3", "4"],
      featured: true,
      title: {
        en: 'The APOLODOR Workshop Registration is OPEN',
        ro: 'START la înscrierile pentru Atelierele APOLODOR'
      },
      date: '2025-09-05',
      image: {
        en: '/assets/articles/workshop_registration_en.png',
        ro: '/assets/articles/workshop_registration_ro.png'
      },
      category: 'program',

      excerpt: {
        en: 'Registration is OPEN for APOLODOR Workshops Comics, screenwriting, reportage, book illustration, printing techniques, and poetry come to life in Botoșani!',
        ro: 'START la înscrierile pentru Atelierele APOLODOR Benzile desenate, scenariul de film, reportajul, ilustrația de carte, tehnica tiparului și poezia prind viață la Botoșani! **Benzile desenate, scenariul de film, reportajul, ilustrația de carte, tehnica tiparului și poezia** prind viață la Botoșani!',
      },

      content: {
        en: `
# Registration is OPEN for **APOLODOR Workshops**

**Comics, screenwriting, reportage, book illustration, printing techniques, and poetry** come to life in Botoșani!

The **APOLODOR Children’s and Teen Literature Festival**, held under the **High Patronage of the Representation of the European Commission in Romania**, invites you not only to meet authors such as:

> Gabriela Adameșteanu • Matei Vișniec • Florin Bican • Svetlana Cârstean • Dan Ungureanu • Adina Popescu • Mircea Pricăjan • Mihnea Măruță

… but also to join **workshops** led by equally well-known and loved professionals.

**September 18 – 21 • Botoșani**

---

## Workshops

- **How to Write a Reportage** – *Viorel Ilișoi*  
  Mihai Eminescu Theatre

- **A Famous Penguin! How Apolodor Was Born** – *Dan Ungureanu*  
  **Book illustration** workshop with practical exercises

- **The Sonnet Typewriter** – *Ioana Bot*  
  Memorial of Ipotești – **creative writing**

- **From Book to Frame: Turning Stories into a Film Script** – *Mihai Mănescu*  
  Mihai Eminescu Theatre  
  **Minimum age:** 9 years

- **How a Book is Born** – Comics **workshop-competition** (GAMA Publishing House)  
  Mihai Eminescu Theatre – throughout all 4 festival days

- **Character Design in Illustration and Animation** – *Sabina Ana Drînceanu & Bianca Simionescu*  
  George Enescu National University of Arts – Iași (faculty members)

- **Storyboarding in Children’s Illustrated Books** – *Sabina Ana Drînceanu*

- **… to Labrador** – *Vasile Iftime*  
  Memorial of Ipotești – **creative writing (poetry)**, all 4 days

- **How Printing Was Done in Our Grandparents’ Time**  
  Memorial of Ipotești – **letterpress printing demonstration** with lead type

- **Digital Story-Telling Lab** – *Sorina Chiper*  
  **Creative expression & digital technology** exercises for multimedia experiences

> And the surprises don’t stop here — more details will be announced as the festival draws nearer!

---

## Details

The **APOLODOR Festival** was launched on **July 18** and runs **September 18 – 21**, funded by the **Local Council and Botoșani City Hall**.

Questions & partnerships: **apolodor.festival@gmail.com**

**Workshop registration:**  
[https://forms.gle/VuDQcHP9rC5mDTTLA](https://forms.gle/VuDQcHP9rC5mDTTLA)

---

## Organizer & Partners

- **Organizer:** Corona Foundation  
- **Funders:** Botoșani Local Council and City Hall

**Partners:** Botoșani County School Inspectorate • Mihai Eminescu National Theatre • Memorial of Ipotești – Mihai Eminescu National Study Center • Mihai Eminescu County Library • George Enescu National University of Arts Iași • Botoșani Children’s Palace • Botoșani Teacher Training Center • ArtEast Gallery Iași • Printco Printing House Iași • Caracteristic Agency • CNIPT Botoșani • Cultural Hospitality Association – AOC Iași • “De Basm” Association of Children’s and Teen Literature Writers

**Partner Publishers:** Arthur • Polirom • Vlad and the Genius Book • YoungArt • Minigrafic • Humanitas Junior • Gama • Alice Books

**Media Partners:** Radio România Cultural • TVR Cultural • TVR Iași • Buzz Botoșani • PressHub • Clivaj Magazine • botoșăneanul.ro • VIVA FM • Observator Cultural

**Sponsors:** Nea Ilie Bucătarul Sulița • Practic-Comerț-Strugaru S.R.L Darabani • Rida Confectionery Botoșani • Artechwine Botoșani • Danimet Exim SRL • SC Optim Diagnostic SRL

             `,
        ro: ` 
# START la înscrierile pentru **Atelierele APOLODOR**

**Benzile desenate, scenariul de film, reportajul, ilustrația de carte, tehnica tiparului și poezia** prind viață la Botoșani!

Festivalul de Literatură pentru Copii și Adolescenți **APOLODOR**, desfășurat sub **Înaltul Patronaj al Reprezentanței Comisiei Europene în România**, vă invită nu doar la întâlnirea cu scriitori precum:

> Gabriela Adameșteanu • Matei Vișniec • Florin Bican • Svetlana Cârstean • Dan Ungureanu • Adina Popescu • Mircea Pricăjan • Mihnea Măruță

… ci și la **ateliere** susținute de nume la fel de sonore și îndrăgite.

**18 – 21 septembrie • Botoșani**

---

## Ateliere

- **Cum scriem un reportaj?** – *Viorel Ilișoi*  
  Teatrul „Mihai Eminescu”

- **Un pinguin celebru! Cum a apărut Apolodor** – *Dan Ungureanu*  
  Atelier de **ilustrație de carte** cu exerciții practice.

- **Mașina de scris sonete** – *Ioana Bot*  
  Memorialul Ipotești – **scriere creativă**

- **De la carte la cadru: Cum transformi poveștile în scenariu de film** – *Mihai Mănescu*  
  Teatrul „Mihai Eminescu”  
  **Vârsta minimă:** 9 ani

- **Cum se naște o carte?** – Atelier-concurs de **benzi desenate** (Editura GAMA)  
  Teatrul „Mihai Eminescu” – toate cele 4 zile de festival

- **Character design în ilustrație și animație** – *Sabina Ana Drînceanu & Bianca Simionescu*  
  Universitatea Națională de Arte „George Enescu” – Iași (cadre universitare)

- **Storyboard-ul în cartea ilustrată pentru copii** – *Sabina Ana Drînceanu*

- **… spre Labrador** – *Vasile Iftime*  
  Memorialul Ipotești – **scriere creativă (poezie)**, în toate cele 4 zile

- **Cum se tipărea pe vreme bunicilor noștri?**  
  Memorialul Ipotești – demonstrație **tehnică tiparului înalt**, cu litere de plumb

- **Digital Story-Telling Lab** – *Sorina Chiper*  
  Exerciții de **exprimare creativă & tehnologie digitală** pentru experiențe multimedia

> Surprizele nu se opresc aici — mai multe detalii vor fi anunțate pe măsură ce ne apropiem de festival!

---

## Detalii

Festivalul **APOLODOR** a fost lansat pe **18 iulie** și se desfășoară **18 – 21 septembrie**, cu **finanțarea Consiliului Local și a Primăriei Municipiului Botoșani**.

Întrebări și parteneriate: **apolodor.festival@gmail.com**

**Înscrieri la ateliere:**  
[https://forms.gle/VuDQcHP9rC5mDTTLA](https://forms.gle/VuDQcHP9rC5mDTTLA)

---

## Organizator & Parteneri

- **Organizator:** Fundația Corona  
- **Finanțatori:** Consiliul Local și Primăria Municipiului Botoșani

**Parteneri:** Inspectoratul Școlar Județean Botoșani • Teatrul Național „Mihai Eminescu” • Memorialul Ipotești – Centrul Național de Studii „Mihai Eminescu” • Biblioteca Județeană „Mihai Eminescu” • Universitatea Națională de Arte „George Enescu” Iași • Palatul Copiilor Botoșani • Casa Corpului Didactic Botoșani • Galeria ArtEast Iași • Tipografia Printco Iași • Agenția Caracteristic • CNIPT Botoșani • Asociația pentru Ospitalitate Culturală – AOC Iași • Asociația „De Basm”

**Edituri partenere:** Arthur • Polirom • Vlad și Cartea cu Genius • YoungArt • Minigrafic • Humanitas Junior • Gama • Alice Books

**Parteneri media:** Radio România Cultural • TVR Cultural • TVR Iași • Buzz Botoșani • PressHub • Revista Clivaj • botoșăneanul.ro • VIVA FM • Observator Cultural

**Sponsori:** Nea Ilie Bucătarul Sulița • Practic-Comerț-Strugaru S.R.L Darabani • Cofetăria Rida Botoșani • Artechwine Botoșani • Danimet Exim SRL • SC Optim Diagnostic SRL
 
            `,
      },
    },
    {
      id: "3",
      related: ["1", "2", "4"],
      featured: true,
      title: {
        en: 'The schedule of the Children and Youth Literature Festival APOLODOR',
        ro: 'Programul Festivalului de Literatură pentru Copii și Adolescenți APOLODOR',
      },
      date: '2025-09-06',
      image: {
        en: '/assets/articles/program.jpg',
        ro: '/assets/articles/program.jpg'
      },
      category: 'workshops',

      excerpt: {
        ro: "Descoperă programul Festivalului de Literatură pentru Copii și Adolescenți APOLODOR",
        en: "Discover the schedule of the Children and Youth Literature Festival APOLODOR",
      },

      content: {
        en: `
# Children's and Teen Literature Festival APOLODOR  
**September 18–21, 2025**  
**Botoșani, Romania**

---

## Thursday, September 18

- **11:00 AM** – Opening of the exhibition with unpublished works by **Tia PELTZ**, “Illustrations for Ion Creangă’s Stories”, curated by **Dana LUNGU**, at the County Library “Mihai Eminescu”;  
- **12:00 PM – Authors among school desks**:  
  - **Adina ROSETTI** at Secondary School No. 7 Botoșani, coordinators: teachers Laura BUHACIUC, Daniela PRICOPCIUC, Loredana CARCEA;  
  - **Alex MOLDOVAN** at “A.T. Laurian” National College Botoșani, moderator teacher Anca GRĂDINARU;  
  - **Florin BICAN** at Secondary School No.13 / No.14 Botoșani, moderators: teachers Mihaela AIRINEI and Daniela PĂDURARU;  
  - **Veronica D. NICULESCU** at Secondary School No.12 Botoșani, moderators: teachers Dana-Georgeana ANDREI and Angela CHIRIAC;  
- **12:00 PM** – Opening of the exhibition “Maria Baciu, Childhoods with Autograph”, curated by **Blanche Anemone PIETRARU**, at the County Library “Mihai Eminescu”;  
- **1:00 PM** – “How is a book born?”, comic strip workshop-competition, hosted by **GAMA Publishing House** in the lobby of the “Mihai Eminescu” Theatre (a second workshop at 4:00 PM, same location);  
- **1:00 PM** – Opening of the exhibition by **Raluca Ioana BURCĂ**, “Neanderthal”, children’s book illustration, at the Teachers’ Resource Center;  
- **2:00 PM** – “The Typewriter of Sonnets”, creative writing workshop led by **Ioana BOT**, at the Ipotești Memorial;  
- **4:00 PM** – “… towards Labrador”, creative writing workshop (poetry) for students, led by writer **Vasile IFTIME** and teacher **Daniela Epureanu** (National College “Mihai Eminescu” Botoșani), at the Ipotești Memorial;  
- **6:00 PM** – Opening of the group exhibition “BookM@p. Cartography of Romanian Illustration”, curator **Cezarina CALOIAN**, lobby of the “Mihai Eminescu” Theatre;  
- **7:00 PM** – Official opening at the “Mihai Eminescu” Theatre, main hall. Followed by “Childhoods on Stage”, an evening of dialogue & storytelling with **Matei VIȘNIEC** and **Florin BICAN**, moderated by **Raluca AFTENE**. Free entry.  

---

## Friday, September 19

- **10:00 AM** – “How is a book born?”, comic strip workshop-competition, GAMA Publishing House, Theatre lobby (next workshops at 1:00 PM and 4:00 PM);  
- **11:00 AM** – Literary Cooking Workshop, at NOD Restaurant, Botoșani. Discussion on recipes from literature with **Florin BICAN** and **Ioana BOT**, cooking demonstration by gastronomy teacher **Cătălina ACATRINEI** and students of “Octav Onicescu” College, followed by tasting;  
- **11:00 AM** – Opening of the exhibition “Story Illustrations”, works by students from the Art High School “Ștefan Luchian”, curated by **Genoveva DOLHESCU**, at the County Library, Reading Room;  
- **11:00 AM** – Meeting with **Gabriela ADAMEȘTEANU**, at the “Mihai Eminescu” Theatre, Marble Hall, moderated by **Lucia ȘTEFĂNESCU**;  
- **11:30 AM** – Reading Club “Diamond Readers” (4th grade), meeting with **Alex MOLDOVAN**, County Library – Children’s Section;  
- **11:30 AM** – Reading Club “Where Shall We Run Away From Home?”, meeting with **Veronica D. NICULESCU**, County Library – Reading Room;  
- **12:00 PM – Authors among school desks**:  
  - **Mircea PRICĂJAN** at Secondary School No.10/ No.11, moderators: teachers Irina CONSTANTINESCU and Eugenia FILIP;  
  - **Mihai MĂNESCU** at “Elena Rareș” Secondary School, several teacher coordinators;  
  - **Adina POPESCU** at “Mihai Eminescu” National College, teacher coordinators Violeta ZAMFIRESCU, Daniela Paula EPURIANU, Irina HĂILĂ, Mihaela TIMINGERIU;  
  - **Dan UNGUREANU** at “Grigore Antipa” Secondary School, moderator teacher Georgeta-Iulia POPA;  
- **12:00 PM** – Book launch: “The Consulate of the Moon or Adelina and the Swamp Crocodiles” by **Matei VIȘNIEC**, at “A.T. Laurian” National College, moderator **Irina SIMINICEANU**;  
- **12:00 PM** – Opening of the exhibition “The School Museum of Communism”, at the Ipotești Memorial;  
- **1:00 PM** – Opening of the exhibition “1001 Book-Objects”, curated by **Cezarina CALOIAN**, at the Ipotești Memorial;  
- **1:00 PM** – Illustrators among school desks: **Raluca Ioana BURCĂ** with 3rd graders, Secondary School No.11;  
- **2:00 PM** – Workshop “Character Design in Illustration and Animation”, with **Sabina DRÎNCEANU** and **Bianca SIMIONESCU**, Art High School “Ștefan Luchian”;  
- **3:00 PM** – Meeting with **Raluca Ioana BURCĂ** and 2nd grade students at the Pedagogical High School;  
- **4:00 PM** – “… towards Labrador”, creative writing workshop, at Ipotești Memorial;  
- **5:00 PM** – “Eminescu’s Map”, guided tour in Botoșani, departure from City Hall;  
- **7:00 PM** – “Childhoods in the Feminine”, dialogue & storytelling with **Gabriela ADAMEȘTEANU** and **Svetlana CÂRSTEAN**, at the “Mihai Eminescu” Theatre, moderated by **Adela GRECEANU** and **Matei MARTIN**. Free entry.  

---

## Saturday, September 20

- **10:00 AM** – “How is a book born?”, comic strip workshop-competition, GAMA Publishing House (next workshops at 1:00 PM and 4:00 PM);  
- **11:00 AM** – “KitLit: How to make children friends with contemporary Romanian literature written for them.” Dialogue between writers and teachers. With: **Adina ROSETTI, Dan UNGUREANU, Florin BICAN, Alex MOLDOVAN, Mihai MĂNESCU**. Moderators: **Luminița CORNEANU** and **Isabella CANTEMIR**;  
- **12:00 PM** – Workshop “The Storyboard in Illustrated Children’s Books”, with **Sabina DRÎNCEANU**, Art High School “Ștefan Luchian”;  
- **1:30 PM** – “A Famous Penguin! How Apolodor Was Born – from first sketches to character”, discussion & illustration workshop with **Dan UNGUREANU**, at the Theatre, Marble Hall;  
- **1:00 PM** – Reading Club “Where Shall We Run Away From Home?”, meeting with **Adina POPESCU**, Secondary School No.7;  
- **4:00 PM** – “… towards Labrador”, creative writing workshop, at Ipotești Memorial;  
- **5:00 PM** – “Schools Before 1900”, guided tour in Botoșani, departure from City Hall;  
- **7:00 PM** – Conference: “Skibidi Ohio. Ten Effects of Social Media on Children and Teens”, by **Mihnea MĂRUȚĂ**;  
  - Concert by **Ada MILEA**.  
  - Both at the “Mihai Eminescu” Theatre. Free entry.  
  - Moderators: **Adela GRECEANU** and **Matei MARTIN**.  

---

## Sunday, September 21

- **10:00 AM** – “How is a book born?”, comic strip workshop-competition, GAMA Publishing House (next workshops at 1:00 PM and 4:00 PM);  
- **10:30 AM** – “From Book to Screen: How to Turn Stories into Film Scripts” (min age: 9), workshop with **Mihai MĂNESCU**, Theatre, Marble Hall;  
- **11:00 AM** – “… towards Labrador”, creative writing workshop, Ipotești Memorial;  
- **11:00 AM** – “How Was Printing Done in Our Grandparents’ Time?”, letterpress workshop with **Sorin HONCERU**, Ipotești Memorial;  
- **12:30 PM** – “How to Write a Reportage?”, workshop for teens with **Viorel ILIȘOI**, Theatre, Marble Hall;  
- **1:00 PM** – “Digital Story-Telling Lab”, workshop with **Sorina CHIPER**, “Mihai Eminescu” Theatre;  
- **2:30 PM** – Reading Club “Where Shall We Run Away From Home?”, meeting with **Florin BICAN** and **Dan UNGUREANU**, Theatre, Marble Hall.  

\* Program subject to minor changes.  

---

## Festival Team
- Director: **Dan Lungu**  
- Artistic Director: **Luminița Corneanu**  
- Illustration Exhibitions Curator: **Cezarina Caloian**  
- Executive Director: **Costică Roman**  
- Logistics & Volunteers Manager: **Alexandru Teioșanu**  
- Visual Identity: **Marinela Ciobanu**  
- Communication: **Irina Simniceanu**  
- Social Media: **Anamaria Ionel**  
- Website: **Robert Pietraru**

---

## Organizer and Partners
- **Organizer:** Corona Foundation  
- **Funders:** Botoșani Local Council and City Hall  
- **Partners:** Botoșani County School Inspectorate, “Mihai Eminescu” National Theatre, Ipotești Memorial – National Center for Mihai Eminescu Studies, County Library “Mihai Eminescu”, “George Enescu” National University of Arts Iași, Botoșani Children’s Palace, Teachers’ Resource Center, ArtEast Gallery Iași, Printco Printing House Iași, Caracteristic Agency, CNIPT Botoșani, AOC Iași, “De Basm” Association, Star of Hope Foundation Romania  
- **Partner Publishers:** Arthur, Polirom, Vlad și Cartea cu Genius, YoungArt, Minigrafic, Humanitas Junior, Gama, Alice Books  
- **Media Partners:** Radio România Cultural, TVR Cultural, TVR Iași, Buzz Botoșani, PressHub, Clivaj Magazine, Botoșăneanul, VIVA FM, Monitorul de Botoșani, Observator Cultural  
- **Sponsors:** Nea Ilie Bucătarul Sulița, Practic-Comerț-Strugaru SRL Darabani, Rida Confectionery, Artechwine Botoșani, Danimet Exim SRL, Optim Diagnostic SRL, S&S BISMGM SRL, Botoșani Shopping Center  

---

**Admission to all festival events is free.**

`,
        ro: `
# Programul Festivalului de Literatură pentru Copii și Adolescenți APOLODOR  
**18-21 septembrie 2025**  
**Botoșani**

---

## Joi, 18 septembrie

- **11.00** – Vernisajul expoziției cu lucrări inedite de **Tia PELTZ**, „Ilustrații la poveștile lui Ion Creangă”, curator **Dana LUNGU**, la Biblioteca Județeană „Mihai Eminescu”;  
- **12.00 – Autori printre bănci**:  
  - **Adina ROSETTI** la Școala Gimnazială Nr. 7 Botoșani, coordonatoare: prof. Laura BUHACIUC, prof. Daniela PRICOPCIUC, prof. Loredana CARCEA;  
  - **Alex MOLDOVAN** la Colegiul Național „A.T. Laurian” Botoșani, moderator prof. Anca GRĂDINARU;  
  - **Florin BICAN** la Școala Gimnazială Nr.13/ Nr.14 Botoșani, moderatoare: prof. Mihaela AIRINEI și prof. Daniela PĂDURARU;  
  - **Veronica D. NICULESCU** la Școala Gimnazială Nr.12 Botoșani, moderatoare: prof. Dana-Georgeana ANDREI și prof. Angela CHIRIAC;  
- **12.00** – Vernisajul expoziției „Maria Baciu, copilării cu autograf”, curator **Blanche Anemone PIETRARU**, la Biblioteca Județeană „Mihai Eminescu”;  
- **13.00** – „Cum se naște o carte?”, atelier-concurs de benzi desenate, Editura GAMA, foaierul Teatrului „Mihai Eminescu” (al doilea atelier la ora 16.00, același loc);  
- **13.00** – Vernisajul expoziției **Raluca Ioana BURCĂ**, „Neanderthal”, la Casa Corpului Didactic;  
- **14.00** – „Mașina de scris sonete”, atelier de scriere creativă susținut de **Ioana BOT**, la Memorialul Ipotești;  
- **16.00** – „… spre Labrador”, atelier de scriere creativă (poezie) pentru elevi, susținut de **Vasile IFTIME** și prof. **Daniela Epureanu**, la Memorialul Ipotești;  
- **18.00** – Vernisajul expoziției colective „BookM@p. Cartografia ilustrației românești”, curator **Cezarina CALOIAN**, foaierul Teatrului „Mihai Eminescu”;  
- **19.00** – Deschiderea oficială la Teatrul „Mihai Eminescu”, Sala de spectacol. Urmată de „Copilării pe scenă”, dialog & povestiri cu **Matei VIȘNIEC** și **Florin BICAN**, moderatoare **Raluca AFTENE**. Intrarea liberă.  

---

## Vineri, 19 septembrie

- **10.00** – „Cum se naște o carte?”, atelier-concurs de benzi desenate, Editura GAMA, foaierul Teatrului „Mihai Eminescu” (următoarele la 13.00 și 16.00);  
- **11.00** – Atelier de bucate literare, Restaurantul NOD. Discuție susținută de **Florin BICAN** și **Ioana BOT**, partea practică: prof. **Cătălina ACATRINEI** și elevi de la Colegiul „Octav Onicescu”;  
- **11.00** – Vernisajul expoziției „Ilustrații de poveste”, elevi de la Liceul de Artă „Ștefan Luchian”, curator: prof. **Genoveva DOLHESCU**, la Biblioteca Județeană;  
- **11.00** – Întâlnire cu **Gabriela ADAMEȘTEANU**, Teatrul „Mihai Eminescu”, Sala de Marmură, moderatoare **Lucia ȘTEFĂNESCU**;  
- **11.30** – Clubul de lectură „Cititorii de diamant” (cl. a IV-a), întâlnire cu **Alex MOLDOVAN**, la Biblioteca Județeană, Secția pentru copii;  
- **11.30** – Clubul „Unde fugim de-acasă?”, întâlnire cu **Veronica D. NICULESCU**, la Biblioteca Județeană, Sala de lectură;  
- **12.00 – Autori printre bănci**:  
  - **Mircea PRICĂJAN** la Școala Gimnazială Nr.10/ Nr.11 Botoșani, moderatoare: prof. Irina CONSTANTINESCU și prof. Eugenia FILIP;  
  - **Mihai MĂNESCU** la Școala Gimnazială „Elena Rareș”, coordonatori: mai mulți profesori;  
  - **Adina POPESCU** la Colegiul Național „Mihai Eminescu”, coordonatoare: prof. Violeta ZAMFIRESCU, prof. Daniela Paula EPURIANU, prof. Irina HĂILĂ și prof. Mihaela TIMINGERIU;  
  - **Dan UNGUREANU** la Școala Gimnazială „Grigore Antipa”, moderator înv. Georgeta-Iulia POPA;  
- **12.00** – Lansarea cărții „Consulatul Lunii sau Adelina și crocodilii de mlaștină” de **Matei VIȘNIEC**, Colegiul Național „A.T. Laurian”;  
- **12.00** – Vernisaj: „Muzeul școlar al comunismului”, Memorialul Ipotești;  
- **13.00** – Vernisajul expoziției „1001 de cărți-obiect”, curator **Cezarina CALOIAN**, la Memorialul Ipotești;  
- **13.00** – Ilustratori printre bănci: **Raluca Ioana BURCĂ** cu elevii clasei a III-a, Școala Gimnazială Nr.11;  
- **14.00** – Workshop „Character design în ilustrație și animație”, cu **Sabina DRÎNCEANU** și **Bianca SIMIONESCU**, Liceul de Artă „Ștefan Luchian”;  
- **15.00** – Întâlnire cu elevii Liceului Pedagogic, clasa a II-a B „Step by Step”, cu **Raluca Ioana BURCĂ**;  
- **16.00** – „… spre Labrador”, atelier de scriere creativă, Memorialul Ipotești;  
- **17.00** – „Harta Eminescu”, tur ghidat în Botoșani, pornire din fața Primăriei;  
- **19.00** – „Copilării la feminin”, dialog & povestiri cu **Gabriela ADAMEȘTEANU** și **Svetlana CÂRSTEAN**, Teatrul „Mihai Eminescu”, moderatori **Adela GRECEANU** și **Matei MARTIN**. Intrarea liberă.  

---

## Sâmbătă, 20 septembrie

- **10.00** – „Cum se naște o carte?”, atelier-concurs de benzi desenate, Editura GAMA (următoarele la 13.00 și 16.00);  
- **11.00** – „KitLit: Cum să împrietenim copiii cu literatura română contemporană dedicată lor”. Dialog scriitori & profesori. Participă: **Adina ROSETTI, Dan UNGUREANU, Florin BICAN, Alex MOLDOVAN, Mihai MĂNESCU**. Moderatoare: **Luminița CORNEANU** și **Isabella CANTEMIR**;  
- **12.00** – Workshop „Storyboard-ul în cartea ilustrată pentru copii”, cu **Sabina DRÎNCEANU**, Liceul de Artă „Ștefan Luchian”;  
- **13.30** – „Un pinguin celebru! Cum a apărut Apolodor…”, discuție și atelier de ilustrație cu **Dan UNGUREANU**, Teatrul „Mihai Eminescu”, Sala de Marmură;  
- **13.00** – Clubul „Unde fugim de-acasă?”, întâlnire cu **Adina POPESCU**, la Școala Gimnazială Nr.7;  
- **16.00** – „… spre Labrador”, atelier de scriere creativă, Memorialul Ipotești;  
- **17.00** – „Școli de dinainte de 1900”, tur ghidat în Botoșani, pornire din fața Primăriei;  
- **19.00** – Conferința „Skibidi Ohio. Zece efecte ale rețelelor sociale asupra copiilor și adolescenților”, susținută de **Mihnea MĂRUȚĂ**;  
  - Concert **Ada MILEA**.  
  - Ambele la Teatrul „Mihai Eminescu”. Intrarea liberă.  
  - Moderatori: **Adela GRECEANU** și **Matei MARTIN**.  

---

## Duminică, 21 septembrie

- **10.00** – „Cum se naște o carte?”, atelier-concurs de benzi desenate, Editura GAMA (următoarele la 13.00 și 16.00);  
- **10.30** – „De la carte la cadru: Cum transformi poveștile în scenariu de film” (minim 9 ani), atelier cu **Mihai MĂNESCU**, Sala de Marmură;  
- **11.00** – „… spre Labrador”, atelier de scriere creativă, Memorialul Ipotești;  
- **11.00** – „Cum se tipărea pe vreme bunicilor noștri?”, atelier de tipar înalt cu **Sorin HONCERU**, Memorialul Ipotești;  
- **12.30** – „Cum scriem un reportaj?”, atelier pentru adolescenți cu **Viorel ILIȘOI**, Sala de Marmură;  
- **13.00** – „Digital Story-Telling Lab”, atelier cu **Sorina CHIPER**, Teatrul „Mihai Eminescu”;  
- **14.30** – Clubul „Unde fugim de-acasă?”, întâlnire cu **Florin BICAN** și **Dan UNGUREANU**, Sala de Marmură;  

\* Programul poate suferi modificări minore.  

---

## Echipa festivalului
- Director: **Dan Lungu**  
- Director artistic: **Luminița Corneanu**  
- Curator al expozițiilor de ilustrație: **Cezarina Caloian**  
- Director executiv: **Costică Roman**  
- Manager logistică și voluntari: **Alexandru Teioșanu**  
- Identitate vizuală: **Marinela Ciobanu**  
- Comunicare: **Irina Simniceanu**  
- Social Media: **Anamaria Ionel**  
- Website: **Robert Pietraru**

---

## Organizator și parteneri
- **Organizator:** Fundația Corona  
- **Finanțatori:** Consiliul Local și Primăria Municipiului Botoșani  
- **Parteneri:** Inspectoratul Școlar Județean Botoșani, Teatrul Național „Mihai Eminescu” Botoșani, Memorialul Ipotești, Biblioteca Județeană „Mihai Eminescu”, Universitatea Națională de Arte „George Enescu” Iași, Palatul Copiilor Botoșani, Casa Corpului Didactic Botoșani, Galeria ArtEast Iași, Tipografia Printco Iași, Agenția Caracteristic, CNIPT Botoșani, AOC Iași, Asociația „De Basm”, Fundația Star of Hope România  
- **Edituri partenere:** Editura Arthur, Polirom, Vlad și Cartea cu Genius, YoungArt, Minigrafic, Humanitas Junior, Gama, Alice Books  
- **Parteneri media:** Radio România Cultural, TVR Cultural, TVR Iași, Buzz Botoșani, PressHub, Revista Clivaj, Botoșăneanul, VIVA FM, Monitorul de Botoșani, Observator Cultural  
- **Sponsori:** Nea Ilie Bucătarul Sulița, Practic-Comerț-Strugaru S.R.L Darabani, Cofetăria Rida, Artechwine, Danimet Exim SRL, SC Optim Diagnostic SRL, SC S&S BISMGM SRL, Botoșani Shopping Center  

---

**Accesul la toate evenimentele din program este gratuit.**
            `,
      },
    }


  ];

export const featuredArticleIds = [
  "3",
  "2",
  "1",
];