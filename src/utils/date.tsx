const eventDateFormatter = new Intl.DateTimeFormat('mk-MK', {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "Europe/Skopje",
})

export function formatEventDateTime(value: string): string {
    const date = new Date(value);

    if(Number.isNaN(date.getTime())) {
        throw new Error(`Invalid event dateTime: ${value}`)
    }

    return eventDateFormatter.format(date);
}