export async function GET(req) {
  console.log(req);
  return Response.json({ message: "Hello from API", req: req.url });
}
