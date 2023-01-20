import { c as create_ssr_component, b as add_attribute, v as validate_component } from "../../chunks/index.js";
const brandName = "/_app/immutable/assets/eagleFOX_brand_name-6aa267b3.png";
const logo = "/_app/immutable/assets/Fox-logo-fa8a0aa6.png";
const close = "/_app/immutable/assets/icon-close-4ba9bc15.svg";
const hamburger = "/_app/immutable/assets/icon-hamburger-0c2573b0.svg";
const Header_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".primary-header.svelte-1pej3r6.svelte-1pej3r6{margin-top:var(--size-700)}.nav-wrapper.svelte-1pej3r6.svelte-1pej3r6{display:flex;justify-content:space-around;align-items:center}.brand-name.svelte-1pej3r6.svelte-1pej3r6{width:200px;height:100px;object-fit:fill}.logo.svelte-1pej3r6.svelte-1pej3r6{max-width:8em}.mobile-nav-toggle.svelte-1pej3r6.svelte-1pej3r6{display:none}.nav-list.svelte-1pej3r6.svelte-1pej3r6{list-style-type:none;cursor:pointer;font-size:var(--fs-nav);font-weight:var(--fw-bold);font-size:1rem;display:flex;gap:var(--size-500)}.nav-list.svelte-1pej3r6 li.svelte-1pej3r6{text-decoration:none}.nav-list.svelte-1pej3r6 a.svelte-1pej3r6{color:var(--clr-neutral-100)}.nav-list.svelte-1pej3r6 a.svelte-1pej3r6:link{text-decoration:none}.nav-list.svelte-1pej3r6 a.svelte-1pej3r6:hover,.nav-list.svelte-1pej3r6 a.svelte-1pej3r6:focus{color:var(--clr-primary-550)}@media(max-width: 50em){.primary-navigation.svelte-1pej3r6.svelte-1pej3r6{display:none}.mobile-navigation.svelte-1pej3r6.svelte-1pej3r6{display:block;z-index:99;position:absolute;padding:1rem;margin-top:0.5rem;inset:8rem var(--size-400) auto;max-width:10rem;margin-inline:auto;border-radius:var(--size-400);box-shadow:0 0 1em rgb(0, 0, 0, 0.3)}.primary-navigation.svelte-1pej3r6.svelte-1pej3r6::after{content:'';position:absolute}.nav-list.svelte-1pej3r6.svelte-1pej3r6{display:grid;gap:var(--size-200);text-align:center;font-weight:var(--fw-bold)}.mobile-nav-toggle.svelte-1pej3r6.svelte-1pej3r6{display:block;position:fixed;cursor:pointer;top:var(--size-800);right:var(--size-600);background:transparent;border:0;padding:0.5em;width:2.5rem;aspect-ratio:1;background-size:contain;background-repeat:no-repeat;background-position:center}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open = false } = $$props;
  let { onClick = () => {
    open = !open;
  } } = $$props;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  $$result.css.add(css$3);
  return `

<header class="${"primary-header svelte-1pej3r6"}"><div class="${"container"}"><div class="${"nav-wrapper svelte-1pej3r6"}"><a href="${"#"}"></a><img class="${"brand-name svelte-1pej3r6"}"${add_attribute("src", brandName, 0)} alt="${"Business Brand Name Eaglefox"}">
			${!open ? `<nav class="${"primary-navigation svelte-1pej3r6"}"><ul aria-label="${"Primary"}" class="${"nav-list svelte-1pej3r6"}"><li class="${"svelte-1pej3r6"}"><a href="${"/services"}" class="${"svelte-1pej3r6"}">Services</a></li>
						<li class="${"svelte-1pej3r6"}"><a href="${"/about"}" class="${"svelte-1pej3r6"}">About Us</a></li>
						<li class="${"svelte-1pej3r6"}"><a href="${"/"}" class="${"svelte-1pej3r6"}">Home</a></li></ul></nav>
				<div><img class="${"logo svelte-1pej3r6"}"${add_attribute("src", logo, 0)} alt="${"Business Brand Name Eaglefox"}"></div>` : ``}
			<button class="${"mobile-nav-toggle svelte-1pej3r6"}"${add_attribute("aria-expanded", open, 0)}>${!open ? `<img class="${"icon-hamburger"}"${add_attribute("src", hamburger, 0)} alt="${""}" aria-hidden="${"true"}">` : ``}
				${open ? `<img class="${"icon-close"}"${add_attribute("src", close, 0)} alt="${""}" aria-hidden="${"true"}">` : ``}</button>
			${open ? `<nav class="${"mobile-navigation svelte-1pej3r6"}"><ul aria-label="${"Primary"}" class="${"nav-list svelte-1pej3r6"}"><li class="${"svelte-1pej3r6"}"><a href="${"/services"}" class="${"svelte-1pej3r6"}">Services</a></li>
						<li class="${"svelte-1pej3r6"}"><a href="${"/about"}" class="${"svelte-1pej3r6"}">About</a></li>
						<li class="${"svelte-1pej3r6"}"><a href="${"/"}" class="${"svelte-1pej3r6"}">Home</a></li></ul></nav>
				<div><img class="${"logo svelte-1pej3r6"}"${add_attribute("src", logo, 0)} alt="${"Business Brand Name Eaglefox"}"></div>` : ``}</div></div></header>

`;
});
const Socials_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".social-list.svelte-2dq40g{list-style:none;display:flex;gap:var(--size-400)}svg.svelte-2dq40g{width:30px;height:30px;fill:var(--clr-neutral-100)}svg.svelte-2dq40g:where(:hover, :focus){fill:red}",
  map: null
};
const Socials = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div><ul class="${"social-list svelte-2dq40g"}" aria-label="${"Social links"}"><li><a aria-label="${"facebook"}" href="${"#"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 24 24"}" width="${"24px"}" height="${"24px"}" class="${"svelte-2dq40g"}"><path d="${"M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.014467 17.065322 19.313017 13.21875 19.898438 L 13.21875 14.384766 L 15.546875 14.384766 L 15.912109 12.019531 L 13.21875 12.019531 L 13.21875 10.726562 C 13.21875 9.7435625 13.538984 8.8710938 14.458984 8.8710938 L 15.935547 8.8710938 L 15.935547 6.8066406 C 15.675547 6.7716406 15.126844 6.6953125 14.089844 6.6953125 C 11.923844 6.6953125 10.654297 7.8393125 10.654297 10.445312 L 10.654297 12.019531 L 8.4277344 12.019531 L 8.4277344 14.384766 L 10.654297 14.384766 L 10.654297 19.878906 C 6.8702905 19.240845 4 15.970237 4 12 C 4 7.5698774 7.5698774 4 12 4 z"}"></path></svg></a></li>

		<li><a aria-label="${"twitter"}" href="${"#"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 24 24"}" width="${"24px"}" height="${"24px"}" class="${"svelte-2dq40g"}"><path d="${"M22,3.999c-0.78,0.463-2.345,1.094-3.265,1.276c-0.027,0.007-0.049,0.016-0.075,0.023c-0.813-0.802-1.927-1.299-3.16-1.299 c-2.485,0-4.5,2.015-4.5,4.5c0,0.131-0.011,0.372,0,0.5c-3.353,0-5.905-1.756-7.735-4c-0.199,0.5-0.286,1.29-0.286,2.032 c0,1.401,1.095,2.777,2.8,3.63c-0.314,0.081-0.66,0.139-1.02,0.139c-0.581,0-1.196-0.153-1.759-0.617c0,0.017,0,0.033,0,0.051 c0,1.958,2.078,3.291,3.926,3.662c-0.375,0.221-1.131,0.243-1.5,0.243c-0.26,0-1.18-0.119-1.426-0.165 c0.514,1.605,2.368,2.507,4.135,2.539c-1.382,1.084-2.341,1.486-5.171,1.486H2C3.788,19.145,6.065,20,8.347,20 C15.777,20,20,14.337,20,8.999c0-0.086-0.002-0.266-0.005-0.447C19.995,8.534,20,8.517,20,8.499c0-0.027-0.008-0.053-0.008-0.08 c-0.003-0.136-0.006-0.263-0.009-0.329c0.79-0.57,1.475-1.281,2.017-2.091c-0.725,0.322-1.503,0.538-2.32,0.636 C20.514,6.135,21.699,4.943,22,3.999z M18,8.999c0,4.08-2.957,8.399-8.466,8.943C10.28,17.413,11,16.662,11,16.662 S8,14,7.775,10.522C8.81,10.838,9.888,10.999,11,10.999h2v-2.5c0-0.001,0-0.001,0-0.001C13.002,7.118,14.12,6,15.5,6 C16.881,6,18,7.119,18,8.5C18,8.5,18,8.92,18,8.999z"}"></path></svg></a></li>
		<li><a aria-label="${"instagram"}" href="${"#"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 24 24"}" width="${"24px"}" height="${"24px"}" class="${"svelte-2dq40g"}"><path d="${"M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"}"></path></svg></a></li>
		<li><a aria-label="${"youtube"}" href="${"#"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 16 16"}" width="${"32px"}" height="${"32px"}" class="${"svelte-2dq40g"}"><path d="${"M 2.488281 3.011719 C 1.664063 3.011719 0.988281 3.6875 0.988281 4.511719 L 0.988281 11.511719 C 0.988281 12.335938 1.664063 13.011719 2.488281 13.011719 L 13.488281 13.011719 C 14.308594 13.011719 14.988281 12.335938 14.988281 11.511719 L 14.988281 4.511719 C 14.988281 3.6875 14.3125 3.011719 13.488281 3.011719 Z M 2.488281 4.011719 L 13.488281 4.011719 C 13.769531 4.011719 13.988281 4.230469 13.988281 4.511719 L 13.988281 11.511719 C 13.988281 11.792969 13.769531 12.011719 13.488281 12.011719 L 2.488281 12.011719 C 2.207031 12.011719 1.988281 11.792969 1.988281 11.511719 L 1.988281 4.511719 C 1.988281 4.230469 2.207031 4.011719 2.488281 4.011719 Z M 6 4.992188 L 6 11.011719 L 11 8 Z M 7 6.757813 L 9.0625 8 L 7 9.242188 Z"}"></path></svg></a></li>
		<li><a aria-label="${"pinterest"}" href="${"#"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 24 24"}" width="${"24px"}" height="${"24px"}" class="${"svelte-2dq40g"}"><path d="${"M12,2C6.477,2,2,6.477,2,12c0,4.237,2.636,7.855,6.356,9.312c-0.087-0.791-0.167-2.005,0.035-2.868 c0.182-0.78,1.172-4.971,1.172-4.971s-0.299-0.599-0.299-1.484c0-1.391,0.806-2.428,1.809-2.428c0.853,0,1.265,0.641,1.265,1.408 c0,0.858-0.546,2.141-0.828,3.329c-0.236,0.996,0.499,1.807,1.481,1.807c1.777,0,3.143-1.874,3.143-4.579 c0-2.394-1.72-4.068-4.177-4.068c-2.845,0-4.515,2.134-4.515,4.34c0,0.859,0.331,1.781,0.744,2.282 c0.082,0.099,0.093,0.186,0.069,0.287c-0.076,0.316-0.244,0.995-0.277,1.134c-0.043,0.183-0.145,0.222-0.334,0.133 c-1.249-0.582-2.03-2.408-2.03-3.874c0-3.154,2.292-6.052,6.608-6.052c3.469,0,6.165,2.472,6.165,5.776 c0,3.447-2.173,6.22-5.189,6.22c-1.013,0-1.966-0.527-2.292-1.148c0,0-0.502,1.909-0.623,2.378 c-0.226,0.868-0.835,1.958-1.243,2.622C9.975,21.843,10.969,22,12,22c5.522,0,10-4.478,10-10S17.523,2,12,2z"}"></path></svg></a></li></ul>
