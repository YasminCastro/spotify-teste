import { currentlyPlayingSong } from "@/lib/spotify";

export async function GET() {
  try {
    const response = await currentlyPlayingSong();

    return Response.json(response);
  } catch (error: any) {
    return Response.json({ message: error.message });
  }
}
