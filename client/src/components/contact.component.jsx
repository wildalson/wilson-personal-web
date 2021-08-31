import React from "react";
import Card from "./Card";
import callmeIcon from "./icons/callme.icon";
import emailmeIcon from "./icons/emailme.icon"
function Contact(){

	return(
		<div className = "flex-container">
	<div className = "contact-me">
	</div>
	<div className = "contact-info">
		<Card 
		headerTitle = "Call me" 
		content = "Available any time between 12pm to 9pm through Mon - Sat"
		component = {callmeIcon}
		info = "09952953542"
		height = "200"
		width = "100%"
		>
		</Card>
		<Card 
		headerTitle = "Email me" 
		content = "If you have any questions regarding about my credentials please don't hesisate to email me!"
		component = {emailmeIcon}
		info = "wilsondaitoco@gmail.com"
		height = "200"
		width = "100%"
		>
		</Card> 
	</div>
		</div>
)
}


export default Contact;

