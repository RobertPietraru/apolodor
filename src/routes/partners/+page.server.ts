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
        'Parteneri principali': [
            'Consiliul Local Botoșani',
            'Primăria Municipiului Botoșani',
            'Fundația Corona'
        ],
        'Parteneri culturali': [
            'Biblioteca Județeană Mihai Eminescu',
            'Teatrul Municipal Botoșani',
            'Casa de Cultură a Municipiului Botoșani'
        ],
        'Parteneri media': [
            'Radio Botoșani',
            'Ziar Local Plus',
            'Botoșani News'
        ],
        'Sponsori': [
            'Editura Cartea Românească',
            'Editura Arthur',
            'Librăria Humanitas'
        ]
    };

    return {
        partners,
        metadata: getPartnersMetadata(locale)
    };
};