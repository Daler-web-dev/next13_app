import { authOptions } from "@/utils/authOption";
import { getServerSession } from "next-auth";
import FollowClient from "./FollowClient";
import React from "react";
import { prisma } from "@/lib/prisma";

interface Props {
	targetUserId: string;
}

export async function FollowButton({ targetUserId }: Props) {
	const session = await getServerSession(authOptions);

	const currentUserId = await prisma.user
		.findFirst({ where: { email: session?.user?.email! } })
		.then((user) => user?.id!);

	const isFollowing = await prisma.follows.findFirst({
		where: { followerId: currentUserId, followingId: targetUserId },
	});

    return (
        <FollowClient targetUserId={targetUserId} isFollowing={!!isFollowing} />
    )
}

export default FollowButton;
