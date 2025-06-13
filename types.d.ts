export interface HeroSection {
    _id: string
    _createdAt: string
    _type: 'heroSection'
    title: string
    subTitle: string
    mainImage: {
      _type: 'image'
      alt: string
      asset: {
        _ref: string
        _type: 'reference'
      }
    }
  }
  