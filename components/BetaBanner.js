const BetaBanner = () => {
  return (
    <div className="w-screen md:h-10 beta-banner-container p-1 sm:px-8 lg:px-20 border-gray-500 shadow bg-gray-200 z-50 relative">
      <div className="govuk-phase-banner py-0 md:py-1 ">
        <p className="govuk-phase-banner__content text-center">
          <p className="govuk-tag govuk-phase-banner__content__tag uppercase md:font-bold inline-block text-royalb md:bg-blue-700 md:text-white md:px-2 mr-1 sm:mr-2 text-vsm sm:text-sm md:text-base">
            beta
          </p>
          <span className="govuk-phase-banner__text text-vsm sm:text-sm text-black">
            This <span className="hidden md:inline-block">{' '}is a new service</span>
            <span className="inline-block md:hidden">service is new</span>. Your{' '}
            <a
              className="text-blue-700 underline"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdf3dkhm_tx-g_s1ELDSSP6XYUkya39kTsPfXWz_o4zwviRzQ/viewform"
              target="_blank"
              rel="noreferrer"
            >
              feedback
            </a>{' '}
            will help us improve it.
          </span>
        </p>
      </div>
      <style jsx>
        {`
          .text-vsm {
            font-size: 12px;
          }
        `}
      </style>
    </div>
  );
};

export default BetaBanner;
