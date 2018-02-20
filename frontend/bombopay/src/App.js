import React, { Component } from "react";
import "./App.css";

class App extends Component {
	render() {
		return (
			<form
				method="post"
				action="https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu"
			>
				<input name="merchantId" type="hidden" value="508029" />
				<input name="accountId" type="hidden" value="512323" />
				<input name="description" type="hidden" value="TestBombo001" />
				<input
					name="referenceCode"
					type="hidden"
					value="TestBombo001"
				/>
				<input name="amount" type="hidden" value="10" />
				<input name="tax" type="hidden" value="1.8" />
				<input name="taxReturnBase" type="hidden" value="16806" />
				<input name="currency" type="hidden" value="PEN" />
				<input
					name="signature"
					type="hidden"
					value="49228e853d42f94b7bb5fdd68fb54507"
				/>
				<input name="test" type="hidden" value="1" />
				<input
					name="buyerEmail"
					type="hidden"
					value="bombotest@bombotest.com"
				/>
				<input
					name="payerFullName"
					type="hidden"
					value="Debambi Van De Bombo"
				/>
				<input name="payerDocument" type="hidden" value="2391219023" />
				<input name="mobilePhone" type="hidden" value="+51999666999" />
				<input
					name="responseUrl"
					type="hidden"
					value="http://www.test.com/response"
				/>
				<input
					name="confirmationUrl"
					type="hidden"
					value="http://www.test.com/confirmation"
				/>

				<input name="Submit" type="submit" value="Enviar" />
			</form>
		);
	}
}

export default App;

/*
<form method="post" action="https://gateway.payulatam.com/ppp-web-gateway/pb.zul" accept-charset="UTF-8">
  <input type="image" border="0" alt="" src="http://www.payulatam.com/img-secure-2015/boton_pagar_pequeno.png" onClick="this.form.urlOrigen.value = window.location.href;"/>
  <input name="buttonId" type="hidden" value="B62MQnhpTztFgmRhILUi3fpc4YJTvri7QOKFXi4t9pYn62hGDzQy5Q=="/>
  <input name="merchantId" type="hidden" value="705384"/>
  <input name="accountId" type="hidden" value="708483"/>
  <input name="description" type="hidden" value="TestBombo"/>
  <input name="referenceCode" type="hidden" value="00666"/>
  <input name="amount" type="hidden" value="9.00"/>
  <input name="tax" type="hidden" value="0.00"/>
  <input name="taxReturnBase" type="hidden" value="0"/>
  <input name="shipmentValue" value="0.00" type="hidden"/>
  <input name="currency" type="hidden" value="PEN"/>
  <input name="lng" type="hidden" value="es"/>
  <input name="paymentMethods" type="hidden" value="BCP,MASTERCARD,VISA,DINERS,AMEX,MASTERCARD_DEBIT,VISA_DEBIT"/>
  <input name="displayShippingInformation" type="hidden" value="NO"/>
  <input name="displayBuyerComments" type="hidden" value="true"/>
  <input name="sourceUrl" id="urlOrigen" value="" type="hidden"/>
  <input name="buttonType" value="SIMPLE" type="hidden"/>
  <input name="signature" value="fdfcfc0f5dfad68445d68dfcf4f975c666066e45249eae69662fa9867c0784e8" type="hidden"/>
</form>
 */
