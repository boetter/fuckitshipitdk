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
          'font-family': 'Nunito,sans-serif',
          'font-weight': '600',
          'font-size': '16px',
          'background-color': '#4caf50',
          'border-radius': '4px',
          'padding': '16px 24px 17px',
          'margin': '0 0 10px 0!important',
          'box-shadow': '0 1px 4px rgba(0,0,0,.1),0 2px 4px rgba(0,0,0,.1)',

          ':before': {
            'content': '""',
            'position': 'absolute',
            'top': '0',
            'left': '0',
            'width': '100%',
            'height': '100%',
            'background': 'linear-gradient(to bottom,#fff 0,#000 100%)',
            'z-index': '-1',
            'opacity': '.1' },

          ':hover': {
            'background-color': '#3498db',
            'box-shadow': '3px 3px 0 #2980b9' },

          ':focus': {
            'background-color': '#3498db',
            'box-shadow': '3px 3px 0 #2980b9' } } } } } });
