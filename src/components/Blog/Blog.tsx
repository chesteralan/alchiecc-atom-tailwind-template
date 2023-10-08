import Link from "next/link";

const Blog = () => {
  return (
    <div className="bg-grey-50" id="blog">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <h2 className="font-header text-primary text-center text-4xl font-semibold uppercase sm:text-5xl lg:text-6xl">
          I also write sometimes...
        </h2>
        <h4 className="font-header pt-6 text-center text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          Check out my posts!
        </h4>
        <div className="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10">
          <Link
            href="https://medium.com/@chesteralan/how-to-use-owl-carousel-2-in-nextjs-99971df81aac"
            className="shadow"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{ backgroundImage: "url(/images/post1.webp)" }}
              className="sm:h-84 group relative h-72 bg-cover bg-center bg-no-repeat lg:h-64 xl:h-72"
            >
              <span className="from-blog-gradient-from to-blog-gradient-to absolute inset-0 block bg-gradient-to-b bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
              <span className="font-body absolute bottom-0 right-0 mb-4 mr-4 block rounded-full border-2 border-white px-6 py-2 text-center text-sm font-bold uppercase text-white md:text-base">
                Read More
              </span>
            </div>
            <div className="bg-white px-5 py-6 xl:py-8">
              <span className="font-body block text-lg font-semibold text-black">
                How to Use `Owl Carousel 2` in NextJs
              </span>
              <span className="font-body text-grey-20 block pt-2">
                Gain the expertise to implement Owl Carousel 2 within Next.js, a slider that is
                undeniably a top choice among developers.
              </span>
            </div>
          </Link>
          <Link
            href="https://medium.com/@chesteralan/how-to-make-the-navigation-bar-sticky-on-scrolling-in-react-a7ee629fe30c"
            className="shadow"
          >
            <div
              style={{ backgroundImage: "url(/images/post2.gif)" }}
              className="sm:h-84 group relative h-72 bg-cover bg-center bg-no-repeat lg:h-64 xl:h-72"
            >
              <span className="from-blog-gradient-from to-blog-gradient-to absolute inset-0 block bg-gradient-to-b bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
              <span className="font-body absolute bottom-0 right-0 mb-4 mr-4 block rounded-full border-2 border-white px-6 py-2 text-center text-sm font-bold uppercase text-white md:text-base">
                Read More
              </span>
            </div>
            <div className="bg-white px-5 py-6 xl:py-8">
              <span className="font-body block text-lg font-semibold text-black">
                How To Make The Navigation Bar Sticky On Scrolling In React
              </span>
              <span className="font-body text-grey-20 block pt-2">
                {`To achieve a sticky navigation bar when scrolling within a React application, you can utilize CSS by setting the navigation bar's position to 'fixed' and incorporating a top margin for the content positioned below it.`}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
