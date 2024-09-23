import Header from "@/components/server/Header";
import Container from "@/components/server/Container";
import Footer from "@/components/client/Footer";
import { getDictionary, Locale } from "@/lib/dictionaries";

export default async function PublicLayout({
    children,
    params: { lang },
}: Readonly<{
    children: React.ReactNode;
    params: { lang: Locale };
}>) {
    const { header, footer } = await getDictionary(lang);
    return (
        <Container>
            <Header className="my-5" translation={header} />
            {children}
            <Footer translation={footer} />
        </Container>
    );
}
