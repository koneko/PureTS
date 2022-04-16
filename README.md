# Pure TS

The Pure TS project is a project that allows you to write your whole page in only `typescript`. <br>
Its kinda an experiment, feel free to make your own additions.

## Usage

1. Clone the repo `git clone https://github.com/koneko/PureTS.git`.
2. Check out the functions in `public/ts/utils.ts`.
3. Write your own code in `index.ts` and `test.ts`, or make new files and add them to the pagesList in `utils.ts`.
4. Use `npm run devBuild` and `npm run dev` in 2 seperate command lines for the proper dev experience. (change out the `tsconfig.json` to your liking)
5. Publish your code in anyway you see fit.

### Functions

You can use normal JS functions, but if you are new to using only JS or TS when making a site. <br>
Here they are: <br>

> getDoc() // returns the div where the main app rests
> createText(html) // returns an element that you feed into an append function
> createHeading(html, number) // same thing as above, just a heading
> createButton(html, onclick) // same thing as above, just pass in a function to the onclick argument
> createImage(src) // creates an image with the link
> createStyle(style) // creates and appends style
> append(element) // appends an element to the document body, you might wanna wrap creation functions in this
> appendMultiple(array) // appends all items in the array to the body
> specialAppend(element, parent) // appends the element you provide, to a custom parent (body, head, div that you pass in, etc)
> switchPage(page) // changes the page
> new PTS(tag) // discover it for yourself
