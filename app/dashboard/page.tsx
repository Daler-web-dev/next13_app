import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

interface Props {}

const Dashboard: React.FC<Props> = async () => {
	const session = await getServerSession();

	if (!session) {
		redirect("/api/auth/signin");
	}
	return <div>DASHBOARD</div>;
};

export default Dashboard;
