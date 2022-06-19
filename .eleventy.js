const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = eleventyConfig => {

	eleventyConfig.addPlugin(pluginRss);

	eleventyConfig.addPassthroughCopy("content/css");
	eleventyConfig.addPassthroughCopy("content/img");
	eleventyConfig.addPassthroughCopy("content/fonts");
	eleventyConfig.addPassthroughCopy("content/js");

	eleventyConfig.setFrontMatterParsingOptions({
		excerpt: true,
		excerpt_separator: "<!-- excerpt -->"
	});

	eleventyConfig.addCollection("categories", function (collectionApi) {
		let categories = new Set();
		let posts = collectionApi.getFilteredByTag('post');
		posts.forEach(p => {
			let cats = p.data.categories;
			cats.forEach(c => categories.add(c));
		});
		return Array.from(categories);
	});

	eleventyConfig.addFilter("filterByCategory", function (posts, cat) {
		cat = cat.toLowerCase();
		let result = posts.filter(p => {
			let cats = p.data.categories.map(s => s.toLowerCase());
			return cats.includes(cat);
		});
		return result;
	});

	const french = new Intl.DateTimeFormat('fr');
	eleventyConfig.addFilter("niceDate", function (d) {
		return french.format(d);
	});

	eleventyConfig.addFilter("niceDateJs", function (d) {
		var datum = Date.parse(d)
		return datum/1000;
		console.log(datum)
	});


	return {
		dir: {
			input: 'content'
		}
	}


};