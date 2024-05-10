import { topArtists } from "@/lib/spotify";

export async function GET() {
  try {
    const response = await topArtists();

    return Response.json(response);
  } catch (error: any) {
    return Response.json({ message: error.message });
  }
}
