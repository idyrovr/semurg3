import './QuoteForm.scss'

export const QuoteForm = () => {
    return (
        <section className='quoteform'>
            <div className="container">
                <h2 className="quoteform__title">Get a Quote</h2>
                <div className="quoteform__content grid grid__col-4">
                    <div className="quoteform__col1">
                        <p className="quoteform__sm-title">Basic Information</p>
                        <div className='quoteform__div d-flex align-start flex-column'>
                            <label for="11" className='quoteform__lab'>Customer Name: </label>
                            <input type="text" className="quoteform__inp" id="11" />
                        </div>

                        <div className='quoteform__div d-flex align-start flex-column' >
                            <label for="112" className='quoteform__lab'>Customer Name: </label>
                            <input type="text" className="quoteform__inp" id="112" />
                        </div>


                        <div className='quoteform__div d-flex align-start flex-column '>
                            <label for="12" className='quoteform__lab'>Customer Email: </label>
                            <input type="text" className="quoteform__inp" id="12" />
                        </div>


                        <div className='quoteform__div d-flex align-start flex-column '>
                            <label for="13" className='quoteform__lab'>Event Number:</label>
                            <input type="text" className="quoteform__inp" id="13" />
                        </div>


                        <div className='quoteform__div d-flex align-start flex-column '>
                            <label for="14" className='quoteform__lab'>Pallet Count:</label>
                            <input type="text" className="quoteform__inp" id="14" />
                        </div>


                        <div className='quoteform__div d-flex align-start flex-column '>
                            <label for="15" className='quoteform__lab'>Weight(Total): </label>
                            <input type="text" className="quoteform__inp" id="15" />
                        </div>


                        <div className='quoteform__div d-flex align-start flex-column '>
                            <label for="16" className='quoteform__lab'>Freight Class:</label>
                            <input type="text" className="quoteform__inp" id="16" />
                        </div>


                        <div className='quoteform__div d-flex align-start flex-column '>
                            <label for="17" className='quoteform__lab'>Commodity Description: </label>
                            <input type="text" className="quoteform__inp quoteform__inp-big" id="17" />
                        </div>
                        <p className="quoteform__immediate">
                        For Immediate Assistance Call +1 470-260-7325 or Email
                        </p>
                    </div>

                    <div className="quoteform__col2">
                        <p className="quoteform__sm-title">Shipping Information</p>
                        <div className='quoteform__div d-flex align-start flex-column'>
                            <label for="1" className='quoteform__lab'>Shipping Name:</label>
                            <input type="text" className="quoteform__inp" id="21" />
                        </div>

                        <div className='quoteform__div d-flex align-start flex-column' >
                            <label for="212" className='quoteform__lab'>Shipping Phone:</label>
                            <input type="text" className="quoteform__inp" id="212" />
                        </div>


                        <div className='quoteform__div d-flex align-start flex-column '>
                            <label for="22" className='quoteform__lab'>Shipping Address: </label>
                            <input type="text" className="quoteform__inp" id="22" />
                        </div>


                        <div className='quoteform__div d-flex align-start flex-column '>
                            <label for="23" className='quoteform__lab'>Shipping City: </label>
                            <input type="text" className="quoteform__inp" id="23" />
                        </div>


                        <div className='quoteform__div d-flex align-start flex-column '>
                            <label for="24" className='quoteform__lab'>Shipping State: </label>
                            <input type="text" className="quoteform__inp" id="24" />
                        </div>


                        <div className='quoteform__div d-flex align-start flex-column '>
                            <label for="25" className='quoteform__lab'>Shipping Zip: </label>
                            <input type="text" className="quoteform__inp" id="25" />
                        </div>


                        <div className='quoteform__div d-flex align-start flex-column '>
                            <label for="26" className='quoteform__lab'>Shipping Date: </label>
                            <input type="text" className="quoteform__inp" id="26" />
                        </div>


                        <div className='quoteform__div d-flex align-start flex-column '>
                            <label for="27" className='quoteform__lab'>Shipping Hours:</label>
                            <input type="text" className="quoteform__inp " id="27" />
                        </div>

                    </div>

<div className="quoteform__col3">
                        <p className="quoteform__sm-title">Receiving Information</p>
                        <div className='quoteform__div d-flex align-start flex-column'>
                            <label for="31" className='quoteform__lab'>Receiving Name:</label>
                            <input type="text" className="quoteform__inp" id="31" />
                        </div>

                        <div className='quoteform__div d-flex align-start flex-column' >
                            <label for="313" className='quoteform__lab'>Receiving Phone:</label>
                            <input type="text" className="quoteform__inp" id="313" />
                        </div>


                        <div className='quoteform__div d-flex align-start flex-column '>
                            <label for="32" className='quoteform__lab'>Receiving Address: </label>
                            <input type="text" className="quoteform__inp" id="32" />
                        </div>


                        <div className='quoteform__div d-flex align-start flex-column '>
                            <label for="33" className='quoteform__lab'>Receiving City: </label>
                            <input type="text" className="quoteform__inp" id="33" />
                        </div>


                        <div className='quoteform__div d-flex align-start flex-column '>
                            <label for="34" className='quoteform__lab'>Receiving State: </label>
                            <input type="text" className="quoteform__inp" id="34" />
                        </div>


                        <div className='quoteform__div d-flex align-start flex-column '>
                            <label for="35" className='quoteform__lab'>Receiving Zip: </label>
                            <input type="text" className="quoteform__inp" id="35" />
                        </div>


                        <div className='quoteform__div d-flex align-start flex-column '>
                            <label for="36" className='quoteform__lab'>Receiving Date: </label>
                            <input type="text" className="quoteform__inp" id="36" />
                        </div>


                        <div className='quoteform__div d-flex align-start flex-column '>
                            <label for="37" className='quoteform__lab'>Receiving Hours:</label>
                            <input type="text" className="quoteform__inp" id="37" />
                        </div>

                        <div className='quoteform__div d-flex align-start flex-column '>
                            <label for="38" className='quoteform__lab'>Comments/Notes:</label>
                            <input type="text" className="quoteform__inp quoteform__inp-big quoteform__inp-big" id="38" />
                        </div>

                        <div className="quoteform__divforbutton d-flex justify-end">
                        <button className='quoteform__submit'>Submit</button>
                        </div>
                 
                    </div>
                </div>
            </div>
        </section>
    );
};