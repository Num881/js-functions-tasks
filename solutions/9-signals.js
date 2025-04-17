import get from 'lodash/get.js';

const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
  'yahoo.com',
];

// BEGIN
const getFreeEmailDomains = (mails) => {
  const domainCounts = {};

  for (const mail of mails) {
    const parts = mail.split('@');
    const domain = parts.length > 1 ? parts[1] : '';

    if (freeEmailDomains.indexOf(domain) !== -1) {
      if (domainCounts[domain]) {
        domainCounts[domain] += 1;
      }else{
        domainCounts[domain] = 1;
      }
    }
  }
  return domainCounts;
};
export default getFreeEmailDomains;
// END