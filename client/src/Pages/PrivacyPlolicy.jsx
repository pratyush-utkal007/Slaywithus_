import React from 'react'
import Layout from '../Components/Layout/Layout'
import { Link } from 'react-router-dom'

const PrivacyPlolicy = () => {
    return (
        <Layout>
            <div className="aboutus px-2 lg:px-20">
                <h2 className='text-center mt-9 mb-4 font-[jost]'><Link to={'/'}>Slaywithus</Link><span>&gt;&nbsp;Privacy Policy</span></h2>
                <h1 className='text-center text-4xl py-3 font-[Cinzel]'>Privacy Policy</h1>
                <p className='pb-3 text-xl mt-16'>Last Updated: 20 June 2023</p>
                <p className='text-xl'>This Privacy Policy outlines the manner in which SlayWithUs.com collects, uses, maintains, and discloses information obtained from users of the SlayWithUs.com website. This Privacy Policy applies to all services offered by SlayWithUs.com.</p>
                <ol class="text-xl list-decimal mb-20">
                    <li>
                        <p class="my-9 text-4xl">Information We Collect</p>
                        <p class="my-7">We may collect personal identification information from you in various ways, including but not limited to when you visit our website, register on the Website, place an order, subscribe to our newsletter, respond to a survey, fill out a form, or interact with other activities, services, features, or resources available on our website. The information we may collect includes:</p>
                        <p class="my-7">a. Personal Information: This includes your name, email address, phone number, postal address, and any other information you provide voluntarily.</p>
                        <p class="my-7">b. Non-Personal Information: We may collect non-personal information about you when you interact with our Website. This may include your browser type, device information, operating system, and other technical details.</p>
                    </li>
                    <li>
                        <p class="my-9 text-4xl">Use of Collected Information</p>
                        <p class="my-7">We may collect and use your personal information for the following purposes:</p>
                        <p class="my-7">a. To personalize your experience: The information you provide helps us to tailor our services to your individual needs.</p>
                        <p class="my-7">b. To process transactions: We use your information to process payments, deliver products or services, and communicate with you about your orders.</p>
                        <p class="my-7">c. To improve customer service: Your information helps us respond more effectively to your customer service requests and support needs.</p>
                        <p class="my-7">d. To send periodic emails: We may use the email address you provide to send you information, updates, and promotional materials related to our services. You can unsubscribe from these emails at any time by following the instructions provided in each email.</p>
                    </li>
                    <li>
                        <p class="my-9 text-4xl">Protection of Collected Information</p>
                        <p class="my-7">We adopt appropriate data collection, storage, and processing practices, as well as security measures, to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, transaction information, and data stored on our Website.</p>
                    </li>
                    <li>
                        <p class="my-9 text-4xl">Sharing of Collected Information</p>
                        <p class="my-7">We do not sell, trade, or rent your personal identification information to third parties. However, we may share generic aggregated demographic information that does not personally identify individuals with our business partners, trusted affiliates, and advertisers for the purposes outlined above.</p>
                    </li>
                    <li>
                        <p class="my-9 text-4xl">Third-Party Websites</p>
                        <p class="my-7">You may find advertising or other content on our Website that links to the sites and services of our partners, suppliers, advertisers, sponsors, licensors, and other third parties. We do not control the content or links that appear on these sites and are not responsible for the practices employed by websites linked to or from our Website. Browsing and interaction on any other website, including websites that have a link to our Website, is subject to that website’s own terms and policies.</p>
                    </li>
                    <li>
                        <p class="my-9 text-4xl">Compliance with Laws</p>
                        <p class="my-7">We will disclose your information, including personal information, if required to do so by law or in response to a valid legal request from law enforcement agencies or other government bodies.</p>
                    </li>
                    <li>
                        <p class="my-9 text-4xl">Changes to this Privacy Policy</p>
                        <p class="my-7">We reserve the right to update or modify this Privacy Policy at any time. When we do, we will revise the updated date at the top of this page. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.</p>
                    </li>
                    <li>
                        <p class="my-9 text-4xl">Your Acceptance of these Terms</p>
                        <p class="my-7">By using our Website, you signify your acceptance of this Privacy Policy. If you do not agree to this Privacy Policy, please do not use our Website. Your continued use of the Website following the posting of changes to this Privacy Policy will be deemed your acceptance of those changes</p>
                    </li>
                    <li>
                        <p class="my-9 text-4xl">Contacting Us</p>
                        <p class="my-7">If you have any questions about this Privacy Policy, the practices</p>
                        <p class="my-7">of this Website, or your dealings with this Website, please contact us at [contact information].</p>
                        <p class="my-7">Note: This is a sample privacy policy and should be customized to reflect the specific practices of your website and comply with relevant laws and regulations in your jurisdiction. It is important to consult with legal professionals to ensure compliance with applicable laws.</p>
                    </li>
                </ol>
            </div>
        </Layout>
    )
}

export default PrivacyPlolicy
