
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { cn } from "@/lib/utils";

interface CustomAvatarProps {
    src: string;
    alt: string;
    fallback: string;
    className?: string;
}

const CustomAvatar = ({ src, alt, fallback, className }: CustomAvatarProps) => {
    return (
        <Avatar className={cn(className ? className : "mr-2 h-5 w-5")}>
            <AvatarImage
                src={src}
                alt={alt}
                className="grayscale"
            />
            <AvatarFallback>{fallback}</AvatarFallback>
        </Avatar>
    )
}

export default CustomAvatar