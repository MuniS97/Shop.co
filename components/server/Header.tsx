import Image from "next/image"
import Navbar from "./HeaderNavbar"
import { cn } from "@/lib/utils"
import SearchInput from "../client/SearchInput"
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
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


interface HeaderProps {
    className?: string
}

const Header = ({ className }: HeaderProps) => {
    return (
        <header className={cn("flex items-center justify-between gap-10 max-xl:gap-5", className)}>
            {/* burger menu modal */}
            <div className="md:hidden">
                <Sheet>
                    <SheetTrigger ><Menu width={24} height={24} /></SheetTrigger>
                    <SheetContent side="left">
                        <SheetHeader>
                            <SheetTitle>Menu</SheetTitle>
                        </SheetHeader>
                        <Navbar />
                    </SheetContent>
                </Sheet>
            </div>

            {/* logo | navbar | searchInput */}
            <Link href={'/'} className="w-full max-w-[140px] max-xl:max-w-[100px]">
                <Image src="/icons/logo.svg" alt="logo" width={140} height={25} className="object-cover max-xl:w-[100px]" />
            </Link>
            <div className="max-md:hidden">
                <Navbar />
            </div>
            <div className="w-full max-lg:hidden">
                <SearchInput />
            </div>

            <div className="flex items-center gap-4">
                <Dialog>
                    <DialogTrigger className="lg:hidden"><Search width={24} height={24} /></DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Search</DialogTitle>
                        </DialogHeader>
                        <SearchInput />
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