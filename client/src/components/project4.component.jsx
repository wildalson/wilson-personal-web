import React from 'react'
import LinkedinIcon from './icons/linkedin.icon';
import GithubIcon from './icons/github.icon';
function project4() {
	const formulaStyle = {
		textAlign:"center", 
		margin: "20px 0"	
	}
	return (
		<div className = "project4-container">
		<div className = "article">
		<div className = "title">
		<h1>A simple guide to payroll taxes in the Philippines</h1>
		</div>
		<div className = "sub-title">
		<h2>Understand your taxes better</h2>
		</div>
		<div className = "author">
		<div className = "author-details">
		<div className = "author-img">
		<img style = {{width:"48px", height:"48px",borderRadius:"50%"}}
		src = "../images/photo.jpeg" alt="mini-pic"></img>
		</div>
		<div className = "author-info">
		<p>Author: Wilson Co</p>
		</div>	
		</div>
		<div  className = "social-links">
		<a href = "https://www.linkedin.com/in/wilson-daito-co-947735192"><LinkedinIcon viewbox = "-25 -25 100 100" />
		</a>
		<a href = "https://github.com/wildalson">
		<GithubIcon viewbox = "-25 -25 100 100"/>
		</a>
		
		</div>
		</div>
		
		<div className = "artile-body">
		<div className = "tax">
		<img 
		className = "tax-img"
		src = "../images/taximg.jpg" 
		alt = "tax-img"
		style = {{width:"100%",height:"400px" }}
		></img>
		</div>
		
		<div className = "article-body">
		<p>I am going to start by discussing how an employee’s net pay is calculated for each month.  Assuming we have an employee named Jack working at X company and has a daily wage of P1500. His working schedule is to work 8hrs a day for 20days in a month. This is pretty much the standard working schedule here in the Philippines.
		
		First off, we can simply calculate Jack’s total basic salary per month by multiplying the amount of days he worked into his daily wage which is equivalent to P45,000.
		</p>
		<p style = {formulaStyle}>
		Monthly basic salary= 1500*8*20=45000
		</p>
		<p>For simplicity purposes, I am excluding the overtime, and night differential pays in this article.
		<br></br>
		<br></br>
		Once we have Jack’s monthly basic pay, we can then calculate the monthly withholding tax. You can refer to the table I got from BIR website.
		</p>
		<div>
		<img style = {{margin:"20px auto", display:"block"}} src = "../images/birtable.png" alt = "birtable"></img>
		<p>Reference: https://www.bir.gov.ph/index.php/tax-information/income-tax.html
		Based on this table, Jack’s monthly withholding tax is P5416.75. 
		</p>
		<p>
			<br></br><br></br>Proceeding to the next part, we should understand that there are three mandatory contributions that both employee and employer needs to pay. They are SSS, pag-ibig, and Philhealth. I won’t go into details, but they are just essentially required by the Philippines government. 
			<br></br><br></br>The amount of SSS contributions you need to pay is going to be based on your monthly basic salary. Since Jack’s salary exceeded P24,750, he needs to pay a fixed rate of P225 and P425 from his employer, a total of P650 for the mandatory provident fund(MPF). The regular social security is not mandatory, although most employer will choose to pay once the employee has been regularized.
			<br></br><br></br>As for the pag-ibig, the maximum contribution allowed for both employee and employer is P100.
			<br></br><br></br>Lastly, the Philhealth contribution, as of 2021 the premium rate has increased from 3.0% to 3.5%. The amount contributed will be shared fifty-fifty by both parties. In Jack’s case, it would be P787.5 and another P787.5 from his employer.

		</p>
		<p style = {formulaStyle} >Philhealth contribution =(45000*0.035)/2=787.5</p>
		<p>With the information above, we can calculate the total taxes that will be deducted from Jack’s monthly basic salary. If we follow the formula below Jack's monthly net pay would be P38,045.75 </p>
		<p style = {formulaStyle}>
		Net pay=Basic salary-withholding tax-SSS-pagibig-Philhealth
		</p>
		<p style = {formulaStyle}>
		Net pay=45000-5416.75-650-100-787.5=38045.75
		</p>
		</div>
		</div>
		<p></p>
		</div>
		</div>
		
		</div>
		)
	}
	
	export default project4
	