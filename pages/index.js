import PostcodeAutocomplete from '../components/PostcodeAutocomplete';
import { useState } from 'react';
import Router from 'next/router';
import getUserLocation from '../components/UserLocation';
import NavBar from '../components/NavBar';
import VenueCarousel from '../components/VenueCarousel';
import BetaBanner from '../components/BetaBanner';
import Head from 'next/head';

const Index = () => {
  return (
    <>
      <Head>
        <title>Find Food Support in Camden</title>
        <meta
          name="description"
          content="Find food support in your local community. Discover the support available near you in Camden."
        />
        <meta property="og:url" content="https://findfood.camden.gov.uk/camden-food" />
        <meta property="og:title" content="Find Food Support in Camden" />
        <meta
          property="og:description"
          content="Find food support in your local community. Discover the support available near you in Camden."
        />
        <meta
          property="twitter:title"
          content="Find Food Support in Camden"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://i.ibb.co/HDff9SP/find-food-twitter.png" />
        <meta property="og:image" content="https://i.ibb.co/HDff9SP/find-food-twitter.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <div className="relative bg-white overflow-hidden">
        <BetaBanner />
        <div className="max-w-7xl mx-auto bg-white relative z-50">
          <NavBar className="h-10 md:h-16 py-6" />
          <div className="absolute lg:relative md:relative top-0 h-75vh sm:h-72 w-full z-0 border-b border-grey-200">
            <div className="md:w-2/3 lg:w-1/2 top-0 card-header h-full flex flex-col justify-center items-center relative md:p-8 lg:pr-16 lg:p-8 lg:pr-16">
              <div className="p-4 md:p-8 w-full max-w-64">
                <div className="bg-white rounded-md shadow p-4 md:p-0 md:shadow-none z-40 mx-2 sm:mx-32 md:mx-0">
                  <h1 className="hidden md:block text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl pb-6">
                    Find food support in your local{' '}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-royalb to-green-600">
                      community
                    </span>
                  </h1>
                  <h1 className="md:hidden z-10 font-bold text-2xl text-center">
                    Find food support in Camden
                  </h1>
                  <div className="flex flex-col md:flex-row items-center md:items-end">
                    <div>
                      <p className="text-sm mt-2 -mb-1 md:mb-1 md:mt-0 ml-1 md:font-bold text-center md:text-left">
                        Enter a postcode{' '}
                        <span className="font-normal">(e.g. N1C 4AG)</span>
                      </p>
                      <PostcodeAutocomplete
                        onLookUp={value => {
                          Router.push(
                            `/camden-food?lat=${value.latitude}&lon=${value.longitude}&district=${value.adminDistrict}`
                          );
                        }}
                        setFocusedVenue={() => {}}
                        containerClassName="w-64 mt-2 md:mt-0"
                        placeholder="N1C 4AG"
                      />
                    </div>
                    <div className="flex flex-row items-center pt-3 sm:pt-0">
                      <p className="px-4 lg:px-8">OR</p>

                      <button
                        type="button"
                        onClick={() => {
                          getUserLocation(result =>
                            Router.push(
                              `/camden-food?lat=${result.latitude}&lon=${result.longitude}`
                            )
                          );
                        }}
                        className="z-40 btn-primary focus:border-4 focus:bg-blue-700 focus:border-black inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-whitefocus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                      >
                        Search nearby
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-white">
                <svg
                  className="hidden lg:block md:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2 z-10"
                  fill="currentColor"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <polygon points="50,0 100,0 50,100 0,100"></polygon>
                </svg>
              </div>
            </div>

            <div className="hidden lg:block md:block absolute inset-0 left-auto md:w-1/3 lg:w-1/2">
              <img
                className="w-full h-full object-cover"
                // src="https://images.unsplash.com/photo-1591189863430-ab87e120f312?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=875&q=80"
                src="https://images.unsplash.com/photo-1590311824865-bac58a024e51?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=875&q=80"
                alt=""
              />
            </div>
          </div>
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32 mt-50vh lg:mt-2 md:mt-2">
            <main className="mx-auto z-10 pt-32 md:pt-0">
              <section className="px-4 sm:px-6 0 lg:px-16">
                <h2 className="tracking-tight leading-10 font-extrabold text-gray-900 sm:text-4xl sm:leading-none pb-6 text-2xl pb-4 md:pt-4">
                  Featured
                </h2>
                <div className="w-full">
                  <VenueCarousel
                    ids={[
                      'HVCBddRR8RBnjGQxXEx0',
                      '3HYp3EAqJpa6Db1w2rG8',
                      'lWPUlKlJfJe76YB0mBSS',
                      'YjjYWZvEUOs2JR5CvPx5',
                      'gUhS2amZM1jB7vxfxoS1',
                    ]}
                  />
                </div>
              </section>
              <div className="bg-gray-100 mt-8 md:mt-16 px-4 sm:px-6 0 lg:px-16 py-8 md:py-16 text-gray-900">
                <section className="flex-col flex md:flex-row md:items-center">
                  <h2 className="max-w-md text-xl lg:mr-24 font-bold">
                    Support is provided by a network of local community
                    organisations
                  </h2>
                  <div className="flex-1 lg:mr-8 flex md:block pb-8 pt-8 md:py-0">
                    <img
                      src="/icons/local.svg"
                      alt=""
                      className="h-12 w-auto mb-4 pr-4 md:pr-0"
                    />
                    <div>
                      <h3 className="font-bold">Local</h3>
                      <p>
                        Not-for-profit organisations based in your local
                        community.
                      </p>
                    </div>
                  </div>
                  <div className="flex-1 lg:mr-8 flex md:block pb-8 md:pb-0">
                    <img
                      src="/icons/flexible.svg"
                      alt=""
                      className="h-12 w-auto mb-4 pr-4 md:pr-0"
                    />
                    <div>
                      <h3 className="font-bold">Flexible</h3>
                      <p>
                        Pay-what-you-can, Recipe-clubs or Free service are all
                        available.
                      </p>
                    </div>
                  </div>
                  <div className="flex-1 flex md:block pb-8 md:pb-0">
                    <img
                      src="/icons/covid.svg"
                      alt=""
                      className="h-12 w-auto mb-4 pr-4 md:pr-0"
                    />
                    <div>
                      <h3 className="font-bold">Covid-secure</h3>
                      <p>
                        All organisations are Covid-secure for collection &
                        delivery.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
              <section>
                <div className="mt-8 md:mt-24 w-full">
                  <h2 className="text-xl font-bold tracking-tight leading-10 text-gray-900 sm:leading-none pb-6 md:pt-4 text-center px-4">
                    Created by Camden Council in collaboration with Time to
                    Spare
                  </h2>
                  <div className="flex flex-col md:flex-row items-center justify-center pt-8 w-full">
                    <a href="https://www.camden.gov.uk/" target="_blank" rel="no-referrer">
                      <img
                        src="/camden-logo.png"
                        alt="Camden Council Logo"
                        className="h-8 md:h-12 w-auto md:pr-16 mb-8"
                      />
                    </a>
                    <a href="https://timetospare.com" target="_blank" rel="no-referrer">
                      <img
                        src="/time-to-spare-logo.svg"
                        alt="Time to Spare Logo"
                        className="h-8 md:h-12 w-auto mb-4"
                      />
                    </a>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
        <style jsx>
          {`
            @media screen and (max-width: 765px) {
              .card-header {
                background-image: url('https://images.unsplash.com/photo-1590311824865-bac58a024e51?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80');
                background-position-y: -20%;
                background-size: cover;
              }

              .card-header:after {
                content: '';
                position: absolute;
                bottom: 0;
                left: -10%;
                height: 50px;
                z-index: 0;
                width: 120%;
                background: #ffffff;
                transform: translateY(50%) rotate(5deg);
              }
            }
          `}
        </style>
      </div>
    </>
  );
};

export default Index;
