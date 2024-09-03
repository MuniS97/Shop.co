import Header from "@/components/server/Header";
import Container from "@/components/server/Container";

export default function PublicLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Container>
            <Header className="my-5" />
            {children}

        </Container>
    );
}
