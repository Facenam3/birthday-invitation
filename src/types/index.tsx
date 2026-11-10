export type EventKind = "baptism" | "birthday";

export type EventInfo = {
    kind: EventKind;
    title: string;
    description: string;
    dateTime: string;
    location: {
        name: string;
        address: string;
        mapUrl?: string;
    }
}

export type MilestonePhoto = {
    src: string;    
    alt: string;
    caption: string;
    month: number;
}

export type ChildProfile = {
    name: string;
    heroPhoto: string;
    photos: MilestonePhoto[];
}

export type SectionCopy = {
    title: string;
    description: string;
}

export type InvitationContent = {
    hero: SectionCopy & {
        buttonLabel: string;
    };
    introduction: SectionCopy;
    gallery: SectionCopy;
    rsvp: SectionCopy;
}