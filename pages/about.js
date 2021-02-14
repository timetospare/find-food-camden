import BetaBanner from '../components/BetaBanner';
import NavBar from '../components/NavBar';
import Link from 'next/link';
import Head from 'next/head';

const About = () => {
  const QAObj = [
    {
      question: 'Can I use a food bank?',
      answer:
        'Yes of course! Food banks are for anyone who is struggling to get access to food to feed themselves or their family.',
    },
    {
      question: 'Can I just turn up when they are open?',
      answer: `This depends on the organisation. For those marked 'by appointment' you'll need to book a time to visit. Some organisations may also require a voucher or referral. This will be stated in the details for each organisation. If the organisation is marked 'drop in', you can turn up when they run their food bank.`,
    },
    {
      question: `How do I get a voucher or referral?`,
      answer: `Most food banks work closely with community groups and healthcare professionals to identify people in need. Some food banks require a food voucher to be presented when picking up the food which is known as a referral. If the location most suitable for you requires a referral this will be indicated on the site with guidance on how to get the right referral for that location. You may need to contact the location directly for advice, your GP or social worker may be able to help, or the location may provide a link to their referral form. Vouchers make sure that you get the right type and amount of food as well as any other needed items such as nappies or toiletries.`,
    },
    {
      question: `How can I help?`,
      answer: (
        <div className="space-y-2">
          <p>
            If you are able to and would like to donate time, food or supplies,
            or if you would like to make a financial donation to a food bank,
            your donation will be much appreciated - even a little can make a
            big difference.
          </p>
          <p>
            For residents and businesses who wish to offer support, please visit
            the{' '}
            <Link href="/donate">
              <a className="underline cursor-pointer text-indigo-700 hover:text-indigo-500">
                Donate
              </a>
            </Link>{' '}
            page. You can find direct links to each organisation to make a
            monetary donation. Businesses who wish to donate food, time or
            supplies to food banks can fill in the form to let us know how you
            would like to help and your details.
          </p>
          <p>
            If you would like to donate to the London-wide Covid Community
            Campaign, the proceeds of which go to four organisations tackling
            food poverty, please head to{' '}
            <a
              href="https://covidcommunitycampaign.co.uk"
              className="underline text-indigo-700 hover:text-indigo-500"
              target="_blank"
            >
              Covid Commmunity Campaign
            </a>
            .
          </p>
        </div>
      ),
    },
    {
      question: `How can my organisation feature on the site?`,
      answer: (
        <span>
          If you represent a food bank or volunteer organisation and would like
          your organisation to be shown on the map or your details to be changed
          or updated, please send an email to{' '}
          <a
            href="mailto:hello@timetospare.com?subject=Find Food Camden"
            className="underline text-indigo-700 hover:text-indigo-500"
            target="_blank"
          >
            hello@timetospare.com
          </a>{' '}
          .
        </span>
      ),
    },
    {
      question: `Questions or comments`,
      answer: (
        <span>
          This is a new service and we welcome all feedback from residents,
          organisations and businesses. Please use{' '}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdf3dkhm_tx-g_s1ELDSSP6XYUkya39kTsPfXWz_o4zwviRzQ/viewform"
            rel="noreferrer"
            target="_blank"
            className="underline cursor-pointer text-indigo-700 hover:text-indigo-500"
          >
            this form
          </a>{' '}
          if you wish to find out more or have a question, problem or complaint
          about this website.
        </span>
      ),
    },
  ];
  const QA = () => {
    return QAObj.map(qa => {
      return (
        <div className="my-8">
          <h3 className="font-bold mb-1 text-indigo-700 text-lg">
            {qa.question}
          </h3>
          <p>{qa.answer}</p>
        </div>
      );
    });
  };

  return (
    <>
      <Head>
        <title>About - Find Food Support in Camden</title>
        <meta
          name="description"
          content="Find Food helps residents of Camden find food and support."
        />
        <meta property="og:url" content="https://findfood.camden.gov.uk/about" />
        <meta property="og:title" content="About - Find Food Support in Camden" />
        <meta
          property="og:description"
          content="Find Food helps residents of Camden find food and support."
        />
        <meta
          property="twitter:title"
          content="About - Find Food Support in Camden"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://i.ibb.co/HDff9SP/find-food-twitter.png" />
        <meta property="og:image" content="https://i.ibb.co/HDff9SP/find-food-twitter.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <div className="relative bg-white overflow-hidden">
        <BetaBanner />
        <div className=" bg-white relative z-50 flex flex-col items-center">
          <NavBar className="h-10 md:h-16 py-6 " />
          <main className="p-6 sm:p-12 md:p-16 lg:w-9/12 xl:w-8/12">
            <h1 className="font-bold text-2xl lg:text-5xl">About Find Food</h1>

            <div className="my-6 md:my-8 space-y-4 text-gray-700 text-lg md:bg-gray-200 md:p-8">
              <p className="">
                Our aim is that no child should go hungry, no parent should go
                hungry to feed their child, and no one should be left struggling
                and without anywhere to turn. As growing numbers of people need
                support to feed themselves and their families, we want to make
                it easier to get help, sharing where you can find food banks and
                other important information about the services that are offered.
              </p>

              <p className="">
                Food banks offer different options, such as packages of food to
                collect or deliveries to those who are unable to collect in
                person. Wherever possible, those options will be listed so that
                you can find the food suitable for you and your family.
              </p>

              <p className="">
                Find Food has been developed by{' '}
                <a
                  href="https://www.camden.gov.uk/"
                  rel="noreferrer"
                  target="_blank"
                  className="underline  text-indigo-700 hover:text-indigo-500"
                >
                  Camden Council
                </a>{' '}
                and{' '}
                <a
                  href="https://timetospare.com"
                  rel="noreferrer"
                  target="_blank"
                  className="underline  text-indigo-700 hover:text-indigo-500"
                >
                  Time to Spare
                </a>{' '}
                to help the residents of Camden find food and support. The food
                banks providing this support are separate charities and
                community organisations, often run by volunteers and with scarce
                resources. You can help support these Camden organisations
                through{' '}
                <Link href="/donate/cash">
                  <a className="underline cursor-pointer text-indigo-700 hover:text-indigo-500">
                    monetary donations
                  </a>
                </Link>{' '}
                .
              </p>
            </div>
            <QA />
          </main>
        </div>
      </div>
    </>
  );
};

export default About;
