import { topTracks } from "@/lib/spotify";

export async function GET() {
  try {
    const response = await topTracks();

    return Response.json(response);
  } catch (error: any) {
    return Response.json({ message: error.message });
  }
}
