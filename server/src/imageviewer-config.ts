const imageviewerConfig: SmartMirror.IWidgetConfig = {
	name: 'Image Viewer',
	icon: 'fad fa-align-justify',
	helper: true,
	link: "your_url_link",
	author: "Roberto van der Linden",
	version: "0.0.1",
	settings: [{
		name: "header",
		label: "Widget Title",
		type: 'input',
		value: "imageviewer",
		description: "The header title of the widget."
	}, {
		name: "url",
		label: "Image url",
		type: 'input',
		value: "",
		description: "The url of the image."
	},{
		name: "maxWidth",
		label: "Max width",
		type: 'input',
		value: "100%",
		description: "Max width of the image including px or %"
	},{
		name: "showCountDown",
		label: "Show countdown",
		type: "bool",
		value: false,
		description: "Add the count down in days to the header"
	},{
		name: "countDownDate",
		label: "Date (dd-MM-yyyy)",
		type: 'input',
		value: "",
		description: "Only used when Show countdown is enabled"
	},{
		name: "showAsCircle",
		label: "Show image as circle",
		type: "bool",
		value: false,
		description: "Show the image as circle"
	},{
		name: "circleSize",
		label: "Circle width and height (incl. px). Example: 100px",
		type: "input",
		value: "200px",
		description: "The width and height of the circle in px"
	}
	]
}

module.exports = imageviewerConfig;
