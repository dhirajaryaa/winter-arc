export async function GET(_, { params }) {
  console.log(await params);

  return Response.json({ message: "Hello from API with id" });
}
