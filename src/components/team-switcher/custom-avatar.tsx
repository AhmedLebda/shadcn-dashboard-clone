
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

interface CustomAvatarProps {
    src: string;
    alt: string;
    fallback: string;
}

const CustomAvatar = ({ src, alt, fallback }: CustomAvatarProps) => {
    return (
        <Avatar className="mr-2 h-5 w-5">
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