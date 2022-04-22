/** I needed an object/enum of the states but was only able to find 
 * state abreviation and name arrays, so created an quick states 
 * obj to copy from the console. I found a cool use case of reduce that 
 * I was able to use to make this happen without an explicitly declared
 * loop! Instead of reducing a bunch of values, we're reducing the elements 
 * to a single object.
 * Slick. 
 * Side thought, I wonder if reduce is built recursively? The way the 
 * args set up, where the previous value is passed in makes it seem that way. 
 * How would they handle stack overflow on really big arrays? 
 * Is there a size limit? Docs don't mention one but only skimmed 
 */


const makeStatesEnum = () => {
    const statesAry = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
    const abreviations = [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ];
    const initialValue = {};

    const states = abreviations.reduce((previous, value, i) => {
        previous[value] = statesAry[i];
        return previous;
    }, initialValue);
    
    //console.log(states);
    return states; 
}

module.exports = makeStatesEnum; 

// Output: 
// {
//     AL: 'Alabama',
//     AK: 'Alaska',
//     AS: 'American Samoa',
//     AZ: 'Arizona',
//     AR: 'Arkansas',
//     CA: 'California',
//     CO: 'Colorado',
//     CT: 'Connecticut',
//     DE: 'Delaware',
//     DC: 'District of Columbia',
//     FM: 'Federated States of Micronesia',
//     FL: 'Florida',
//     GA: 'Georgia',
//     GU: 'Guam',
//     HI: 'Hawaii',
//     ID: 'Idaho',
//     IL: 'Illinois',
//     IN: 'Indiana',
//     IA: 'Iowa',
//     KS: 'Kansas',
//     KY: 'Kentucky',
//     LA: 'Louisiana',
//     ME: 'Maine',
//     MH: 'Marshall Islands',
//     MD: 'Maryland',
//     MA: 'Massachusetts',
//     MI: 'Michigan',
//     MN: 'Minnesota',
//     MS: 'Mississippi',
//     MO: 'Missouri',
//     MT: 'Montana',
//     NE: 'Nebraska',
//     NV: 'Nevada',
//     NH: 'New Hampshire',
//     NJ: 'New Jersey',
//     NM: 'New Mexico',
//     NY: 'New York',
//     NC: 'North Carolina',
//     ND: 'North Dakota',
//     MP: 'Northern Mariana Islands',
//     OH: 'Ohio',
//     OK: 'Oklahoma',
//     OR: 'Oregon',
//     PW: 'Palau',
//     PA: 'Pennsylvania',
//     PR: 'Puerto Rico',
//     RI: 'Rhode Island',
//     SC: 'South Carolina',
//     SD: 'South Dakota',
//     TN: 'Tennessee',
//     TX: 'Texas',
//     UT: 'Utah',
//     VT: 'Vermont',
//     VI: 'Virgin Island',
//     VA: 'Virginia',
//     WA: 'Washington',
//     WV: 'West Virginia',
//     WI: 'Wisconsin',
//     WY: 'Wyoming'
//   }
  