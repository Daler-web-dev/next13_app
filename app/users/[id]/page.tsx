import { prisma } from "@/lib/prisma";
import { Metadata } from 'next';
import React from "react";

interface Props {
	params: {
		id: string;
	};
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const user = await prisma.user.findUnique({ where: { id: params.id } });
	return { title: `User profile of ${user?.name}` };
}

const UserPrifile: React.FC<Props> = async ({ params }) => {
	const user = await prisma.user.findUnique({ where: { id: params.id } });

	const { name, bio, image } = user ?? {};

   
	return (
		<div>
			<h1>{name}</h1>
			<img src={image ?? ""} alt={`${name}'s profile`} />
			<h3>BIO</h3>
			<p>{bio}</p>
            <button>remove this user</button>
		</div>
	);
};

export default UserPrifile;
