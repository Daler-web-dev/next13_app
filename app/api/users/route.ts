import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
	const users = await prisma.user.findMany();

	return NextResponse.json(users);
}

export async function DELETE(request: Request) {
	const { searchParams } = new URL(request.url);
	const id = searchParams.get("id");
	console.log(id);
	
	if (id) {
		const deleteUser = await prisma.user.delete({
			where: {
				id: id,
			},
		});

		console.log(deleteUser);
		
				

		return NextResponse.json({message: "User deleted"}, {status: 200})
	}
}
