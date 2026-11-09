export type EventKind = "baptism" | "birthday";

export type EventInfo = {
    kind: EventKind,
    title: string,
    description: string,
    dateTime: string,
    location: {
        name: string,
        address: string,
        mapUrl?: string,
    }
}

export type MilestonePhoto = {
    src: string,
    alt: string,
    caption: string,
    month: number,
}

export type ChildProfile = {
    name: string,
    heroText: string,
    about: string,
    galleryIntro: string,
    heroPhoto: string,
    photos: MilestonePhoto[],
}