# WIP

# Parcel boilerplate

Simple starter boilerplate for HTML/SCSS projects.

Transpile ES6 and SCSS

#TODO ALL BELLOW

###How to include images

To add `your-image.jpg` to you project, place it inside `images` folder use: 

HTML
```
<img src="../assets/images/your-image.jpg" alt="Image description">
```

SCSS:
```
.element {
	background-image: url(../images/your-image.jpg);
}
```

###How to include partials

To add header as a partial, create `header.html` file inside `partials` folder. To use it include in your HTML:
```
<include src="./header.html"></include>
```

Examples of adding
 - page
 - scss
 - js module

# To Include

- svg sprite
- minify images
- absolute paths to './src' folder
- link for favicons
- meta tags for socials -> og, twitter
- delete npm-run-all (maybe babel-core, babel-preset-env + .babelrc, .sassrc.js)

# Processes

- start
- build
- optimize (images)
- prod (build + optimize)

# File Structure

- build
- config
- src
	| - pages
	| - partials
	| - assets
		| - scss
		| - js
		| - vendor
		| - fonts
		| - images
			| - favicon.ico
			| - svg
			| - temp
