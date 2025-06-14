export interface HeroSectionType {
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
  
export interface StatCardType {
    _id: string
    _createdAt: string
    title: string
    number: number
}

export interface ServicesType {
    _id: string
    _createdAt: string
    cardTitle: string
    cardDescription: string
    buttonText: string
}

export interface FeedbackType {
    _id: string
    _createdAt: string
    userName: string
    feedback: string
    numberStar: number
    userImage: {
      _type: 'image'
      alt: string
      asset: {
        _ref: string
        _type: 'reference'
      }
    }
}



export interface AboutUs{
    _id: string
    _createdAt: string
    title: string
    subTitle: string;
    addititionalContent: string;
    image: {
        _type: 'image'
        alt: string
        asset: {
          _ref: string
          _type: 'reference'
        }
      }
}
