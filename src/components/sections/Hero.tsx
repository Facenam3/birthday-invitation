import { profile } from "@/data/profile";
import { invitationContent } from "@/data/content";

export function Hero() {
    return (
        <div
            id="home"
            className="flex justify-center items-center p-10 min-h-screen"
        >
            <section
                className="p-5 bg-cream-light/75 border-2 border-ink shadow-xl rounded-2xl lg:w-1/2"
            >
                <h1 className="text-accent text-3xl font-bold mb-2">{invitationContent.hero.title}</h1>
                <p className="text-md font-semibold text-ink mb-2">{invitationContent.hero.description} {profile.name}.</p>
                <button
                    className="px-3 py-2 text-center bg-accent text-md text-white border-2 border-ink rounded-xl"
                >
                    {invitationContent.hero.buttonLabel}
                </button>
                
            </section>
        </div>
    )
}