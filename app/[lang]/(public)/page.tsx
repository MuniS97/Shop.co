import { getDictionary, Locale } from "@/lib/dictionaries"

const Page = async ({ params: { lang } }: { params: { lang: Locale } }) => {
    const { homePage } = await getDictionary(lang)

    return (
        <div>
            {homePage.title}
        </div>
    )
}

export default Page