import Image from 'next/image';

interface DressStyleItemProps {
    title: string;
    imageSrc: string;
}

const DressStyleItem: React.FC<DressStyleItemProps> = ({ title, imageSrc }) => {
    return (
        <div className="relative rounded-xl overflow-hidden">
            <Image
                src={imageSrc}
                alt={title}
                width={300}
                height={200}
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <h3 className="text-white text-xl font-bold">{title}</h3>
            </div>
        </div>
    );
};

const BrowseByDressStyle = () => {
    return (
        <div className="py-16 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-center text-3xl font-bold mb-8">BROWSE BY DRESS STYLE</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <DressStyleItem title="Casual" imageSrc="/images/dress_style_1.png" />
                    <DressStyleItem title="Formal" imageSrc="/images/dress_style_2.png" />
                    <DressStyleItem title="Party" imageSrc="/images/dress_style_3.png" />
                    <DressStyleItem title="Gym" imageSrc="/images/dress_style_4.png" />
                </div>
            </div>
        </div>
    );
};

export default BrowseByDressStyle;