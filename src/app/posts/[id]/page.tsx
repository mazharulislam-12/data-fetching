import Link from "next/link";

export async function generateStaticParams() {

    const res = await fetch("http://localhost:5000/posts")
    const posts = await res.json()
    const ids = posts.map((post) => {
        return {
            id: post.id + "",
        };
    })
    console.log(ids);

    return ids;
}

const DetailsPage = async ({ params }) => {
    // console.log(params);
    const res = await fetch(`http://localhost:5000/posts/${params.id}`);
    const post = await res.json();

    return (
        <div>
            <h2>Post Details:   </h2>

            <div key={post.id} className="mx-auto mb-10 card bg-gray-100 w-[70%] shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{post.title}</h2>
                    <p>{post.description}</p>
                    <p>{post.likesCount}</p>
                    <div className="card-actions justify-end">
                        <Link href={`/posts`}>
                            <button className="btn btn-success">Back to Post</button>
                        </Link>
                    </div>
                </div>
            </div>)



        </div>
    );
};

export default DetailsPage;