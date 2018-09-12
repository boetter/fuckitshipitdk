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
          'font-family': 'Montserrat,sans-serif',
          'font-weight': '600',
          'font-size': '16px',
          'background-color': '#4caf50',
          'border-radius': '4px',
          'padding': '16px 24px 17px',
          'margin': '0 0 10px 0!important',
          'box-shadow': '0 1px 4px rgba(0,0,0,.1),0 2px 4px rgba(0,0,0,.1)'

          ':hover': {
            'opacity': '1',
            'box-shadow': '0 6px 7px 0 rgba(0, 0, 0, 0.15), 0 0px 5px 0px rgba(0, 0, 0, 0.1)',
            '-webkit-transform': 'translateY(-2px) !important',
            'transform': 'translateY(-2px) !important',
            'transition': '0.35s !important' },

          ':focus': {
            'background-color': '#3498db',
            'box-shadow': '3px 3px 0 #2980b9' } } } } } });
