import { cn } from "@/lib/utils"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "../ui/navigation-menu"
interface NavbarProps {
    className?: string
}

const Navbar = ({ className }: NavbarProps) => {
    return (
        <NavigationMenu className={cn("flex justify-center items-center gap-4 max-md:flex-col max-md:justify-start max-md:items-start", className)}>
            <NavigationMenuList>
                <NavigationMenuItem className="max-md:hidden">
                    <NavigationMenuTrigger className="text-base max-xl:p-1">Getting started</NavigationMenuTrigger>
                    <NavigationMenuContent className="flex justify-center items-start flex-col gap-2 p-5">
                        <NavigationMenuLink href="/men" className="flex justify-start items-center gap-2 hover:bg-gray-200 py-1 px-2 rounded w-full">Casual</NavigationMenuLink>
                        <NavigationMenuLink href="/men" className="flex justify-start items-center gap-2 hover:bg-gray-200 py-1 px-2 rounded w-full">Classic</NavigationMenuLink>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuLink className="max-md:w-full text-base max-xl:p-1 cursor-pointer px-2 py-1 rounded hover:bg-gray-200 transition-all truncate">On Sale</NavigationMenuLink>
            <NavigationMenuLink className="max-md:w-full text-base max-xl:p-1 cursor-pointer px-2 py-1 rounded hover:bg-gray-200 transition-all truncate">New Arrivals</NavigationMenuLink>
            <NavigationMenuLink className="max-md:w-full text-base max-xl:p-1 cursor-pointer px-2 py-1 rounded hover:bg-gray-200 transition-all truncate">Brands</NavigationMenuLink>
            <NavigationMenuLink href="/men" className=" hover:bg-gray-200 p-1 rounded w-full max-md:block hidden">Casual</NavigationMenuLink>
            <NavigationMenuLink href="/men" className=" hover:bg-gray-200 p-1 rounded w-full max-md:block hidden">Classic</NavigationMenuLink>
        </NavigationMenu>
    )
}

export default Navbar