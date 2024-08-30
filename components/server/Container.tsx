import { cn } from "@/lib/utils"

interface ContainerProps {
    className?: string
    children: React.ReactNode
}

const Container = ({ className, children }: ContainerProps) => {
    return (
        <div className={cn("w-full max-w-[1440px] px-[100px] max-xl:px-20 max-lg:px-16 max-md:px-10 max-sm:px-5 text-center m-auto", className)}>
            {children}
        </div>
    )
}
export default Container