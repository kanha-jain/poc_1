const Posts = ({ post }) => {
  return (
    <section>
      <h1 style={{ textAlign: "center" }}>{post.title}</h1>
      <p style={{ textAlign: "justify", maxWidth: "50ch", margin: "0 auto" }}>
        {post.body}
      </p>
    </section>
  );
};

Posts.defaultProps = {
  post: {
    title: "Post Title Displayed Here!",
    body: "Post body is displayed here.",
  },
};

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=6"
  );

  const posts = await res.json();
  const ids = posts.map((post) => post.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  if (!res.ok) {
    return {
      notFound: true,
    };
  }

  const post = await res.json();

  return {
    props: {
      post,
    },
  };
};

export default Posts;
