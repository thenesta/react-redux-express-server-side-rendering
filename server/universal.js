import path from 'path';
import fs from 'fs';

import React from 'react';
import { renderToString } from 'react-dom/server';
import Helmet from 'react-helmet';

import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import store from '../src/js/store';

import App from '../src/App';

// A simple helper function to prepare the HTML markup
const prepHTML = (data, { html, head, body }) => {
  data = data.replace('<html lang="en">', '<html '+html+'>');
  data = data.replace('</head>', head+'</head>');
  data = data.replace('<div id="root"></div>', '<div id="root">'+body+'</div>');

  return data;
};

const universalLoader = (req, res) => {
  // Load in our HTML file from our build
  const filePath = path.resolve(__dirname, '../build/index.html');

  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    // If there's an error... serve up something nasty
    if (err) {
      console.error('Read error', err);

      return res.status(404).end();
    }

    // Render App in React
    //https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/guides/server-rendering.md
    //<StaticRouter> for serverside-rendering
    const context = {};
    const routeMarkup = renderToString(
      <Provider store={store}>
        <StaticRouter
          location={req.url}
          context={context}
        >
          <App/>
        </StaticRouter>
      </Provider>
    );


    if (context.url) {
      // can use the `context.status` that
      // we added in RedirectWithStatus
      redirect(301, context.url)
    }else{
      // Let Helmet know to insert the right tags
      const helmet = Helmet.renderStatic();

      // Form the final HTML response
      const html = prepHTML(htmlData, {
        html: helmet.htmlAttributes.toString(),
        head:
          helmet.title.toString() +
          helmet.meta.toString() +
          helmet.link.toString(),
        body: routeMarkup
      });

      console.log(html);

      // Up, up, and away...
      console.log('sending html source');
      res.send(html);
    }
  });
};

export default universalLoader;
