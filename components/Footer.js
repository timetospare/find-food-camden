import Link from 'next/link';

const Footer = () => {
  return (
    <div className="w-full bg-gray-200 p-8 text-sm">
      <a
        target="_blank"
        className="block"
        rel="noopener noreferrer"
        href="https://www.camden.gov.uk/accessibility#coru"
      >
        Accessibility
      </a>
      <a
        className="block"
        href="javascript:window.Metomic('ConsentManager:show')"
      >
        Manage Cookies
      </a>
      {/* <a
        target="_blank"
        className="block"
        rel="noopener noreferrer"
        href="https://docs.google.com/document/d/1cXTQZEsLLM75R5mU8WH599Q9fwr_S4mWDBnhiVLtvcY/edit#"
      >
        Privacy Policy
      </a> */}
      <span className="block">
        <Link href="/privacy">Privacy Policy</Link>
      </span>
      <Link href="/terms">Terms</Link>
    </div>
  );
};

export default Footer;
