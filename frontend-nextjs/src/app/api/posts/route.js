import { NextResponse } from "next/server";

const posts = [
  {
    id: "1",
    title: "Iftar in Ramadan",
    content: "you are welcomed if you don't have a place where to eat",
    date: "3h ago",
  },
];

export async function GET() {
 console.log("POSTS ----> ", posts);
  return NextResponse.json(posts);
}
