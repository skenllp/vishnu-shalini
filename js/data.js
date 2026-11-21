/* ============================================================
   Vishnu & Shalini Shyam — single source of truth for editable content.
   Elements in index.html use:
     data-bind="key"        → sets text
     data-bind-lines="key"  → sets text, one line per array item
     data-href="key"        → sets href (map links)
   Change values here; no need to touch the HTML.
   ============================================================ */
(function () {
  'use strict';

  var weddingData = {
    groom: 'Vishnu',
    bride: 'Shalini Shyam',

    weddingDate: '31 January 2027',
    weddingDay: 'Sunday',
    weddingDateLong: 'Sunday, 31 January 2027',
    weddingDateShort: 'Sun, 31 Jan 2027',
    dateNumeric: '31 • 01 • 2027',
    /* Countdown target — Muhurtham start, India Standard Time */
    countdownTarget: '2027-01-31T15:00:00+05:30',

    muhurtham: '10:00 AM – 11:00 AM',
    weddingVenue: 'Chemmarampatta Parish Hall',
    weddingAddress: 'Puthupady',
    weddingAddressLines: ['Chemmarampatta Parish Hall', 'Puthupady'],

    groomFather: 'Sudevan K. (Late)',
    groomMother: 'Jishi Sudevan',
    groomParents: 'Sri. Sudevan K. (Late) & Sreemathi. Jishi Sudevan',
    groomAddress: 'Karikkal House, Myleellampaara, Puthupady',
    groomAddressLines: ['Karikkal House, Myleellampaara', 'Puthupady'],

    brideFather: 'Sri. Shyam Nair',
    brideMother: '',
    brideParents: 'Sri. Shyam Nair',
    brideAddress: 'Vaakayil, Kaithapoyil, Valliyad',
    brideAddressLines: ['Vaakayil, Kaithapoyil', 'Valliyad'],

    receptionDate: '31 January 2027',
    receptionDateLong: 'Sunday, 31 January 2027',
    receptionDateShort: 'Sun, 31 Jan 2027',
    receptionTime: '3:00 PM – 10:00 PM',
    receptionVenue: 'Pre-Wedding Celebration',
    receptionAddress: 'Puthupady',
    receptionAddressLines: ['Puthupady'],

    /* Google Maps share links */
    weddingMap: 'https://maps.app.goo.gl/W1AT2qpKF1G3xhdh8',
    receptionMap: 'https://maps.app.goo.gl/MwnNqC9tCt6Pks5E6'
  };

  function mapsSearch(query) {
    return 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(query);
  }
  weddingData.weddingMapUrl = weddingData.weddingMap ||
    mapsSearch(weddingData.weddingVenue + ', ' + weddingData.weddingAddress);
  weddingData.receptionMapUrl = weddingData.receptionMap ||
    mapsSearch(weddingData.receptionVenue + ', ' + weddingData.receptionAddress);

  window.weddingData = weddingData;

  function bind() {
    var i, el, key, val, n;
    var text = document.querySelectorAll('[data-bind]');
    for (i = 0; i < text.length; i++) {
      el = text[i]; val = weddingData[el.getAttribute('data-bind')];
      if (typeof val === 'string') el.textContent = val;
    }
    var lines = document.querySelectorAll('[data-bind-lines]');
    for (i = 0; i < lines.length; i++) {
      el = lines[i]; val = weddingData[el.getAttribute('data-bind-lines')];
      if (!val || !val.length) continue;
      el.textContent = '';
      for (n = 0; n < val.length; n++) {
        if (n) el.appendChild(document.createElement('br'));
        el.appendChild(document.createTextNode(val[n]));
      }
    }
    var links = document.querySelectorAll('[data-href]');
    for (i = 0; i < links.length; i++) {
      el = links[i]; val = weddingData[el.getAttribute('data-href')];
      if (val) el.setAttribute('href', val);
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', bind);
  else bind();
})();
