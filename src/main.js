import multiplierGenerator from './multiplierGenerator';
import fetchGenerator from './fetchGenerator';

const multiplier = multiplierGenerator(10);

multiplier.next();
multiplier.next();
multiplier.next();

// fetch generator
fetchGenerator();