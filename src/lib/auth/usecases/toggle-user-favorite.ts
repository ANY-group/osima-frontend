import api, { RequestMethod } from "@/lib/utils/api";

export default async function toggleUserFavorite(id: number): Promise<void> {
  await api.request('profile/favorites/toggle', {
    method: RequestMethod.POST,
    data: { id },
  });
}