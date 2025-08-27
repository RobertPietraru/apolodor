import { getLocale } from '$lib/paraglide/runtime.js';
import { getBaseMetadata, type PageMetadata } from '$lib/utils/metadata';
function getPartnersMetadata(locale: string): PageMetadata {
    const base = getBaseMetadata(locale);
    const partnersTitle = locale === 'en' ? 'Our Partners' : 'Partenerii Noștri';
    const partnersDesc = locale === 'en'
        ? 'Meet our valued partners and sponsors who make the APOLODOR Children and Youth Literature Festival possible.'
        : 'Cunoaște partenerii și sponsorii noștri valoroși care fac posibil Festivalul de Literatură pentru Copii și Adolescenți APOLODOR.';

    return {
        ...base,
        title: `${partnersTitle} | ${base.title}`,
        description: partnersDesc,
        ogTitle: partnersTitle,
        ogDescription: partnersDesc
    };
}

export const load = async () => {
    const locale = getLocale();
    const partners = {
        "Parteneri instituționali": [
            'Inspectoratul Școlar Județean Botoșani',
            'Teatrul Național "Mihai Eminescu" Botoșani',
            'Memorialul Ipotești - Centrul Național de Studii "Mihai Eminescu"',
            'Biblioteca Județeană "Mihai Eminescu" Botoșani',
            'Universitatea Națională de Arte "George Enescu" din Iași',
            'Palatul Copiilor Botoșani',
            'Casa Corpului Didactic Botoșani',
            'Galeria ArtEast Iași',
            'Tipografia Printco Iași',
            'Agenția Caracteristic',
            'CNIPT Botoșani',
            'Asociația pentru Ospitalitate Culturală - AOC Iași',
            'Fundația Star of Hope – SOH Iași',
            'Asociația Scriitorilor de Literatură pentru Copii și Adolescenți din România – „De basm"'
        ],

        "Edituri partenere": [
            'Editura Arthur',
            'Editura Polirom',
            'Editura Vlad și Cartea cu Genius',
            'Editura YoungArt',
            'Editura Minigrafic',
            'Editura Humanitas Junior',
            'Editura Gama',
            'Editura Alice Books'
        ],

        "Parteneri media": [
            'Radio România Cultural',
            'TVR Cultural',
            'TVR Iasi',
            'Buzz Botoșani',
            'PressHub',
            'Revista Clivaj',
            'Viva FM',
            'Observator Cultural'
        ],

        "Sponsori": [
            'Nea Ilie Bucătarul Sulița',
            'Practic-Comerț-Strugaru S.R.L Darabani',
            'Cofetăria Rida Botoșani',
            'Artechwine Botoșani',
            'Danimet Exim SRL'
        ]
    };

    const partnersEN = {
        "Institutional Partners": [
            'Botoșani County School Inspectorate',
            'Mihai Eminescu National Theater Botoșani',
            'Ipotești Memorial - Mihai Eminescu National Study Center',
            'Mihai Eminescu County Library Botoșani',
            'George Enescu National University of Arts Iași',
            'Children\'s Palace Botoșani',
            'Teaching Staff House Botoșani',
            'ArtEast Gallery Iași',
            'Printco Typography Iași',
            'Caracteristic Agency',
            'CNIPT Botoșani',
            'Cultural Hospitality Association - AOC Iași',
            'Star of Hope Foundation – SOH Iași',
            'Romanian Association of Children and Youth Literature Writers – „De basm"'
        ],

        "Partner Publishers": [
            'Arthur Publishing House',
            'Polirom Publishing House',
            'Vlad and the Genius Book Publishing House',
            'YoungArt Publishing House',
            'Minigrafic Publishing House',
            'Humanitas Junior Publishing House',
            'Gama Publishing House',
            'Alice Books Publishing House'
        ],

        "Media Partners": [
            'Radio Romania Cultural',
            'TVR Cultural',
            'TVR Iasi',
            'Buzz Botoșani',
            'PressHub',
            'Clivaj Magazine',
            'Viva FM',
            'Cultural Observer'
        ],

        "Sponsors": [
            'Nea Ilie the Cook Sulița',
            'Practic-Comerț-Strugaru S.R.L Darabani',
            'Rida Confectionery Botoșani',
            'Artechwine Botoșani',
            'Danimet Exim SRL'
        ]
    };

    return {
            partners : locale === 'en' ? partnersEN : partners,
            metadata: getPartnersMetadata(locale)
        };
    };