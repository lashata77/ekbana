import React from "react";
import NavBarLeft from "./NavBarLeft";
import { Link} from 'react-router-dom'
function Frozen () {
    return (
        <>
      <div className="products-breadcrumb">
		<div className="container">
			<ul>
				<li><i className="fa fa-home" aria-hidden="true"></i><Link to="main">Home</Link><span>|</span></li>
				<li>Frozen Food</li>
			</ul>
		</div>
	</div>
    <div className="banner">
		<NavBarLeft />
		<div className="w3l_banner_nav_right">
			<div className="w3l_banner_nav_right_banner10">
				<h3>Best Deals For New Products<span className="blink_me"></span></h3>
			</div>
			<div className="w3l_banner_nav_right_banner3_btm">
				<div className="col-md-4 w3l_banner_nav_right_banner3_btml">
					<div className="view view-tenth">
						<img src="images/24.jpg" alt=" " className="img-responsive" />
						<div className="mask">
							<h4>Grocery Store</h4>
							<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>
						</div>
					</div>
					<h4>Frozen Meat</h4>
					<ol>
						<li>sunt in culpa qui officia</li>
						<li>commodo consequat</li>
						<li>sed do eiusmod tempor incididunt</li>
					</ol>
				</div>
				<div className="col-md-4 w3l_banner_nav_right_banner3_btml">
					<div className="view view-tenth">
						<img src="images/29.jpg" alt=" " className="img-responsive" />
						<div className="mask">
							<h4>Grocery Store</h4>
							<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>
						</div>
					</div>
					<h4>Frozen Chocolate Chips</h4>
					<ol>
						<li>enim ipsam voluptatem officia</li>
						<li>tempora incidunt ut labore et</li>
						<li>vel eum iure reprehenderit</li>
					</ol>
				</div>
				<div className="col-md-4 w3l_banner_nav_right_banner3_btml">
					<div className="view view-tenth">
						<img src="images/30.jpg" alt=" " className="img-responsive" />
						<div className="mask">
							<h4>Grocery Store</h4>
							<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>
						</div>
					</div>
					<h4>Frozen Soybean</h4>
					<ol>
						<li>dolorem eum fugiat voluptas</li>
						<li>ut aliquid ex ea commodi</li>
						<li>magnam aliquam quaerat</li>
					</ol>
				</div>
				<div className="clearfix"> </div>
			</div>
			<div className="w3ls_w3l_banner_nav_right_grid w3ls_w3l_banner_nav_right_grid_veg">
				<h3 className="w3l_fruit">Frozen Food</h3>
				<div className="w3ls_w3l_banner_nav_right_grid1 w3ls_w3l_banner_nav_right_grid1_veg">
					<div className="col-md-3 w3ls_w3l_banner_left w3ls_w3l_banner_left_asdfdfd">
						<div className="hover14 column">
						<div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
							<div className="tag"><img src="images/tag.png" alt=" " className="img-responsive" /></div>
							<div className="agile_top_brand_left_grid1">
								<figure>
									<div className="snipcart-item block">
										<div className="snipcart-thumb">
											<Link to="single.html"><img src="images/64.png" alt=" " className="img-responsive" /></Link>
											<p>pepper salami (250 gm)</p>
											<h4>$10.00 <span>$12.00</span></h4>
										</div>
										<div className="snipcart-details">
											<form action="#" method="post">
												<fieldset>
													<input type="hidden" name="cmd" value="_cart" />
													<input type="hidden" name="add" value="1" />
													<input type="hidden" name="business" value=" " />
													<input type="hidden" name="item_name" value="pepper salami" />
													<input type="hidden" name="amount" value="10.00" />
													<input type="hidden" name="discount_amount" value="1.00" />
													<input type="hidden" name="currency_code" value="USD" />
													<input type="hidden" name="return" value=" " />
													<input type="hidden" name="cancel_return" value=" " />
													<input type="submit" name="submit" value="Add to cart" className="button" />
												</fieldset>
											</form>
										</div>
									</div>
								</figure>
							</div>
						</div>
						</div>
					</div>
					<div className="col-md-3 w3ls_w3l_banner_left">
						<div className="hover14 column">
						<div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
							<div className="agile_top_brand_left_grid_pos">
								<img src="images/offer.png" alt=" " className="img-responsive" />
							</div>
							<div className="agile_top_brand_left_grid1">
								<figure>
									<div className="snipcart-item block">
										<div className="snipcart-thumb">
											<Link to="single.html"><img src="images/65.png" alt=" " className="img-responsive" /></Link>
											<p>sumeru green pees (500 gm)</p>
											<h4>$9.00 <span>$11.00</span></h4>
										</div>
										<div className="snipcart-details">
											<form action="#" method="post">
												<fieldset>
													<input type="hidden" name="cmd" value="_cart" />
													<input type="hidden" name="add" value="1" />
													<input type="hidden" name="business" value=" " />
													<input type="hidden" name="item_name" value="sumeru green pees" />
													<input type="hidden" name="amount" value="9.00" />
													<input type="hidden" name="discount_amount" value="1.00" />
													<input type="hidden" name="currency_code" value="USD" />
													<input type="hidden" name="return" value=" " />
													<input type="hidden" name="cancel_return" value=" " />
													<input type="submit" name="submit" value="Add to cart" className="button" />
												</fieldset>
											</form>
										</div>
									</div>
								</figure>
							</div>
						</div>
						</div>
					</div>
					<div className="col-md-3 w3ls_w3l_banner_left w3ls_w3l_banner_left_asd">
						<div className="hover14 column">
						<div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
							<div className="agile_top_brand_left_grid_pos">
								<img src="images/offer.png" alt=" " className="img-responsive" />
							</div>
							<div className="agile_top_brand_left_grid1">
								<figure>
									<div className="snipcart-item block">
										<div className="snipcart-thumb">
											<Link to="single.html"><img src="images/66.png" alt=" " className="img-responsive" /></Link>
											<p>tikka chicken (300 gm)</p>
											<h4>$6.00 <span>$8.00</span></h4>
										</div>
										<div className="snipcart-details">
											<form action="#" method="post">
												<fieldset>
													<input type="hidden" name="cmd" value="_cart" />
													<input type="hidden" name="add" value="1" />
													<input type="hidden" name="business" value=" " />
													<input type="hidden" name="item_name" value="tikka chicken" />
													<input type="hidden" name="amount" value="6.00" />
													<input type="hidden" name="discount_amount" value="1.00" />
													<input type="hidden" name="currency_code" value="USD" />
													<input type="hidden" name="return" value=" " />
													<input type="hidden" name="cancel_return" value=" " />
													<input type="submit" name="submit" value="Add to cart" className="button" />
												</fieldset>
											</form>
										</div>
									</div>
								</figure>
							</div>
						</div>
						</div>
					</div>
					<div className="col-md-3 w3ls_w3l_banner_left">
						<div className="hover14 column">
						<div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
							<div className="agile_top_brand_left_grid_pos">
								<img src="images/offer.png" alt=" " className="img-responsive" />
							</div>
							<div className="agile_top_brand_left_grid1">
								<figure>
									<div className="snipcart-item block">
										<div className="snipcart-thumb">
											<Link to="single.html"><img src="images/67.png" alt=" " className="img-responsive" /></Link>
											<p>mixed vegetables (500 gm)</p>
											<h4>$6.00 <span>$7.00</span></h4>
										</div>
										<div className="snipcart-details">
											<form action="#" method="post">
												<fieldset>
													<input type="hidden" name="cmd" value="_cart" />
													<input type="hidden" name="add" value="1" />
													<input type="hidden" name="business" value=" " />
													<input type="hidden" name="item_name" value="mixed vegetables" />
													<input type="hidden" name="amount" value="6.00" />
													<input type="hidden" name="discount_amount" value="1.00" />
													<input type="hidden" name="currency_code" value="USD" />
													<input type="hidden" name="return" value=" " />
													<input type="hidden" name="cancel_return" value=" " />
													<input type="submit" name="submit" value="Add to cart" className="button" />
												</fieldset>
											</form>
										</div>
									</div>
								</figure>
							</div>
						</div>
						</div>
					</div>
					<div className="clearfix"> </div>
				</div>
				<div className="w3ls_w3l_banner_nav_right_grid1 w3ls_w3l_banner_nav_right_grid1_veg">
					<div className="col-md-3 w3ls_w3l_banner_left w3ls_w3l_banner_left_asdfdfd">
						<div className="hover14 column">
						<div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
							<div className="agile_top_brand_left_grid_pos">
								<img src="images/offer.png" alt=" " className="img-responsive" />
							</div>
							<div className="agile_top_brand_left_grid1">
								<figure>
									<div className="snipcart-item block">
										<div className="snipcart-thumb">
											<Link to="single.html"><img src="images/68.png" alt=" " className="img-responsive" /></Link>
											<p>mango pulp (800 gm)</p>
											<h4>$9.00 <span>$11.00</span></h4>
										</div>
										<div className="snipcart-details">
											<form action="#" method="post">
												<fieldset>
													<input type="hidden" name="cmd" value="_cart" />
													<input type="hidden" name="add" value="1" />
													<input type="hidden" name="business" value=" " />
													<input type="hidden" name="item_name" value="mango pulp" />
													<input type="hidden" name="amount" value="9.00" />
													<input type="hidden" name="discount_amount" value="1.00" />
													<input type="hidden" name="currency_code" value="USD" />
													<input type="hidden" name="return" value=" " />
													<input type="hidden" name="cancel_return" value=" " />
													<input type="submit" name="submit" value="Add to cart" className="button" />
												</fieldset>
											</form>
										</div>
									</div>
								</figure>
							</div>
						</div>
						</div>
					</div>
					<div className="col-md-3 w3ls_w3l_banner_left">
						<div className="hover14 column">
						<div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
							<div className="agile_top_brand_left_grid_pos">
								<img src="images/offer.png" alt=" " className="img-responsive" />
							</div>
							<div className="agile_top_brand_left_grid1">
								<figure>
									<div className="snipcart-item block">
										<div className="snipcart-thumb">
											<Link to="single.html"><img src="images/69.png" alt=" " className="img-responsive" /></Link>
											<p>kesar mango pulp (800 gm)</p>
											<h4>$5.00 <span>$8.00</span></h4>
										</div>
										<div className="snipcart-details">
											<form action="#" method="post">
												<fieldset>
													<input type="hidden" name="cmd" value="_cart" />
													<input type="hidden" name="add" value="1" />
													<input type="hidden" name="business" value=" " />
													<input type="hidden" name="item_name" value="kesar mango pulp" />
													<input type="hidden" name="amount" value="5.00" />
													<input type="hidden" name="discount_amount" value="1.00" />
													<input type="hidden" name="currency_code" value="USD" />
													<input type="hidden" name="return" value=" " />
													<input type="hidden" name="cancel_return" value=" " />
													<input type="submit" name="submit" value="Add to cart" className="button" />
												</fieldset>
											</form>
										</div>
									</div>
								</figure>
							</div>
						</div>
						</div>
					</div>
					<div className="col-md-3 w3ls_w3l_banner_left w3ls_w3l_banner_left_asd">
						<div className="hover14 column">
						<div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
							<div className="tag"><img src="images/tag.png" alt=" " className="img-responsive" /></div>
							<div className="agile_top_brand_left_grid1">
								<figure>
									<div className="snipcart-item block">
										<div className="snipcart-thumb">
											<Link to="single.html"><img src="images/70.png" alt=" " className="img-responsive" /></Link>
											<p>frozen sweet corn (250 gm)</p>
											<h4>$6.00 <span>$8.00</span></h4>
										</div>
										<div className="snipcart-details">
											<form action="#" method="post">
												<fieldset>
													<input type="hidden" name="cmd" value="_cart" />
													<input type="hidden" name="add" value="1" />
													<input type="hidden" name="business" value=" " />
													<input type="hidden" name="item_name" value="frozen sweet corn" />
													<input type="hidden" name="amount" value="6.00" />
													<input type="hidden" name="discount_amount" value="1.00" />
													<input type="hidden" name="currency_code" value="USD" />
													<input type="hidden" name="return" value=" " />
													<input type="hidden" name="cancel_return" value=" " />
													<input type="submit" name="submit" value="Add to cart" className="button" />
												</fieldset>
											</form>
										</div>
									</div>
								</figure>
							</div>
						</div>
						</div>
					</div>
					<div className="col-md-3 w3ls_w3l_banner_left">
						<div className="hover14 column">
						<div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
							<div className="agile_top_brand_left_grid_pos">
								<img src="images/offer.png" alt=" " className="img-responsive" />
							</div>
							<div className="agile_top_brand_left_grid1">
								<figure>
									<div className="snipcart-item block">
										<div className="snipcart-thumb">
											<Link to="single.html"><img src="images/71.png" alt=" " className="img-responsive" /></Link>
											<p>chicken nuggets (1 kg)</p>
											<h4>$4.00 <span>$6.00</span></h4>
										</div>
										<div className="snipcart-details">
											<form action="#" method="post">
												<fieldset>
													<input type="hidden" name="cmd" value="_cart" />
													<input type="hidden" name="add" value="1" />
													<input type="hidden" name="business" value=" " />
													<input type="hidden" name="item_name" value="chicken nuggets" />
													<input type="hidden" name="amount" value="4.00" />
													<input type="hidden" name="discount_amount" value="1.00" />
													<input type="hidden" name="currency_code" value="USD" />
													<input type="hidden" name="return" value=" " />
													<input type="hidden" name="cancel_return" value=" " />
													<input type="submit" name="submit" value="Add to cart" className="button" />
												</fieldset>
											</form>
										</div>
									</div>
								</figure>
							</div>
						</div>
						</div>
					</div>
					<div className="clearfix"> </div>
				</div>
				<div className="w3ls_w3l_banner_nav_right_grid1 w3ls_w3l_banner_nav_right_grid1_veg">
					<div className="col-md-3 w3ls_w3l_banner_left w3ls_w3l_banner_left_asdfdfd">
						<div className="hover14 column">
						<div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
							<div className="agile_top_brand_left_grid_pos">
								<img src="images/offer.png" alt=" " className="img-responsive" />
							</div>
							<div className="agile_top_brand_left_grid1">
								<figure>
									<div className="snipcart-item block">
										<div className="snipcart-thumb">
											<Link to="single.html"><img src="images/72.png" alt=" " className="img-responsive" /></Link>
											<p>garlic fingers (400 gm)</p>
											<h4>$5.00 <span>$7.00</span></h4>
										</div>
										<div className="snipcart-details">
											<form action="#" method="post">
												<fieldset>
													<input type="hidden" name="cmd" value="_cart" />
													<input type="hidden" name="add" value="1" />
													<input type="hidden" name="business" value=" " />
													<input type="hidden" name="item_name" value="garlic fingers" />
													<input type="hidden" name="amount" value="5.00" />
													<input type="hidden" name="discount_amount" value="1.00" />
													<input type="hidden" name="currency_code" value="USD" />
													<input type="hidden" name="return" value=" " />
													<input type="hidden" name="cancel_return" value=" " />
													<input type="submit" name="submit" value="Add to cart" className="button" />
												</fieldset>
											</form>
										</div>
									</div>
								</figure>
							</div>
						</div>
						</div>
					</div>
					<div className="col-md-3 w3ls_w3l_banner_left">
						<div className="hover14 column">
						<div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
							<div className="agile_top_brand_left_grid_pos">
								<img src="images/offer.png" alt=" " className="img-responsive" />
							</div>
							<div className="agile_top_brand_left_grid1">
								<figure>
									<div className="snipcart-item block">
										<div className="snipcart-thumb">
											<Link to="single.html"><img src="images/73.png" alt=" " className="img-responsive" /></Link>
											<p>catch fish finger (200 gm)</p>
											<h4>$8.00 <span>$10.00</span></h4>
										</div>
										<div className="snipcart-details">
											<form action="#" method="post">
												<fieldset>
													<input type="hidden" name="cmd" value="_cart" />
													<input type="hidden" name="add" value="1" />
													<input type="hidden" name="business" value=" " />
													<input type="hidden" name="item_name" value="catch fish finger" />
													<input type="hidden" name="amount" value="8.00" />
													<input type="hidden" name="discount_amount" value="1.00" />
													<input type="hidden" name="currency_code" value="USD" />
													<input type="hidden" name="return" value=" " />
													<input type="hidden" name="cancel_return" value=" " />
													<input type="submit" name="submit" value="Add to cart" className="button" />
												</fieldset>
											</form>
										</div>
									</div>
								</figure>
							</div>
						</div>
						</div>
					</div>
					<div className="col-md-3 w3ls_w3l_banner_left w3ls_w3l_banner_left_asd">
						<div className="hover14 column">
						<div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
							<div className="tag"><img src="images/tag.png" alt=" " className="img-responsive" /></div>
							<div className="agile_top_brand_left_grid1">
								<figure>
									<div className="snipcart-item block">
										<div className="snipcart-thumb">
											<Link to="single.html"><img src="images/74.png" alt=" " className="img-responsive" /></Link>
											<p>sumeru chicken (500 ml)</p>
											<h4>$11.00 <span>$15.00</span></h4>
										</div>
										<div className="snipcart-details">
											<form action="#" method="post">
												<fieldset>
													<input type="hidden" name="cmd" value="_cart" />
													<input type="hidden" name="add" value="1" />
													<input type="hidden" name="business" value=" " />
													<input type="hidden" name="item_name" value="sumeru chicken" />
													<input type="hidden" name="amount" value="11.00" />
													<input type="hidden" name="discount_amount" value="1.00" />
													<input type="hidden" name="currency_code" value="USD" />
													<input type="hidden" name="return" value=" " />
													<input type="hidden" name="cancel_return" value=" " />
													<input type="submit" name="submit" value="Add to cart" className="button" />
												</fieldset>
											</form>
										</div>
									</div>
								</figure>
							</div>
						</div>
						</div>
					</div>
					<div className="col-md-3 w3ls_w3l_banner_left">
						<div className="hover14 column">
						<div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
							<div className="agile_top_brand_left_grid_pos">
								<img src="images/offer.png" alt=" " className="img-responsive" />
							</div>
							<div className="agile_top_brand_left_grid1">
								<figure>
									<div className="snipcart-item block">
										<div className="snipcart-thumb">
											<Link to="single.html"><img src="images/75.png" alt=" " className="img-responsive" /></Link>
											<p>veggie fingers (400 gm)</p>
											<h4>$7.00 <span>$9.00</span></h4>
										</div>
										<div className="snipcart-details">
											<form action="#" method="post">
												<fieldset>
													<input type="hidden" name="cmd" value="_cart" />
													<input type="hidden" name="add" value="1" />
													<input type="hidden" name="business" value=" " />
													<input type="hidden" name="item_name" value="veggie fingers" />
													<input type="hidden" name="amount" value="7.00" />
													<input type="hidden" name="discount_amount" value="1.00" />
													<input type="hidden" name="currency_code" value="USD" />
													<input type="hidden" name="return" value=" " />
													<input type="hidden" name="cancel_return" value=" " />
													<input type="submit" name="submit" value="Add to cart" className="button" />
												</fieldset>
											</form>
										</div>
									</div>
								</figure>
							</div>
						</div>
						</div>
					</div>
					<div className="clearfix"> </div>
				</div>
			</div>
		</div>
		<div className="clearfix"></div>
	</div>

        </>
    )
}

export default Frozen;