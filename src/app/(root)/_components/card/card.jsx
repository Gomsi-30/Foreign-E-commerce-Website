import Link from 'next/link';
import Image from 'next/image';

const Card = ({ image, date, title, description }) => {
    return (
        <Link href={`/blogs/${title.replace(/[^A-Za-z0-9]+/g,'-')}`}>
            <div className="bg-white shadow-md rounded-sm overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    width={400} // Set a width according to your layout
                    height={192} // Set a height to maintain aspect ratio
                    className="object-cover" // Maintain the cover property
                />
                <div className="p-4">
                    <div className="text-sm text-gray-500 mb-2">{date}</div>
                    <h2 className="line-clamp-2 text-lg font-bold text-gray-800 mb-2">
                        {title}
                    </h2>
                    <p className="line-clamp-3 text-gray-600">{description}</p>
                </div>
            </div>
        </Link>
    );
};

export default Card;
