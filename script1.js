let nickname = "Tara";
let heightInches = 62;
let weightKg = 42;

let heightFeet = Math.floor(heightInches / 12);
let remainingInches = heightInches % 12;

let weightLbs = weightKg * 2.20462;

alert(`Name: ${nickname}\nHeight: ${heightFeet}’${remainingInches}”\nWeight: ${weightLbs.toFixed(3)} lbs`);