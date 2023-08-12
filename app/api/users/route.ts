import { prisma } from "@/lib/prisma";
import { authOptions } from "@/utils/authOption";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
	const users = await prisma.user.findMany();

	return NextResponse.json(users);
}

export async function DELETE(request: Request) {
	const { searchParams } = new URL(request.url);
	const id = searchParams.get("id");
	
	if (id) {
		const deleteUser = await prisma.user.delete({
			where: {
				id: id,
			},
		});

		return NextResponse.json({message: "User deleted"}, {status: 200})
	}
}

export async function PUT(req: Request) {
	const session = await getServerSession(authOptions)
	const currentUserEmail = session?.user?.email!
	
	const data = await req.json()
	data.age = Number(data.age)

	const user = await prisma.user.update({
		where: {
			email: currentUserEmail
		},
		data
	})

	return NextResponse.json(user)
}	