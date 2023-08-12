import UserCard from "@/components/UserCard";
import { prisma } from "@/lib/prisma";

export default async function Users() {
	const users = await prisma.user.findMany();

	return (
		<div className="w-full grid grid-cols-5 gap-2" >
			{users.map((user) => {
				return <UserCard key={user.id} {...user} />;
			})}
		</div>
	);
}

// cll4zo3930004551sh5no7kw2	b7fab935-9390-4a9b-b657-0e4a4540d827	cll4zo1cs0000551skye8bymc	2023-09-09 10:00:50.293
// cll0rkmrh0000r61qd91jlwdt	Daler-web-dev					https://avatars.githubusercontent.com/u/77038375?v=4