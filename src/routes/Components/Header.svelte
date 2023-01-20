<script>
	import brandName from '$lib/images/eagleFOX_brand_name.png';
	import logo from '$lib/images/Fox-logo.png';
	import close from '$lib/images/icon-close.svg';
	import hamburger from '$lib/images/icon-hamburger.svg';

	//Add functionality to hamburger button
	export let open = false;
	export let onClick = () => {
		open = !open;
	};
</script>

<!-- Header - Navigation -->

<header class="primary-header">
	<div class="container">
		<div class="nav-wrapper">
			<a href="#" /><img class="brand-name" src={brandName} alt="Business Brand Name Eaglefox" />
			{#if !open}
				<nav class="primary-navigation">
					<ul aria-label="Primary" class="nav-list">
						<li><a href="/services">Services</a></li>
						<li><a href="/about">About Us</a></li>
						<li><a href="/">Home</a></li>
					</ul>
				</nav>
				<div>
					<img class="logo" src={logo} alt="Business Brand Name Eaglefox" />
				</div>
			{/if}
			<button on:click={onClick} class="mobile-nav-toggle" aria-expanded={open}>
				{#if !open}
					<img class="icon-hamburger" src={hamburger} alt="" aria-hidden="true" />
				{/if}
				{#if open}
					<img class="icon-close" src={close} alt="" aria-hidden="true" />
				{/if}
			</button>
			{#if open}
				<nav class="mobile-navigation">
					<ul aria-label="Primary" class="nav-list">
						<li><a href="/services">Services</a></li>
						<li><a href="/about">About</a></li>
						<li><a href="/">Home</a></li>
					</ul>
				</nav>
				<div>
					<img class="logo" src={logo} alt="Business Brand Name Eaglefox" />
				</div>
			{/if}
		</div>
	</div>
</header>

<!-- End Header -Navigation -->
<style>
	/* Navigation !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
	.primary-header {
		margin-top: var(--size-700);
	}

	.nav-wrapper {
		display: flex;

		justify-content: space-around;
		align-items: center;
	}

	.brand-name {
		width: 200px;
		height: 100px;
		object-fit: fill;
	}

	.logo {
		max-width: 8em;
	}

	.mobile-nav-toggle {
		display: none;
	}

	.nav-list {
		list-style-type: none;
		cursor: pointer;
		font-size: var(--fs-nav);
		font-weight: var(--fw-bold);
		font-size: 1rem;
		display: flex;
		gap: var(--size-500);
		
	}

	.nav-list li {
		text-decoration: none;
	
	}
	.nav-list a{
		color: var(--clr-neutral-100);
	}
	.nav-list a:link {
		text-decoration: none;
		
	}

	.nav-list a:hover,
	.nav-list a:focus {
		color: var(--clr-primary-550);
	}

	@media (max-width: 50em) {
		.primary-navigation {
			display: none;
		}
		.mobile-navigation {
			display: block;
			z-index: 99;
			position: absolute;
			padding: 1rem;
			margin-top: 0.5rem;

			inset: 8rem var(--size-400) auto;
			max-width: 10rem;
			margin-inline: auto;

			border-radius: var(--size-400);
			box-shadow: 0 0 1em rgb(0, 0, 0, 0.3);
		}

		.primary-navigation::after {
			content: '';
			position: absolute;
		}

		.nav-list {
			display: grid;
			gap: var(--size-200);
			text-align: center;
			font-weight: var(--fw-bold);
		}

		.mobile-nav-toggle {
			display: block;
			position: fixed;
			cursor: pointer;
			top: var(--size-800);
			right: var(--size-600);
			background: transparent;
			border: 0;
			padding: 0.5em;
			width: 2.5rem;
			aspect-ratio: 1;
			/*background-image: url("$lib/images/icon-hamburger.svg"); */
			background-size: contain;
			background-repeat: no-repeat;
			background-position: center;
		}

		/*	.mobile-nav-toggle[aria-expanded='true'] {
			background-image: url("$lib/images/icon-close.svg");
	}*/
	} /* End Media Query */
</style>
