import React from "react";

const Figure = ({ img = "", className = "" }) => {
  if (img.length === 0) {
    return null;
  }
  if (typeof img === "string") {
    return (
      <figure className={className}>
        <img alt="card_image" src={img} className="rounded-xl" />
      </figure>
    );
  }

  return <figure className="px-10 pt-10">{img}</figure>;
};

const Card = React.forwardRef(
  (
    {
      img = "",
      figurePosition = "TopLeft",
      title = "Title",
      content = "Content",
      button,
      className = "text-center shadow-2xl",
      figClassName = "",
      ...props
    },
    ref
  ) => (
    <div ref={ref} className={`card ${className}`} {...props}>
      {figurePosition === "TopLeft" ? <Figure img={img} className={figClassName}/> : null}
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {(typeof(content) === "string") ? <p>{content}</p> : content}
        {!button ? null : (
          <div className="justify-center card-actions">{button}</div>
        )}
      </div>
      {figurePosition === "BottomRight" ? <Figure img={img} /> : null}
    </div>
  )
);
Card.displayName = "Card";

export default Card;
