import { cn } from "@/lib/utils"
import Image from "next/image"
import { Facebook, Github, Instagram, Twitter } from "lucide-react"
import Link from "next/link"


interface FooterProps {
    className?: string
    translation: {
        company: {
            title: string;
            links: {
                about: string;
                features: string;
                works: string;
                career: string;
            };
        };
        help: {
            title: string;
            links: {
                customerSupport: string;
                deliveryDetails: string;
                termsConditions: string;
                privacyPolicy: string;
            };
        };
        faq: {
            title: string;
            links: {
                account: string;
                manageDeliveries: string;
                orders: string;
                payments: string;
            };
        };
        resources: {
            title: string;
            links: {
                freeEbooks: string;
                developmentTutorial: string;
                howToBlog: string;
                youtubePlaylist: string;
            };
        };
        description: string;
    }
}


const Footer = ({ className, translation }: FooterProps) => {

    return (
        <footer className={cn("flex justify-center items-center flex-col gap-7", className)}>
            {/* company help fag resources */}
            <div className="w-full grid grid-cols-5 justify-between items-start gap-8 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2">
                <div className="flex flex-col justify-start items-start text-left gap-8 mr-10">
                    <Image src={'/icons/logo.svg'} alt="branch logo" width={140} height={25} className="select-none" />
                    <p className="text-sm text-gray-500">We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                    {/* socials */}
                    <div className="flex justify-center items-center gap-3">
                        <Link href={"/"}>
                            <div className="select-none max-md:p-1 border rounded-full border-gray-500 flex justify-center items-center p-2 hover:opacity-70 transition-all cursor-pointer">
                                <Twitter width={20} height={20} className="max-md:w-4 max-md:h-4" />
                            </div>
                        </Link>
                        <Link href={"/"}>
                            <div className="select-none max-md:p-1 border rounded-full border-gray-500 flex justify-center items-center p-2 hover:opacity-70 transition-all cursor-pointer">
                                <Facebook width={20} height={20} className="max-md:w-4 max-md:h-4" />
                            </div>
                        </Link>
                        <Link href={"/"}>
                            <div className="select-none max-md:p-1 border rounded-full border-gray-500 flex justify-center items-center p-2 hover:opacity-70 transition-all cursor-pointer">
                                <Instagram width={20} height={20} className="max-md:w-4 max-md:h-4" />
                            </div>
                        </Link>
                        <Link href={"/"}>

                            <div className="select-none max-md:p-1 border rounded-full border-gray-500 flex justify-center items-center p-2 hover:opacity-70 transition-all cursor-pointer">
                                <Github width={20} height={20} className="max-md:w-4 max-md:h-4" />
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="flex justify-start items-start flex-col gap-8">
                    <h2 className="text-base max-md:text-sm font-medium">COMPANY</h2>
                    <div className="flex flex-col justify-start items-start gap-4">
                        <Link href={'/'}>
                            <p className="text-base max-md:text-sm text-gray-500">About</p>
                        </Link>
                        <Link href={'/'}>
                            <p className="text-base max-md:text-sm text-gray-500">Features</p>
                        </Link>
                        <Link href={'/'}>
                            <p className="text-base max-md:text-sm text-gray-500">Works</p>
                        </Link>
                        <Link href={'/'}>
                            <p className="text-base max-md:text-sm text-gray-500">Career</p>
                        </Link>
                    </div>
                </div>
                <div className="flex justify-start items-start flex-col gap-8">
                    <h2 className="text-base max-md:text-sm font-medium">HELP</h2>
                    <div className="flex flex-col justify-start items-start gap-4">
                        <Link href={'/'}>
                            <p className="text-base max-md:text-sm text-gray-500">Customer Support</p>
                        </Link>
                        <Link href={'/'}>
                            <p className="text-base max-md:text-sm text-gray-500">Delivery Details</p>
                        </Link>
                        <Link href={'/'}>
                            <p className="text-base max-md:text-sm text-gray-500">Terms & Conditions</p>
                        </Link>
                        <Link href={'/'}>
                            <p className="text-base max-md:text-sm text-gray-500">Privacy Policy</p>
                        </Link>
                    </div>
                </div>
                <div className="flex justify-start items-start flex-col gap-8">
                    <h2 className="text-base max-md:text-sm font-medium">FAQ</h2>
                    <div className="flex flex-col justify-start items-start gap-4">
                        <Link href={'/'}>
                            <p className="text-base max-md:text-sm text-gray-500">Account</p>
                        </Link>
                        <Link href={'/'}>
                            <p className="text-base max-md:text-sm text-gray-500">Manage Deliveries</p>
                        </Link>
                        <Link href={'/'}>
                            <p className="text-base max-md:text-sm text-gray-500">Orders</p>
                        </Link>
                        <Link href={'/'}>
                            <p className="text-base max-md:text-sm text-gray-500">Payments</p>
                        </Link>
                    </div>
                </div>
                <div className="flex justify-start items-start flex-col gap-8">
                    <h2 className="text-base max-md:text-sm font-medium">RESOURCES</h2>
                    <div className="flex flex-col justify-start items-start gap-4">
                        <Link href={'/'}>
                            <p className="text-base max-md:text-sm text-gray-500">Free eBooks</p>
                        </Link>
                        <Link href={'/'}>
                            <p className="text-base max-md:text-sm text-gray-500">Development Tutorial</p>
                        </Link>
                        <Link href={'/'}>
                            <p className="text-base max-md:text-sm text-gray-500">How to - Blog</p>
                        </Link>
                        <Link href={'/'}>
                            <p className="text-base max-md:text-sm text-gray-500">Youtube Playlist</p>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="w-full h-px bg-gray-200 mt-7" />

            {/* payments */}
            <div className="w-full flex justify-between items-start gap-5 max-md:flex-col max-md:items-center">
                <p className="text-sm text-gray-500">Shop.co © 2000-2023, All Rights Reserved</p>
                <div className="flex justify-center items-center gap-1">
                    <Image src={'/icons/visa.svg'} width={60} height={30} alt="visa" className="select-none" />
                    <Image src={'/icons/master-cart.svg'} width={60} height={30} alt="master-cart" className="select-none" />
                    <Image src={'/icons/paypal.svg'} width={60} height={30} alt="paypal" className="select-none" />
                    <Image src={'/icons/apple-pay.svg'} width={60} height={30} alt="apple-pay" className="select-none" />
                    <Image src={'/icons/google-pay.svg'} width={60} height={30} alt="google-pay" className="select-none" />
                </div>
            </div>
        </footer>
    )
}

export default Footer