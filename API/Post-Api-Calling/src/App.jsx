import { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [show, setShow] = useState(true); // toggle between posts/comments
  const [showCart, setShowCart] = useState(false); // toggle cart view
  const [selectedItem, setSelectedItem] = useState(null); // store item clicked

  const baseURL = "https://jsonplaceholder.typicode.com/";
  const postsEndPoint = "posts";
  const commentsEndPoint = "comments";

  const fetchPostData = () => {
    fetch(baseURL + postsEndPoint)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  const fetchCommentsData = async () => {
    const res = await fetch(baseURL + commentsEndPoint);
    const data = await res.json();
    setComments(data);
  };

  useEffect(() => {
    fetchPostData();
    fetchCommentsData();
  }, []);
  const handleAddToCart = (item) => {
    setSelectedItem(item);
    setShowCart(true);
  };
  const handleBack = () => {
    setShowCart(false);
    setSelectedItem(null);
  };

  return (
    <>
      <hr />
      {!showCart && (
        <>
          <button onClick={() => setShow(true)}> Show Posts Data</button>
          <button style={{ marginLeft: "10px" }} onClick={() => setShow(false)}>
            Show Comments Data
          </button>
        </>
      )}

      <hr />
      {!showCart ? (
        <h1 style={{ textAlign: "center" }}>
          {show ? "Posts Data" : "Comments Data"}
        </h1>
      ) : (
        <h1 style={{ textAlign: "center" }}>Cart Page</h1>
      )}
      {showCart && selectedItem && (
        <div style={{ padding: "10px", border: "1px solid black", margin: "20px" }}>
          {selectedItem.title && <h2>{selectedItem.title}</h2>}
          {selectedItem.name && <p>NAME: {selectedItem.name}</p>}
          {selectedItem.email && <h6>EMAIL: {selectedItem.email}</h6>}
          <p>{selectedItem.body}</p>
          <button onClick={handleBack}>Back</button>
        </div>
      )}
      {!showCart &&
        (show
          ? posts.map((post) => (
              <div key={post.id}>
                <h2>{post.id}</h2>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
                <button onClick={() => handleAddToCart(post)}>Add to Cart</button>
               
                <hr />
              </div>
               
            ))
          : comments.map((comment) => (
              <div key={comment.id}>
                <p>ID: {comment.id} | NAME: {comment.name}</p>
                <h6>EMAIL: {comment.email}</h6>
                <p>{comment.body}</p>
                <button onClick={() => handleAddToCart(comment)}>Add to Cart</button>
                <hr />
              </div>
            )))}
            console.log("post");

    </>
  );
}

export default App;