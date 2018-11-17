(function (window) {
    //following environment variable pattern described here: https://www.jvandemo.com/how-to-configure-your-angularjs-application-using-environment-variables/
    window.__env = window.__env || {};
    window.__env.baseUrl = '/omhonfhir/';
    window.__env.fitbitShim = 'fitbit';
    window.__env.googleFitShim = 'googlefit';
    window.__env.omhOnFhirClientId = '93651a15-4664-486e-8661-eca7ebc21bda';
    window.__env.omhOnFhirScope = 'patient/*.read launch'; //to force provider login use the following scopes 'openid profile'
    window.__env.omhOnFhirRedirectUri = 'http://tomcat.nuchange.ca/omhonfhir/login';
    window.__env.omhOnFhirAPIBase = 'https://tomcat.nuchange.ca/mdata';
    window.__env.omhOnFhirAPIShimmerAuth = '/authorize';
}(this));