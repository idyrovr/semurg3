import QuoteForm from '../../components/QuotePageComp/QuoteForm';
import './Quote.scss'
import GetInTouch from '../../components/GetInTouch'
import Footer2 from '../../components/Footer2'
export const Quote = () => {
  return (
     <div className='quote'>
       <QuoteForm />
       <GetInTouch />
       <Footer2 />
     </div>
   );
};