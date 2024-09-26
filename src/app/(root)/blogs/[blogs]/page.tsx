import DynamicBanner from '../../_components/banner2/banner2';
import { blogsData } from '../../_components/data/blogsdata';
import Image from 'next/image';
import Card from '../../_components/card/card';

type Blog = {
  title: string;
  contents: string[];
  imgUrl: string;
  authorName: string;
  readTime: string;
  articleNumber: number;
  authorImg?: string;
  Date?: string;
  articleId?: number;
};

export const generateStaticParams = () => {
  return blogsData.map(({ title }) => ({
    blogs: `${title.replace(/[^A-Za-z0-9]+/g, "-")}`,
  }));
};

export const generateMetadata = ({ params }: { params: { blogs: string } }) => {
  const { blogs } = params;
  const article = blogsData.find(({ title }) => {
    return title.replace(/[^A-Za-z0-9]+/g, "-") === blogs;
  });

  if (article) {
    return {
      title: article.title,
      description: article.contents.at(-1) || '',
      openGraph: {
        url: `/${blogs}`,
        title: article.title,
        description: article.contents.at(-1) || '',
        images: [`/articleassets/blogimages/${article.imgUrl}`],
      },
      twitter: {
        card: 'summary_large_image',
        title: article.title,
        description: article.contents.at(-1) || '',
        images: [`/articleassets/blogimages/${article.imgUrl}`],
      },
    };
  }

  return {
    title: 'Blog Not Found',
    description: 'No blog found for the given parameters',
  };
};

const BlogDynamicPage = ({ params }: { params: { blogs: string } }) => {
  const { blogs } = params;
  const articleData: Blog | undefined = blogsData.find(item =>
    item.title.replace(/[^A-Za-z0-9]+/g, "-") === blogs
  );

  const getRandomItems = (arr: Blog[], num: number) => {
    const filteredArr = arr.filter(
      item => item.title.replace(/[^A-Za-z0-9]+/g, "-") !== blogs
    );
    const shuffled = filteredArr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  const randomBlogData = getRandomItems(blogsData, 6);

  const updateHeadings = (article: Blog) => {
    article.contents = article.contents.map(content => {
      if (content.startsWith('***')) {
        return `<h2 class='hh font-bold text-xl'>${content.slice(3).trim()}</h2>`;
      }
      return content;
    });
  };

  if (articleData) {
    updateHeadings(articleData);
  }

  return (
    <div className="mt-[50px] h-auto flex flex-col gap-5 w-full">
      <div className="w-full">
        <DynamicBanner
          headingText={articleData?.title || 'Default Heading'}
          profileImage={articleData?.authorImg}
          profileName={articleData?.authorName}
          articleImage={articleData?.imgUrl}
          profileReadTime={articleData?.readTime}
          articleNumber={articleData?.articleNumber}
        />
      </div>

      <div className="px-4 sm:px-8 md:px-16 lg:px-[280px] mx-auto max-w-7xl mt-[10px]">
        <div className="flex flex-col gap-6 md:gap-10">
          {articleData ? (
            articleData.contents.map((desc, index) => (
              <div key={index}>
                {desc.endsWith('.jpg') || desc.endsWith('.png') ? (
                  <div className="relative h-[300px] md:h-[400px] lg:h-[400px] xl:h-[400px] w-full max-w-screen-md">
                    <Image
                      src={`/articleassets/blogimages/${desc}`}
                      alt="Banner Image"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                ) : (
                  <div
                    className="text-xl text-gray-800 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: desc }}
                  />
                )}
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-500">Loading...</p>
          )}
        </div>
      </div>

      <div className="mt-[70px] flex flex-col gap-10">
        <h1 className="container text-2xl font-bold">Related Articles</h1>
        <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {randomBlogData.map((blog, index) => (
            <Card
              key={index}
              image={blog.imgUrl}
              title={blog.title}
              date={blog.readTime}
              description={blog.contents.join(' ').slice(0, 100) + '...'}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDynamicPage;
