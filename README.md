# Weather Report

# Coworking Agreement

## Accessibility Needs
*What does each team member need access to in order to succeed and show up the best they can?*

  - Being respectful and receptive to your partner's needs, schedule, learning style, and communication style. 
  - Establishing a safe, welcoming, and comfortable space where we feel open to learn and vocalize any concerns and disagreements.
  - Being mindful of keeping our communication channels open.    

## Collaboration vs. individual work expectations

<p><i>Clarify your collaboration expectations- does your group want to write code together all of the time? Or divide work to do independently, then come together to share accomplishments? What tools and technologies can help your collaboration?</i></p>

<img src = "https://cdn.dribbble.com/users/32860/screenshots/7299569/media/6e11fef284d94269707ba2492a11f9aa.gif" align="right" hspace="-35" width="35%">

<img src ="assets/image_padding.png" align="right" width="15" height=225> 

<ul align="justify">
  <li>Ideally, we aim to collaboratively code together as much as possible throughout the entire project. However, if we reach a point where we can no longer make any efficient progress on problem-solving, we will try to work on it separately, regroup, and share our ideas the following day when we reconvene. From there, we will decide how to best solution together or how to best proceed from there.</li>
  <li> If necessary, we're willing to meet up virtually after co-working hours to complete the project by June 9, 2023 (Friday).</li>
  <li> We prefer to collaboratively work together throughout the entire process rather than to delegate separate sections for individual work</li>
  <li>In terms of tools and technologies that will help our collaboration, we find pulling and pushing on git (as well as VS Code Live Share) to alternate between driving and navigating together. Slack or Zoom are also useful for keeping our communication channels open outside class if necessary.</li>
</ul>

## Learning Style
*How does each team member learn best in project settings?*

  - Embracing vulnerability and better understanding areas where we each feel anxiety or pressure in team settings. 
  - Live coding is usually a source of nervousness since we never want to be a burden on each other and value each other. Hence, we've established affirmations that help make the project setting or environment more conducive for supporting one another. This involves never judging one another for taking a certain amount of time to think through a problem, providing supportive encouragement during live codes, and celebrate mistakes as learning opportunities. 

## Preferred Feedback Style
*How does each team member best receive feedback?*

-  Delivering feedback in a respectful and considerate manner.
-  Constructive feedback that comes from good intentions.
-  Examples when giving feedback would be helpful.
-  Although we both lean towards Guess culture more, we prefer to receive feedback on the Ask culture spectrum.

## One Team Communication Skill to Improve
*What is a teamwork-related skill you want to work on?*

  - Developing soft skills.
  - Being able to talk about code that is understandable.
  - Being able to feel safe to share what is needed from your group at the moment.
  - Being able to better communicate alogithmic thought process or logic in a more artculate way.
  - Collaborative problem-solving and active listening.
  
## Optional: Other agreements
*Other co-working agreements that were not captured in the above sections.*

## Signatures
 
<img src ="assets/shiba-inu.png" width="30" height="25"> <font size = "4"><i>Sophia Tran</i></font>

<img src ="assets/juno.png" width ="30" height="25"> <font size = "4"><i>Linh Huynh</i></font>

**Date:** June 6, 2023


## Skills Assessed

- Following directions and reading comprehension
- Structuring content in HTML
- Applying styles with CSS
- Using variables
- Creating functions
- Manipulating the DOM
- Handling events
- Using Git
- Designing an intentional user experience
- Using Axios to call 3rd party APIs
- Using a proxy server to manage API keys
- Handling asynchronous calls

## Goal

"Do I need to bring a jacket?" "Will it snow today?" "How hot will it be?" When we have questions like these, we often pull open a weather app!

Great weather apps do these two things:

1. Pull weather data from a data source
1. Display the weather in readable, compelling way

