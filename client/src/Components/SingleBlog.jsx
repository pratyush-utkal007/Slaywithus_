import React from "react";
import Layout from "./Layout/Layout";
import blogDB from "../BlogDB";
import { useParams } from "react-router-dom";

const SingleBlog = () => {
  const { slug } = useParams();
  const blog = blogDB.find((b) => b.slug === slug);

  return (
    <Layout>
      <h1 className="px-3 lg:px-20 lg:py-7 lg:text-4xl font-[Cinzel] py-5 text-xl tracking-wide">
        {blog.title}
      </h1>
      <div className="flex lg:w-full flex-col-reverse justify-between gap-3 lg:gap-6 lg:flex-row px-3 lg:px-20">
        <div className="lg:w-2/3 lg:pe-28">
          <p className="font-thin text-lg lg:text-2xl tracking-wider pb-3 lg:pt-2 lg:pb-8">
            {blog.summery1}
          </p>
        </div>
        <div className="blog-image lg:w-1/3 w-full">
          <img className="object-cover" src={blog.image} alt={blog.title} />
        </div>
      </div>
    </Layout>
  );
};

export default SingleBlog;
