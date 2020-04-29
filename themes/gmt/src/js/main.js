import './main-components/_matches-polyfill.js';
import './main-components/add-to-cart.js';
import addHeadingLinks from './main-components/heading-links.js';
import mailchimp from './main-components/mailchimp.js';
import pricingParity from './main-components/pricing-parity.js';
import tableOfContents from './main-components/table-of-contents.js';

// Mailchimp form
if (document.querySelector('#mailchimp-form')) {
	mailchimp(function (data) {
		if (data.code === 200) {
			window.location.href = 'https://gomakethings.com/newsletter-success';
		}
	});
}

// Add table of contents
if (document.querySelector('#table-of-contents')) {
	tableOfContents('#table-of-contents', 'h2', '<h2 class="h5">In this chapter</h2>', null, 'ul');
}

// Anchor links on posts
if (document.body.matches('.js-anchors')) {
	addHeadingLinks('h2, h3, h4, h5, h6', '#', 'link-no-underline');
}

// Relocate next page links
(function () {

	// Get elements
	var next = document.querySelector('[data-next-page]');
	var footnotes = document.querySelector('.footnotes');
	if (!next || !footnotes) return;

	// Move the link
	footnotes.parentNode.insertBefore(next, footnotes);

})();

// Pricing parity
pricingParity('https://gomakethings.com/checkout/wp-json/gmt-pricing-parity/v1/discount/', '<div class="container container-large"><img width="100" style="float:left;margin: 0.125em 1em 1em 0;" src="https://flagpedia.net/data/flags/normal/{{iso}}.png"><p class="text-small no-margin-bottom">Hi! Looks like you\'re from <strong>{{country}}</strong>, where my <strong>The Lean Web</strong> ebook might be a bit expensive. A <strong>{{amount}}% discount</strong> will automatically be applied to at checkout. Cheers!</p></div>');