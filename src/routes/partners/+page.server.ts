import { getLocale } from '$lib/paraglide/runtime.js';

const prerender = true;

export async function load() {
    const locale = getLocale();
    return {
        partners: locale === 'ro' ? partners : partnersEN
    };
}

const partners = {
    institutional: [
        'Inspectoratul Școlar Județean Botoșani',
        "Teatrul Național 'Mihai Eminescu' Botoșani",
        "Memorialul Ipotești - Centrul Național de Studii 'Mihai Eminescu'",
        "Biblioteca Județeană 'Mihai Eminescu' Botoșani",
        "Universitatea Națională de Arte 'George Enescu' din Iași",
        'Palatul Copiilor Botoșani',
        'Casa Corpului Didactic Botoșani',
        'Galeria ArtEast Iași',
        'Tipografia Printco Iași',
        'Agenția Caracteristic',
        'CNIPT Botoșani',
        'Asociația pentru Ospitalitate Culturală - AOC Iași',
        'Fundația Star of Hope – SOH Iași'
    ],
    publishers: [
        'Editura Arthur',
        'Editura Polirom',
        'Editura Vlad și Cartea cu Genius',
        'Editura YoungArt',
        'Editura Minigrafic',
        'Editura Humanitas Junior',
        'Editura Gama',
        'Editura Alice Books'
    ],
    media: [
        'Radio România Cultural',
        'TVR Cultural',
        'TVR Iasi',
        'Buzz Botoșani',
        'PressHub',
        'Revista Clivaj',
        'Viva FM',
        'Observator Cultural'
    ],
    sponsors: [
        'Nea Ilie Bucătarul Sulița',
        'Practic-Comerț-Strugaru S.R.L Darabani',
        'Cofetăria Rida Botoșani',
        'Artechwine Botoșani',
        'Danimet Exim SRL'
    ]
};

const partnersEN = {
    institutional: [
        'Botoșani County School Inspectorate',
        "Mihai Eminescu National Theater Botoșani",
        "Ipotești Memorial - Mihai Eminescu National Study Center",
        "Mihai Eminescu County Library Botoșani",
        "George Enescu National University of Arts Iași",
        'Children\'s Palace Botoșani',
        'Teaching Staff House Botoșani',
        'ArtEast Gallery Iași',
        'Printco Typography Iași',
        'Caracteristic Agency',
        'CNIPT Botoșani',
        'Cultural Hospitality Association - AOC Iași',
        'Star of Hope Foundation – SOH Iași'
    ],
    publishers: [
        'Arthur Publishing House',
        'Polirom Publishing House',
        'Vlad and Genius Book Publishing House',
        'YoungArt Publishing House',
        'Minigrafic Publishing House',
        'Humanitas Junior Publishing House',
        'Gama Publishing House',
        'Alice Books Publishing House'
    ],
    media: [
        'Radio Romania Cultural',
        'TVR Cultural',
        'TVR Iasi',
        'Buzz Botoșani',
        'PressHub',
        'Clivaj Magazine',
        'Viva FM',
        'Cultural Observer'
    ],
    sponsors: [
        'Botoșani County School Inspectorate',
        "Mihai Eminescu National Theater Botoșani",
        "Ipotești Memorial - Mihai Eminescu National Study Center",
        "Mihai Eminescu County Library Botoșani",
        "George Enescu National University of Arts Iași",
        'Children\'s Palace Botoșani',
        'Teaching Staff House Botoșani',
        'ArtEast Gallery Iași',
        'Printco Typography Iași',
        'Caracteristic Agency',
        'CNIPT Botoșani',
        'Cultural Hospitality Association - AOC Iași',
        'Star of Hope Foundation – SOH Iași'
    ]
};