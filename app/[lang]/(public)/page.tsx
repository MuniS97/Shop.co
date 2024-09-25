import { Brands } from "@/components/server/Brands"
import Container from "@/components/server/Container"
import { Hero } from "@/components/server/Hero"
import { Products } from "@/components/server/Products"
import { Separator } from "@/components/ui/separator"
import { getDictionary, Locale } from "@/lib/dictionaries"

const Page = async ({ params: { lang } }: { params: { lang: Locale } }) => {
    const { homePage } = await getDictionary(lang)

    return (
        <main>
            <Hero />
            <Brands />
            <Products title="NEW ARRIVALS" />
            <Container>
                <Separator />
            </Container>
            <Products title="TOP SELLING" />
        </main>
    )
}

export default Page