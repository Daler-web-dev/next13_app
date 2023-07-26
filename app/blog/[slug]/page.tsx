import React from "react";
export const dynamic = "force-dynamic"
export const revalidate = 420

interface pageProps {
	params: { slug: string };
}

interface Post {
	title: string;
	content: string;
	slug: string;
}

const Page: React.FC<pageProps> = async ({params}) => {

	const posts: Post[] = await fetch("http://localhost:3000/api/content").then(
		(res) => res.json()
	);
    const post = posts.find((post) => post.slug === params.slug)!;

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
};

export default Page;
