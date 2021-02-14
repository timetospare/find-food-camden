const { default: NavBar } = require('../components/NavBar');
import Head from 'next/head';

const Terms = () => {
  return (
    <>
      <Head>
        <title>Terms - Find Food Support in Camden</title>
        <meta
          name="description"
          content="Terms and Conditions for Find Food"
        />
      </Head>
      <NavBar className="h-16 py-6" />
      <div className="m-auto container p-4 lg:p-16 max-w-screen-md">
        <h1 className="text-4xl text-gray-900 mb-4">Terms and Conditions</h1>
        <p className="my-4">
          Your use of the Service is at your sole risk. The service is provided
          on an “as is” and “as available” basis.
        </p>
        <p className="my-4">Technical support is only provided via email.</p>
        <p className="my-4">
          You understand that the Company uses third party vendors and hosting
          partners to provide the necessary hardware, software, networking,
          storage, and related technology required to run the Service.
        </p>
        <p className="my-4">You must not modify, adapt or hack the Service.</p>
        <p className="my-4">
          You must not modify another website so as to falsely imply that it is
          associated with the Service or the Company.
        </p>
        <p className="my-4">
          You agree not to reproduce, duplicate, copy, sell, resell or exploit
          any portion of the Service, use of the Service, or access to the
          Service without the express written permission by the Company.
        </p>
        <p className="my-4">
          We may, but have no obligation to, remove content and accounts that we
          determine in our sole discretion are unlawful or violates any party’s
          intellectual property or these Terms of Service.
        </p>
        <p className="my-4">
          Verbal, physical, written or other abuse (including threats of abuse
          or retribution) of any Service customer, Company employee or officer
          will result in immediate account termination.
        </p>
        <p className="my-4">
          You understand that the technical processing and transmission of the
          Service, including your content, may be transferred unencrypted and
          involve (a) transmissions over various networks; and (b) changes to
          conform and adapt to technical requirements of connecting networks or
          devices.
        </p>
        <p className="my-4">
          We reserve the right to temporarily disable your account if your usage
          significantly exceeds the average usage of other Service customers. Of
          course, we'll reach out to the account owner before taking any action
          except in rare cases where the level of use may negatively impact the
          performance of the Service for other customers.
        </p>
        <p className="my-4">
          The Company does not warrant that (i) the service will meet your
          specific requirements, (ii) the service will be uninterrupted, timely,
          secure, or error-free, (iii) the results that may be obtained from the
          use of the service will be accurate or reliable, (iv) the quality of
          any products, services, information, or other material purchased or
          obtained by you through the service will meet your expectations, and
          (v) any errors in the Service will be corrected.
        </p>
        <p className="my-4">
          You expressly understand and agree that the Company shall not be
          liable for any direct, indirect, incidental, special, consequential or
          exemplary damages, including but not limited to, damages for loss of
          profits, goodwill, use, data or other intangible losses (even if the
          Company has been advised of the possibility of such damages),
          resulting from: (i) the use or the inability to use the service; (ii)
          the cost of procurement of substitute goods and services resulting
          from any goods, data, information or services purchased or obtained or
          messages received or transactions entered into through or from the
          service; (iii) unauthorized access to or alteration of your
          transmissions or data; (iv) statements or conduct of any third party
          on the service; (v) or any other matter relating to the service.
        </p>
        <p className="my-4">
          The failure of the Company to exercise or enforce any right or
          provision of the Terms of Service shall not constitute a waiver of
          such right or provision. The Terms of Service constitutes the entire
          agreement between you and the Company and govern your use of the
          Service, superceding any prior agreements between you and the Company
          (including, but not limited to, any prior versions of the Terms of
          Service).
        </p>
        <p className="my-4">
          Questions about the Terms of Service should be sent to
          support@timetospare.com.
        </p>
        <p className="my-4">
          Any new features that augment or enhance the current Service,
          including the release of new tools and resources, shall be subject to
          the Terms of Service. Continued use of the Service after any such
          changes shall constitute your consent to such changes.
        </p>
      </div>
    </>
  );
};

export default Terms;
