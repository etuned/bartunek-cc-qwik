
export interface Post {
    _id?: string;
    _createdAt?: string;
    _updatedAt?: string;
    title?: string;
    slug?: string;
    mainImage?: {
        alt: string;
        src: string;
        blurhash: string;
        lqip: string;
        colorDominant: {
            background: string;
            foreground: string;
            title: string;
        }
        colorVibrant: {
            background: string;
            foreground: string;
            title: string;
        }
    }
    date?: string;
    categories?: [
        {
        _id: string;
        name: string;
        description: string;
        }
    ]
    authors?: [Author]
    short?: string;
    mainContent?: [object]
}


export interface Project {
    _id?: string;
    _createdAt?: string;
    _updatedAt?: string;
    index: number;
    name?: string;
    mainImage?: {
        alt: string;
        src: string;
        blurhash: string;
        lqip: string;
        colorDominant: {
            background: string;
            foreground: string;
            title: string;
        }
        colorVibrant: {
            background: string;
            foreground: string;
            title: string;
        }
    }
    codeUrl?: {
        isPrivate: boolean;
        link: string;
    }
    liveUrl?: {
        isPrivate: boolean;
        link: string;
    }
    dates?: {
        isInProgress?: string;
        startDate: string;
        endDate?: string;
    }
    employer?: {
        _id: string;
        name: string;
        image: {
            alt: string;
            src: string;
            blurhash: string;
            lqip: string;
            colorDominant: {
                background: string;
                foreground: string;
                title: string;
            }
            colorVibrant: {
                background: string;
                foreground: string;
                title: string;
            }
        }
    }
    technologies?: [
        {
            _id: string;
            title: string;
            description: string;
        }
    ]
    short?: string;
    description?: [object]
}

interface Author {
    name: string;
    image: {
        alt: string;
        src: string;
        blurhash: string;
        lqip: string;
        colorDominant: {
            background: string;
            foreground: string;
            title: string;
        }
        colorVibrant: {
            background: string;
            foreground: string;
            title: string;
        }
    }
}