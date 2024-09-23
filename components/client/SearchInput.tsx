import { Search } from "lucide-react"
import { Input } from "../ui/input"
import { cn } from "@/lib/utils"
interface SearchInputProps {
    className?: string
    translation: {
        placeholder: string
    }
}

const SearchInput = ({ className, translation }: SearchInputProps) => {
    return (

        <div className={cn("w-full relative", className)}>
            <Search className="h-4 w-4 text-muted-foreground absolute left-4 top-1/2 -translate-y-1/2" />
            <Input placeholder={translation.placeholder} className="w-full max-w-[600px] rounded-[60px] bg-[#f0f0f0] px-10 py-3 max-xl:pr-5" />
        </div>
    )
}

export default SearchInput