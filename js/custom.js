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
        button: 'Køb virksomhedslicens' },

      styles: {
        product: {
          'text-align': 'left' },

        button: {
          'background-color': '#1abc9c',
          'border-radius': 0,
          'padding': '12px 18px',
          'margin': '0 0 10px 0!important',
          'box-shadow': '3px 3px 0 #16a085',
          ':hover': {
            'background-color': '#3498db',
            'box-shadow': '3px 3px 0 #2980b9' },

          ':focus': {
            'background-color': '#3498db',
            'box-shadow': '3px 3px 0 #2980b9' } } } } } });
