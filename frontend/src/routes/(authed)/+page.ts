import { listItems, parseURLtoFilter } from '$lib/api/item';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ url, depends }) => {
	depends('app:page');

	const filter = parseURLtoFilter(url.searchParams, {
		unread: true,
		bookmark: undefined,
		feed_id: undefined
	});
	return {
		items: listItems(filter)
	};
};
