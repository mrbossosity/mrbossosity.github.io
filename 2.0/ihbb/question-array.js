const abee = abee20162019
.split(/(?=\(\d+\))/g)
.map((substr) => {
  const [question, ANSWER] = substr.split(/(?=ANSWER)/);
  return { question, ANSWER };
});
  
const b2016 = bbee2016
  .split(/(?=\(\d+\))/g)
  .map((substr) => {
    const [question, ANSWER] = substr.split(/(?=ANSWER)/);
    return { question, ANSWER };
  });

const b2017 = bbee2017
  .split(/(?=\(\d+\))/g)
  .map((substr) => {
    const [question, ANSWER] = substr.split(/(?=ANSWER)/);
    return { question, ANSWER };
  });

const b2018 = bbee2018
  .split(/(?=\(\d+\))/g)
  .map((substr) => {
    const [question, ANSWER] = substr.split(/(?=ANSWER)/);
    return { question, ANSWER };
  });

const b2019 = bbee2019
  .split(/(?=\(\d+\))/g)
  .map((substr) => {
    const [question, ANSWER] = substr.split(/(?=ANSWER)/);
    return { question, ANSWER };
  });

const c2016 = cbee2016
  .split(/(?=\(\d+\))/g)
  .map((substr) => {
    const [question, ANSWER] = substr.split(/(?=ANSWER)/);
    return { question, ANSWER };
  });
const c2017 =cbee2017
  .split(/(?=\(\d+\))/g)
  .map((substr) => {
    const [question, ANSWER] = substr.split(/(?=ANSWER)/);
    return { question, ANSWER };
  });

const c2018 = cbee2018
  .split(/(?=\(\d+\))/g)
  .map((substr) => {
    const [question, ANSWER] = substr.split(/(?=ANSWER)/);
    return { question, ANSWER };
  });

const c2019 = cbee2019
  .split(/(?=\(\d+\))/g)
  .map((substr) => {
    const [question, ANSWER] = substr.split(/(?=ANSWER)/);
    return { question, ANSWER };
  });

const nb2016 = natsbee2016
  .split(/(?=\(\d+\))/g)
  .map((substr) => {
    const [question, ANSWER] = substr.split(/(?=ANSWER)/);
    return { question, ANSWER };
  });

const nb2017 = natsbee2017
  .split(/(?=\(\d+\))/g)
  .map((substr) => {
    const [question, ANSWER] = substr.split(/(?=ANSWER)/);
    return { question, ANSWER };
  });

const nb2018 = natsbee2018
  .split(/(?=\(\d+\))/g)
  .map((substr) => {
    const [question, ANSWER] = substr.split(/(?=ANSWER)/);
    return { question, ANSWER };
  });

const nb2019 = natsbee2019
  .split(/(?=\(\d+\))/g)
  .map((substr) => {
    const [question, ANSWER] = substr.split(/(?=ANSWER)/);
    return { question, ANSWER };
  });

const u2016 = ushb2016
  .split(/(?=\(\d+\))/g)
  .map((substr) => {
    const [question, ANSWER] = substr.split(/(?=ANSWER)/);
    return { question, ANSWER };
  });

const u2017 = ushb2017
  .split(/(?=\(\d+\))/g)
  .map((substr) => {
    const [question, ANSWER] = substr.split(/(?=ANSWER)/);
    return { question, ANSWER };
  });

const u2018 = ushb2018
  .split(/(?=\(\d+\))/g)
  .map((substr) => {
    const [question, ANSWER] = substr.split(/(?=ANSWER)/);
    return { question, ANSWER };
  });

const u2019 = ushb2019
  .split(/(?=\(\d+\))/g)
  .map((substr) => {
    const [question, ANSWER] = substr.split(/(?=ANSWER)/);
    return { question, ANSWER };
  });
  

var frabowl2016 = abowl2016 
  .replace(/page\s\d+/gi, "")
  .replace(/bowl round\s\d+/gi, "")
  .replace(/NHBB [ABC]\-set\sbowl\s(2015|2016|2017|2018)\-(2016|2017|2018|2019)/gi, "")   
  .replace(/(first|second|third|fourth)\squarter/gi, "")
  .replace(/extra\squestion/gi, "")   
  .replace(/only\sread\sif\syou\sneed\sa\sbackup\sor\stiebreaker!/gi, "")
  .replace(/regulation\squestions/gi, "")
  .replace(/\(\+\)/gi, "+")
  .replace(/\(\*\)/gi, "*");

