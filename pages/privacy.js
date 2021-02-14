import BetaBanner from '../components/BetaBanner';
import NavBar from '../components/NavBar';
import Link from 'next/link';
import Head from 'next/head';
const Privacy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy - Find Food Support in Camden</title>
        <meta
          name="description"
          content="Find Food has been developed by Camden Council and Time to Spare to help the residents of Camden find food and support."
        />
      </Head>
      <div className="relative bg-white overflow-hidden">
        <BetaBanner />
        <div className=" bg-white relative z-50 flex flex-col items-center">
          <NavBar className="h-10 md:h-16 py-6 " />
          <main className="p-6 sm:p-12 md:p-16 lg:w-9/12 ">
            <h1 className="font-bold text-2xl lg:text-3xl xl:px-8">
              Privacy Policy
            </h1>

            <div className="my-6 md:my-8 space-y-4 text-gray-700 xl:px-8">
              <p className="">
                The privacy of your data — and it is your data, not ours! — is a
                big deal to us.
              </p>
              <p>
                Time to Spare wants to offer you the best possible online
                experience. Consequently, additional functions, features,
                products or services are incorporated into The Site from time to
                time. This, and our commitment to protecting the privacy of your
                personal information, may result in periodic changes to this
                Privacy Policy. As a result, please remember to refer back to
                this Privacy Policy regularly to review any amendments.
              </p>
              <div>
                <h2 className="font-bold mb-2 text-lg">
                  Your Rights With Respect to Your Information
                </h2>
                <p>
                  You may have heard about the General Data Protection
                  Regulation (“GDPR”) in Europe. GDPR gives people under its
                  protection certain rights with respect to their personal
                  information collected by us on the Site. Accordingly, Time to
                  Spare recognizes and will comply with GDPR and those rights,
                  except as limited by applicable law. The rights under GDPR
                  include:
                </p>
                <ul className="space-y-1 list-disc pl-4 py-2">
                  <li>
                    Right of Access. This includes your right to access the
                    personal information we gather about you, and your right to
                    obtain information about the sharing, storage, security and
                    processing of that information.
                  </li>
                  <li>
                    Right to Correction. This is your right to request
                    correction of your personal information.
                  </li>
                  <li>
                    Right to Erasure. This is your right to request, subject to
                    certain limitations under applicable law, that your personal
                    information be erased from our possession (also known as the
                    “Right to be forgotten”). However, if applicable law
                    requires us to comply with your request to delete your
                    information, fulfillment of your request may prevent you
                    from using Basecamp services and may result in closing your
                    account.
                  </li>
                  <li>
                    Right to Complain. You have the right to make a complaint
                    regarding our handling of your personal information with the
                    appropriate supervisory authority.
                  </li>
                  <li>
                    Right to Restrict Processing. This is your right to request
                    restriction of how and why your personal information is used
                    or processed.
                  </li>
                  <li>
                    Right to Object. This is your right, in certain situations,
                    to object to how or why your personal information is
                    processed.
                  </li>
                  <li>
                    Right to Portability. This is your right to receive the
                    personal information we have about you and the right to
                    transmit it to another party.
                  </li>
                  <li>
                    Right to not be subject to Automated Decision-Making. This
                    is your right to object and prevent any decision that could
                    have a legal, or similarly significant, effect on you from
                    being made solely based on automated processes. This right
                    is limited, however, if the decision is necessary for
                    performance of any contract between you and us, is allowed
                    by applicable European law, or is based on your explicit
                    consent.
                  </li>
                </ul>
                <p>
                  Many of these rights can be exercised by signing in and
                  directly updating your account information. If you have
                  questions about exercising these rights or need assistance,
                  please contact us at{' '}
                  <a
                    href="mailto:support@timetospare.com"
                    target="_blank"
                    className="underline text-indigo-600"
                  >
                    support@timetospare.com
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="my-6 md:my-8 space-y-4 text-gray-700 xl:px-8">
              <h2 className="font-bold mb-1 text-lg">
                What information do we collect?
              </h2>
              <div>
                <h3 className="font-bold mb-1">Information supplied by you </h3>
                <p>
                  When you search for a location, we store this information
                  anonymously for the purpose of analysing where there is most
                  need for support. We don’t link any personal information to
                  this location.
                </p>
              </div>
              <div>
                <h3 className="font-bold">
                  Automated information collection - Log files/IP addresses
                </h3>
                <p>
                  When you visit The Site, we automatically log your IP address
                  (the unique address which identifies your computer on the
                  internet) which is automatically recognised by our web server.
                  We use IP addresses to help us administer the Site.
                </p>
              </div>
              <div>
                <h3 className="font-bold">Cookies</h3>
                <p>
                  We may store some information (commonly known as a "cookie")
                  on your computer when you visit our Site. This information
                  facilitates your use of our Site, and helps us to provide you
                  with the best level of service. We use cookies to ensure that
                  you do not need to re-enter your details every time you visit
                  our Site, and to help us remember your preferred settings. You
                  can erase or block cookies from your computer if you want to
                  (your help screen or manual should tell you how to do this),
                  but certain Site services may not work correctly, or at all,
                  if you set your browser not to accept cookies.
                </p>
              </div>
              <div>
                <h3 className="font-bold">Non-personal information</h3>
                <p>
                  We may automatically collect non-personal information about
                  you, such as the type of internet browsers you use, or the
                  site from which you linked to our Site. You cannot be
                  identified from this information, and it is only used to
                  assist us in providing an effective service on our Site. We
                  may, from time to time, supply the owners or operators of
                  third party sites, from which it is possible to link to our
                  Site, with information relating to the number of users linking
                  to our Site from their sites. You cannot be identified from
                  this information.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">
                  What do we use collected personal information for?
                </h3>
                <p>In order to:</p>
                <ul className="space-y-1 list-disc pl-4">
                  <li>customise and improve the service we provide to you</li>
                  <li>moderate use of the Site</li>
                  <li>
                    Provide aggregate statistics for co-ordinating organisations
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">
                  Disclosing your information to others
                </h3>
                <div className="space-y-2">
                  <p>
                    We will never disclose any personal information. We may
                    disclose aggregated and anonymised statistics to relevant
                    statutory and voluntary organisations.
                  </p>
                  <p>
                    Other than the disclosures referred to in this policy, we
                    will not disclose any personal information without your
                    permission, unless we are legally entitled or obliged to do
                    so (for example, if required to do so by Court order, or in
                    order to prevent fraud or any other crime).
                  </p>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">
                  Keeping our records accurate and accessing your information
                </h3>
                <div className="space-y-2">
                  <p>
                    You are entitled to ask for a copy of the information we
                    hold about you. To do so, please email us at the address
                    provided below.
                  </p>
                  <p>
                    Under the General Data Protection Regulation (GDPR), the
                    lawful bases we rely on for processing this information are{' '}
                    <br />
                    1. your consent and/or <br />
                    2. legitimate interest. <br />
                    You are able to remove your consent at any time. You can do
                    this by contacting{' '}
                    <a
                      href="mailto:privacy@timetospare.com"
                      target="_blank"
                      className="underline text-indigo-600"
                    >
                      privacy@timetospare.com
                    </a>
                  </p>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">
                  How we store your personal information
                </h3>
                <div className="space-y-2">
                  <p>
                    This Site is operated in Europe, and our data is held and
                    processed inside the European Union.
                  </p>
                  <p>
                    We will keep your account information for the duration of
                    the pandemic. We will then dispose of your information as
                    detailed below.
                  </p>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Processors we use</h3>
                <div className="space-y-2">
                  <p>
                    As part of the services we provide, and only to the extent
                    necessary, we may use certain third party processors to
                    process some or all of your personal information. For
                    identification of these processors, and where they are
                    located, please see our{' '}
                    <a
                      href="https://docs.google.com/document/d/1Hy4mBz3JgmvoHdMkou-vHbhsKbxSpZrdXgaggAVxXBc/edit"
                      target="_blank"
                      rel="noreferrer"
                      className="underline text-indigo-600"
                    >
                      Subprocessor listing
                    </a>
                    .
                  </p>
                  <p>
                    We only ever use third party processors who are GDPR
                    compliant and have an awareness of data protection, security
                    and confidentiality. We have signed appropriate data
                    processing contracts that comply with GDPR with each
                    processor.
                  </p>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Law enforcement</h3>
                <p>
                  Time to Spare won’t hand your data over to law enforcement
                  authorities unless a court order says we have to. We flat-out
                  reject requests from local and federal law enforcement when
                  they seek data without a court order. And unless we're legally
                  prevented from it, we’ll always inform you when such requests
                  are made.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">
                  Security & Encryption
                </h3>
                <p>
                  All data is encrypted via{' '}
                  <a
                    href="https://en.wikipedia.org/wiki/Transport_Layer_Security"
                    target="_blank"
                    rel="noreferrer"
                    className="underline text-indigo-600"
                  >
                    SSL/TLS
                  </a>{' '}
                  when transmitted from our servers to your browser. All data is
                  encrypted at rest in both our databases and our backups..
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Deleted data</h3>
                <p>
                  When you cancel your account, we'll ensure that nothing is
                  stored on our servers past 30 days. Anything you delete on
                  your account while it's active will also be purged within 30
                  days (up until then it's available in the trash can).
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Contacting Us</h3>
                <p>
                  If at any time you would like to contact us with your views
                  about our privacy practices, or with any enquiry relating to
                  your personal information, you can do so via{' '}
                  <a
                    href="mailto:support@timetospare.com"
                    target="_blank"
                    className="underline text-indigo-600"
                  >
                    email
                  </a>
                  .
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Privacy;
