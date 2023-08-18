import UserCard from "@/components/UserCard";
import { prisma } from "@/lib/prisma";

export default async function Users() {
	const users = await prisma.user.findMany();

	console.log(users);
	

	return (
		<div className="w-full grid grid-cols-5 gap-2" >
			{users.map((user) => {
				return <UserCard key={user.id} {...user} />;
			})}
		</div>
	);
}