import { Routes } from '@angular/router';
import { HomeDemoOne } from './demos/home-demo-one/home-demo-one';
import { HomeDemoTwo } from './demos/home-demo-two/home-demo-two';
import { HomeDemoThree } from './demos/home-demo-three/home-demo-three';
import { HomeDemoFour } from './demos/home-demo-four/home-demo-four';
import { AboutUsPage } from './pages/about-us-page/about-us-page';
import { ContactUsPage } from './pages/contact-us-page/contact-us-page';
import { ErrorPage } from './pages/error-page/error-page';
import { DestinationsPage } from './pages/destinations-page/destinations-page';
import { DestinationsInAustraliaPage } from './pages/destinations-in-australia-page/destinations-in-australia-page';
import { DestinationDetailsPage } from './pages/destination-details-page/destination-details-page';
import { TourListingPage } from './pages/tour-listing-page/tour-listing-page';
import { TourListingLeftSidebarPage } from './pages/tour-listing-left-sidebar-page/tour-listing-left-sidebar-page';
import { TourListingRightSidebarPage } from './pages/tour-listing-right-sidebar-page/tour-listing-right-sidebar-page';
import { TourListingHalfMapPage } from './pages/tour-listing-half-map-page/tour-listing-half-map-page';
import { TourListingListViewPage } from './pages/tour-listing-list-view-page/tour-listing-list-view-page';
import { TourDetailsPage } from './pages/tour-details-page/tour-details-page';
import { CategoriesPage } from './pages/categories-page/categories-page';
import { TeamPage } from './pages/team-page/team-page';
import { FaqPage } from './pages/faq-page/faq-page';
import { TestimonialsPage } from './pages/testimonials-page/testimonials-page';
import { CareersPage } from './pages/careers-page/careers-page';
import { CareerDetailsPage } from './pages/career-details-page/career-details-page';
import { PricingPlanPage } from './pages/pricing-plan-page/pricing-plan-page';
import { PrivacyPolicyPage } from './pages/privacy-policy-page/privacy-policy-page';
import { TermsConditionsPage } from './pages/terms-conditions-page/terms-conditions-page';
import { BookingFormPage } from './pages/booking-form-page/booking-form-page';
import { BlogGridPage } from './pages/blog-grid-page/blog-grid-page';
import { BlogRightSidebarPage } from './pages/blog-right-sidebar-page/blog-right-sidebar-page';
import { BlogLeftSidebarPage } from './pages/blog-left-sidebar-page/blog-left-sidebar-page';
import { BlogDetailsPage } from './pages/blog-details-page/blog-details-page';
import { ShopPage } from './pages/shop-page/shop-page';
import { ProductDetailsPage } from './pages/product-details-page/product-details-page';
import { CartPage } from './pages/cart-page/cart-page';
import { CheckoutPage } from './pages/checkout-page/checkout-page';
import { MyAccountPage } from './pages/my-account-page/my-account-page';
import { ForgotPasswordPage } from './pages/forgot-password-page/forgot-password-page';
import { AdminDashboard } from './admin-dashboard/admin-dashboard';
import { Dashboard } from './admin-dashboard/dashboard/dashboard';
import { Booking } from './admin-dashboard/booking/booking';
import { Wishlist } from './admin-dashboard/wishlist/wishlist';
import { Reviews } from './admin-dashboard/reviews/reviews';
import { Settings } from './admin-dashboard/settings/settings';
import { Password } from './admin-dashboard/password/password';

export const routes: Routes = [
    {path: '', component: HomeDemoOne},
    {path: 'index-2', component: HomeDemoTwo},
    {path: 'index-3', component: HomeDemoThree},
    {path: 'index-4', component: HomeDemoFour},
    {path: 'about-us', component: AboutUsPage},
    {path: 'all-destinations', component: DestinationsPage},
    {path: 'destinations-in-australia', component: DestinationsInAustraliaPage},
    {path: 'destination-details', component: DestinationDetailsPage},
    {path: 'tour-listing', component: TourListingPage},
    {path: 'tour-listing-left-sidebar', component: TourListingLeftSidebarPage},
    {path: 'tour-listing-right-sidebar', component: TourListingRightSidebarPage},
    {path: 'tour-listing-half-map-right', component: TourListingHalfMapPage},
    {path: 'tour-listing-list-view-sidebar', component: TourListingListViewPage},
    {path: 'categories', component: CategoriesPage},
    {path: 'tour-details', component: TourDetailsPage},
    {path: 'tour-guide', component: TeamPage},
    {path: 'faq', component: FaqPage},
    {path: 'testimonials', component: TestimonialsPage},
    {path: 'careers', component: CareersPage},
    {path: 'career-details', component: CareerDetailsPage},
    {path: 'booking-form', component: BookingFormPage},
    {path: 'pricing-plan', component: PricingPlanPage},
    {path: 'privacy-policy', component: PrivacyPolicyPage},
    {path: 'terms-conditions', component: TermsConditionsPage},
    {path: 'blog-grid', component: BlogGridPage},
    {path: 'blog-right-sidebar', component: BlogRightSidebarPage},
    {path: 'blog-left-sidebar', component: BlogLeftSidebarPage},
    {path: 'blog-details', component: BlogDetailsPage},
    {path: 'shop', component: ShopPage},
    {path: 'product-details', component: ProductDetailsPage},
    {path: 'cart', component: CartPage},
    {path: 'checkout', component: CheckoutPage},
    {path: 'my-account', component: MyAccountPage},
    {path: 'forgot-password', component: ForgotPasswordPage},
    {path: 'contact-us', component: ContactUsPage},
    {
        path: 'admin-dashboard',
        component: AdminDashboard,
        children: [
            {path: '', component: Dashboard},
            {path: 'booking', component: Booking},
            {path: 'wishlist', component: Wishlist},
            {path: 'reviews', component: Reviews},
            {path: 'settings', component: Settings},
            {path: 'password', component: Password}
        ]
    },
    // Here add new pages component

    {path: '**', component: ErrorPage} // This line will remain down from the whole pages component list
];