export default function FooterComponent() {
  return (
    <footer className="footer">
      <div className="footer__barcode" aria-hidden="true" />
      <div className="footer__data">
        <div>
          <span>MODEL NO.</span> AZ-FE-SENIOR
        </div>
        <div>
          <span>BUILT in REACT</span>
        </div>
        <div>
          <span>YEAR</span> {new Date().getFullYear()}
        </div>
      </div>
      <div className="footer__sig">
        © {new Date().getFullYear()} AYRTON ZAMARIAN
      </div>
    </footer>
  );
}
