import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

function flattenKeys(value, prefix = '') {
  if (Array.isArray(value) || value === null || typeof value !== 'object') {
    return [prefix];
  }

  return Object.entries(value).flatMap(([key, nestedValue]) => {
    const nextPrefix = prefix ? `${prefix}.${key}` : key;
    return flattenKeys(nestedValue, nextPrefix);
  });
}

async function readMessages(locale) {
  const file = await readFile(new URL(`../messages/${locale}.json`, import.meta.url), 'utf8');
  return JSON.parse(file);
}

const [ka, en] = await Promise.all([readMessages('ka'), readMessages('en')]);
const kaKeys = flattenKeys(ka).sort();
const enKeys = flattenKeys(en).sort();

assert.deepEqual(enKeys, kaKeys);
console.log('Translation catalogs are in sync.');
