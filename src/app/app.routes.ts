import { Routes } from '@angular/router';
import { HomeDemoTwo } from './demos/home-demo-two/home-demo-two';
import { AboutUsPage } from './pages/about-us-page/about-us-page';
import { ContactUsPage } from './pages/contact-us-page/contact-us-page';
import { ErrorPage } from './pages/error-page/error-page';
import { DestinationsPage } from './pages/destinations-page/destinations-page';
import { DestinationsInAustraliaPage } from './pages/destinations-in-australia-page/destinations-in-australia-page';
import { DestinationDetailsPage } from './pages/destination-details-page/destination-details-page';
import { TourListingPage } from './pages/tour-listing-page/tour-listing-page';
import { TourListingListViewPage } from './pages/tour-listing-list-view-page/tour-listing-list-view-page';
import { TourDetailsPage } from './pages/tour-details-page/tour-details-page';
import { TeamPage } from './pages/team-page/team-page';
import { TestimonialsPage } from './pages/testimonials-page/testimonials-page';
import { CareersPage } from './pages/careers-page/careers-page';
import { CareerDetailsPage } from './pages/career-details-page/career-details-page';
import { TermsConditionsPage } from './pages/terms-conditions-page/terms-conditions-page';
import { BookingFormPage } from './pages/booking-form-page/booking-form-page';
import { BlogGridPage } from './pages/blog-grid-page/blog-grid-page';
import { BlogDetailsPage } from './pages/blog-details-page/blog-details-page';
import { ShopPage } from './pages/shop-page/shop-page';
import { ProductDetailsPage } from './pages/product-details-page/product-details-page';
import { MyAccountPage } from './pages/my-account-page/my-account-page';
import { ForgotPasswordPage } from './pages/forgot-password-page/forgot-password-page';
import { AdminDashboard } from './admin-dashboard/admin-dashboard';
import { Dashboard } from './admin-dashboard/dashboard/dashboard';
import { Booking } from './admin-dashboard/booking/booking';
import { Wishlist } from './admin-dashboard/wishlist/wishlist';
import { Reviews } from './admin-dashboard/reviews/reviews';
import { Settings } from './admin-dashboard/settings/settings';
import { Password } from './admin-dashboard/password/password';
import { DestinationCreatPage } from './admin-dashboard/destination-creat-page/destination-creat-page';
import { TamilNadu } from './pages/tamil-nadu/tamil-nadu';
import { Karnataka } from './pages/karnataka/karnataka';
import { Telangana } from './pages/telangana/telangana';
import { GoldenTriangle } from './pages/golden-triangle/golden-triangle';
import { JammuAndKashmir } from './pages/jammu-and-kashmir/jammu-and-kashmir';
import { BollywoodMumbai } from './pages/bollywood-mumbai/bollywood-mumbai';
import { Punjab } from './pages/punjab/punjab';
import { Goa } from './pages/goa/goa';
import { CreatTourList } from './admin-dashboard/creat-tour-list/creat-tour-list';

export const routes: Routes = [
    {path: '', component: HomeDemoTwo},
    {path: 'about-us', component: AboutUsPage},
    {path: 'all-destinations', component: DestinationsPage},
    {path: 'destinations-in-australia', component: DestinationsInAustraliaPage},
    {path: 'destination/:id', component: DestinationDetailsPage},
    {path: 'tour-listing', component: TourListingPage},
    {path: 'tour-listing-list-view-sidebar', component: TourListingListViewPage},
    {path: 'tour-details/:id', component: TourDetailsPage},
    {path: 'tour-guide', component: TeamPage},
    {path: 'testimonials', component: TestimonialsPage},
    {path: 'careers', component: CareersPage},
    {path: 'career-details', component: CareerDetailsPage},
    {path: 'booking-form', component: BookingFormPage},
    {path: 'terms-conditions', component: TermsConditionsPage},
    {path: 'blog-grid', component: BlogGridPage},
    {path: 'blog-details', component: BlogDetailsPage},
    {path: 'shop', component: ShopPage},
    {path: 'product-details', component: ProductDetailsPage},
    {path: 'my-account', component: MyAccountPage},
    {path: 'forgot-password', component: ForgotPasswordPage},
    {path: 'contact-us', component: ContactUsPage},
    // {path: 'tamil-nadu', component: TamilNadu},
    // {path: 'karnataka', component: Karnataka},
    // {path: 'telangana', component: Telangana},
    // {path: 'golden-triangle', component: GoldenTriangle},
    // {path: 'jammu-and-kashmir', component: JammuAndKashmir},
    // {path: 'bollywood-mumbai', component: BollywoodMumbai},
    // {path: 'punjab', component: Punjab},
    // {path: 'goa', component: Goa},


    {
        path: 'admin-dashboard',
        component: AdminDashboard,
        children: [
            {path: '', component: Dashboard},
            {path: 'booking', component: Booking},
            {path: 'wishlist', component: Wishlist},
            {path: 'destination-creat-page', component: DestinationCreatPage},
            {path: 'reviews', component: Reviews},
            {path: 'settings', component: Settings},
            {path: 'password', component: Password},
            {path: 'creat-tour-list', component: CreatTourList}
        ]
    },
    // Here add new pages component

    {path: '**', component: ErrorPage} // This line will remain down from the whole pages component list
];