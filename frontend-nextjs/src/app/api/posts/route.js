import { NextResponse } from "next/server";

const posts = [
  {
    id: "1",
    title: "Iftar in Ramadan",
    content: "you are welcome among your brothers and sisters, we offer free Iftar during the whole Ramandan month",
    date: "3 hourse ago",
  },
];

export async function GET() {
 console.log("POSTS ----> ", posts);
  return NextResponse.json(posts);
}
