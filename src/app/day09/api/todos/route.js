import { readFile } from "node:fs/promises";

export async function GET() {
  const allTodos = await readFile("./todo.json", "utf8");
  return Response.json({
    message: "All Tasks fetched",
    data: JSON.parse(allTodos),
  });
};

export async function POST(req){
  console.log(await req.json());
  return Response.json({
    message: "task added",
  });
  
}
