import Header from "@/components/server/Header";
import Container from "@/components/server/Container";
import Footer from "@/components/server/Footer";
import { getDictionary, Locale } from "@/lib/dictionaries";

export default function PublicLayout({
    children,
    params: { lang },
}: Readonly<{
    children: React.ReactNode;
    params: { lang: Locale };
}>) {
    // const {  } = getDictionary(lang);

    return (
        <Container>
            <Header className="my-5" />
            {children}
            <Footer />
        </Container>
    );
}