const abowl2016fr = frabowl2016
  .split(/(?=\(\d+\))|(?=BONUS:)/g)
  .map((substr) => {
    const [question, ANSWER] = substr.split(/(?=ANSWER:)/);
    return { question, ANSWER };
  });
  
var frabowl2017 = abowl2017
  .replace(/page\s\d+/gi, "")
  .replace(/bowl round\s\d+/gi, "")
  .replace(/NHBB [ABC]\-set\sbowl\s(2015|2016|2017|2018)\-(2016|2017|2018|2019)/gi, "")   
  .replace(/(first|second|third|fourth)\squarter/gi, "")
  .replace(/extra\squestion/gi, "")   
  .replace(/only\sread\sif\syou\sneed\sa\sbackup\sor\stiebreaker!/gi, "")
  .replace(/regulation\squestions/gi, "")
  .replace(/\(\+\)/gi, "+")
  .replace(/\(\*\)/gi, "*");

const abowl2017fr = frabowl2017
  .split(/(?=\(\d+\))|(?=BONUS:)/g)
  .map((substr) => {
    const [question, ANSWER] = substr.split(/(?=ANSWER:)/);
    return { question, ANSWER };
  });
  
var frabowl2018 = abowl2018
  .replace(/page\s\d+/gi, "")
  .replace(/bowl round\s\d+/gi, "")
  .replace(/NHBB [ABC]\-set\sbowl\s(2015|2016|2017|2018)\-(2016|2017|2018|2019)/gi, "")   
  .replace(/(first|second|third|fourth)\squarter/gi, "")
  .replace(/extra\squestion/gi, "")   
  .replace(/only\sread\sif\syou\sneed\sa\sbackup\sor\stiebreaker!/gi, "")
  .replace(/regulation\squestions/gi, "")
  .replace(/\(\+\)/gi, "+")
  .replace(/\(\*\)/gi, "*");

const abowl2018fr = frabowl2018
  .split(/(?=\(\d+\))|(?=BONUS:)/g)
  .map((substr) => {
    const [question, ANSWER] = substr.split(/(?=ANSWER:)/);
    return { question, ANSWER };
  });
  
var frabowl2019 = abowl2019
  .replace(/page\s\d+/gi, "")
  .replace(/bowl round\s\d+/gi, "")
  .replace(/NHBB [ABC]\-set\sbowl\s(2015|2016|2017|2018)\-(2016|2017|2018|2019)/gi, "")   
  .replace(/(first|second|third|fourth)\squarter/gi, "")
  .replace(/extra\squestion/gi, "")   
  .replace(/only\sread\sif\syou\sneed\sa\sbackup\sor\stiebreaker!/gi, "")
  .replace(/regulation\squestions/gi, "")
  .replace(/\(\+\)/gi, "+")
  .replace(/\(\*\)/gi, "*");

const abowl2019fr = frabowl2019
  .split(/(?=\(\d+\))|(?=BONUS:)/g)
  .map((substr) => {
    const [question, ANSWER] = substr.split(/(?=ANSWER:)/);
    return { question, ANSWER };
  });
  
var frbbowl2016 = bbowl2016
  .replace(/page\s\d+/gi, "")
  .replace(/bowl round\s\d+/gi, "")
  .replace(/NHBB [ABC]\-set\sbowl\s(2015|2016|2017|2018)\-(2016|2017|2018|2019)/gi, "")   
  .replace(/(first|second|third|fourth)\squarter/gi, "")
  .replace(/extra\squestion/gi, "")   
  .replace(/only\sread\sif\syou\sneed\sa\sbackup\sor\stiebreaker!/gi, "")
  .replace(/regulation\squestions/gi, "")
  .replace(/\(\+\)/gi, "+")
  .replace(/\(\*\)/gi, "*");

const bbowl2016fr = frbbowl2016
  .split(/(?=\(\d+\))|(?=BONUS:)/g)
  .map((substr) => {
    const [question, ANSWER] = substr.split(/(?=ANSWER:)/);
    return { question, ANSWER };
  });

var frbbowl2017 = bbowl2017
  .replace(/page\s\d+/gi, "")
  .replace(/bowl round\s\d+/gi, "")
  .replace(/NHBB [ABC]\-set\sbowl\s(2015|2016|2017|2018)\-(2016|2017|2018|2019)/gi, "")   
  .replace(/(first|second|third|fourth)\squarter/gi, "")
  .replace(/extra\squestion/gi, "")   
  .replace(/only\sread\sif\syou\sneed\sa\sbackup\sor\stiebreaker!/gi, "")
  .replace(/regulation\squestions/gi, "")
  .replace(/\(\+\)/gi, "+")
  .replace(/\(\*\)/gi, "*");

