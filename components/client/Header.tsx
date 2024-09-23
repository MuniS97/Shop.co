import Image from "next/image"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { CircleUserRound, Menu, Search, ShoppingCart } from "lucide-react"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Navbar from "../server/HeaderNavbar"
import SearchInput from "./SearchInput"


interface HeaderProps {
    className?: string
    translation: {
        navbar: {
            menu: string
            gettingStarted: {
                title: string;
                types: {
                    casual: string;
                    classic: string;
                };
            };
            onSale: string;
            newArrivals: string;
            brands: string;
        };
        search: {
            title: string;
            placeholder: string;
        };
    };
}

const Header = ({ className, translation }: HeaderProps) => {
    return (
        <header className={cn("flex items-center justify-between gap-10 max-xl:gap-5", className)}>
            {/* burger menu modal */}
            <div className="md:hidden">
                <Sheet>
                    <SheetTrigger ><Menu width={24} height={24} /></SheetTrigger>
                    <SheetContent side="left">
                        <SheetHeader>
                            <SheetTitle>{translation.navbar.menu}</SheetTitle>
                        </SheetHeader>
                        <Navbar translation={translation.navbar} />
                    </SheetContent>
                </Sheet>
            </div>

            {/* logo | navbar | searchInput */}
            <Link href={'/'} className="w-full max-w-[140px] max-xl:max-w-[100px]">
                <Image src="/icons/logo.svg" alt="logo" width={140} height={25} className="object-cover max-xl:w-[100px]" />
            </Link>
            <div className="max-md:hidden">
                <Navbar translation={translation.navbar} />
            </div>
            <div className="w-full max-lg:hidden">
                <SearchInput translation={translation.search} />
            </div>

            <div className="flex items-center gap-4">
                <Dialog>
                    <DialogTrigger className="lg:hidden"><Search width={24} height={24} /></DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>{translation.search.title}</DialogTitle>
                        </DialogHeader>
                        <SearchInput translation={translation.search} />
                    </DialogContent>
                </Dialog>
                <Link href={'/cart'}>
                    <ShoppingCart width={24} height={24} className="max-xl:w-5 h-5" />
                </Link>
                <Link href={'/account'}>
                    <CircleUserRound width={24} height={24} className="max-xl:w-5 h-5" />
                </Link>
            </div>
        </header>
    )
}

export default Header