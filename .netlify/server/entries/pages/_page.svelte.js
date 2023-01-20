import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
const CTA_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.button.svelte-bz8phc{cursor:pointer;text-decoration:none;border:0;border-radius:100vmax;padding:1em 2em;font-weight:var(--fw-bold);font-size:--fs-button;color:var(--clr-neutral-100);background-color:var(--clr-primary-500);box-shadow:0 1.5em 1em -1em var(--clr-primary-400)}.button[data-type="inverted"].svelte-bz8phc{background-color:var(--clr-accent-400);color:var(--clr-neutral-100)}.button.svelte-bz8phc:hover,.button.svelte-bz8phc:focus-visible{background-color:var(--clr-primary-550)}',
  map: null
};
const CTA = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `

      <section class="${"cta | bg-primary-500 text-neutral-900 padding-block-800"}"><div class="${"container"}"><div class="${"even-columns vertical-align-center"}">
    <div><h2 class="${"ff-heading fs-secondary-heading fw-bold text-neutral-100"}">Something important....CTA</h2></div>

<div class="${"justify-self-end"}"><button class="${"button svelte-bz8phc"}" data-type="${"inverted"}">Get Started</button></div></div>
</div></section>

      `;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-vv8xpb{display:flex;flex-direction:column;justify-content:center;align-items:center;flex:0.6}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-u8y4um_START -->${$$result.title = `<title>Eaglefox 2023</title>`, ""}<meta name="${"description"}" content="${"Svelte demo app"}"><!-- HEAD_svelte-u8y4um_END -->`, ""}

<section class="${"svelte-vv8xpb"}"><h1>Home</h1></section>

${validate_component(CTA, "CTA").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
