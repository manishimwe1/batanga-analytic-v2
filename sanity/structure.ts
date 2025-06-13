import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Blog')
    .items([
      S.documentTypeListItem('heroSection').title('heroSection'),
      S.documentTypeListItem('statCard').title('StatCard'),
      S.documentTypeListItem('aboutUs').title('AboutUs'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['heroSection', 'statCard', 'aboutUs'].includes(item.getId()!),
      ),
    ])
