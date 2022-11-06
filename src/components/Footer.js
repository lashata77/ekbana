import React from 'react'
//import { Link } from 'react-router-dom'
function Footer() {
    return (

		

        <div className="footer">
		<div className="container">
			<div className="col-md-3 w3_footer_grid">
				<h3>information</h3>
				<ul className="w3_footer_grid_list">
					<li><a href="events">Events</a></li>
					<li><a href="about">About Us</a></li>
					<li><a href="products">Best Deals</a></li>
					<li><a href="services">Services</a></li>
					<li><a href="short-codes">Short Codes</a></li>
				</ul>
			</div>
			<div className="col-md-3 w3_footer_grid">
				<h3>policy info</h3>
				<ul className="w3_footer_grid_list">
					<li><a href="faqs">FAQ</a></li>
					<li><a href="privacy">privacy policy</a></li>
					<li><a href="privacy">terms of use</a></li>
				</ul>
			</div>
			<div className="col-md-3 w3_footer_grid">
				<h3>what in stores</h3>
				<ul className="w3_footer_grid_list">
					<li><a href="pet">Pet Food</a></li>
					<li><a href="frozen">Frozen Snacks</a></li>
					<li><a href="kitchen">Kitchen</a></li>
					<li><a href="products">Branded Foods</a></li>
					<li><a href="household">Households</a></li>
				</ul>
			</div>
			<div className="col-md-3 w3_footer_grid">
				<h3>twitter posts</h3>
				<ul className="w3_footer_grid_list1">
					<li><label className="fa fa-twitter" aria-hidden="true"></label><i>01 day ago</i><span>Non numquam <a href="#">http://sd.ds/13jklf#</a>
						eius modi tempora incidunt ut labore et
						<a href="#">http://sd.ds/1389kjklf#</a>quo nulla.</span></li>
					<li><label className="fa fa-twitter" aria-hidden="true"></label><i>02 day ago</i><span>Con numquam <a href="#">http://fd.uf/56hfg#</a>
						eius modi tempora incidunt ut labore et
						<a href="#">http://fd.uf/56hfg#</a>quo nulla.</span></li>
				</ul>
			</div>
			<div className="clearfix"> </div>
			<div className="agile_footer_grids">
				<div className="col-md-3 w3_footer_grid agile_footer_grids_w3_footer">
					<div className="w3_footer_grid_bottom">
						<h4>100% secure payments</h4>
						<img src="images/card.png" alt=" " className="img-responsive" />
					</div>
				</div>
				<div className="col-md-3 w3_footer_grid agile_footer_grids_w3_footer">
					<div className="w3_footer_grid_bottom">
						<h5>connect with us</h5>
						<ul className="agileits_social_icons">
							<li><a href="#" className="facebook"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
							<li><a href="#" className="twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
							<li><a href="#" className="google"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
							<li><a href="#" className="instagram"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
							<li><a href="#" className="dribbble"><i className="fa fa-dribbble" aria-hidden="true"></i></a></li>
						</ul>
					</div>
				</div>
				<div className="clearfix"> </div>
			</div>
			<div className="wthree_footer_copy">
				<p>© 2016 Grocery Store. All rights reserved | Design by <a href="http://w3layouts.com/">W3layouts</a></p>
			</div>
		</div>
	</div>
    )
}

export default Footer;