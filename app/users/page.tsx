import UserCard from "@/components/UserCard";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export default async function Users() {
	const session = await getServerSession()

	if(!session) {
		redirect('/api/auth/signin')
	}

	const users = await prisma.user.findMany();

	return (
		<div className="w-full grid grid-cols-3 gap-2" >
			{users.map((user) => {
				return <UserCard key={user.id} {...user} />;
			})}
		</div>
	);
}
