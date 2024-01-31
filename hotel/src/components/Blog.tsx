interface ContentBlog {
   img: string,
   alt: string,
   title: string,
   content: string
}


const Blog = ({ img, alt, title, content }: ContentBlog) => {
   return (
      <section>
         <figure>
            <img src={img} alt={alt} />
            <figcaption>{title}</figcaption>
         </figure>
         <p>{content}</p>
      </section>
   )
}

export default Blog
