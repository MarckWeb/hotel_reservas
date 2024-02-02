import { MdAdd } from "react-icons/md";

interface ContentBlog {
   img: string,
   alt: string,
   title: string,
   content: string
}


const Blog = ({ img, alt, title, content }: ContentBlog) => {
   return (
      <section className="p-2 relative">
         <figure className="h-32 overflow-hidden">
            <img className="object-cover" src={img} alt={alt} />
         </figure>
         <h3 className="text-sm text-background-second mt-3">{title}</h3>
         <p className="text-xs text-color-text-primary">{content}</p>
         <MdAdd className="text-xl text-background-second ml-auto absolute bottom-1 right-3" />
      </section>
   )
}

export default Blog