const bbowl2017fr = frbbowl2017
  .split(/(?=\(\d+\))|(?=BONUS:)/g)
  .map((substr) => {
    const [question, ANSWER] = substr.split(/(?=ANSWER:)/);
    return { question, ANSWER };
  });
  
var frbbowl2018 = bbowl2018
  .replace(/page\s\d+/gi, "")
  .replace(/bowl round\s\d+/gi, "")
  .replace(/NHBB [ABC]\-set\sbowl\s(2015|2016|2017|2018)\-(2016|2017|2018|2019)/gi, "")   
  .replace(/(first|second|third|fourth)\squarter/gi, "")
  .replace(/extra\squestion/gi, "")   
  .replace(/only\sread\sif\syou\sneed\sa\sbackup\sor\stiebreaker!/gi, "")
  .replace(/regulation\squestions/gi, "")
  .replace(/\(\+\)/gi, "+")
  .replace(/\(\*\)/gi, "*");

const bbowl2018fr = frbbowl2018
  .split(/(?=\(\d+\))|(?=BONUS:)/g)
  .map((substr) => {
    const [question, ANSWER] = substr.split(/(?=ANSWER:)/);
    return { question, ANSWER };
  });

var frbbowl2019 = bbowl2019
  .replace(/page\s\d+/gi, "")
  .replace(/bowl round\s\d+/gi, "")
  .replace(/NHBB [ABC]\-set\sbowl\s(2015|2016|2017|2018)\-(2016|2017|2018|2019)/gi, "")   
  .replace(/(first|second|third|fourth)\squarter/gi, "")
  .replace(/extra\squestion/gi, "")   
  .replace(/only\sread\sif\syou\sneed\sa\sbackup\sor\stiebreaker!/gi, "")
  .replace(/regulation\squestions/gi, "")
  .replace(/\(\+\)/gi, "+")
  .replace(/\(\*\)/gi, "*");

const bbowl2019fr = frbbowl2019
  .split(/(?=\(\d+\))|(?=BONUS:)/g)
  .map((substr) => {
    const [question, ANSWER] = substr.split(/(?=ANSWER:)/);
    return { question, ANSWER };
  });

const cb2016 = cbowl2016
  .split(/(?=\(\d+\))|(?=BONUS:)/g)
  .map((substr) => {
    const [question, ANSWER] = substr.split(/(?=ANSWER:)/);
    return { question, ANSWER };
  });

const cb2017 = cbowl2017
  .split(/(?=\(\d+\))|(?=BONUS:)/g)
  .map((substr) => {
    const [question, ANSWER] = substr.split(/(?=ANSWER:)/);
    return { question, ANSWER };
  });

const cb2018 = cbowl2018
  .split(/(?=\(\d+\))|(?=BONUS:)/g)
  .map((substr) => {
    const [question, ANSWER] = substr.split(/(?=ANSWER:)/);
    return { question, ANSWER };
  });

const cb2019 = cbowl2019
  .split(/(?=\(\d+\))|(?=BONUS:)/g)
  .map((substr) => {
    const [question, ANSWER] = substr.split(/(?=ANSWER:)/);
    return { question, ANSWER };
  });
  
var frnatsbowl2016 = natsbowl2016
  .replace(/page\s\d+/gi, "")
  .replace(/bowl round\s\d+/gi, "")
  .replace(/NHBB\snationals\sbowl\s(2015|2016|2017|2018)\-(2016|2017|2018|2019)/gi, "")   
  .replace(/(first|second|third|fourth)\squarter/gi, "")
  .replace(/extra\squestion/gi, "")   
  .replace(/only\sread\sif\syou\sneed\sa\sbackup\sor\stiebreaker!/gi, "")
  .replace(/regulation\squestions/gi, "")
  .replace(/\(\+\)/gi, "+")
  .replace(/\(\*\)/gi, "*")

const natsbowl2016fr = frnatsbowl2016
  .split(/(?=\(\d+\))|(?=BONUS:)/g)
  .map((substr) => {
    const [question, ANSWER] = substr.split(/(?=ANSWER:)/);
    return { question, ANSWER };
  });
  
