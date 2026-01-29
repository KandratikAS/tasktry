const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

function isNatural(str) {
  return /^[1-9]\d*$/.test(str);
}

function gcd(a, b) {
  while (b !== 0n) {
    [a, b] = [b, a % b];
  }
  return a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

app.get('/kandratikas_gmail_com', (req, res) => {
  const { x, y } = req.query;

  if (!isNatural(x) || !isNatural(y)) {
    res.type('text/plain').send('NaN');
    return;
  }

  try {
    const a = BigInt(x);
    const b = BigInt(y);
    res.type('text/plain').send(lcm(a, b).toString());
  } catch {
    res.type('text/plain').send('NaN');
  }
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});