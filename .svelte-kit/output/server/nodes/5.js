import * as server from '../entries/pages/sverdle/_page.server.js';

export const index = 5;
export const component = async () => (await import('../entries/pages/sverdle/_page.svelte.js')).default;
export const file = '_app/immutable/components/pages/sverdle/_page.svelte-5fbe01c3.js';
export { server };
export const imports = ["_app/immutable/components/pages/sverdle/_page.svelte-5fbe01c3.js","_app/immutable/chunks/index-0f2f94ba.js","_app/immutable/chunks/singletons-5e0b0956.js"];
export const stylesheets = ["_app/immutable/assets/_page-2c27b08c.css"];
