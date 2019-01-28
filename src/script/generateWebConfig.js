// Part of cucumber and puppeteer tutorial. Not used anymore due to use cypress

const config = require('../config');
const fs = require('fs');
const path = require('path');
const {
  baseUrl,
  googleAnalytics,
  sentryDSN,
  useDevTools,
  env,
  secureCookie,
  apiVersion
} = config;

const template = `const baseUrl = '${baseUrl}';
const googleAnalytics = '${googleAnalytics}';
const sentryDSN = '${sentryDSN}';
const useDevTools = ${useDevTools};
const secureCookie = ${secureCookie};
const apiVersion = '${apiVersion}';
export {
  baseUrl,
  googleAnalytics,
  sentryDSN,
  secureCookie,
  useDevTools,
  apiVersion
};`;
const filePath = path.join(process.cwd(), 'src/config.js');

fs.writeFile(filePath, template, err => {
  console.log(`Generated config for web for ${env}`);
});