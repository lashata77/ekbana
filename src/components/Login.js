import React from "react";
import { Link}  from  'react-router-dom';
import NavBarLeft from "./NavBarLeft";
import {useFormik} from 'formik';
import * as Yup from 'yup';

const Login = () => {
    const formik = useFormik({
		initialValues: {
			userName: "",
			password:"",
		},

		validationSchema: Yup.object().shape({
			password: Yup.string()
			.min(6,"Must be 6 characters or more from YUP")
			.required("Password is required")
		}),
		onSubmit: (values, action) => {
			console.log("submitted", values);
			action.resetForm();
		}
	});







return(
    <>
    <div className="products-breadcrumb">
		<div className="container">
			<ul>
				<li><i className="fa fa-home" aria-hidden="true"></i><Link to="main">Home</Link><span>|</span></li>
				<li>Sign In & Sign Up</li>
			</ul>
		</div>
	</div>
    <div className="banner">
		<NavBarLeft/>
		<div className="w3l_banner_nav_right">
{/*<!-- login -->*/}
		<div className="w3_login">
			<h3>Sign In & Sign Up</h3>
			<div className="w3_login_module">
				<div className="module form-module">
				  <div className="toggle"><i className="fa fa-times fa-pencil"></i>
					<div className="tooltip">Click Me</div>
				  </div>
				  <div className="form">
					<h2>Login to your account</h2>
					<form action="#" method="post">
					  <input type="text" name="Username" placeholder="Username" required=" "/>
					  <input type="password" name="Password" placeholder="Password" 
					  value={formik.values.password}
					  onChange={formik.handleChange}
					  onBlur={formik.handleBlur}
					 
					  />
					  {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}

					  <input type="submit" value="Login"/>
					</form>
				  </div>
				  {/* <div className="form">
					<h2>Create an account</h2>
					<form action="#" method="post">
					  <input type="text" name="Username" placeholder="Username" required=" "/>
					  <input type="password" name="Password" placeholder="Password" required=" "/>
					  <input type="email" name="Email" placeholder="Email Address" required=" "/>
					  <input type="text" name="Phone" placeholder="Phone Number" required=" "/>
					  <input type="submit" value="Register"/>
					</form>
				  </div> */}
				  <div className="cta"><Link to="#">Forgot your password?</Link></div>
				</div>
			</div>
			
		</div>
{/*<!-- //login --> */}
		</div>
		<div className="clearfix"></div>
	</div>

    {/*<!-- newsletter-top-serv-btm --> */}
	{/* <div className="newsletter-top-serv-btm">
		<div className="container">
			<div className="col-md-4 wthree_news_top_serv_btm_grid">
				<div className="wthree_news_top_serv_btm_grid_icon">
					<i className="fa fa-shopping-cart" aria-hidden="true"></i>
				</div>
				<h3>Nam libero tempore</h3>
				<p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus 
					saepe eveniet ut et voluptates repudiandae sint et.</p>
			</div>
			<div className="col-md-4 wthree_news_top_serv_btm_grid">
				<div className="wthree_news_top_serv_btm_grid_icon">
					<i className="fa fa-bar-chart" aria-hidden="true"></i>
				</div>
				<h3>officiis debitis aut rerum</h3>
				<p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus 
					saepe eveniet ut et voluptates repudiandae sint et.</p>
			</div>
			<div className="col-md-4 wthree_news_top_serv_btm_grid">
				<div className="wthree_news_top_serv_btm_grid_icon">
					<i className="fa fa-truck" aria-hidden="true"></i>
				</div>
				<h3>eveniet ut et voluptates</h3>
				<p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus 
					saepe eveniet ut et voluptates repudiandae sint et.</p>
			</div>
			<div className="clearfix"> </div>
		</div>
	</div> */}
{/*<!-- //newsletter-top-serv-btm --> */}

    </>
)
}

export default Login;