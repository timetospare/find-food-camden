This project is a public facing front end for displaying VCS services on a map. The "back end" is also in this repo in the `/pages/api` directory, however this is not really a back-end, but just serverless functions that call the Time to Spare API to fetch the right information.

## Getting Started

First, run `yarn` to install all the dependencies.

Secondly, to get this working properly, you're going to need to set some API keys/secrets for some external services.

## Client side keys:

Go to /config.json and set the values for:<br/>
`METOMIC_ID`: For the cookie-consent blocking<br/>
`GA_TRACKING_ID` : For the Google Analytics Code<br/>
`TTS_API_URL`: The API url for fetching details on VCS services from Time to Spare. It's best to leave this as the pre-set value.

## Server side keys:

You'll need to create a .env file with the following values:

`TTS_SECRET_ID="your time to spare secret key"`<br/>
`TTS_USER_ID="your time to spare API user id"`<br/>

For accessing the Time to Spare API - to get a set of credentials, ask tom@timetospare.com.


`NEXT_PUBLIC_MAPBOX_TOKEN="your mapbox token"`

To render the map. Go here to signup for a key if you haven't already got an account: https://account.mapbox.com/auth/signup/

`TRAVELTIME_APP_ID="your travel time app id"`<br/>
`TRAVELTIME_API_KEY="your travel time api key"`

To show "walking time" values on the results - go here to get a free/paid API key: https://traveltime.com/search/pricing

## To run locally

- Create a Vercel account
- Install the Vercel CLI
- Run `vercel dev`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The page auto-updates as you edit the files.

## Learn More

This project uses React (v17), Next.js (v10) and Tailwind (v1.9).

To learn about React, take a look at their documentation: https://reactjs.org/

If you're familiar with React but want to learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

For tailwind (and an explanation of why the CSS classes look strange), see here: https://tailwindcss.com/docs. This cheatsheet is also helpful: https://nerdcave.com/tailwind-cheat-sheet.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
