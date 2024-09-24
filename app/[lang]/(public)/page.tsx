import { Hero } from "@/components/server/Hero"
import { getDictionary, Locale } from "@/lib/dictionaries"

const Page = async ({ params: { lang } }: { params: { lang: Locale } }) => {
    const { homePage } = await getDictionary(lang)

    return (
        <div>
            <Hero />
        </div>
    )
}

export default Page