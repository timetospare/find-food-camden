import NavBar from "../../components/NavBar";
import Head from "next/head";
import { useEffect, useState } from "react";

const detailsArray = [
  {
    link: "https://www.dragonhall.org.uk/donate-online/",
    name: "Covent Garden Dragon Hall Trust",
    logo:
      "https://www.dragonhall.org.uk/wp-content/uploads/2020/06/dragon-hall-logo-trans.png",
  },
  {
    link: "https://www.highgatenewtown.org.uk/winter-food-campaign/",
    name: "Highgate Newtown Community Centre",
    logo:
      "https://www.highgatenewtown.org.uk/wp-content/uploads/2017/04/HNCC_Logo.png",
  },
  {
    link:
      "https://donorbox.org/kentish-town-community-centre-christmas-hampers-project",
    name: "Kentish Town Community Centre",
    logo:
      "https://static.wixstatic.com/media/ff5240_7d211a4b1d984d4ea57a560be8039621~mv2.jpg/v1/fill/w_180,h_95,al_c,q_80,usm_0.66_1.00_0.01/Jpeg%20Logo.webp",
  },
  {
    link:
      "https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=LP5Z5AVTCVMJJ&source=url",
    name: "South Hampstead and Kilburn Community Partnership",
    logo:
      "https://www.shakonline.co.uk/wordpress/wp-content/uploads/2019/10/shak_logo.png",
  },
  {
    link: "https://www.jw3.org.uk/support-us/donate",
    name: "JW3 Trust",
    logo:
      "https://img.endole.co.uk/?t=b8713e2e48a7df8c404ae10b0ac949f2&l=1c4a156c4eca021eb94bf273f44032a7",
  },
  {
    link: "https://www.gofundme.com/f/qcca-christmas-for-all",
    name: "Queen's Crescent Community Association",
    logo:
      "https://static.wixstatic.com/media/07c3ee_8036181956294011a3b9dce0f773a8da~mv2.png/v1/fill/w_363,h_115,al_c,q_85,usm_0.66_1.00_0.01/QCCA_logo_caption-1.webp",
  },
  {
    link:
      "https://app.thegoodexchange.com/project/18007/maiden-lane-community-centre/maiden-lane-community-centre-covid-19-food-bank-appeal",
    name: "Maiden Lane Community Centre",
    logo:
      "https://www.maidenlanecommunitycentre.org/uploads/6/2/8/5/6285336/1453481105.png",
  },
  {
    link: "https://www.justgiving.com/urbancommunityprojects",
    name: "Urban Community Projects",
    logo:
      "https://static1.squarespace.com/static/5ba36b33c3c16a1b3a5d0013/t/5c0e6f0870a6adee68def823/1607331274625/?format=1500w",
  },
  {
    link: "https://opencollective.com/cooperation-town",
    name: "Cooperation Kentish Town",
    logo:
      "https://cooperation.town/wp-content/uploads/2020/08/cropped-CooperationTown-LOGO.jpg",
  },
  {
    link:
      "https://uk.virginmoneygiving.com/charity-web/charity/displayCharityCampaignPage.action?campaignId=13079",
    name: "Castlehaven Community Association",
    logo:
      "https://www.castlehaven.org.uk/images/castlehaven-community-association.gif",
  },
  {
    link: "https://www.calthorpecommunitygarden.org.uk/",
    name: "Calthorpe Community Garden",
    logo:
      "https://static1.squarespace.com/static/5f5f3054d641c054986c353d/t/5f5f3091d7bf523730ff6170/1607090573236/?format=1500w",
  },
  {
    link: "https://www.holborncommunity.co.uk/get-involved/donate/",
    name: "Holborn Community Association",
    logo:
      "https://www.holborncommunity.co.uk/wp-content/uploads/2019/03/hca-logo.png",
  },
  {
    link:
      "https://www.paypal.com/donate/?cmd=_donations&business=v.msoni%40drescue.org&item_name=charity&currency_code=GBP&source=url",
    name: "Divine Rescue",
    logo:
      "https://www.drescue.org/wp-content/uploads/2020/06/cropped-divine-rescue-logo-4-6.png",
  },
  {
    link: "https://www.justgiving.com/sidingscc",
    name: "Sidings Community Centre",
    logo: "https://sidings.org.uk/wp-content/uploads/2014/06/scc-LOGO.png",
  },
  {
    link: "https://www.foodcycle.org.uk/get-involved/donate/",
    name: "Foodcycle/St Cuthbert's Church",
    logo:
      "https://www.foodcycle.org.uk/wp-content/themes/foodcycle/media/images/logo-new.png",
  },
  {
    link: "https://phca.cc/support-primrose-hill-community-association/",
    name: "Primrose Hill Community Association",
    logo: "https://phca.cc/wp-content/uploads/2020/06/cropped-PHCA-Logo-M.png",
  },
  {
    link:
      "https://donate.justgiving.com/donation-amount?uri=aHR0cHM6Ly9kb25hdGUtYXBpLmp1c3RnaXZpbmcuY29tL2FwaS9kb25hdGlvbnMvYTE3NmFhNWMxNGRlNGQ0ODhlZWEzZGJiNDNmYzI2YTk=",
    name: "Refugee Community Kitchen",
    logo:
      "https://images.squarespace-cdn.com/content/v1/59a7eed512abd9e692dbe3f2/1521650246328-VSDJ2IFU3VNJT19S10EG/ke17ZwdGBToddI8pDm48kP2a3uhLE1TdxpEyLjM4SQBZw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7Xj1nVWs2aaTtWBneO2WM-vDJNgZMRu7ygITecmL3pwXl5c7_zEM9kxWp1LHmqoKXA/donate1.jpg",
  },
];

const Donate = () => {
  const [listArray, setListArray] = useState([]);

  useEffect(() => {
    const list = detailsArray
      .map((a) => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value);
    setListArray(list);
  }, []);

  return (
    <>
      <Head>
        <title>Donate cash to food banks</title>
      </Head>
      <NavBar className="h-16 py-6 " />
      <div className="w-full min-h-screen bg-gray-100 pb-32 p-2">
        <div className="max-w-2xl mx-auto py-8">
          <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            Donate cash
          </h1>
        </div>
        <div className="bg-white shadow overflow-hidden sm:rounded-md mx-auto max-w-2xl w-full">
          <ul className="divide-y divide-gray-200">
            {listArray.map((item) => (
              <li key={item.link}>
                <a
                  key={item.link}
                  href={item.link}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="block hover:bg-gray-100"
                >
                  <div className="flex items-center px-4 py-4 sm:px-6">
                    <div className="min-w-0 flex-1 flex items-center">
                      <div className="flex-shrink-0">
                        <img className="w-12" src={item.logo} alt="" />
                      </div>
                      <div className="min-w-0 flex-1 px-4">
                        <div>
                          <p className="font-bold text-indigo-700 truncate">
                            {item.name}
                          </p>
                          <p className="mt-2 flex items-center text-sm text-gray-700">
                            <span className="truncate">{item.link}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <svg
                        className="h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Donate;
