import type { StructureResolver } from 'sanity/structure'
import { PackageIcon } from '@sanity/icons'
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items(S.documentTypeListItems())
    .items([
      S.documentTypeListItem('slide').title('Slide').icon(PackageIcon),
    ])