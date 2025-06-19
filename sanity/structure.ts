import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Blog')
    .items([
      S.documentTypeListItem('heroSection').title('heroSection'),
      S.documentTypeListItem('statCard').title('StatCard'),
      S.documentTypeListItem('feature').title('Feature'),
      S.documentTypeListItem('service').title('Services'),
      S.documentTypeListItem('feedback').title('Feedbacks'),
      S.documentTypeListItem('aboutUs').title('AboutUs'),
      S.documentTypeListItem('contactForm').title('ContactForm'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['heroSection', 'statCard','service','feedback', 'aboutUs','feature','contactForm'].includes(item.getId()!),
      ),
    ])

    