var frnatsbowl2017 = natsbowl2017
  .replace(/page\s\d+/gi, "")
  .replace(/bowl round\s\d+/gi, "")
  .replace(/bowl\splayoff\spacket\s\d+/gi, "")
  .replace(/bowl\sbackup\spacket\s\d+/gi, "")
  .replace(/NHBB\snationals\sbowl\s(2015|2016|2017|2018)\-(2016|2017|2018|2019)/gi, "")   
  .replace(/(first|second|third|fourth)\squarter/gi, "")
  .replace(/extra\squestion/gi, "")   
  .replace(/only\sread\sif\syou\sneed\sa\sbackup\sor\stiebreaker!/gi, "")
  .replace(/regulation\squestions/gi, "")
  .replace(/\(\+\)/gi, "+")
  .replace(/\(\*\)/gi, "*")

const natsbowl2017fr = frnatsbowl2017
  .split(/(?=\(\d+\))|(?=BONUS:)/g)
  .map((substr) => {
    const [question, ANSWER] = substr.split(/(?=ANSWER:)/);
    return { question, ANSWER };
  });  

var frnatsbowl2018 = natsbowl2018
  .replace(/page\s\d+/gi, "")
  .replace(/bowl\sround\s\d+/gi, "")
  .replace(/bowl\splayoff\spacket\s\d+/gi, "")
  .replace(/NHBB\snationals\sbowl\s(2015|2016|2017|2018)\-(2016|2017|2018|2019)/gi, "")   
  .replace(/(first|second|third|fourth)\squarter/gi, "")
  .replace(/extra\squestion/gi, "")   
  .replace(/only\sread\sif\syou\sneed\sa\sbackup\sor\stiebreaker!/gi, "")
  .replace(/regulation\squestions/gi, "")
  .replace(/\(\+\)/gi, "+")
  .replace(/\(\*\)/gi, "*")

const natsbowl2018fr = frnatsbowl2018
  .split(/(?=\(\d+\))|(?=BONUS:)/g)
  .map((substr) => {
    const [question, ANSWER] = substr.split(/(?=ANSWER:)/);
    return { question, ANSWER };
  });  
  
var frnatsbowl2019 = natsbowl2019
  .replace(/page\s\d+/gi, "")
  .replace(/bowl\sround\s\d+/gi, "")
  .replace(/bowl\splayoff\spacket\s\d+/gi, "")
  .replace(/NHBB\snationals\sbowl\s(2015|2016|2017|2018)\-(2016|2017|2018|2019)/gi, "")   
  .replace(/(first|second|third|fourth)\squarter/gi, "")
  .replace(/extra\squestion/gi, "")   
  .replace(/only\sread\sif\syou\sneed\sa\sbackup\sor\stiebreaker!/gi, "")
  .replace(/regulation\squestions/gi, "")
  .replace(/\(\+\)/gi, "+")
  .replace(/\(\*\)/gi, "*")

const natsbowl2019fr = frnatsbowl2019
  .split(/(?=\(\d+\))|(?=BONUS:)/g)
  .map((substr) => {
    const [question, ANSWER] = substr.split(/(?=ANSWER:)/);
    return { question, ANSWER };
  });  

const aSet = abee.concat(abowl2016fr, abowl2017fr, abowl2018fr, abowl2019fr);
const bSet = b2016.concat(b2017, b2018, b2019, bbowl2016fr, bbowl2017fr, bbowl2018fr, bbowl2019fr);
const cSet = c2016.concat(c2017, c2018, c2019, cb2016, cb2017, cb2018, cb2019);
const nSet = nb2016.concat(nb2017, nb2018, nb2019, natsbowl2016fr, natsbowl2017fr, natsbowl2018fr, natsbowl2019fr);
const ushb = u2016.concat(u2017, u2018, u2019);

for (var z = 0; z < aSet.length; z++) {
  aSet[z].question = "Level: A-Set<br><br>" + aSet[z].question
}

for (var z = 0; z < bSet.length; z++) {
  bSet[z].question = "Level: B-Set<br><br>" + bSet[z].question
}

for (var z = 0; z < cSet.length; z++) {
  cSet[z].question = "Level: C-Set<br><br>" + cSet[z].question
}

for (var z = 0; z < nSet.length; z++) {
  nSet[z].question = "Level: Nationals<br><br>" +nSet[z].question
}

for (var z = 0; z < ushb.length; z++) {
  ushb[z].question = "Level: US History Bee<br><br>" + ushb[z].question
}

const array = aSet.concat(bSet, cSet, nSet, ushb)
