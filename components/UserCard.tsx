import Link from "next/link";
import styles from "./UserCard.module.css";

interface Props {
	id: string;
	name: string | null;
	age: number | null;
	image: string | null;
}

export default function UserCard({ id, name, age, image }: Props) {
	return (
		<div className="w-full flex flex-col gap-2 p-2" >
			<img
				src={image ?? "/mememan.webp"}
				alt={`${name}'s profile`}
				className="w-full h-16"
			/>
			<div className="">
				<h3>
					<Link href={`/users/${id}`}>{name}</Link>
				</h3>
				<p>Age: {age}</p>
			</div>
		</div>
	);
}
