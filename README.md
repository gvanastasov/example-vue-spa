# **Example Vue SPA**

A simple demostration of vue.js capabilities of building single-page-applications, routing, state management and other simple concepts. The build is setup manually (via webpack), and not using vue-cli or any other popular scaffolder, to demonstrate the building blocks of a vue application. Version 3 is used, but with legacy 'options' modules. To enhance the fast prototyping process, vue-bootstrap is used in conjunction with some other popular libraries (see below for more details). The theme is set for a example book store, where a few public pages are added, as well as browsing capability (of products), further developed into simple commerce handling. All interaction with backend is simluated via miragejs (a proxy interceptor for web api calls). This ensure a simple, encapsulated enviroment for demo purposes only, but also a good opportunity for scalling up.

## **Quick start**

```sh
# install dependencies
npm install

# start development web server
npm run start
```

## **Libraries**

- install vue as part of bundle
- install vue sfc
- install babel
- install bundler - webpack
- install webpack vue loaders
- install eslint and prettier
- install router and configure (vue-router)
- install state management - pinia
- install bootstrap and theming (vue-3 experimental)
- install localization (vue-i18n)
- install validation (vuelidate)

## **Highlights**

- Integration layer with miragejs seems to work pretty well for prototyping purposes and future scalability opportunities. Check [the server](/src/server/index.js) for more details on how that works. Basic principle is, a model is generated (with appropriate associations), the virtual db is seeded with it, and controller methods are exposed via api context handlers.
- Authentication is easily handled via miragejs as well, via a dummy username/password flow (no fancy protocols behind). Persistency of identity is achieved via cookie context.
- Working with localization done in a scalable fashion where new locales can be easilly added - register new locale [here](/src/locale.js) and add the localization data inside [this](/src/locales/) folder, along side other json translations.
- Step flows is something that can be reused accross the site for multiple purposes, example [checkout](/src/pages/checkout/CheckoutPage.vue) in this repo. Provided example also encorporates historical navigation with the browsers api.
- Minimalistic approach towards major topics, like sitewide search engine, product indexing and etc. A simple facet pattern is used to demo facet searching on the browse page.
