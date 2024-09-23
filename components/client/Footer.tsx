"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"
import { Facebook, Github, Instagram, Twitter } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"


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
    };
}


const Footer = ({ className, translation }: FooterProps) => {
    const { lang } = useParams();

    return (
        <footer className={cn("flex justify-center items-center flex-col gap-7", className)}>
            {/* company help fag resources */}
            <div className="w-full grid grid-cols-5 justify-between items-start gap-8 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2">
                <div className="flex flex-col justify-start items-start text-left gap-8 mr-10">
                    <Image src={`/icons/logo.svg`} alt="branch logo" width={140} height={25} className="select-none" />
                    <p className="text-sm text-gray-500">{translation.description}</p>
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
                    <h2 className="text-base max-md:text-sm font-medium">{translation.company.title}</h2>
                    <div className="flex flex-col justify-start items-start gap-4 text-left">
                        <Link href={`/${lang}`}>
                            <p className="text-base max-md:text-sm text-gray-500">{translation.company.links.about}</p>
                        </Link>
                        <Link href={`/${lang}`}>
                            <p className="text-base max-md:text-sm text-gray-500">{translation.company.links.features}</p>
                        </Link>
                        <Link href={`/${lang}`}>
                            <p className="text-base max-md:text-sm text-gray-500">{translation.company.links.works}</p>
                        </Link>
                        <Link href={`/${lang}`}>
                            <p className="text-base max-md:text-sm text-gray-500">{translation.company.links.career}</p>
                        </Link>
                    </div>
                </div>
                <div className="flex justify-start items-start flex-col gap-8">
                    <h2 className="text-base max-md:text-sm font-medium">{translation.help.title}</h2>
                    <div className="flex flex-col justify-start items-start gap-4 text-left">
                        <Link href={`/${lang}`}>
                            <p className="text-base max-md:text-sm text-gray-500">{translation.help.links.customerSupport}</p>
                        </Link>
                        <Link href={`/${lang}`}>
                            <p className="text-base max-md:text-sm text-gray-500">{translation.help.links.termsConditions}</p>
                        </Link>
                        <Link href={`/${lang}`}>
                            <p className="text-base max-md:text-sm text-gray-500">{translation.help.links.deliveryDetails}</p>
                        </Link>
                        <Link href={`/${lang}`}>
                            <p className="text-base max-md:text-sm text-gray-500">{translation.help.links.privacyPolicy}</p>
                        </Link>
                    </div>
                </div>
                <div className="flex justify-start items-start flex-col gap-8">
                    <h2 className="text-base max-md:text-sm font-medium">{translation.faq.title}</h2>
                    <div className="flex flex-col justify-start items-start gap-4 text-left">
                        <Link href={`/${lang}`}>
                            <p className="text-base max-md:text-sm text-gray-500">{translation.faq.links.account}</p>
                        </Link>
                        <Link href={`/${lang}`}>
                            <p className="text-base max-md:text-sm text-gray-500">{translation.faq.links.manageDeliveries}</p>
                        </Link>
                        <Link href={`/${lang}`}>
                            <p className="text-base max-md:text-sm text-gray-500">{translation.faq.links.orders}</p>
                        </Link>
                        <Link href={`/${lang}`}>
                            <p className="text-base max-md:text-sm text-gray-500">{translation.faq.links.payments}</p>
                        </Link>
                    </div>
                </div>
                <div className="flex justify-start items-start flex-col gap-8">
                    <h2 className="text-base max-md:text-sm font-medium">{translation.resources.title}</h2>
                    <div className="flex flex-col justify-start items-start gap-4 text-left">
                        <Link href={`/${lang}`}>
                            <p className="text-base max-md:text-sm text-gray-500">{translation.resources.links.freeEbooks}</p>
                        </Link>
                        <Link href={`/${lang}`}>
                            <p className="text-base max-md:text-sm text-gray-500">{translation.resources.links.developmentTutorial}</p>
                        </Link>
                        <Link href={`/${lang}`}>
                            <p className="text-base max-md:text-sm text-gray-500">{translation.resources.links.howToBlog}</p>
                        </Link>
                        <Link href={`/${lang}`}>
                            <p className="text-base max-md:text-sm text-gray-500">{translation.resources.links.youtubePlaylist}</p>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="w-full h-px bg-gray-200 mt-7" />

            {/* payments */}
            <div className="w-full flex justify-between items-start gap-5 max-md:flex-col max-md:items-center">
                <p className="text-sm text-gray-500">Shop.co © 2000-2023, All Rights Reserved</p>
                <div className="flex justify-center items-center gap-1">
                    <Image src={`/icons/visa.svg`} width={60} height={30} alt="visa" className="select-none" />
                    <Image src={`/icons/master-cart.svg`} width={60} height={30} alt="master-cart" className="select-none" />
                    <Image src={`/icons/paypal.svg`} width={60} height={30} alt="paypal" className="select-none" />
                    <Image src={`/icons/apple-pay.svg`} width={60} height={30} alt="apple-pay" className="select-none" />
                    <Image src={`/icons/google-pay.svg`} width={60} height={30} alt="google-pay" className="select-none" />
                </div>
            </div>
        </footer>
    )
}

export default Footer