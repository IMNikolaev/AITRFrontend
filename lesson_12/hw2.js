function weatherDeCode (code){
switch (code){
    case 'SQ':
        return 'Strong Wind';
    case 'PO':
        return 'Dust Whirls';
    case 'FC':
        return 'Funnel Cloud';
    case 'BR':
        return 'Mist';
    case 'HZ':
        return 'Haze';
    case 'FU':
        return 'Smoke';
    case 'DS':
        return 'Dust Storm';
    case 'SS':
        return 'Sandstorm';
    default:
        return 'Unknown Weather Code';
}
}
console.log(weatherDeCode('SQ'));