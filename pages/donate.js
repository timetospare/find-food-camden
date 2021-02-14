import Link from "next/link";
import NavBar from "../components/NavBar";
import Head from 'next/head'

const Donate = () => {
  return (
    <>
    <Head>
        <title>
          Donate - Find Food Support in Camden
        </title>
        <meta
          name="description"
          content="Charities supporting people through food poverty in Camden need your support. Discover how you can help through practical or monetary donations."
        />
        <meta property="og:url" content="https://findfood.camden.gov.uk/camden-food" />
        <meta property="og:title" content="Map - Find Food Support in Camden" />
        <meta
          property="og:description"
          content="Charities supporting people through food poverty in Camden need your support. Discover how you can help through practical or monetary donations."
        />
        <meta
          property="twitter:title"
          content="Donate - Find Food Support in Camden"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://i.ibb.co/HDff9SP/find-food-twitter.png" />
        <meta property="og:image" content="https://i.ibb.co/HDff9SP/find-food-twitter.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <NavBar className="h-16 py-6 " />
      <div className="relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3"></div>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Offer your support
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-700 sm:mt-4">
              Charities in your area really need your support - both for
              practical and financial donations. Please help if you can.
            </p>
          </div>

          <div className="mt-12 max-w-sm mx-auto grid gap-16 lg:grid-cols-2 lg:max-w-none">
            <Link href="/donate/cash">
              <a className="hover:bg-gray-100 bg-white">
                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <div className="flex-shrink-0">
                    <img
                      className="h-48 w-full object-cover"
                      src="https://images.unsplash.com/photo-1586430156076-4f400aeebef1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
                      alt=""
                    />
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-bold text-indigo-600">
                        Individual and Business
                      </p>
                      <div className="block mt-2">
                        <h2 className="text-xl font-bold text-gray-900">
                          Donate cash
                        </h2>
                        <p className="mt-3 text-base text-gray-700">
                          Find a local organisation to donate your money to.
                          This is often the easiest support for a charity to
                          accept.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
            <Link href="/donate/practical">
              <a className="hover:bg-gray-100 bg-white">
                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <div className="flex-shrink-0">
                    <img
                      className="h-48 w-full object-cover"
                      src="https://images.unsplash.com/photo-1584263347416-85a696b4eda7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=800"
                      alt=""
                    />
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-bold text-indigo-600">
                        Business
                      </p>
                      <div className="block mt-2">
                        <h2 className="text-xl font-bold text-gray-900">
                          Offer food, items, transport or storage space
                        </h2>
                        <p className="mt-3 text-base text-gray-700">
                          Food banks are always in need of more food and hygiene
                          items (though sometimes it can be hard to find the
                          right storage space or transport).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Donate;
