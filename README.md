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
For accessing the Time to Spare API<br/>

`NEXT_PUBLIC_MAPBOX_TOKEN="your mapbox token"`<br/>
To render the map<br/>

`TRAVELTIME_APP_ID="your travel time app id"`<br/>
`TRAVELTIME_API_KEY="your travel time api key"`<br/>
To show "walking time" values on the results

## To run locally

- Create a Vercel account
- Install the Vercel CLI
- Run `vercel dev`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The page auto-updates as you edit the files.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
