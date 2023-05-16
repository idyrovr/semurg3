import { Link } from 'react-router-dom';
import { GetQuote } from '../../GetQuoteButton/GetQuote';
import './QuoteContact.scss'

export const QuoteContact = () => {
  return (
     <section className='quotecontact'>
        <div className="container d-flex flex-column justify-center align-center">
            <GetQuote></GetQuote>
            <p className="quotecontact__desc">Email 
            <Link className="quotecontact__link" to="mailto:brokerage@semurgtrans.net">brokerage@semurgtrans.net</Link> 
            or call 
            <Link className="quotecontact__link" to="tel:+14702607325"><span> +1 470-260-7325 </span></Link>, option 2 to get started. </p>
        </div>
     </section>
   );
};