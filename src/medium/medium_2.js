import mpg_data from "./data/mpg_data.js";
import {getStatistics} from "./medium_1.js";

/*
This section can be done by using the array prototype functions.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
see under the methods section
*/


/**
 * This object contains data that has to do with every car in the `mpg_data` object.
 *
 *
 * @param {allCarStats.avgMpg} Average miles per gallon on the highway and in the city. keys `city` and `highway`
 *
 * @param {allCarStats.allYearStats} The result of calling `getStatistics` from medium_1.js on
 * the years the cars were made.
 *
 * @param {allCarStats.ratioHybrids} ratio of cars that are hybrids
 */
function averagempg(object) {
    let cityavg, highwayavg;
    var size = Object.keys(object).length;
    for (let car in object) {
        cityavg += car[city_mpg];
        highwayavg += car[highway_mpg];
    }
    cityavg = cityavg/size;
    highwayavg = highwayavg/size;
    return {cityavg, highwayavg};
}
function allyears(object) {
    let years = [];
    for (let car in object) {
        years.push(object[car[year]]);
    }
    return years;
}
function hybridratio(object) {
    let hybridcount = 0;
    var size = Object.keys(object).length;
    for (let car in object) {
        if (car[hybrid]) {
            hybridcount++;
        }
    }
    return hybridcount/size;

}
export const allCarStats = {
    avgMpg: {city: averagempg(mpg_data)[cityavg], highway: averagempg(mpg_data)[highwayavg]},
    allYearStats: getStatistics(allyears(mpg_data)),
    ratioHybrids: hybridratio(mpg_data)
};


/**
 * HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 *
 * @param {moreStats.makerHybrids} Array of objects where keys are the `make` of the car and
 * a list of `hybrids` available (their `id` string). Don't show car makes with 0 hybrids. Sort by the number of hybrids
 * in descending order.
 *
 *[{
 *     "make": "Buick",
 *     "hybrids": [
 *       "2012 Buick Lacrosse Convenience Group",
 *       "2012 Buick Lacrosse Leather Group",
 *       "2012 Buick Lacrosse Premium I Group",
 *       "2012 Buick Lacrosse"
 *     ]
 *   },
 *{
 *     "make": "BMW",
 *     "hybrids": [
 *       "2011 BMW ActiveHybrid 750i Sedan",
 *       "2011 BMW ActiveHybrid 750Li Sedan"
 *     ]
 *}]
 *
 *
 *
 *
 * @param {moreStats.avgMpgByYearAndHybrid} Object where keys are years and each year
 * an object with keys for `hybrid` and `notHybrid`. The hybrid and notHybrid
 * should be an object with keys for `highway` and `city` average mpg.
 *
 * Only years in the data should be keys.
 *
 * {
 *     2020: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *     2021: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *
 * }
 */
function makerhybrids(object) {
    let makes = [];
    let makersAndHybrids = [];
    for (let car in object) {
        if (!makes.includes(car[make])) {
            makes.push(car[make])
        }
    }
    for (let i = 0; i < makes.length; i++) {
        makersAndHybrids.push({});
        let hybridslist = [];
        for (let car in object) {
            if (makes[i] === car[make]) {
                if (car[hybrid]) {
                    hybridslist.push(car[id]);
                }
            }
        }
        makersAndHybrids[i][make] = makes[i];
        makersAndHybrids[i][hybrids] = hybridslist;
    } 
}
export const moreStats = {
    makerHybrids: makerhybrids(mpg_data),
    avgMpgByYearAndHybrid: undefined
};
