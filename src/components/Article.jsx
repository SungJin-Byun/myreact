const Article = (props) => {
    return (
       <article className="col-9">
          <h4>{props.title}</h4>
          <span className="mr-5">{props.author}</span>
          <span className="mr-5">{props.com}</span>
          <span className="mr-5">{props.etc}</span>
          <p className="border-1 p-3">{props.desc}</p>
       </article>
    );
  }
export default Article;