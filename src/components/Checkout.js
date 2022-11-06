import React from "react";
import NavBarLeft from "./NavBarLeft";
import Newsletter from "./Newsletter";
import { Link } from 'react-router-dom';
function Checkout() {
    return(
       <>
       <div ClassName="products-breadcrumb">
		<div ClassName="container">
			<ul>
				<li><i ClassName="fa fa-home" aria-hidden="true"></i><Link to="main">Home</Link><span>|</span></li>
				<li>Checkout</li>
			</ul>
		</div>
	</div>
    <div ClassName="banner">
        <NavBarLeft />
		
		<div ClassName="w3l_banner_nav_right">
{ /*<!-- about --> */}
		<div ClassName="privacy about">
			<h3>Chec<span>kout</span></h3>
			
	      <div ClassName="checkout-right">
					<h4>Your shopping cart contains: <span>3 Products</span></h4>
				<table ClassName="timetable_sub">
					<thead>
						<tr>
							<th>SL No.</th>	
							<th>Product</th>
							<th>Quality</th>
							<th>Product Name</th>
						
							<th>Price</th>
							<th>Remove</th>
						</tr>
					</thead>
					<tbody><tr ClassName="rem1">
						<td ClassName="invert">1</td>
						<td ClassName="invert-image"><Link to="single"><img src="images/1.png" alt=" " ClassName="img-responsive" /></Link></td>
						<td ClassName="invert">
							 <div ClassName="quantity"> 
								<div ClassName="quantity-select">                           
									<div ClassName="entry value-minus">&nbsp;</div>
									<div ClassName="entry value"><span>1</span></div>
									<div ClassName="entry value-plus active">&nbsp;</div>
								</div>
							</div>
						</td>
						<td ClassName="invert">Fortune Sunflower Oil</td>
						
						<td ClassName="invert">$290.00</td>
						<td ClassName="invert">
							<div ClassName="rem">
								<div ClassName="close1"> </div>
							</div>

						</td>
					</tr>
					<tr ClassName="rem2">
						<td ClassName="invert">2</td>
						<td ClassName="invert-image"><Link to="single"><img src="images/3.png" alt=" " ClassName="img-responsive" /></Link></td>
						<td ClassName="invert">
							 <div ClassName="quantity"> 
								<div ClassName="quantity-select">                           
									<div ClassName="entry value-minus">&nbsp;</div>
									<div ClassName="entry value"><span>1</span></div>
									<div ClassName="entry value-plus active">&nbsp;</div>
								</div>
							</div>
						</td>
						<td ClassName="invert">Basmati Rise (5 Kg)</td>
					
						<td ClassName="invert">$250.00</td>
						<td ClassName="invert">
							<div ClassName="rem">
								<div ClassName="close2"> </div>
							</div>

						</td>
					</tr>
					<tr ClassName="rem3">
						<td ClassName="invert">3</td>
						<td ClassName="invert-image"><a href="single.html"><img src="images/2.png" alt=" " ClassName="img-responsive" /></a></td>
						<td ClassName="invert">
							 <div ClassName="quantity"> 
								<div ClassName="quantity-select">                           
									<div ClassName="entry value-minus">&nbsp;</div>
									<div ClassName="entry value"><span>1</span></div>
									<div ClassName="entry value-plus active">&nbsp;</div>
								</div>
							</div>
						</td>
						<td ClassName="invert">Pepsi Soft Drink (2 Ltr)</td>
						
						<td ClassName="invert">$15.00</td>
						<td ClassName="invert">
							<div ClassName="rem">
								<div ClassName="close3"> </div>
							</div>
	
						</td>
					</tr>

				</tbody></table>
			</div>
			<div ClassName="checkout-left">	
				<div ClassName="col-md-4 checkout-left-basket">
					<h4>Continue to basket</h4>
					<ul>
						<li>Product1 <i>-</i> <span>$15.00 </span></li>
						<li>Product2 <i>-</i> <span>$25.00 </span></li>
						<li>Product3 <i>-</i> <span>$29.00 </span></li>
						<li>Total Service Charges <i>-</i> <span>$15.00</span></li>
						<li>Total <i>-</i> <span>$84.00</span></li>
					</ul>
				</div>
				<div ClassName="col-md-8 address_form_agile">
					  <h4>Add a new Details</h4>
				<form action="payment" method="post" ClassName="creditly-card-form agileinfo_form">
									<section ClassName="creditly-wrapper wthree, w3_agileits_wrapper">
										<div ClassName="information-wrapper">
											<div ClassName="first-row form-group">
												<div ClassName="controls">
													<label ClassName="control-label">Full name: </label>
													<input ClassName="billing-address-name form-control" type="text" name="name" placeholder="Full name" />
												</div>
												<div ClassName="w3_agileits_card_number_grids">
													<div ClassName="w3_agileits_card_number_grid_left">
														<div ClassName="controls">
															<label ClassName="control-label">Mobile number:</label>
														    <input ClassName="form-control" type="text" placeholder="Mobile number" />
														</div>
													</div>
													<div ClassName="w3_agileits_card_number_grid_right">
														<div ClassName="controls">
															<label ClassName="control-label">Landmark: </label>
														 <input ClassName="form-control" type="text" placeholder="Landmark"  />
														</div>
													</div>
													<div ClassName="clear"> </div>
												</div>
												<div ClassName="controls">
													<label className="control-label">Town/City: </label>
												 <input className="form-control" type="text" placeholder="Town/City" />
												</div>
													<div className="controls">
															<label className="control-label">Address type: </label>
												     <select className="form-control option-w3ls">
																							<option>Office</option>
																							<option>Home</option>
																							<option>Commercial</option>
							
																					</select>
													</div>
											</div>
											<button className="submit check_out">Delivery to this Address</button>
										</div>
									</section>
								</form>
									<div className="checkout-right-basket">
				        	<Link to="payment">Make a Payment <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span></Link>
			      	</div>
					</div>
			
				<div className="clearfix"> </div>
				
			</div>

		</div>
{/*<!-- //about --> */}
		</div>
		<div className="clearfix"></div>
	</div>
    

       </> 
    )
}

export default Checkout;