import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { withTheme } from "styled-components";
import "./css/font-awesome.min.css";
import "./css/elegant-font-icons.css";
import "./css/elegant-line-icons.css";
import "./css/bootstrap.min.css";
import "./css/slicknav.min.css";
import "./css/animate.min.css";
import "./css/owl.carousel.css";
import "./css/swiper.min.css";
import "./css/main.css";
import "./css/responsive.css";
// import "./js/vendor/jquery-1.12.4.min.js";
// import "./js/vendor/jquery.ajaxchimp.min.js";
// import "./js/vendor/jquery.slicknav.min.js";
// import "./js/vendor/modernizr-2.8.3-respond-1.4.2.min.js";
// import "./js/vendor/bootstrap.min.js";
// import "./js/vendor/modernizr-2.8.3-respond-1.4.2.min.js";
// import "./js/vendor/owl.carousel.min.js";
// import "./js/vendor/smooth-scroll.min.js";
// import "./js/vendor/swiper.min.js";
// import "./js/vendor/tether.min.js";
// import "./js/vendor/venobox.min.js";
// import "./js/vendor/wow.min.js";
// import "./js/main.js";

const Landing = props => {
	useEffect(() => {
		if (localStorage.getItem("token")) {
			props.history.push("/schedule");
		}
	}, []);

	return (
		<div>
			{/* <script src="js/vendor/modernizr-2.8.3-respond-1.4.2.min.js" /> */}

			{/* <div id="preloader">
				<div class="loader">
					<div class="battery" />
				</div>
			</div> */}

			<header id="header" class="header-section">
				<div class="container">
					<nav class="navbar">
						<a href="#" class="navbar-brand">
							<img src={require("./img/logo.png")} alt="Astra" />
						</a>
						<div class="d-flex menu-wrap">
							<div id="navmenu" class="mainmenu">
								<ul class="nav">
									<li>
										<a data-scroll class="nav-link active" href="#home">
											Home <span class="sr-only">(current)</span>
										</a>
									</li>
									<li>
										<a data-scroll class="nav-link" href="#features">
											Features
										</a>
									</li>
									<li>
										<a data-scroll class="nav-link" href="#screenshots">
											Screenshots
										</a>
									</li>
									<li>
										<a data-scroll class="nav-link" href="#reviews">
											Reviews
										</a>
									</li>
									<li>
										<a data-scroll class="nav-link" href="#pricing">
											Pricing
										</a>
									</li>
									<li>
										<a data-scroll class="nav-link" href="#download">
											Download
										</a>
									</li>
								</ul>
							</div>
						</div>
					</nav>
				</div>
			</header>

			<section id="home" class="hero-section">
				<div class="container">
					<div class="hero-inner text-center">
						<div class="hero-content">
							<h1>
								Make your app <br /> business easy with Astra
							</h1>
							<p>Astra is better way to promote your startup mobile app.</p>
							<div class="hero-btn">
								<a href="#" class="download-btn">
									<img src={require("./img/appstore.png")} alt="btn" />
								</a>
								<a href="#" class="download-btn">
									<img src={require("./img/playstore.png")} alt="btn" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="features" class="feature-section bd-bottom padding">
				<div class="container">
					<div class="feature-mock" />
					<div class="row feature-wrap">
						<div class="col-md-4 text-right feature-list col-sm-6 xs-padding">
							<div
								class="feature-content wow fadeInRight"
								data-wow-delay="0ms"
								data-wow-duration="1000ms"
							>
								<div class="icon">
									<i class="icon-layers" />
								</div>
								<h3>Great Interface</h3>
								<p>
									Lorem Ipsum is simply text of the printing and typesetting
									industry.It has centuries.
								</p>
							</div>
							<div
								class="feature-content wow fadeInRight"
								data-wow-delay="200ms"
								data-wow-duration="1000ms"
							>
								<div class="icon">
									<i class="icon-heart" />
								</div>
								<h3>Made With Love</h3>
								<p>
									Lorem Ipsum is simply text of the printing and typesetting
									industry.It has centuries.
								</p>
							</div>
						</div>
						<div class="col-md-4 offset-md-4 feature-list col-sm-6 xs-padding">
							<div
								class="feature-content wow fadeInLeft"
								data-wow-delay="0ms"
								data-wow-duration="1000ms"
							>
								<div class="icon">
									<i class="icon-adjustments" />
								</div>
								<h3>Easy To Custimize</h3>
								<p>
									Lorem Ipsum is simply text of the printing and typesetting
									industry.It has centuries.
								</p>
							</div>
							<div
								class="feature-content wow fadeInLeft"
								data-wow-delay="200ms"
								data-wow-duration="1000ms"
							>
								<div class="icon">
									<i class="icon-clock" />
								</div>
								<h3>24/7 Support</h3>
								<p>
									Lorem Ipsum is simply text of the printing and typesetting
									industry.It has centuries.
								</p>
							</div>
						</div>
					</div>
					<div class="row sponsor-wrap mt-30 text-center">
						<div class="col-md-10 offset-md-1">
							<ul class="sponsors">
								<li>
									{/* <img src={require("./img/sponsor-1.png")} alt="sponsor" /> */}
									<img src={require("./img/sponsor-1.png")} alt="sponsor" />
								</li>
								<li>
									<img src={require("./img/sponsor-2.png")} alt="sponsor" />
								</li>
								<li>
									<img src={require("./img/sponsor-3.png")} alt="sponsor" />
								</li>
								<li>
									<img src={require("./img/sponsor-4.png")} alt="sponsor" />
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			<section class="content-section bg-grey bd-bottom padding">
				<div class="container">
					<div class="row content-wrap">
						<div
							class="col-md-6 xs-padding wow fadeInLeft"
							data-wow-delay="0ms"
							data-wow-duration="1000ms"
						>
							<div class="content-details">
								<h2>Easy To Use Friendly Interface.</h2>
								<p class="mb-30">
									Lorem Ipsum is simply text of the printing and typesetting
									industry.It has survived not only five centuries.No one cares
									about products. people care about ideas. Lorem Ipsum is simply
									text of the printing and typesetting industry.It has survived
									not only five centuries.
								</p>
								<a href="#" class="default-btn">
									Purchase App
								</a>
							</div>
						</div>
						<div
							class="col-md-6 xs-padding wow fadeInRight"
							data-wow-delay="0ms"
							data-wow-duration="1000ms"
						>
							<img src={require("./img/content-bg.png")} alt="img" />
						</div>
					</div>
				</div>
			</section>

			<section id="works" class="how-it-works-section bd-bottom padding">
				<div class="container">
					<div class="how-wrap row">
						<div
							class="col-md-4 col-sm-6 xs-padding wow fadeInUp"
							data-wow-delay="0ms"
							data-wow-duration="1000ms"
						>
							<div class="how-content text-center">
								<i class="icon-anchor" />
								<h3>Connect Device</h3>
								<p>
									Astra is better way to promote your <br />
									startup mobile app.
								</p>
							</div>
							<div class="arrow" />
						</div>
						<div
							class="col-md-4 col-sm-6 xs-padding wow fadeInUp"
							data-wow-delay="200ms"
							data-wow-duration="1000ms"
						>
							<div class="how-content text-center">
								<i class="icon-adjustments" />
								<h3>Configure It</h3>
								<p>
									Astra is better way to promote your <br />
									startup mobile app.
								</p>
							</div>
							<div class="arrow" />
						</div>
						<div
							class="col-md-4 col-sm-6 xs-padding wow fadeInUp"
							data-wow-delay="400ms"
							data-wow-duration="1000ms"
						>
							<div class="how-content text-center">
								<i class="icon-happy" />
								<h3>Yay! Done</h3>
								<p>
									Astra is better way to promote your <br />
									startup mobile app.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section
				id="screenshots"
				class="screenshots-section bd-bottom bg-grey padding"
			>
				<div class="container">
					<div
						class="section-heading mb-60 text-center wow fadeInUp"
						data-wow-delay="0ms"
						data-wow-duration="1000ms"
					>
						<h2>Screenshots</h2>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. <br />
							It has survived not only five centuries.
						</p>
					</div>
					<div class="swiper-container">
						<div class="mobile-mock">
							<div class="screen" />
							<div class="circle" />
						</div>
						<div class="swiper-wrapper">
							<div class="swiper-slide">
								<img
									class="w-100"
									src={require("./img/screenshot-1.jpg")}
									alt="screenshot"
								/>
							</div>
							<div class="swiper-slide">
								<img
									class="w-100"
									src={require("./img/screenshot-2.jpg")}
									alt="screenshot"
								/>
							</div>
							<div class="swiper-slide">
								<img
									class="w-100"
									src={require("./img/screenshot-3.jpg")}
									alt="screenshot"
								/>
							</div>
							<div class="swiper-slide">
								<img
									class="w-100"
									src={require("./img/screenshot-4.jpg")}
									alt="screenshot"
								/>
							</div>
							<div class="swiper-slide">
								<img
									class="w-100"
									src={require("./img/screenshot-5.jpg")}
									alt="screenshot"
								/>
							</div>
							<div class="swiper-slide">
								<img
									class="w-100"
									src={require("./img/screenshot-6.jpg")}
									alt="screenshot"
								/>
							</div>
							<div class="swiper-slide">
								<img
									class="w-100"
									src={require("./img/screenshot-7.jpg")}
									alt="screenshot"
								/>
							</div>
							<div class="swiper-slide">
								<img
									class="w-100"
									src={require("./img/screenshot-8.jpg")}
									alt="screenshot"
								/>
							</div>
						</div>

						<div class="swiper-next">
							<i class=" arrow_carrot-right" />
						</div>
						<div class="swiper-prev">
							<i class=" arrow_carrot-left" />
						</div>
					</div>
				</div>
			</section>

			<section id="team" class="team-section bd-bottom padding">
				<div class="container">
					<div
						class="section-heading mb-60 text-center wow fadeInUp"
						data-wow-delay="0ms"
						data-wow-duration="1000ms"
					>
						<h2>Developers</h2>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. <br />
							It has survived not only five centuries.
						</p>
					</div>
					<div class="row">
						<div
							class="col-md-3 col-sm-6 xs-padding wow fadeInUp"
							data-wow-delay="0ms"
							data-wow-duration="1000ms"
						>
							<div class="team-box text-center">
								<div class="team-thumb">
									<img src={require("./img/team-1.jpg")} alt="img" />
								</div>
								<div class="team-content">
									<h3>Michel Brown</h3>
									<span>Designer</span>
								</div>
							</div>
						</div>
						<div
							class="col-md-3 col-sm-6 xs-padding wow fadeInUp"
							data-wow-delay="200ms"
							data-wow-duration="1000ms"
						>
							<div class="team-box text-center">
								<div class="team-thumb">
									<img src={require("./img/team-2.jpg")} alt="img" />
								</div>
								<div class="team-content">
									<h3>Angelina Rose</h3>
									<span>Javascript</span>
								</div>
							</div>
						</div>
						<div
							class="col-md-3 col-sm-6 xs-padding wow fadeInUp"
							data-wow-delay="400ms"
							data-wow-duration="1000ms"
						>
							<div class="team-box text-center">
								<div class="team-thumb">
									<img src={require("./img/team-3.jpg")} alt="img" />
								</div>
								<div class="team-content">
									<h3>Jonathan Smith</h3>
									<span>Developer</span>
								</div>
							</div>
						</div>
						<div
							class="col-md-3 col-sm-6 xs-padding wow fadeInUp"
							data-wow-delay="500ms"
							data-wow-duration="1000ms"
						>
							<div class="team-box text-center">
								<div class="team-thumb">
									<img src={require("./img/team-4.jpg")} alt="img" />
								</div>
								<div class="team-content">
									<h3>Veera Pamela</h3>
									<span>Marketer</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="reviews" class="review-section bg-gradiant padding">
				<div class="container">
					<div
						class="section-heading mb-60 text-center wow fadeInUp"
						data-wow-delay="0ms"
						data-wow-duration="1000ms"
					>
						<h2>User Reviws</h2>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. <br />
							It has survived not only five centuries.
						</p>
					</div>
					<div id="review-carousel" class="review-carousel owl-carousel">
						<div class="review-item">
							<div class="review-thumb">
								<img src={require("./img/team-1.jpg")} alt="thumb" />
							</div>
							<div class="review-content">
								<h3>Michel Brown</h3>
								<ul class="rattings">
									<li>
										<i class="fa fa-star" />
									</li>
									<li>
										<i class="fa fa-star" />
									</li>
									<li>
										<i class="fa fa-star" />
									</li>
									<li>
										<i class="fa fa-star" />
									</li>
									<li>
										<i class="fa fa-star" />
									</li>
								</ul>
								<div class="review-text">
									<p>
										"There are design companies, and then there are user
										experience design interface design. navato is the best
										choice for app developers"
									</p>
								</div>
							</div>
						</div>
						<div class="review-item">
							<div class="review-thumb">
								<img src={require("./img/team-2.jpg")} alt="thumb" />
							</div>
							<div class="review-content">
								<h3>Angelina Rose</h3>
								<ul class="rattings">
									<li>
										<i class="fa fa-star" />
									</li>
									<li>
										<i class="fa fa-star" />
									</li>
									<li>
										<i class="fa fa-star" />
									</li>
									<li>
										<i class="fa fa-star" />
									</li>
									<li>
										<i class="fa fa-star" />
									</li>
								</ul>
								<div class="review-text">
									<p>
										"There are design companies, and then there are user
										experience design interface design. navato is the best
										choice for app developers"
									</p>
								</div>
							</div>
						</div>
						<div class="review-item">
							<div class="review-thumb">
								<img src={require("./img/team-3.jpg")} alt="thumb" />
							</div>
							<div class="review-content">
								<h3>Jonathan Smith</h3>
								<ul class="rattings">
									<li>
										<i class="fa fa-star" />
									</li>
									<li>
										<i class="fa fa-star" />
									</li>
									<li>
										<i class="fa fa-star" />
									</li>
									<li>
										<i class="fa fa-star" />
									</li>
									<li>
										<i class="fa fa-star" />
									</li>
								</ul>
								<div class="review-text">
									<p>
										"There are design companies, and then there are user
										experience design interface design. navato is the best
										choice for app developers"
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="pricing" class="pricing-section bd-bottom bg-grey padding">
				<div class="container">
					<div
						class="section-heading mb-60 text-center wow fadeInUp"
						data-wow-delay="0ms"
						data-wow-duration="1000ms"
					>
						<h2>Plans & Pricing</h2>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. <br />
							It has survived not only five centuries.
						</p>
					</div>
					<div class="row pricing-wrap">
						<div
							class="col-md-4 col-sm-6 sm-padding wow fadeInUp"
							data-wow-delay="0ms"
							data-wow-duration="1000ms"
						>
							<div class="pricing-box text-center">
								<div class="pricing-head">
									<i class="icon-layers" />
									<h3>Basic</h3>
									<h2>
										$39<span>month</span>
									</h2>
								</div>
								<ul class="pricing-info">
									<li>6 GB storage</li>
									<li>Fast Brandwidht</li>
									<li>Responsive Design</li>
									<li>24/7 Support</li>
								</ul>
								<a href="#" class="pricing-btn">
									Signup Now
								</a>
							</div>
						</div>
						<div
							class="col-md-4 col-sm-6 sm-padding wow fadeInUp"
							data-wow-delay="200ms"
							data-wow-duration="1000ms"
						>
							<div class="pricing-box middle text-center">
								<div class="pricing-head">
									<i class="icon-strategy" />
									<h3>Premium</h3>
									<h2>
										$59<span>month</span>
									</h2>
								</div>
								<ul class="pricing-info">
									<li>6 GB storage</li>
									<li>Fast Brandwidht</li>
									<li>Responsive Design</li>
									<li>24/7 Support</li>
								</ul>
								<a href="#" class="pricing-btn">
									Signup Now
								</a>
							</div>
						</div>
						<div
							class="col-md-4 col-sm-6 sm-padding wow fadeInUp"
							data-wow-delay="400ms"
							data-wow-duration="1000ms"
						>
							<div class="pricing-box text-center">
								<div class="pricing-head">
									<i class="icon-genius" />
									<h3>Business</h3>
									<h2>
										$59<span>month</span>
									</h2>
								</div>
								<ul class="pricing-info">
									<li>6 GB storage</li>
									<li>Fast Brandwidht</li>
									<li>Responsive Design</li>
									<li>24/7 Support</li>
								</ul>
								<a href="#" class="pricing-btn">
									Signup Now
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="blog" class="blog-section padding">
				<div class="container">
					<div
						class="section-heading mb-60 text-center wow fadeInUp"
						data-wow-delay="0ms"
						data-wow-duration="1000ms"
					>
						<h2>Latest Stories</h2>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. <br />
							It has survived not only five centuries.
						</p>
					</div>
					<div class="row">
						<div
							class="col-md-4 col-sm-6 xs-padding  wow fadeInUp"
							data-wow-delay="0ms"
							data-wow-duration="1000ms"
						>
							<div class="blog-box">
								<div class="blog-thumb">
									<img src={require("./img/blog-1.jpg")} alt="img" />
									<div class="post-meta">
										<div>
											<span>
												<i class="fa fa-user" />
												By: Admin
											</span>
											<span>
												<i class="fa fa-calendar" />
												Jan 01, 2018
											</span>
										</div>
									</div>
								</div>
								<div class="blog-content">
									<h3>
										<a href="#">
											No one cares about products. people care about ideas.
										</a>
									</h3>
									<p>
										Lorem Ipsum is simply text of the printing and typesetting
										industry.It has survived not only five centuries.
									</p>
									<a href="#" class="read-more">
										Read More
									</a>
								</div>
							</div>
						</div>
						<div
							class="col-md-4 col-sm-6 xs-padding  wow fadeInUp"
							data-wow-delay="200ms"
							data-wow-duration="1000ms"
						>
							<div class="blog-box">
								<div class="blog-thumb">
									<img src={require("./img/blog-2.jpg")} alt="img" />
									<div class="post-meta">
										<div>
											<span>
												<i class="fa fa-user" />
												By: Admin
											</span>
											<span>
												<i class="fa fa-calendar" />
												Jan 01, 2018
											</span>
										</div>
									</div>
								</div>
								<div class="blog-content">
									<h3>
										<a href="#">
											No one cares about products. people care about ideas.
										</a>
									</h3>
									<p>
										Lorem Ipsum is simply text of the printing and typesetting
										industry.It has survived not only five centuries.
									</p>
									<a href="#" class="read-more">
										Read More
									</a>
								</div>
							</div>
						</div>
						<div
							class="col-md-4 col-sm-6 xs-padding  wow fadeInUp"
							data-wow-delay="400ms"
							data-wow-duration="1000ms"
						>
							<div class="blog-box">
								<div class="blog-thumb">
									<img src={require("./img/blog-3.jpg")} alt="img" />
									<div class="post-meta">
										<div>
											<span>
												<i class="fa fa-user" />
												By: Admin
											</span>
											<span>
												<i class="fa fa-calendar" />
												Jan 01, 2018
											</span>
										</div>
									</div>
								</div>
								<div class="blog-content">
									<h3>
										<a href="#">
											No one cares about products. people care about ideas.
										</a>
									</h3>
									<p>
										Lorem Ipsum is simply text of the printing and typesetting
										industry.It has survived not only five centuries.
									</p>
									<a href="#" class="read-more">
										Read More
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="download" class="download-section padding">
				<div class="container">
					<div class="download-content text-center">
						<h2
							class="wow fadeInUp"
							data-wow-delay="0ms"
							data-wow-duration="1000ms"
						>
							Download Astra Today
						</h2>
						<p
							class="wow fadeInUp"
							data-wow-delay="200ms"
							data-wow-duration="1000ms"
						>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. <br />
							It has survived not only five centuries.
						</p>
						<div
							class="hero-btn wow fadeInUp"
							data-wow-delay="400ms"
							data-wow-duration="1000ms"
						>
							<a href="#" class="download-btn">
								<img src={require("./img/appstore.png")} alt="btn" />
							</a>
							<a href="#" class="download-btn">
								<img src={require("./img/playstore.png")} alt="btn" />
							</a>
						</div>
					</div>
				</div>
			</section>

			<section id="subscribe" class="subscribe-section">
				<div class="container">
					<div
						class="section-heading mb-40 text-center wow fadeInUp"
						data-wow-delay="0ms"
						data-wow-duration="1000ms"
					>
						<h2>Subscribe Newslatters</h2>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. <br />
							It has survived not only five centuries.
						</p>
					</div>
					<div class="subscribe-wrap">
						<form action="#" class="subscribe-form">
							<input
								type="email"
								name="email"
								id="subs-email"
								class="form-input"
								placeholder="Enter Your Email Address..."
							/>
							<button type="submit" class="submit">
								Subscribe
							</button>
							<div id="subscribe-result">
								<p class="subscription-success" />
								<p class="subscription-error" />
							</div>
						</form>
					</div>
					<div class="clearfix" />
					<ul class="social-share text-center">
						<li>
							<a href="#">
								<i class="fa fa-facebook" />
							</a>
						</li>
						<li>
							<a href="#">
								<i class="fa fa-twitter" />
							</a>
						</li>
						<li>
							<a href="#">
								<i class="fa fa-google-plus" />
							</a>
						</li>
						<li>
							<a href="#">
								<i class="fa fa-instagram" />
							</a>
						</li>
						<li>
							<a href="#">
								<i class="fa fa-pinterest" />
							</a>
						</li>
					</ul>
				</div>
			</section>

			<footer class="footer-section align-center">
				<div class="container">
					<p>&copy; 2018 Astra Powered by TeamXcel</p>
				</div>
			</footer>

			<a data-scroll href="#header" id="scroll-to-top">
				<i class="arrow_carrot-up" />
			</a>

			<script src="js/vendor/jquery-1.12.4.min.js" />

			<script src="js/vendor/tether.min.js" />

			<script src="js/vendor/bootstrap.min.js" />

			<script src="js/vendor/jquery.slicknav.min.js" />

			<script src="js/vendor/owl.carousel.min.js" />

			<script src="js/vendor/swiper.min.js" />

			<script src="js/vendor/smooth-scroll.min.js" />

			<script src="js/vendor/jquery.ajaxchimp.min.js" />

			<script src="js/vendor/wow.min.js" />

			<script src="js/main.js" />
		</div>
	);
};

export default withRouter(withTheme(Landing));
