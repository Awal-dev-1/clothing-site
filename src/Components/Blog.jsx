import BlogCard from "../Cards/BlogCard"
import { blogData } from "../Constant/showCase"

const Blog = () => {
  return (
    <div className="my-32">
      <div className="grid grid-cols-3 items-center gap-8">
        {blogData.length > 0 &&
          blogData.map((list) => <BlogCard key={list.id} {...list} />)}
      </div>
    </div>
  );
}

export default Blog
