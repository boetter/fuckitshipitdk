var client = ShopifyBuy.buildClient({
  apiKey: '966ac59eda50629221e219bb881a9c79',
  domain: 'fuck-it-ship-it.myshopify.com',
  appId: '6' });


var ui = ShopifyBuy.UI.init(client);

ui.createComponent('product', {
  id: 1896178810938,
  node: document.getElementById('product'),
  options: {
    product: {
      buttonDestination: 'checkout',
      contents: {
        img: false,
        title: false,
        options: false,
        price: false },

      templates: {
        button: '<button class="{{data.classes.product.button}} {{data.buttonClass}}">' +
        '{{data.buttonText}}' +
        '</span>' +
        '</button>' },

      text: {
        button: 'Køb licens' },

      styles: {
        product: {
          'text-align': 'center' },

        button: {
          'font-family': 'Helvetica,sans-serif',
          'font-weight': '600',
          'font-size': '16px',
          'background-color': '#4caf50',
          'border-radius': '4px',
          'padding': '16px 24px 17px',
          'margin': '0 0 10px 0!important',
          'box-shadow': '0 1px 4px rgba(0,0,0,.1),0 2px 4px rgba(0,0,0,.1)' } } } } });
