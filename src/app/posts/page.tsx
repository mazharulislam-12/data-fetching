import Link from "next/link";

const PostPage = async () => {
    const res = await fetch("http://localhost:5000/posts/");
    const posts = await res.json();
    console.log(posts);
    return (
        <div>
            <h2 className="text-2xl">Total post: {posts.length} </h2>

            {
                posts.map((post) => <div key={post.id} className="mx-auto mb-10 card bg-gray-100 w-[70%] shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">{post.title}</h2>
                        <p>{post.description}</p>
                        <p>{post.likesCount}</p>
                        <div className="card-actions justify-end">
                            <Link href={`posts/${post.id}`}>
                                <button className="btn btn-primary">See More</button>
                            </Link>
                        </div>
                    </div>
                </div>)
            }

        </div>
    );
};

export default PostPage;