import { getItem } from '$lib/api/item';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const prerender = false;

export const load: PageLoad = ({ params, depends }) => {
	depends('app:page');

	const id = parseInt(params.id);
	if (id < 1) {
		error(404, 'wrong id');
	}
	return getItem(id);
};