</div>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "hr.svelte-1cbncof.svelte-1cbncof{margin-bottom:2rem}.primary-footer.svelte-1cbncof.svelte-1cbncof{margin-inline:auto}.footer-nav.svelte-1cbncof.svelte-1cbncof{columns:2}.brand-name.svelte-1cbncof.svelte-1cbncof{width:200px;height:100px;object-fit:fill}.footer-nav-list.svelte-1cbncof.svelte-1cbncof{list-style-type:none;cursor:pointer;color:var(--clr-neutral-100);font-size:var(--fs-nav);font-weight:var(--fw-bold)}.footer-nav-list.svelte-1cbncof li.svelte-1cbncof:where(:hover, :focus){color:var(--clr-primary-550)}.primary-footer.svelte-1cbncof form.svelte-1cbncof{display:flex;gap:var(--size-300)}.primary-footer-form.svelte-1cbncof input.svelte-1cbncof:where([type='text'], [type='email']){border-radius:100vw;border:0;padding:var(--size-300) var(--size-400);margin-inline:auto}.footer-button.svelte-1cbncof.svelte-1cbncof{cursor:pointer;text-decoration:none;border:0;border-radius:100vmax;padding:1em 2em;font-weight:var(--fw-bold);font-size:--fs-button;color:var(--clr-neutral-100);background-color:var(--clr-primary-500)}.footer-button.svelte-1cbncof.svelte-1cbncof:hover,.footer-button.svelte-1cbncof.svelte-1cbncof:focus-visible{background-color:var(--clr-primary-550)}.copyright.svelte-1cbncof.svelte-1cbncof{color:var(--clr-neutral-100);font-size:0.75rem;padding-top:var(--size-500)}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `
<footer class="${"padding-block-800 text-neutral-900 primary-footer svelte-1cbncof"}"><div class="${"container"}"><hr class="${"svelte-1cbncof"}">
		<div class="${"even-columns"}"><div><a href="${"#"}"><img class="${"brand-name svelte-1cbncof"}"${add_attribute("src", brandName, 0)} alt="${"Business Logo"}"></a>

				${validate_component(Socials, "Socials").$$render($$result, {}, {}, {})}</div>
			
			<div><nav class="${"footer-nav svelte-1cbncof"}"><ul class="${"footer-nav-list svelte-1cbncof"}" style aria-label="${"Footer Navigation List"}"><li class="${"svelte-1cbncof"}"><a href="${"#"}"></a>About Us</li>
						<li class="${"svelte-1cbncof"}"><a href="${"#"}"></a>Our Trees</li></ul></nav></div>
			
			<div class="${"primary-footer-form svelte-1cbncof"}"><form action="${""}" class="${"svelte-1cbncof"}"><input type="${"email"}" class="${"svelte-1cbncof"}">
					<button class="${"footer-button svelte-1cbncof"}">Go</button></form>
				<p class="${"copyright svelte-1cbncof"}">Copyright 2022 All Rights Reserved. Web developer Eaglefox 0418 753 527
				</p></div></div></div>
</footer>`;
});
const styles = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".app.svelte-8o1gnw{display:flex;flex-direction:column;min-height:100vh}main.svelte-8o1gnw{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:64rem;margin:0 auto;box-sizing:border-box}@media(min-width: 480px){}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"app svelte-8o1gnw"}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

	<main class="${"svelte-8o1gnw"}">${slots.default ? slots.default({}) : ``}</main>

	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}
</div>`;
});
export {
  Layout as default
};
