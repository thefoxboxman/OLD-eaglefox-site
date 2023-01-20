<script>
	import brandName from '$lib/images/eagleFOX_brand_name.png';
	import Socials from '../../lib/Utilities/Socials.svelte';
</script>

<!-- HTML FOOTER !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!-->
<footer class="padding-block-800 text-neutral-900 primary-footer">
	
	<div class="container">
		<hr />
		<div class="even-columns">
			<div>
				<a href="#"><img class="brand-name" src={brandName} alt="Business Logo" /></a>

				<Socials />
			</div>
			<!-- footer section 3 -Links -->
			<div>
				<nav class="footer-nav">
					<ul class="footer-nav-list" style aria-label="Footer Navigation List">
						<li><a href="#"/>About Us</li>
						<li><a href="#"/>Our Trees</li>
					
					</ul>
				</nav>
			</div>
			<!-- footer section 4 -Form -->
			<div class="primary-footer-form">
				<form action="">
					<input type="email" />
					<button class="footer-button">Go</button>
				</form>
				<p class="copyright">
					Copyright 2022 All Rights Reserved. Web developer Eaglefox 0418 753 527
				</p>
			</div>
		</div>
	</div>
</footer>

<style>
	/* Footer Navigation!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */

	hr {
		margin-bottom: 2rem;
	}
	.primary-footer {
		margin-inline: auto;
	}
	.footer-nav {
		columns: 2;
		
		
	}
.brand-name {
		
		width:200px;
		height: 100px;
		object-fit: fill;

		
	}

	/* @media (min-width: 50em) if required to change size for large screens*/

	/* Footer Nav  List!!!!!!!!!!!!!!*/

	.footer-nav-list {
		list-style-type: none;
		cursor: pointer;
		color: var(--clr-neutral-100);

		font-size: var(--fs-nav);
		font-weight: var(--fw-bold);
	}
	
	

	.footer-nav-list li:where(:hover, :focus) {
		color: var(--clr-primary-550);
	}
	.primary-footer form {
		display: flex;
		gap: var(--size-300);
	}

	.primary-footer-form input:where([type='text'], [type='email']) {
		border-radius: 100vw;
		border: 0;
		padding: var(--size-300) var(--size-400);
		margin-inline: auto;
	}

	/* Footer Button !!!!!!!!!!!!!!!!!!!!!!!!!!*/
	.footer-button {
		cursor: pointer;
		text-decoration: none;
		border: 0;
		border-radius: 100vmax;
		padding: 1em 2em;
		font-weight: var(--fw-bold);
		font-size: --fs-button;
		color: var(--clr-neutral-100);
		background-color: var(--clr-primary-500);
	}

	.footer-button:hover,
	.footer-button:focus-visible {
		background-color: var(--clr-primary-550);
	}
	/* Footer copyright !!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
	.copyright {
		color: var(--clr-neutral-100);
		font-size: 0.75rem;
		padding-top: var(--size-500);
	}
</style>
