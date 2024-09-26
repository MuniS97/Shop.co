import { Brands } from "@/components/server/Brands"
import Container from "@/components/server/Container"
import CustomerReviewsCarousel from "@/components/client/CustomReviewsSwiper"
import BrowseByDressStyle from "@/components/server/DressStyle"
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
            <BrowseByDressStyle />
            <CustomerReviewsCarousel />
        </main>
    )
}

export default Page