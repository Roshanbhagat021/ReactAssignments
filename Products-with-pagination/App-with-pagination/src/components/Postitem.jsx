function Postitem({ post }) {
  return (
    <>
      {post.map((item) => (
        <div
          id="item"
          style={{
            // height: "320px",
            overflowY: "hidden",
            borderRadius: "10px",
            textAlign: "left",
            padding: "15px 20px",
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
          }}
          key={item.id}
        >
          {item.id % 2 == 0 ? (
            <h2 style={{ color: "red" }}>
              <span className="First-word">ID:</span> {item.id}
            </h2>
          ) : (
            <h2 style={{ color: "Green" }}>
              <span className="First-word">ID:</span> {item.id}
            </h2>
          )}
          <h2>
            <span className="First-word">Title:</span> {item.title}
          </h2>
          <h3
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 5,
              WebkitBoxOrient: "vertical",
            }}
          >
            <span className="First-word">Body:</span> <i>{item.body}</i>
          </h3>
        </div>
      ))}
    </>
  );
}

export default Postitem;
