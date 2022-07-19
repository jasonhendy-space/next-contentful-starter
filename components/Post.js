import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

function Post({ date, image, title, body }) {
  let { file, description } = image;

  return (
    <div className="post">
      <img alt={description} src={`https:${file.url}`} />
      <div className="description">{description}</div>
      <div className="text">
        <h2>{title}</h2>
        <h3>{date.substring(0, 10)}</h3>
        <div className="post-body">{documentToReactComponents(body)}</div>
      </div>

      <style jsx>{`
        .post {
          position: relative;
          margin: 10px;
          width: 800px;
          color: white;
          cursor: pointer;
        }
        .description {
          position: absolute;
          top: 0;
          padding: 10px;
          box-sizing: border-box;
          height: 100px;
          opacity: 0;
          transition: opacity 0.5s;
        }
        .post:hover .description {
          opacity: 1;
        }
        .text {
          position: absolute;
          bottom: 3px;
          padding: 10px;
          box-sizing: border-box;
          width: 100%;
          height: 70px;
        }
        h2,
        h3 {
          margin: 5px;
        }
        h2 {
          margin-bottom: 0;
        }
        h3 {
          margin-top: 0;
          font-size: 0.8em;
          font-weight: 400;
        }
        img {
          max-width: 800px;
        }
        .post-body {
          color: black;
          margin-top: 30px;
        }
      `}</style>
    </div>
  )
}

export default Post
