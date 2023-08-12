import { prisma } from "@/lib/prisma";
import { authOptions } from "@/utils/authOption";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

interface Props {}

const Dashboard: React.FC<Props> = async () => {
	const session = await getServerSession(authOptions);

	if (!session) {
		redirect("/api/auth/signin");
	}

	const currentUserEmail = session?.user?.email!
	const user = await prisma.user.findUnique({
		where: {
			email: currentUserEmail
		}
	})

	return <div>DASHBOARD</div>;
};

export default Dashboard;