![DuckDuckGo's weather modal, which features city name, temperature reading, and the weather. Some icons show sunny weather, some icons show rainy weather, and some show cloudy weather.](ada-project-docs/assets/example-duckduckgo.png)  
_Fig. DuckDuckGo's weather modal, which features city name, temperature reading, and weather icons._

Our goal is to create a fun, small weather app that focuses on displaying the weather.

Our weather app will set the weather using user interaction and get the weather from a 3rd party API, OpenWeather.

![Example weather app: The temperature reads 62, in yellow text. The selected dropdown for "Sky" is "Cloudy." There is a depiction of cloudy weather. The city name is "Hoboken." The header reads "Hoboken."](ada-project-docs/assets/cloudy-62.png)  
_Fig. Example weather app displaying the weather for Hoboken._

![Example weather app: The temperature reads 85, in red text. The selected dropdown for "Sky" is "Sunny." There is a depiction of sunny weather. The city name is "Santo Domingo" The header reads "Santo Domingo."](ada-project-docs/assets/santo-domingo-85.png)  
_Fig. Example weather app displaying the weather for Santo Domingo._

![Example weather app: The temperature reads 38, in teal text. The selected dropdown for "Sky" is "Snowy." There is a depiction of snowy weather. The city name is "Bozeman." The header reads "Bozeman."](ada-project-docs/assets/snow-38.png)  
_Fig. Example weather app displaying the weather for Bozeman._

![Example weather app: The temperature reads 49, in teal text. The selected dropdown for "Sky" is "Rainy." There is a depiction of rainy weather. The city name is "Seattle." The header reads "Seattle."](ada-project-docs/assets/rainy-49.png)  
_Fig. Example weather app displaying the weather for Seattle._

## How to Complete and Submit

Follow the requirements below and build a small weather app.

At submission time, no matter where you are, submit the project via Learn.

## JavaScript Requirements

You are required to use vanilla JavaScript for all parts of this project, including the optional enhancements.

## Axios
The only extra JavaScript library we should load is [`Axios`](https://axios-http.com/docs/intro).

To download the `axios` node module, run `yarn install`

To include axios in your project, include the following script tag above the script tag linking `index.js`:
- `<script src="./node_modules/axios/dist/axios.min.js"></script>`

This should be done during the Wave 1 initial setup of your `index.html` page.

## Workflow Requirements

- Create at least five git commits throughout this project
- Use the following files and folders:
  - `index.html`
  - `src/index.js`
  - `styles/index.css`
  - `assets` folder, potentially for holding images
- Create and add more folders and files as needed

## Content Requirements

For this project, there are no requirements around color schemes, font choices, or layouts. 

Note that applying styles with CSS is one of many learning goals of this project -- it is not the central learning goal. You may enjoy being creative with styles, but we encourage you to not concern yourself with getting the styles perfect. Remember, you can always choose to continue working on styling after you've completed all functional requirements. 

However, _at a minimum_, your project must contain these elements:

Wave 2:

1. An element that displays the temperature
1. A clickable element to increase temperature
1. A clickable element to decrease temperature
1. An element that displays a landscape

Wave 3:

1. An element that displays the city name
1. An element that contains an `<input type="text">` element, used to rename the city

Wave 4:

1. A clickable element to get the current temperature of the displayed city name

Wave 5:

1. A `<select>` dropdown element to set the sky type
1. An element that displays a sky

Wave 6:

1. A clickable element to reset the city name

## Detailed Content Requirements

[Wave 1: Create Wireframes and HTML](./ada-project-docs/wave-01.md)

[Wave 2: Increase and Decrease Temperature](./ada-project-docs/wave-02.md)

[Wave 3: Naming the City](./ada-project-docs/wave-03.md)

[Wave 4: Calling APIs](./ada-project-docs/wave-04.md)

[Wave 5: Selecting the Sky](./ada-project-docs/wave-05.md)

[Wave 6: Resetting the City Name](./ada-project-docs/wave-06.md)

[Optional Enhancements to inspire you](./ada-project-docs/optional-enhancements.md)
